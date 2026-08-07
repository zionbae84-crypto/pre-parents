import { notFound } from "next/navigation";
import { programs } from "@/lib/data/programs";
import { AgencyBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  calculatePersonalizedBenefit,
  formatBenefitAmount,
  formatBirthOrderLabel,
} from "@/lib/birthOrderBenefit";

export function generateStaticParams() {
  return programs.map((p) => ({ id: p.id }));
}

export default async function ProgramDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ birthOrder?: string; multiple?: string }>;
}) {
  const { id } = await params;
  const program = programs.find((p) => p.id === id);
  if (!program) {
    notFound();
  }

  const sp = await searchParams;
  const parsedOrder = sp.birthOrder ? Number(sp.birthOrder) : NaN;
  const personalization =
    Number.isFinite(parsedOrder) && parsedOrder >= 1
      ? { birthOrder: parsedOrder, isMultipleBirth: sp.multiple === "true" }
      : null;
  const personalizedResult = personalization
    ? calculatePersonalizedBenefit(program, personalization)
    : null;

  return (
    <main className="mx-auto max-w-[800px] px-6 py-12">
      <div className="mb-3 flex items-center gap-2">
        <AgencyBadge agencyType={program.agencyType} agencyName={program.agencyName} />
        <span className="text-[13px] text-brown/60">{program.category}</span>
      </div>
      <h1 className="font-display text-[32px] text-brown">{program.title}</h1>
      <p className="mt-2 text-brown/80">{program.summary}</p>

      {personalizedResult && personalization && (
        <div className="mt-4 rounded-card border-2 border-sage bg-sage/10 p-4">
          {"flagOnly" in personalizedResult ? (
            <p className="font-bold text-brown">
              다자녀/쌍둥이 조건에 따라 내용이 달라질 수 있어요 — 아래 지원내용을 확인해 주세요.
            </p>
          ) : personalizedResult.isCombinedOrders ? (
            <p className="font-bold text-brown">
              쌍둥이({formatBirthOrderLabel(personalization.birthOrder)}+
              {formatBirthOrderLabel(personalization.birthOrder + 1)}) 기준 예상 혜택:{" "}
              {formatBenefitAmount(personalizedResult.amount)}
            </p>
          ) : (
            <p className="font-bold text-brown">
              {formatBirthOrderLabel(personalization.birthOrder)} 자녀 기준 예상 혜택:{" "}
              {formatBenefitAmount(personalizedResult.amount)}
            </p>
          )}
        </div>
      )}

      <Card>
        <dl className="flex flex-col gap-4">
          <div>
            <dt className="font-bold text-brown">지원내용</dt>
            <dd className="mt-1 text-brown/80">{program.benefit}</dd>
          </div>
          {program.eligibility.note && (
            <div>
              <dt className="font-bold text-brown">대상/조건</dt>
              <dd className="mt-1 text-brown/80">{program.eligibility.note}</dd>
            </div>
          )}
          <div>
            <dt className="font-bold text-brown">신청 방법</dt>
            <dd className="mt-1 text-brown/80">{program.applicationMethod}</dd>
          </div>
          <div>
            <dt className="font-bold text-brown">신청 기한</dt>
            <dd className="mt-1 text-brown/80">{program.applicationPeriod}</dd>
          </div>
          {program.requiredDocuments && program.requiredDocuments.length > 0 && (
            <div>
              <dt className="font-bold text-brown">필요 서류</dt>
              <dd className="mt-1 text-brown/80">
                {program.requiredDocuments.join(", ")}
              </dd>
            </div>
          )}
        </dl>
      </Card>

      <a
        href={program.officialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-button bg-coral px-6 py-3 font-bold text-white hover:bg-coral-dark"
      >
        공식 페이지에서 확인하기 →
      </a>

      <p className="mt-4 text-[13px] text-brown/50">
        마지막 확인일: {program.lastVerifiedAt}
      </p>
    </main>
  );
}
