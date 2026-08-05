import type { AgencyType } from "@/lib/schemas";

const AGENCY_BADGE_STYLE: Record<AgencyType, string> = {
  정부: "bg-badge-gov text-white",
  광역: "bg-badge-metro text-white",
  기초: "bg-badge-local text-brown",
};

export function AgencyBadge({
  agencyType,
  agencyName,
}: {
  agencyType: AgencyType;
  agencyName: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-bold ${AGENCY_BADGE_STYLE[agencyType]}`}
    >
      {agencyName}
    </span>
  );
}
