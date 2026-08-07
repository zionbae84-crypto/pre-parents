import type { AgencyType, Stage, SupportProgram } from "./schemas";

export interface SearchCriteria {
  sido: string;
  sigungu?: string;
  motherAge: number;
  stages: Stage[];
  childAgeMonths?: number;
  incomePercent: number;
  birthOrder?: number;
  isMultipleBirth?: boolean;
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
  if (program.stages.some((stage) => criteria.stages.includes(stage))) {
    return true;
  }

  // A program's `stages` tag is a coarse browsing category (e.g. 부모급여 is
  // tagged 출생출산/영유아기), but some programs stay eligible past that tag
  // per their own structured childAge window (부모급여 pays through 23개월,
  // i.e. into 유아). When that window is defined and the user has a child
  // age, it's authoritative even if the coarse stage tag doesn't intersect.
  const { childAgeMonthsMin, childAgeMonthsMax } = program.eligibility;
  if (childAgeMonthsMin === undefined && childAgeMonthsMax === undefined) return false;
  if (criteria.childAgeMonths === undefined) return false;
  if (childAgeMonthsMin !== undefined && criteria.childAgeMonths < childAgeMonthsMin) return false;
  if (childAgeMonthsMax !== undefined && criteria.childAgeMonths > childAgeMonthsMax) return false;
  return true;
}

export function matchesMotherAge(
  program: SupportProgram,
  criteria: SearchCriteria
): boolean {
  const { motherAgeMin, motherAgeMax } = program.eligibility;
  if (motherAgeMin !== undefined && criteria.motherAge < motherAgeMin) return false;
  if (motherAgeMax !== undefined && criteria.motherAge > motherAgeMax) return false;
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
    matchesMotherAge(program, criteria) &&
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
