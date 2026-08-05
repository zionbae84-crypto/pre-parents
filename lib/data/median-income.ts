export interface MedianIncomeTable {
  year: number;
  monthlyIncomeByHouseholdSize: Record<number, number>;
}

// 출처: 보건복지부 고시 제2025-135호(2026년도 기준 중위소득),
// 대한민국 정책브리핑 "2026년 기준 중위소득, 역대 최대 수준 인상!"
// (korea.kr, newsId=148953762), 2026-08-05 확인
export const medianIncomeTables: MedianIncomeTable[] = [
  {
    year: 2026,
    monthlyIncomeByHouseholdSize: {
      1: 2564238,
      2: 4199292,
      3: 5359036,
      4: 6494738,
      5: 7556719,
      6: 8555952,
    },
  },
];
