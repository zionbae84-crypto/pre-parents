import Link from "next/link";
import { getCoveredSigungu } from "@/lib/coverage";
import { regions } from "@/lib/data/regions";

function shortRegionLabel(name: string): string {
  return name.replace(/(시|군|구)$/, "");
}

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Header() {
  const gyeonggiCovered = getCoveredSigungu("경기도");
  const gyeonggiTotal = regions.find((r) => r.sido === "경기도")?.sigungus.length ?? 0;
  const isGyeonggiFullyCovered = gyeonggiTotal > 0 && gyeonggiCovered.length === gyeonggiTotal;

  return (
    <header className="border-b-2 border-brown/10 bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/" className="font-display text-[19px] text-coral">
            예비부모 지원금 찾기
          </Link>
          <span className="inline-flex items-center gap-1 rounded-full border border-brown/15 bg-brown/5 px-2 py-0.5 text-[12px] font-bold text-brown/70">
            <LocationPinIcon />
            서울
          </span>
          {gyeonggiCovered.length > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full border border-brown/15 bg-brown/5 px-2 py-0.5 text-[12px] font-bold text-brown/70">
              <LocationPinIcon />
              경기도
              {!isGyeonggiFullyCovered &&
                `(${gyeonggiCovered.map(shortRegionLabel).join(",")})`}
            </span>
          )}
        </div>
        <nav className="flex gap-6 font-body font-bold text-[15px] text-brown">
          <Link href="/programs">전체 지원사업</Link>
          <Link href="/search">맞춤 검색</Link>
        </nav>
      </div>
    </header>
  );
}
