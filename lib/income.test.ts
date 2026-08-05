import { describe, it, expect } from "vitest";
import { calculateIncomePercent, getMedianIncome } from "./income";

describe("getMedianIncome", () => {
  it("returns the published amount for household size within table range", () => {
    expect(getMedianIncome(2026, 1)).toBe(2564238);
    expect(getMedianIncome(2026, 6)).toBe(8555952);
  });

  it("extrapolates for household sizes beyond the table using the last delta", () => {
    // delta = 8,555,952 - 7,556,719 = 999,233
    expect(getMedianIncome(2026, 7)).toBe(9555185);
  });
});

describe("calculateIncomePercent", () => {
  it("returns 100 when income equals the median for household size 1", () => {
    expect(calculateIncomePercent(2564238, 1)).toBe(100);
  });

  it("returns 200 when income is double the median", () => {
    expect(calculateIncomePercent(5128476, 1)).toBe(200);
  });

  it("returns 50 when income is half the median for household size 2", () => {
    expect(calculateIncomePercent(2099646, 2)).toBe(50);
  });

  it("uses extrapolated median for household size 7", () => {
    expect(calculateIncomePercent(9555185, 7)).toBe(100);
  });
});
