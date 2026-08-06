import { groupProgramsByAgency } from "@/lib/groupByAgency";
import type { AgencyType, SupportProgram } from "@/lib/schemas";
import { ProgramCard } from "./ProgramCard";

const AGENCY_SECTION_TITLE: Record<AgencyType, string> = {
  정부: "정부 지원사업",
  광역: "광역 지원사업",
  기초: "기초 지원사업",
};

export function ProgramGroupedGrid({
  programs,
  showEligibilityWarning = false,
}: {
  programs: SupportProgram[];
  showEligibilityWarning?: boolean;
}) {
  const groups = groupProgramsByAgency(programs);

  if (groups.length === 0) {
    return null;
  }

  return (
    <div className="@container flex flex-col gap-8">
      {groups.map((group) => (
        <section key={group.agencyType}>
          <h2 className="font-display text-[19px] text-brown">
            {AGENCY_SECTION_TITLE[group.agencyType]}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 @xl:grid-cols-2">
            {group.programs.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                showEligibilityWarning={showEligibilityWarning}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
