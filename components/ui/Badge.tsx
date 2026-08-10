import type { AgencyType, ProgramRegion } from "@/lib/schemas";
import { shortSidoLabel } from "@/lib/regionLabels";

const AGENCY_BADGE_STYLE: Record<AgencyType, string> = {
  정부: "bg-badge-gov text-white",
  광역: "bg-badge-metro text-white",
  기초: "bg-badge-local text-brown",
};

// 기초(구·군) 사업은 시·도가 달라도 자치구 이름이 같을 수 있다(예: 서울 강서구 vs 부산 강서구).
// 뱃지만 보고 오해하지 않도록 광역자치단체명을 함께 표시한다.
function agencyBadgeLabel(agencyType: AgencyType, agencyName: string, region?: ProgramRegion): string {
  if (agencyType === "기초" && region && region !== "nationwide") {
    return `${shortSidoLabel(region.sido)} ${agencyName}`;
  }
  return agencyName;
}

export function AgencyBadge({
  agencyType,
  agencyName,
  region,
}: {
  agencyType: AgencyType;
  agencyName: string;
  region?: ProgramRegion;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-bold ${AGENCY_BADGE_STYLE[agencyType]}`}
    >
      {agencyBadgeLabel(agencyType, agencyName, region)}
    </span>
  );
}
