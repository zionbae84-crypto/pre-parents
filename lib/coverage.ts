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
