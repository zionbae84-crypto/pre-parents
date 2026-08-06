import { describe, it, expect } from "vitest";
import { matchProgram, findMatchingPrograms, type SearchCriteria } from "./matching";
import type { SupportProgram } from "./schemas";

const base: SupportProgram = {
  id: "test-program",
  title: "테스트 지원사업",
  agencyType: "정부",
  agencyName: "보건복지부",
  region: "nationwide",
  stages: ["임신중"],
  category: "현금지원",
  summary: "테스트용",
  benefit: "테스트용",
  eligibility: {},
  applicationMethod: "온라인",
  applicationPeriod: "상시",
  officialLink: "https://www.gov.kr",
  lastVerifiedAt: "2026-08-05",
};

const baseCriteria: SearchCriteria = {
  sido: "서울특별시",
  sigungu: "강남구",
  motherAge: 30,
  stages: ["임신중"],
  childAgeMonths: undefined,
  incomePercent: 80,
};

describe("matchProgram - region", () => {
  it("matches nationwide programs regardless of region", () => {
    expect(matchProgram(base, baseCriteria)).toBe(true);
  });

  it("matches a sido-only program when sido matches", () => {
    const program = { ...base, region: { sido: "서울특별시" } };
    expect(matchProgram(program, baseCriteria)).toBe(true);
  });

  it("rejects a sido-only program when sido does not match", () => {
    const program = { ...base, region: { sido: "경기도" } };
    expect(matchProgram(program, baseCriteria)).toBe(false);
  });

  it("rejects a sigungu-scoped program when sigungu does not match", () => {
    const program = { ...base, region: { sido: "서울특별시", sigungu: "관악구" } };
    expect(matchProgram(program, baseCriteria)).toBe(false);
  });

  it("matches a sigungu-scoped program when sigungu matches", () => {
    const program = { ...base, region: { sido: "서울특별시", sigungu: "강남구" } };
    expect(matchProgram(program, baseCriteria)).toBe(true);
  });
});

describe("matchProgram - stage", () => {
  it("matches when stages intersect", () => {
    const program: SupportProgram = { ...base, stages: ["임신중", "출생출산"] };
    expect(matchProgram({ ...program }, { ...baseCriteria, stages: ["출생출산"] })).toBe(true);
  });

  it("rejects when stages do not intersect and no child-age eligibility window is set", () => {
    expect(matchProgram(base, { ...baseCriteria, stages: ["유아"] })).toBe(false);
  });

  it("matches via childAge eligibility window even when the tagged stage doesn't intersect (parental-allowance-style program)", () => {
    // Mirrors 부모급여: tagged stages only cover 출생출산/영유아기, but
    // eligibility.childAgeMonthsMax extends coverage through 12~23개월 (유아 단계).
    const program: SupportProgram = {
      ...base,
      stages: ["출생출산", "영유아기"],
      eligibility: { childAgeMonthsMin: 0, childAgeMonthsMax: 23 },
    };
    const criteria: SearchCriteria = {
      ...baseCriteria,
      stages: ["유아"],
      childAgeMonths: 13,
    };
    expect(matchProgram(program, criteria)).toBe(true);
  });

  it("does not fall back to the childAge window when the user has no child age (still pregnant/preparing)", () => {
    const program: SupportProgram = {
      ...base,
      stages: ["출생출산", "영유아기"],
      eligibility: { childAgeMonthsMin: 0, childAgeMonthsMax: 23 },
    };
    const criteria: SearchCriteria = {
      ...baseCriteria,
      stages: ["유아"],
      childAgeMonths: undefined,
    };
    expect(matchProgram(program, criteria)).toBe(false);
  });

  it("does not fall back when childAge is outside the program's eligibility window either", () => {
    const program: SupportProgram = {
      ...base,
      stages: ["출생출산", "영유아기"],
      eligibility: { childAgeMonthsMin: 0, childAgeMonthsMax: 23 },
    };
    const criteria: SearchCriteria = {
      ...baseCriteria,
      stages: ["유아"],
      childAgeMonths: 30,
    };
    expect(matchProgram(program, criteria)).toBe(false);
  });
});

describe("matchProgram - mother age", () => {
  it("rejects when mother age is below the minimum", () => {
    const program = { ...base, eligibility: { motherAgeMin: 35 } };
    expect(matchProgram(program, { ...baseCriteria, motherAge: 30 })).toBe(false);
  });

  it("rejects when mother age is above the maximum", () => {
    const program = { ...base, eligibility: { motherAgeMax: 39 } };
    expect(matchProgram(program, { ...baseCriteria, motherAge: 40 })).toBe(false);
  });

  it("passes when no age condition is set", () => {
    expect(matchProgram(base, baseCriteria)).toBe(true);
  });
});

describe("matchProgram - child age", () => {
  it("rejects when child age is outside the range", () => {
    const program: SupportProgram = {
      ...base,
      stages: ["영유아기"],
      eligibility: { childAgeMonthsMin: 0, childAgeMonthsMax: 11 },
    };
    expect(
      matchProgram(program, { ...baseCriteria, stages: ["영유아기"], childAgeMonths: 15 })
    ).toBe(false);
  });

  it("passes when child age is within the range", () => {
    const program: SupportProgram = {
      ...base,
      stages: ["영유아기"],
      eligibility: { childAgeMonthsMin: 0, childAgeMonthsMax: 11 },
    };
    expect(
      matchProgram(program, { ...baseCriteria, stages: ["영유아기"], childAgeMonths: 5 })
    ).toBe(true);
  });
});

describe("matchProgram - income", () => {
  it("rejects when income percent exceeds the maximum", () => {
    const program = { ...base, eligibility: { incomePercentMax: 150 } };
    expect(matchProgram(program, { ...baseCriteria, incomePercent: 180 })).toBe(false);
  });

  it("passes when there is no income condition regardless of income", () => {
    expect(matchProgram(base, { ...baseCriteria, incomePercent: 999 })).toBe(true);
  });
});

describe("findMatchingPrograms", () => {
  it("filters out non-matching programs and sorts 정부 > 광역 > 기초", () => {
    const local: SupportProgram = { ...base, id: "local", agencyType: "기초" };
    const metro: SupportProgram = { ...base, id: "metro", agencyType: "광역" };
    const gov: SupportProgram = { ...base, id: "gov", agencyType: "정부" };
    const nonMatching: SupportProgram = { ...base, id: "no-match", stages: ["유아"] };

    const result = findMatchingPrograms([local, metro, gov, nonMatching], baseCriteria);

    expect(result.map((p) => p.id)).toEqual(["gov", "metro", "local"]);
  });
});
