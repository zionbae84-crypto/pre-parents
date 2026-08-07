import { describe, it, expect } from "vitest";
import {
  calculatePersonalizedBenefit,
  formatBirthOrderLabel,
  formatBenefitAmount,
} from "./birthOrderBenefit";
import type { SupportProgram } from "./schemas";

const base: SupportProgram = {
  id: "test-program",
  title: "테스트 지원사업",
  agencyType: "정부",
  agencyName: "보건복지부",
  region: "nationwide",
  stages: ["출생출산"],
  category: "현금지원",
  summary: "테스트용",
  benefit: "테스트용",
  eligibility: {},
  applicationMethod: "온라인",
  applicationPeriod: "상시",
  officialLink: "https://www.gov.kr",
  lastVerifiedAt: "2026-08-07",
};

describe("calculatePersonalizedBenefit - birthOrderBenefit", () => {
  it("returns the exact tier amount for a matching order", () => {
    const program: SupportProgram = {
      ...base,
      birthOrderBenefit: {
        tiers: [
          { orderMin: 1, amount: 700000 },
          { orderMin: 2, amount: 800000 },
          { orderMin: 3, amount: 1000000 },
        ],
      },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 2, isMultipleBirth: false })
    ).toEqual({ amount: 800000, isCombinedOrders: false });
  });

  it("falls back to the highest applicable tier for orders beyond the last one (이상)", () => {
    const program: SupportProgram = {
      ...base,
      birthOrderBenefit: {
        tiers: [
          { orderMin: 1, amount: 700000 },
          { orderMin: 2, amount: 800000 },
          { orderMin: 3, amount: 1000000 },
        ],
      },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 7, isMultipleBirth: false })
    ).toEqual({ amount: 1000000, isCombinedOrders: false });
  });

  it("returns null when the order is below the lowest defined tier", () => {
    const program: SupportProgram = {
      ...base,
      birthOrderBenefit: {
        tiers: [
          { orderMin: 3, amount: 600000 },
          { orderMin: 4, amount: 2000000 },
        ],
      },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: false })
    ).toBeNull();
  });

  it("adds flatAddOn on top of the tier amount", () => {
    const program: SupportProgram = {
      ...base,
      birthOrderBenefit: {
        tiers: [{ orderMin: 1, amount: 1000000 }],
        flatAddOn: 500000,
      },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: false })
    ).toEqual({ amount: 1500000, isCombinedOrders: false });
  });

  it("sums tier(order) and tier(order+1) for twins when multipleBirthMode is sumConsecutiveOrders (첫만남이용권 example)", () => {
    const program: SupportProgram = {
      ...base,
      birthOrderBenefit: {
        tiers: [
          { orderMin: 1, amount: 2000000 },
          { orderMin: 2, amount: 3000000 },
        ],
        multipleBirthMode: "sumConsecutiveOrders",
      },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: true })
    ).toEqual({ amount: 5000000, isCombinedOrders: true });
  });

  it("does not combine orders for twins when multipleBirthMode is not set", () => {
    const program: SupportProgram = {
      ...base,
      birthOrderBenefit: {
        tiers: [
          { orderMin: 1, amount: 700000 },
          { orderMin: 2, amount: 800000 },
        ],
      },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: true })
    ).toEqual({ amount: 700000, isCombinedOrders: false });
  });
});

describe("calculatePersonalizedBenefit - multipleBirthFlatBenefit", () => {
  it("returns singleAmount when not a multiple birth", () => {
    const program: SupportProgram = {
      ...base,
      multipleBirthFlatBenefit: { singleAmount: 1000000, multipleAmount: 1400000 },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: false })
    ).toEqual({ amount: 1000000, isCombinedOrders: false });
  });

  it("returns multipleAmount when it is a multiple birth", () => {
    const program: SupportProgram = {
      ...base,
      multipleBirthFlatBenefit: { singleAmount: 1000000, multipleAmount: 1400000 },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: true })
    ).toEqual({ amount: 1400000, isCombinedOrders: false });
  });
});

describe("calculatePersonalizedBenefit - hasMultipleBirthOrOrderVariation", () => {
  it("returns flagOnly when the program only has the flag set", () => {
    const program: SupportProgram = { ...base, hasMultipleBirthOrOrderVariation: true };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: false })
    ).toEqual({ flagOnly: true });
  });
});

describe("calculatePersonalizedBenefit - no personalization data", () => {
  it("returns null when the program has none of the three fields", () => {
    expect(
      calculatePersonalizedBenefit(base, { birthOrder: 1, isMultipleBirth: false })
    ).toBeNull();
  });
});

describe("formatBirthOrderLabel", () => {
  it("labels known orders in Korean ordinals", () => {
    expect(formatBirthOrderLabel(1)).toBe("첫째");
    expect(formatBirthOrderLabel(3)).toBe("셋째");
  });

  it("falls back to a numeric label beyond the known range", () => {
    expect(formatBirthOrderLabel(11)).toBe("11째");
  });
});

describe("formatBenefitAmount", () => {
  it("formats a KRW amount in 만원 units with thousands separators", () => {
    expect(formatBenefitAmount(5000000)).toBe("500만원");
    expect(formatBenefitAmount(10000000)).toBe("1,000만원");
  });
});
