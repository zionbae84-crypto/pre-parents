import type { SearchFormValues } from "@/components/search/SearchForm";
import type { UserStageInput } from "@/lib/stage";
import { regions } from "@/lib/data/regions";

const DEFAULTS = {
  sido: regions[0].sido,
  sigungu: "",
  motherAge: 30,
  householdSize: 3,
  monthlyIncome: 4000000,
  birthOrder: 1,
  isMultipleBirth: false,
} as const;

export function encodeSearchParams(values: SearchFormValues): URLSearchParams {
  const params = new URLSearchParams();
  params.set("sido", values.sido);
  if (values.sigungu) params.set("sigungu", values.sigungu);
  params.set("status", values.stageInput.status);
  if (values.stageInput.status === "pregnant") {
    params.set("dueDate", values.stageInput.dueDate);
  }
  if (values.stageInput.status === "born") {
    params.set("childAgeMonths", String(values.stageInput.childAgeMonths));
  }
  params.set("motherAge", String(values.motherAge));
  params.set("householdSize", String(values.householdSize));
  params.set("monthlyIncome", String(values.monthlyIncome));
  params.set("birthOrder", String(values.birthOrder));
  params.set("isMultipleBirth", String(values.isMultipleBirth));
  return params;
}

// searchParams에 이전 검색 기록이 없으면(최초 진입) null을 반환한다.
export function decodeSearchParams(searchParams: URLSearchParams): SearchFormValues | null {
  const sido = searchParams.get("sido");
  if (!sido) return null;

  const status = searchParams.get("status") ?? "preparing";
  const stageInput: UserStageInput =
    status === "pregnant"
      ? { status: "pregnant", dueDate: searchParams.get("dueDate") ?? "" }
      : status === "born"
        ? { status: "born", childAgeMonths: Number(searchParams.get("childAgeMonths") ?? 0) }
        : { status: "preparing" };

  return {
    sido,
    sigungu: searchParams.get("sigungu") ?? DEFAULTS.sigungu,
    stageInput,
    motherAge: Number(searchParams.get("motherAge") ?? DEFAULTS.motherAge),
    householdSize: Number(searchParams.get("householdSize") ?? DEFAULTS.householdSize),
    monthlyIncome: Number(searchParams.get("monthlyIncome") ?? DEFAULTS.monthlyIncome),
    birthOrder: Number(searchParams.get("birthOrder") ?? DEFAULTS.birthOrder),
    isMultipleBirth: searchParams.get("isMultipleBirth") === "true",
  };
}
