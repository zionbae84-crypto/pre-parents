import { describe, it, expect } from "vitest";
import { supportProgramSchema, regionEntrySchema } from "./schemas";

describe("supportProgramSchema", () => {
  const validProgram = {
    id: "gov-first-meeting-voucher",
    title: "첫만남이용권",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산"],
    category: "바우처",
    summary: "출생아 1인당 바우처 지급",
    benefit: "첫째 200만원, 둘째 이상 300만원 바우처 지급",
    eligibility: {},
    applicationMethod: "주소지 관할 주민센터 방문 또는 정부24 온라인 신청",
    applicationPeriod: "출생일로부터 2년 이내",
    officialLink: "https://www.gov.kr",
    lastVerifiedAt: "2026-08-05",
  };

  it("validates a well-formed program", () => {
    expect(supportProgramSchema.safeParse(validProgram).success).toBe(true);
  });

  it("rejects a program missing required fields", () => {
    expect(supportProgramSchema.safeParse({ id: "x" }).success).toBe(false);
  });

  it("rejects an invalid lastVerifiedAt format", () => {
    const invalid = { ...validProgram, lastVerifiedAt: "2026/08/05" };
    expect(supportProgramSchema.safeParse(invalid).success).toBe(false);
  });

  it("rejects a program with an unknown extra field", () => {
    const invalid = { ...validProgram, unknownField: "oops" };
    expect(supportProgramSchema.safeParse(invalid).success).toBe(false);
  });

  it("accepts a sido-scoped region object", () => {
    const regional = { ...validProgram, region: { sido: "서울특별시" } };
    expect(supportProgramSchema.safeParse(regional).success).toBe(true);
  });
});

describe("regionEntrySchema", () => {
  it("validates a region entry", () => {
    const valid = { sido: "서울특별시", sigungus: ["강남구", "종로구"] };
    expect(regionEntrySchema.safeParse(valid).success).toBe(true);
  });
});
