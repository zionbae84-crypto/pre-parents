import Link from "next/link";

export function Header() {
  return (
    <header className="border-b-2 border-brown/10 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-[19px] text-coral">
          예비부모 지원금 찾기
        </Link>
        <nav className="flex gap-6 font-body font-bold text-[15px] text-brown">
          <Link href="/programs">전체 지원사업</Link>
          <Link href="/search">맞춤 검색</Link>
        </nav>
      </div>
    </header>
  );
}
