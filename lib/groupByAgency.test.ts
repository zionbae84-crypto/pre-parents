import { describe, it, expect } from "vitest";
import { groupProgramsByAgency } from "./groupByAgency";
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
  lastVerifiedAt: "2026-08-06",
};

describe("groupProgramsByAgency", () => {
  it("returns an empty array for an empty input", () => {
    expect(groupProgramsByAgency([])).toEqual([]);
  });

  it("returns a single group when all programs share one agency type", () => {
    const local: SupportProgram = { ...base, id: "local", agencyType: "기초" };
    const local2: SupportProgram = { ...base, id: "local2", agencyType: "기초" };
    const result = groupProgramsByAgency([local, local2]);
    expect(result).toEqual([{ agencyType: "기초", programs: [local, local2] }]);
  });

  it("groups mixed agency types and orders them 정부 > 광역 > 기초, regardless of input order", () => {
    const local: SupportProgram = { ...base, id: "local", agencyType: "기초" };
    const metro: SupportProgram = { ...base, id: "metro", agencyType: "광역" };
    const gov: SupportProgram = { ...base, id: "gov", agencyType: "정부" };

    const result = groupProgramsByAgency([local, metro, gov]);

    expect(result.map((g) => g.agencyType)).toEqual(["정부", "광역", "기초"]);
    expect(result.map((g) => g.programs.map((p) => p.id))).toEqual([["gov"], ["metro"], ["local"]]);
  });

  it("preserves the relative order of programs within a group", () => {
    const govA: SupportProgram = { ...base, id: "gov-a", agencyType: "정부" };
    const govB: SupportProgram = { ...base, id: "gov-b", agencyType: "정부" };
    const result = groupProgramsByAgency([govA, govB]);
    expect(result[0].programs.map((p) => p.id)).toEqual(["gov-a", "gov-b"]);
  });
});
