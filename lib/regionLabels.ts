const SIDO_SHORT_LABELS: Record<string, string> = {
  서울특별시: "서울",
  부산광역시: "부산",
  인천광역시: "인천",
  강원특별자치도: "강원",
};

export function shortSidoLabel(sido: string): string {
  return SIDO_SHORT_LABELS[sido] ?? sido.replace(/(특별자치도|특별자치시|광역시|특별시)$/, "");
}
