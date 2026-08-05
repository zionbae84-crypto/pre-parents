import Link from "next/link";
import type { SupportProgram } from "@/lib/schemas";
import { AgencyBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

// note가 이 사업의 유일한 자격조건 정보일 때만 확인 필요 뱃지를 띄운다.
// 나이/소득처럼 구조화된 필드로 이미 걸러진 경우 note는 부가 설명일 뿐이므로 뱃지를 띄우지 않는다.
function needsEligibilityCheck(program: SupportProgram): boolean {
  const { note, parentAgeMin, parentAgeMax, childAgeMonthsMin, childAgeMonthsMax, incomePercentMax } =
    program.eligibility;
  const hasStructuredCondition =
    parentAgeMin !== undefined ||
    parentAgeMax !== undefined ||
    childAgeMonthsMin !== undefined ||
    childAgeMonthsMax !== undefined ||
    incomePercentMax !== undefined;
  return Boolean(note) && !hasStructuredCondition;
}

export function ResultList({ programs }: { programs: SupportProgram[] }) {
  if (programs.length === 0) {
    return (
      <p className="text-brown/60">
        조건에 맞는 지원사업을 찾지 못했어요. 입력하신 조건을 다시 확인해 주세요.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {programs.map((program) => (
        <li key={program.id}>
          <Card>
            <div className="mb-2 flex items-center gap-2">
              <AgencyBadge agencyType={program.agencyType} agencyName={program.agencyName} />
              {needsEligibilityCheck(program) && (
                <span className="inline-flex items-center rounded-full bg-soft-yellow px-2 py-0.5 text-[13px] font-bold text-brown">
                  ⚠️ 세부조건 확인 필요
                </span>
              )}
            </div>
            <h3 className="font-display text-[19px] text-brown">{program.title}</h3>
            <p className="mt-1 text-brown/80">{program.summary}</p>
            <Link href={`/programs/${program.id}`} className="mt-3 inline-block font-bold text-coral">
              자세히 보기 →
            </Link>
          </Card>
        </li>
      ))}
    </ul>
  );
}
