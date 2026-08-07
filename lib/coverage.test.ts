import { describe, it, expect } from "vitest";
import { getCoveredSigungu } from "./coverage";

describe("getCoveredSigungu", () => {
  it("returns 서울특별시 sigungus that have at least one program", () => {
    const covered = getCoveredSigungu("서울특별시");
    expect(covered.length).toBeGreaterThan(0);
    expect(covered).toContain("강남구");
  });

  it("returns 경기도 sigungus that have at least one program", () => {
    const covered = getCoveredSigungu("경기도");
    expect(covered).toContain("수원시");
    expect(covered).toContain("성남시");
  });

  it("preserves regions.ts order rather than data-insertion order", () => {
    const covered = getCoveredSigungu("경기도");
    const suwonIndex = covered.indexOf("수원시");
    const namyangjuIndex = covered.indexOf("남양주시");
    expect(suwonIndex).toBeGreaterThanOrEqual(0);
    expect(namyangjuIndex).toBeGreaterThanOrEqual(0);
    expect(suwonIndex).toBeLessThan(namyangjuIndex);
  });

  it("returns an empty array for a sido with no data", () => {
    expect(getCoveredSigungu("없는도")).toEqual([]);
  });
});
