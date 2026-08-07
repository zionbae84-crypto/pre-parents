import type { SupportProgram } from "./schemas";

export interface PersonalizationInput {
  birthOrder: number;
  isMultipleBirth: boolean;
}

export type PersonalizedBenefit =
  | { amount: number; isCombinedOrders: boolean }
  | { flagOnly: true }
  | null;

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
    return amount > 0 ? { amount, isCombinedOrders } : null;
  }

  if (multipleBirthFlatBenefit) {
    const amount = input.isMultipleBirth
      ? multipleBirthFlatBenefit.multipleAmount
      : multipleBirthFlatBenefit.singleAmount;
    return { amount, isCombinedOrders: false };
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
