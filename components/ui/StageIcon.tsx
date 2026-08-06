import type { CSSProperties, ReactNode } from "react";
import type { Stage } from "@/lib/schemas";

const ICON_PATHS: Record<Stage, ReactNode> = {
  임신준비: (
    <>
      <circle cx="20" cy="20" r="5" />
      <path d="M20 25 L20 42" />
      <path d="M20 42 L14 54" />
      <path d="M20 42 L23 54" />
      <path d="M20 30 L30 32" />
      <circle cx="44" cy="20" r="5" />
      <path d="M44 25 L44 42" />
      <path d="M44 42 L50 54" />
      <path d="M44 42 L41 54" />
      <path d="M44 30 L34 32" />
      <path d="M30 32 L34 32" />
    </>
  ),
  임신중: (
    <>
      <circle cx="24" cy="18" r="5" />
      <path d="M24 23 C 18 28, 16 40, 20 48" />
      <path d="M24 23 C 30 28, 32 38, 28 46" />
      <path d="M20 48 L18 56" />
      <path d="M28 46 L30 56" />
      <circle cx="46" cy="20" r="5" />
      <path d="M46 25 L46 44" />
      <path d="M46 44 L42 56" />
      <path d="M46 44 L50 56" />
      <path d="M46 30 L30 38" />
    </>
  ),
  출생출산: (
    <>
      <circle cx="18" cy="18" r="5" />
      <path d="M18 23 L18 44" />
      <path d="M18 44 L13 56" />
      <path d="M18 44 L21 56" />
      <path d="M18 28 L28 34" />
      <circle cx="46" cy="18" r="5" />
      <path d="M46 23 L46 44" />
      <path d="M46 44 L51 56" />
      <path d="M46 44 L43 56" />
      <path d="M46 28 L36 34" />
      <path d="M28 30 Q32 26 36 30 Q38 36 32 40 Q26 36 28 30 Z" />
      <circle cx="32" cy="30" r="2.2" />
    </>
  ),
  영유아기: (
    <>
      <circle cx="22" cy="16" r="5" />
      <path d="M22 21 L22 38" />
      <path d="M22 38 L17 52" />
      <path d="M22 38 L26 50" />
      <path d="M22 25 L34 20" />
      <path d="M34 20 L40 32" />
      <path d="M40 32 Q48 30 50 38" />
      <circle cx="42" cy="50" r="4" />
      <circle cx="54" cy="50" r="4" />
      <path d="M42 46 L54 46" />
    </>
  ),
  유아: (
    <>
      <circle cx="20" cy="16" r="5" />
      <path d="M20 21 L20 40" />
      <path d="M20 40 L14 54" />
      <path d="M20 40 L25 52" />
      <path d="M20 26 L34 30" />
      <circle cx="42" cy="30" r="3.5" />
      <path d="M42 33.5 L42 46" />
      <path d="M42 46 L37 56" />
      <path d="M42 46 L47 54" />
      <path d="M42 36 L34 30" />
    </>
  ),
};

export function StageIcon({
  stage,
  className,
  style,
}: {
  stage: Stage;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="48"
      height="48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {ICON_PATHS[stage]}
    </svg>
  );
}
