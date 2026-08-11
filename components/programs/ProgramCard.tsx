import Link from "next/link";
import type { SupportProgram } from "@/lib/schemas";
import { AgencyBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  calculatePersonalizedBenefit,
  describePersonalizedBenefit,
  type PersonalizationInput,
} from "@/lib/birthOrderBenefit";

// note에 소득 조건이 언급되어 있는데 "없음/무관/폐지"처럼 명시적으로 면제된 게 아니면
// 실제로 소득 기준이 존재한다고 본다(예: "부부합산 연소득 1.3억원 이하").
function mentionsUnwaivedIncomeCondition(note: string): boolean {
  const incomeIndex = note.indexOf("소득");
  if (incomeIndex === -1) return false;
  const nearby = note.slice(incomeIndex, incomeIndex + 20);
  return !/없음|무관|폐지/.test(nearby);
}

// note가 이 사업의 유일한 자격조건 정보일 때만 확인 필요 뱃지를 띄운다.
// 나이처럼 구조화된 필드로 이미 걸러진 조건이 있어도, note에 언급된 소득 조건이 incomePercentMax로
// 구조화되어 있지 않다면(예: 나이는 구조화됐지만 소득은 원문 텍스트로만 존재) 여전히 확인이 필요하다 —
// "다른 조건은 구조화됐으니 전부 구조화됐겠지"라고 오판하지 않도록 소득은 항상 별도로 확인한다.
function needsEligibilityCheck(program: SupportProgram): boolean {
  const { note, motherAgeMin, motherAgeMax, childAgeMonthsMin, childAgeMonthsMax, incomePercentMax } =
    program.eligibility;
  if (!note) return false;

  if (incomePercentMax === undefined && mentionsUnwaivedIncomeCondition(note)) {
    return true;
  }

  const hasStructuredCondition =
    motherAgeMin !== undefined ||
    motherAgeMax !== undefined ||
    childAgeMonthsMin !== undefined ||
    childAgeMonthsMax !== undefined ||
    incomePercentMax !== undefined;
  return !hasStructuredCondition;
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
          <AgencyBadge
            agencyType={program.agencyType}
            agencyName={program.agencyName}
            region={program.region}
          />
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
