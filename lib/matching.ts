import type { AgencyType, Stage, SupportProgram } from "./schemas";

export interface SearchCriteria {
  sido: string;
  sigungu?: string;
  parentAge: number;
  stages: Stage[];
  childAgeMonths?: number;
  incomePercent: number;
}

export function matchesRegion(
  program: SupportProgram,
  criteria: SearchCriteria
): boolean {
  if (program.region === "nationwide") return true;
  if (program.region.sido !== criteria.sido) return false;
  if (!program.region.sigungu) return true;
  return program.region.sigungu === criteria.sigungu;
}

export function matchesStage(
  program: SupportProgram,
  criteria: SearchCriteria
): boolean {
  return program.stages.some((stage) => criteria.stages.includes(stage));
}

export function matchesParentAge(
  program: SupportProgram,
  criteria: SearchCriteria
): boolean {
  const { parentAgeMin, parentAgeMax } = program.eligibility;
  if (parentAgeMin !== undefined && criteria.parentAge < parentAgeMin) return false;
  if (parentAgeMax !== undefined && criteria.parentAge > parentAgeMax) return false;
  return true;
}

export function matchesChildAge(
  program: SupportProgram,
  criteria: SearchCriteria
): boolean {
  const { childAgeMonthsMin, childAgeMonthsMax } = program.eligibility;
  if (childAgeMonthsMin === undefined && childAgeMonthsMax === undefined) return true;
  if (criteria.childAgeMonths === undefined) return true;
  if (childAgeMonthsMin !== undefined && criteria.childAgeMonths < childAgeMonthsMin) return false;
  if (childAgeMonthsMax !== undefined && criteria.childAgeMonths > childAgeMonthsMax) return false;
  return true;
}

export function matchesIncome(
  program: SupportProgram,
  criteria: SearchCriteria
): boolean {
  const { incomePercentMax } = program.eligibility;
  if (incomePercentMax === undefined) return true;
  return criteria.incomePercent <= incomePercentMax;
}

export function matchProgram(
  program: SupportProgram,
  criteria: SearchCriteria
): boolean {
  return (
    matchesRegion(program, criteria) &&
    matchesStage(program, criteria) &&
    matchesParentAge(program, criteria) &&
    matchesChildAge(program, criteria) &&
    matchesIncome(program, criteria)
  );
}

const AGENCY_ORDER: Record<AgencyType, number> = { 정부: 0, 광역: 1, 기초: 2 };

export function findMatchingPrograms(
  programs: SupportProgram[],
  criteria: SearchCriteria
): SupportProgram[] {
  return programs
    .filter((program) => matchProgram(program, criteria))
    .sort((a, b) => AGENCY_ORDER[a.agencyType] - AGENCY_ORDER[b.agencyType]);
}
