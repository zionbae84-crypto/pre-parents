import { regions } from "./data/regions";
import { programs } from "./data/programs";

export function getCoveredSigungu(sido: string): string[] {
  const allSigungu = regions.find((r) => r.sido === sido)?.sigungus ?? [];
  const covered = new Set<string>();
  for (const program of programs) {
    if (program.region !== "nationwide" && program.region.sido === sido && program.region.sigungu) {
      covered.add(program.region.sigungu);
    }
  }
  return allSigungu.filter((sigungu) => covered.has(sigungu));
}

// 세종특별자치시처럼 하위 시군구가 없는 단일 계층 광역자치단체는 sigungu 없이
// sido 단위로만 데이터가 쌓이므로, 시군구 목록이 아니라 사업 존재 여부로 커버 여부를 판단한다.
export function hasSidoLevelProgram(sido: string): boolean {
  return programs.some((program) => program.region !== "nationwide" && program.region.sido === sido);
}
