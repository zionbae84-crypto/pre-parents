import type { SupportProgram } from "@/lib/schemas";
import { ProgramGroupedGrid } from "@/components/programs/ProgramGroupedGrid";

export function ResultList({ programs }: { programs: SupportProgram[] }) {
  if (programs.length === 0) {
    return (
      <p className="text-brown/60">
        조건에 맞는 지원사업을 찾지 못했어요. 입력하신 조건을 다시 확인해 주세요.
      </p>
    );
  }

  return <ProgramGroupedGrid programs={programs} showEligibilityWarning />;
}
