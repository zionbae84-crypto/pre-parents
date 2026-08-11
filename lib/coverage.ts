import { regions } from "./data/regions";
import { programs } from "./data/programs";

export function getCoveredSigungu(sido: string): string[] {
  const allSigungu = regions.find((r) => r.sido === sido)?.sigungus ?? [];

  // 시·군·구 태그 없이 sido 단위로만 등록된 광역 사업(예: 대구시 출생축하금)은 관할 내 모든
  // 시·군·구 주민에게 동일하게 적용되므로, 그런 사업이 하나라도 있으면 전 시·군·구를
  // "커버됨"으로 본다 — 그렇지 않으면 기초 자체 사업이 따로 없는(광역만으로 충분한) 시·군·구가
  // 실제로는 데이터가 있는데도 뱃지에서 "미반영"처럼 보이는 오류가 생긴다.
  if (hasSidoLevelProgram(sido)) {
    return allSigungu;
  }

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
