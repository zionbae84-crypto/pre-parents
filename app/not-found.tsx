import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[800px] flex-col items-center px-6 py-24 text-center">
      <h1 className="font-display text-[32px] text-coral">페이지를 찾을 수 없어요</h1>
      <p className="mt-4 text-brown/80">
        요청하신 페이지가 존재하지 않거나 이동되었어요.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/" variant="primary">
          홈으로 가기
        </Button>
        <Button href="/programs" variant="outline">
          전체 지원사업 보기
        </Button>
      </div>
      <Link href="/search" className="mt-6 font-bold text-coral">
        맞춤 지원금 찾기 →
      </Link>
    </main>
  );
}
