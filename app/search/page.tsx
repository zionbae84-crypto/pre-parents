"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchForm, type SearchFormValues } from "@/components/search/SearchForm";
import { ResultList } from "@/components/search/ResultList";
import { determineStages } from "@/lib/stage";
import { calculateIncomePercent } from "@/lib/income";
import { findMatchingPrograms, type SearchCriteria } from "@/lib/matching";
import { programs } from "@/lib/data/programs";
import type { SupportProgram } from "@/lib/schemas";
import type { PersonalizationInput } from "@/lib/birthOrderBenefit";
import { encodeSearchParams, decodeSearchParams } from "@/lib/searchParams";

function runSearch(values: SearchFormValues): {
  results: SupportProgram[];
  personalization: PersonalizationInput;
} {
  const stages = determineStages(values.stageInput);
  const incomePercent = calculateIncomePercent(values.monthlyIncome, values.householdSize);
  const childAgeMonths =
    values.stageInput.status === "born" ? values.stageInput.childAgeMonths : undefined;

  const criteria: SearchCriteria = {
    sido: values.sido,
    sigungu: values.sigungu || undefined,
    motherAge: values.motherAge,
    stages,
    childAgeMonths,
    incomePercent,
    birthOrder: values.birthOrder,
    isMultipleBirth: values.isMultipleBirth,
  };

  return {
    results: findMatchingPrograms(programs, criteria),
    personalization: { birthOrder: values.birthOrder, isMultipleBirth: values.isMultipleBirth },
  };
}

function SearchPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialValues = decodeSearchParams(searchParams);
  const initialSearch = initialValues ? runSearch(initialValues) : null;

  const [results, setResults] = useState<SupportProgram[] | null>(
    initialSearch?.results ?? null
  );
  const [personalization, setPersonalization] = useState<PersonalizationInput | null>(
    initialSearch?.personalization ?? null
  );

  function handleSubmit(values: SearchFormValues) {
    const { results, personalization } = runSearch(values);
    setPersonalization(personalization);
    setResults(results);
    // 뒤로가기로 돌아왔을 때 검색 조건과 결과가 유지되도록 URL에 반영한다.
    // replace를 써서 검색을 다시 제출할 때마다 히스토리가 쌓이지 않게 한다.
    router.replace(`/search?${encodeSearchParams(values).toString()}`, { scroll: false });
  }

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="font-display text-[32px] text-coral">맞춤 지원금 찾기</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[360px_1fr]">
        <SearchForm onSubmit={handleSubmit} initialValues={initialValues ?? undefined} />
        <div>
          {results === null ? (
            <p className="text-brown/60">조건을 입력하고 검색하면 결과가 여기에 나타나요.</p>
          ) : (
            <ResultList programs={results} personalization={personalization ?? undefined} />
          )}
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchPageInner />
    </Suspense>
  );
}
