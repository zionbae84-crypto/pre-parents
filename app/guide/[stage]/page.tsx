import { notFound } from "next/navigation";
import { stageSchema, type Stage } from "@/lib/schemas";
import { programs } from "@/lib/data/programs";
import { ProgramGroupedGrid } from "@/components/programs/ProgramGroupedGrid";

const STAGE_INTRO: Record<Stage, string> = {
  임신준비: "정부는 난임부부의 시술비 부담을 덜어주는 제도를 운영하고 있어요.",
  임신중: "정부와 서울시는 임신 중 진료비, 교통비, 고위험 임신 의료비 등을 지원해요.",
  출생출산: "출생 시 정부와 지자체에서 바우처, 현금지원, 산후조리 서비스를 제공해요.",
  영유아기: "0~1세 자녀를 위한 부모급여, 아동수당 등 현금성 지원이 이어져요.",
  유아: "2세 이상 자녀를 둔 가정도 아동수당 등 계속 지원을 받을 수 있어요.",
};

export function generateStaticParams() {
  return stageSchema.options.map((stage) => ({ stage }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage: rawStage } = await params;
  const decodedStage = decodeURIComponent(rawStage);
  const parsed = stageSchema.safeParse(decodedStage);
  if (!parsed.success) {
    notFound();
  }
  const stage = parsed.data;
  const stagePrograms = programs.filter((p) => p.stages.includes(stage));

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="font-display text-[32px] text-coral">{stage} 단계 지원제도</h1>
      <p className="mt-3 text-brown/80">{STAGE_INTRO[stage]}</p>

      <div className="mt-8">
        {stagePrograms.length === 0 ? (
          <p className="text-brown/60">이 단계에 등록된 지원사업이 아직 없어요.</p>
        ) : (
          <ProgramGroupedGrid programs={stagePrograms} />
        )}
      </div>
    </main>
  );
}
