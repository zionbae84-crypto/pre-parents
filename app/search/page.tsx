"use client";

import { useState } from "react";
import { SearchForm, type SearchFormValues } from "@/components/search/SearchForm";
import { ResultList } from "@/components/search/ResultList";
import { determineStages } from "@/lib/stage";
import { calculateIncomePercent } from "@/lib/income";
import { findMatchingPrograms, type SearchCriteria } from "@/lib/matching";
import { programs } from "@/lib/data/programs";
import type { SupportProgram } from "@/lib/schemas";
import type { PersonalizationInput } from "@/lib/birthOrderBenefit";

export default function SearchPage() {
  const [results, setResults] = useState<SupportProgram[] | null>(null);
  const [personalization, setPersonalization] = useState<PersonalizationInput | null>(null);

  function handleSubmit(values: SearchFormValues) {
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

    setPersonalization({ birthOrder: values.birthOrder, isMultipleBirth: values.isMultipleBirth });
    setResults(findMatchingPrograms(programs, criteria));
  }

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="font-display text-[32px] text-coral">맞춤 지원금 찾기</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[360px_1fr]">
        <SearchForm onSubmit={handleSubmit} />
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
