import { Button } from "@/components/ui/Button";

const STAGES = [
  { slug: "임신준비", label: "임신준비" },
  { slug: "임신중", label: "임신중" },
  { slug: "출생출산", label: "출생·출산" },
  { slug: "영유아기", label: "영유아기" },
  { slug: "유아", label: "유아" },
] as const;

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <section className="text-center">
        <h1 className="font-display text-[48px] text-coral leading-tight">
          예비부모를 위한
          <br />
          정부지원금, 한눈에 확인하세요
        </h1>
        <p className="mt-6 text-[17px] text-brown/80">
          정부, 서울시, 자치구로 흩어진 임신·출산·육아 지원사업을
          <br />
          거주지·나이·소득만 입력하면 한번에 찾아드려요.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/search" variant="primary">
            맞춤 지원금 찾기
          </Button>
          <Button href="/programs" variant="outline">
            전체 지원사업 둘러보기
          </Button>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-display text-[32px] text-brown">
          어떤 단계에 계신가요?
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {STAGES.map((stage) => (
            <a
              key={stage.slug}
              href={`/guide/${stage.slug}`}
              className="rounded-card border-2 border-brown/10 bg-white p-6 text-center font-bold text-brown transition-colors hover:border-coral hover:text-coral"
            >
              {stage.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
