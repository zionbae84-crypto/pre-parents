import { describe, it, expect } from "vitest";
import { programs } from "./programs";
import { regions } from "./regions";
import { supportProgramSchema } from "../schemas";
import { findMatchingPrograms, type SearchCriteria } from "../matching";

describe("programs data", () => {
  it("every program matches supportProgramSchema", () => {
    for (const program of programs) {
      const result = supportProgramSchema.safeParse(program);
      if (!result.success) {
        throw new Error(`${program.id}: ${JSON.stringify(result.error.issues)}`);
      }
    }
  });

  it("has no duplicate ids", () => {
    const ids = programs.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("includes at least one 정부 program per relevant stage", () => {
    const govStages = new Set(
      programs.filter((p) => p.agencyType === "정부").flatMap((p) => p.stages)
    );
    expect(govStages.has("임신준비")).toBe(true);
    expect(govStages.has("임신중")).toBe(true);
    expect(govStages.has("출생출산")).toBe(true);
  });

  it("every region.sido/sigungu matches a real entry in regions.ts (catches typos)", () => {
    const bad: string[] = [];
    for (const program of programs) {
      const region = program.region;
      if (region === "nationwide") continue;
      const entry = regions.find((r) => r.sido === region.sido);
      if (!entry) {
        bad.push(`${program.id}: unknown sido "${region.sido}"`);
        continue;
      }
      if (region.sigungu && !entry.sigungus.includes(region.sigungu)) {
        bad.push(`${program.id}: unknown sigungu "${region.sigungu}" for sido "${region.sido}"`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("has no accidental duplicate entries (same region + title)", () => {
    const seen = new Map<string, string>();
    const dups: string[] = [];
    for (const program of programs) {
      const region =
        program.region === "nationwide"
          ? "nationwide"
          : `${program.region.sido}/${program.region.sigungu ?? ""}`;
      const key = `${region}::${program.title}`;
      const firstId = seen.get(key);
      if (firstId) {
        dups.push(`${program.id} duplicates ${firstId} (${key})`);
      } else {
        seen.set(key, program.id);
      }
    }
    expect(dups).toEqual([]);
  });
});

describe("matching against real seed data (regression: benefits shouldn't vanish as the child ages within their real eligibility window)", () => {
  const baseCriteria: SearchCriteria = {
    sido: "서울특별시",
    sigungu: undefined,
    motherAge: 32,
    stages: [],
    childAgeMonths: undefined,
    incomePercent: 50,
  };

  it("a 3-month-old still sees 첫만남이용권 (신청기한 출생일로부터 2년 이내)", () => {
    const criteria: SearchCriteria = { ...baseCriteria, stages: ["영유아기"], childAgeMonths: 3 };
    const ids = findMatchingPrograms(programs, criteria).map((p) => p.id);
    expect(ids).toContain("gov-first-meeting-voucher");
  });

  it("a 13-month-old (유아 단계) still sees 부모급여 (지급 상한 23개월)", () => {
    const criteria: SearchCriteria = { ...baseCriteria, stages: ["유아"], childAgeMonths: 13 };
    const ids = findMatchingPrograms(programs, criteria).map((p) => p.id);
    expect(ids).toContain("gov-parental-allowance");
  });

  it("a 24-month-old no longer sees 부모급여 (지급 상한 23개월 초과)", () => {
    const criteria: SearchCriteria = { ...baseCriteria, stages: ["유아"], childAgeMonths: 24 };
    const ids = findMatchingPrograms(programs, criteria).map((p) => p.id);
    expect(ids).not.toContain("gov-parental-allowance");
  });
});
