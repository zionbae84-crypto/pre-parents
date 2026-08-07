import { describe, it, expect } from "vitest";
import {
  calculatePersonalizedBenefit,
  describePersonalizedBenefit,
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
    ).toEqual({ amount: 800000, source: "birthOrder", isCombinedOrders: false });
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
    ).toEqual({ amount: 1000000, source: "birthOrder", isCombinedOrders: false });
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
    ).toEqual({ amount: 1500000, source: "birthOrder", isCombinedOrders: false });
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
    ).toEqual({ amount: 5000000, source: "birthOrder", isCombinedOrders: true });
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
    ).toEqual({ amount: 700000, source: "birthOrder", isCombinedOrders: false });
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
    ).toEqual({ amount: 1000000, source: "multipleBirthFlat" });
  });

  it("returns multipleAmount when it is a multiple birth", () => {
    const program: SupportProgram = {
      ...base,
      multipleBirthFlatBenefit: { singleAmount: 1000000, multipleAmount: 1400000 },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: true })
    ).toEqual({ amount: 1400000, source: "multipleBirthFlat" });
  });

  it("carries the note through when present", () => {
    const program: SupportProgram = {
      ...base,
      multipleBirthFlatBenefit: {
        singleAmount: 300000,
        multipleAmount: 600000,
        note: "쌍태아 기준(60만원). 삼태아 이상은 90만원으로 별도 문의 필요",
      },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: true })
    ).toEqual({
      amount: 600000,
      source: "multipleBirthFlat",
      note: "쌍태아 기준(60만원). 삼태아 이상은 90만원으로 별도 문의 필요",
    });
  });

  it("does not null-check a zero amount (deliberate asymmetry vs. the tiers branch)", () => {
    const program: SupportProgram = {
      ...base,
      multipleBirthFlatBenefit: { singleAmount: 0, multipleAmount: 500000 },
    };
    expect(
      calculatePersonalizedBenefit(program, { birthOrder: 1, isMultipleBirth: false })
    ).toEqual({ amount: 0, source: "multipleBirthFlat" });
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

describe("describePersonalizedBenefit", () => {
  const personalization = { birthOrder: 2, isMultipleBirth: false };

  it("returns null when the calculation result is null", () => {
    expect(describePersonalizedBenefit(null, personalization)).toBeNull();
  });

  it("describes a flagOnly result with the short badge label", () => {
    expect(describePersonalizedBenefit({ flagOnly: true }, personalization)).toEqual({
      label: "다자녀/쌍둥이 조건에 따라 달라짐",
    });
  });

  it("describes a plain birthOrder result with the ordinal label", () => {
    expect(
      describePersonalizedBenefit(
        { amount: 2000000, source: "birthOrder", isCombinedOrders: false },
        personalization
      )
    ).toEqual({ label: "둘째 자녀 기준 예상 혜택: 200만원" });
  });

  it("describes a combined-orders (twins) birthOrder result", () => {
    expect(
      describePersonalizedBenefit(
        { amount: 5000000, source: "birthOrder", isCombinedOrders: true },
        { birthOrder: 1, isMultipleBirth: true }
      )
    ).toEqual({ label: "쌍둥이(첫째+둘째) 기준 예상 혜택: 500만원" });
  });

  it("describes a multipleBirthFlat single-birth result without birth-order phrasing", () => {
    expect(
      describePersonalizedBenefit(
        { amount: 1000000, source: "multipleBirthFlat" },
        { birthOrder: 3, isMultipleBirth: false }
      )
    ).toEqual({ label: "단태아 기준 예상 혜택: 100만원" });
  });

  it("describes a multipleBirthFlat twin-birth result and carries its note", () => {
    expect(
      describePersonalizedBenefit(
        { amount: 600000, source: "multipleBirthFlat", note: "쌍태아 기준(60만원)" },
        { birthOrder: 1, isMultipleBirth: true }
      )
    ).toEqual({ label: "쌍둥이(다태아) 기준 예상 혜택: 60만원", note: "쌍태아 기준(60만원)" });
  });
});
