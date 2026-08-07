import Link from "next/link";
import type { SupportProgram } from "@/lib/schemas";
import { AgencyBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  calculatePersonalizedBenefit,
  describePersonalizedBenefit,
  type PersonalizationInput,
} from "@/lib/birthOrderBenefit";

// note가 이 사업의 유일한 자격조건 정보일 때만 확인 필요 뱃지를 띄운다.
// 나이/소득처럼 구조화된 필드로 이미 걸러진 경우 note는 부가 설명일 뿐이므로 뱃지를 띄우지 않는다.
function needsEligibilityCheck(program: SupportProgram): boolean {
  const { note, motherAgeMin, motherAgeMax, childAgeMonthsMin, childAgeMonthsMax, incomePercentMax } =
    program.eligibility;
  const hasStructuredCondition =
    motherAgeMin !== undefined ||
    motherAgeMax !== undefined ||
    childAgeMonthsMin !== undefined ||
    childAgeMonthsMax !== undefined ||
    incomePercentMax !== undefined;
  return Boolean(note) && !hasStructuredCondition;
}

export function ProgramCard({
  program,
  showEligibilityWarning = false,
  personalization,
}: {
  program: SupportProgram;
  showEligibilityWarning?: boolean;
  personalization?: PersonalizationInput;
}) {
  const benefitInfo = personalization
    ? describePersonalizedBenefit(
        calculatePersonalizedBenefit(program, personalization),
        personalization
      )
    : null;
  const href = personalization
    ? `/programs/${program.id}?birthOrder=${personalization.birthOrder}&multiple=${personalization.isMultipleBirth}`
    : `/programs/${program.id}`;

  return (
    <Card compact>
      <div className="flex h-full flex-col">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <AgencyBadge agencyType={program.agencyType} agencyName={program.agencyName} />
          <span className="text-[13px] text-brown/60">{program.category}</span>
          {showEligibilityWarning && needsEligibilityCheck(program) && (
            <span className="inline-flex items-center rounded-full bg-soft-yellow px-2 py-0.5 text-[13px] font-bold text-brown">
              ⚠️ 세부조건 확인 필요
            </span>
          )}
        </div>
        <h3 className="font-display text-[19px] text-brown">{program.title}</h3>
        <p className="mt-1 text-brown/80">{program.summary}</p>
        {benefitInfo && (
          <div className="mt-1.5">
            <p className="inline-block w-fit rounded-full bg-sage/20 px-2 py-0.5 text-[13px] font-bold text-brown">
              {benefitInfo.label}
            </p>
            {benefitInfo.note && (
              <p className="mt-1 text-[12px] text-brown/60">{benefitInfo.note}</p>
            )}
          </div>
        )}
        <Link
          href={href}
          className="mt-auto inline-block pt-3 font-bold text-coral"
        >
          자세히 보기 →
        </Link>
      </div>
    </Card>
  );
}
