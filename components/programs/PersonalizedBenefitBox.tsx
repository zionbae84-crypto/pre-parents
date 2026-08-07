"use client";

import { useSearchParams } from "next/navigation";
import type { SupportProgram } from "@/lib/schemas";
import {
  calculatePersonalizedBenefit,
  describePersonalizedBenefit,
} from "@/lib/birthOrderBenefit";

export function PersonalizedBenefitBox({ program }: { program: SupportProgram }) {
  const searchParams = useSearchParams();
  const birthOrderParam = searchParams.get("birthOrder");
  const parsedOrder = birthOrderParam ? Number(birthOrderParam) : NaN;

  if (!Number.isFinite(parsedOrder) || parsedOrder < 1) {
    return null;
  }

  const personalization = {
    birthOrder: parsedOrder,
    isMultipleBirth: searchParams.get("multiple") === "true",
  };
  const result = calculatePersonalizedBenefit(program, personalization);
  const display = describePersonalizedBenefit(result, personalization);

  if (!display) {
    return null;
  }

  return (
    <div className="mt-4 rounded-card border-2 border-sage bg-sage/10 p-4">
      <p className="font-bold text-brown">{display.label}</p>
      {result && "flagOnly" in result && (
        <p className="mt-1 text-[13px] text-brown/70">아래 지원내용을 확인해 주세요.</p>
      )}
      {display.note && <p className="mt-1 text-[13px] text-brown/70">{display.note}</p>}
    </div>
  );
}
