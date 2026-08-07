import { describe, it, expect } from "vitest";
import { determineStages, calculatePregnancyWeek } from "./stage";

describe("determineStages", () => {
  it("returns 임신준비 when preparing", () => {
    expect(determineStages({ status: "preparing" })).toEqual(["임신준비"]);
  });

  it("returns 임신중 when pregnant", () => {
    expect(
      determineStages({
        status: "pregnant",
        dueDate: "2026-12-01",
        today: "2026-08-05",
      })
    ).toEqual(["임신중"]);
  });

  it("returns 출생출산 and 영유아기 for a newborn (0 months)", () => {
    expect(determineStages({ status: "born", childAgeMonths: 0 })).toEqual([
      "출생출산",
      "영유아기",
    ]);
  });

  it("returns 영유아기 for an 11-month-old", () => {
    expect(determineStages({ status: "born", childAgeMonths: 11 })).toEqual([
      "영유아기",
    ]);
  });

  it("returns 유아 for a 12-month-old", () => {
    expect(determineStages({ status: "born", childAgeMonths: 12 })).toEqual([
      "유아",
    ]);
  });
});

describe("calculatePregnancyWeek", () => {
  it("returns week 40 on the due date", () => {
    expect(calculatePregnancyWeek("2026-08-05", "2026-08-05")).toBe(40);
  });

  it("returns week 30 ten weeks before the due date", () => {
    expect(calculatePregnancyWeek("2026-08-05", "2026-05-27")).toBe(30);
  });
});
