export function shortSidoLabel(sido: string): string {
  return sido.replace(/(특별자치도|특별자치시|광역시|특별시)$/, "");
}
