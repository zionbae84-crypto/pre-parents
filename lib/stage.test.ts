import { describe, it, expect } from "vitest";
import {
  determineStages,
  calculateAgeInMonths,
  calculatePregnancyWeek,
} from "./stage";

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
    expect(
      determineStages({
        status: "born",
        birthDate: "2026-08-01",
        today: "2026-08-05",
      })
    ).toEqual(["출생출산", "영유아기"]);
  });

  it("returns 영유아기 for an 11-month-old", () => {
    expect(
      determineStages({
        status: "born",
        birthDate: "2025-09-05",
        today: "2026-08-05",
      })
    ).toEqual(["영유아기"]);
  });

  it("returns 유아 for a 12-month-old", () => {
    expect(
      determineStages({
        status: "born",
        birthDate: "2025-08-05",
        today: "2026-08-05",
      })
    ).toEqual(["유아"]);
  });
});

describe("calculateAgeInMonths", () => {
  it("does not count the month if the day-of-month has not been reached yet", () => {
    expect(calculateAgeInMonths("2026-07-10", "2026-08-05")).toBe(0);
  });

  it("counts the month once the day-of-month has passed", () => {
    expect(calculateAgeInMonths("2026-07-01", "2026-08-05")).toBe(1);
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
