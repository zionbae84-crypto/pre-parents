import type { AgencyType, SupportProgram } from "./schemas";

const AGENCY_ORDER: Record<AgencyType, number> = { 정부: 0, 광역: 1, 기초: 2 };

export interface AgencyGroup {
  agencyType: AgencyType;
  programs: SupportProgram[];
}

export function groupProgramsByAgency(programs: SupportProgram[]): AgencyGroup[] {
  const groups = new Map<AgencyType, SupportProgram[]>();
  for (const program of programs) {
    const existing = groups.get(program.agencyType);
    if (existing) {
      existing.push(program);
    } else {
      groups.set(program.agencyType, [program]);
    }
  }
  return Array.from(groups.entries())
    .map(([agencyType, groupPrograms]) => ({ agencyType, programs: groupPrograms }))
    .sort((a, b) => AGENCY_ORDER[a.agencyType] - AGENCY_ORDER[b.agencyType]);
}
