import { notFound } from "next/navigation";
import { programs } from "@/lib/data/programs";
import { AgencyBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function generateStaticParams() {
  return programs.map((p) => ({ id: p.id }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = programs.find((p) => p.id === id);
  if (!program) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[800px] px-6 py-12">
      <div className="mb-3 flex items-center gap-2">
        <AgencyBadge agencyType={program.agencyType} agencyName={program.agencyName} />
        <span className="text-[13px] text-brown/60">{program.category}</span>
      </div>
      <h1 className="font-display text-[32px] text-brown">{program.title}</h1>
      <p className="mt-2 text-brown/80">{program.summary}</p>

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
