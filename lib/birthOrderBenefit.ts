import type { SupportProgram } from "./schemas";

export interface PersonalizationInput {
  birthOrder: number;
  isMultipleBirth: boolean;
}

export type PersonalizedBenefit =
  | { amount: number; source: "birthOrder"; isCombinedOrders: boolean }
  | { amount: number; source: "multipleBirthFlat"; note?: string }
  | { flagOnly: true }
  | null;

export interface PersonalizedBenefitDisplay {
  label: string;
  note?: string;
}

function tierLookup(tiers: { orderMin: number; amount: number }[], order: number): number {
  const applicable = tiers.filter((tier) => tier.orderMin <= order);
  if (applicable.length === 0) return 0;
  return applicable.reduce((best, tier) => (tier.orderMin > best.orderMin ? tier : best))
    .amount;
}

export function calculatePersonalizedBenefit(
  program: SupportProgram,
  input: PersonalizationInput
): PersonalizedBenefit {
  const { birthOrderBenefit, multipleBirthFlatBenefit, hasMultipleBirthOrOrderVariation } =
    program;

  if (birthOrderBenefit) {
    const { tiers, flatAddOn = 0, multipleBirthMode } = birthOrderBenefit;
    const isCombinedOrders = input.isMultipleBirth && multipleBirthMode === "sumConsecutiveOrders";
    const base = isCombinedOrders
      ? tierLookup(tiers, input.birthOrder) + tierLookup(tiers, input.birthOrder + 1)
      : tierLookup(tiers, input.birthOrder);
    const amount = base + flatAddOn;
    return amount > 0 ? { amount, source: "birthOrder", isCombinedOrders } : null;
  }

  if (multipleBirthFlatBenefit) {
    const amount = input.isMultipleBirth
      ? multipleBirthFlatBenefit.multipleAmount
      : multipleBirthFlatBenefit.singleAmount;
    return { amount, source: "multipleBirthFlat", note: multipleBirthFlatBenefit.note };
  }

  if (hasMultipleBirthOrOrderVariation) {
    return { flagOnly: true };
  }

  return null;
}

const ORDINAL_LABELS: Record<number, string> = {
  1: "첫째",
  2: "둘째",
  3: "셋째",
  4: "넷째",
  5: "다섯째",
  6: "여섯째",
  7: "일곱째",
  8: "여덟째",
  9: "아홉째",
  10: "열째",
};

export function formatBirthOrderLabel(order: number): string {
  return ORDINAL_LABELS[order] ?? `${order}째`;
}

export function formatBenefitAmount(amount: number): string {
  return `${Math.round(amount / 10000).toLocaleString("ko-KR")}만원`;
}

export function describePersonalizedBenefit(
  result: PersonalizedBenefit,
  personalization: PersonalizationInput
): PersonalizedBenefitDisplay | null {
  if (result === null) return null;
  if ("flagOnly" in result) {
    return { label: "다자녀/쌍둥이 조건에 따라 달라짐" };
  }
  if (result.source === "multipleBirthFlat") {
    const statusLabel = personalization.isMultipleBirth ? "쌍둥이(다태아)" : "단태아";
    return {
      label: `${statusLabel} 기준 예상 혜택: ${formatBenefitAmount(result.amount)}`,
      note: result.note,
    };
  }
  if (result.isCombinedOrders) {
    const first = formatBirthOrderLabel(personalization.birthOrder);
    const second = formatBirthOrderLabel(personalization.birthOrder + 1);
    return {
      label: `쌍둥이(${first}+${second}) 기준 예상 혜택: ${formatBenefitAmount(result.amount)}`,
    };
  }
  return {
    label: `${formatBirthOrderLabel(personalization.birthOrder)} 자녀 기준 예상 혜택: ${formatBenefitAmount(result.amount)}`,
  };
}
