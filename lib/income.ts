import { medianIncomeTables } from "./data/median-income";

export function getMedianIncome(year: number, householdSize: number): number {
  const table =
    medianIncomeTables.find((t) => t.year === year) ??
    medianIncomeTables[medianIncomeTables.length - 1];
  const sizes = Object.keys(table.monthlyIncomeByHouseholdSize).map(Number);
  const maxSize = Math.max(...sizes);
  const clampedSize = Math.max(1, householdSize);

  if (clampedSize <= maxSize) {
    return table.monthlyIncomeByHouseholdSize[clampedSize];
  }

  const delta =
    table.monthlyIncomeByHouseholdSize[maxSize] -
    table.monthlyIncomeByHouseholdSize[maxSize - 1];
  return (
    table.monthlyIncomeByHouseholdSize[maxSize] + delta * (clampedSize - maxSize)
  );
}

export function calculateIncomePercent(
  monthlyIncome: number,
  householdSize: number,
  year: number = medianIncomeTables[medianIncomeTables.length - 1].year
): number {
  const median = getMedianIncome(year, householdSize);
  return Math.round((monthlyIncome / median) * 1000) / 10;
}
