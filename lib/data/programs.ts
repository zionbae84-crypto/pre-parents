import type { SupportProgram } from "../schemas";

export const programs: SupportProgram[] = [
  // 출처: 복지로 복지서비스 상세 (bokjiro.go.kr, wlfareInfoId=WLF00004656), 2026-08-05 확인
  {
    id: "gov-first-meeting-voucher",
    title: "첫만남이용권",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산"],
    category: "바우처",
    summary: "출생아 1인당 200만원(둘째부터 300만원) 바우처",
    benefit:
      "첫째아 200만원, 둘째아 이상 300만원을 국민행복카드 포인트(바우처)로 지급. 쌍둥이는 출생순위별로 합산 지급(예: 첫째+둘째 조합 시 500만원). 유흥업소 등 제한업종을 제외한 전 가맹점에서 사용 가능.",
    eligibility: {
      note: "출생신고 후 주민등록번호를 부여받은 아동. 소득·재산 기준 없음(보편지급)",
    },
    applicationMethod:
      "복지로/정부24 온라인 신청 또는 출생신고 시 행복출산 원스톱서비스로 동주민센터에서 일괄 신청. 국민행복카드 발급 후 카드사에서 바우처 신청.",
    applicationPeriod: "출생일(주민등록상 생년월일)로부터 2년 이내 신청 및 사용",
    requiredDocuments: ["신분증"],
    officialLink:
      "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004656",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 대한민국 정책브리핑 "2026년 부모급여, 이렇게 지원합니다!"(korea.kr, newsId=148957936),
  // 복지로 wlfareInfoId=WLF00004657, 2026-08-05 확인
  {
    id: "gov-parental-allowance",
    title: "부모급여",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "현금지원",
    summary: "만0세 월100만원, 만1세 월50만원 현금지원",
    benefit:
      "가정양육 시 만0세(0~11개월) 월 100만원, 만1세(12~23개월) 월 50만원 현금 지급. 어린이집 이용 아동은 기본보육료(58만4천원)를 제외한 차액만 지급(만0세 41만6천원). 가정양육 지급일은 매월 25일.",
    eligibility: {
      childAgeMonthsMin: 0,
      childAgeMonthsMax: 23,
      note: "소득·재산 기준 없음(보편지급). 출생일로부터 60일 이내 신청 시 출생월부터 소급 지원. 양육수당과 중복 수급 불가.",
    },
    applicationMethod:
      "읍면동 행정복지센터 방문(출생신고 시 원스톱 신청 가능) 또는 복지로/정부24 온라인 신청",
    applicationPeriod: "상시 신청 가능(출생일로부터 60일 이내 신청 시 출생월분부터 소급 지급)",
    requiredDocuments: ["신분증", "본인 명의 통장사본"],
    officialLink:
      "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004657",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 보건복지부 보도자료 "아동수당 대상·금액 확대, 4월부터 지급 시작"
  // (mohw.go.kr, bid=0027, list_no=1490257), 2026-08-05 확인
  {
    id: "gov-child-allowance",
    title: "아동수당",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["영유아기", "유아"],
    category: "현금지원",
    summary: "만 9세 미만 아동에 월 10만~13만원 지급",
    benefit:
      "2026년 4월 24일부터 지급대상이 만 9세 미만으로 확대(기존 8세 미만). 수도권 월 10만원, 비수도권 월 10.5만원(지역사랑상품권 병행 시 11만원), 인구감소지역(우대) 11만원(상품권 12만원), 인구감소지역(특별) 12만원(상품권 13만원).",
    eligibility: {
      childAgeMonthsMax: 107,
      note: "소득·재산 기준 없음(보편지급). 대한민국 국적 아동(복수국적, 난민 인정자 포함) 대상.",
    },
    applicationMethod:
      "기존 수급 아동은 별도 신청 없이 확대분 자동 지급. 신규 출생아동은 읍면동 주민센터 또는 복지로/정부24 온라인 신청 필요.",
    applicationPeriod: "상시 신청 가능",
    officialLink: "https://www.mohw.go.kr/menu.es?mid=a10711030100",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 정부24 민원안내(gov.kr, serviceInfo/SD0000007672) 및
  // 보건복지부(mohw.go.kr, mid=a10705020100), 2026-08-05 확인
  {
    id: "gov-pregnancy-childbirth-medical-expense",
    title: "임신·출산 진료비 지원(국민행복카드)",
    agencyType: "정부",
    agencyName: "국민건강보험공단",
    region: "nationwide",
    stages: ["임신중"],
    category: "의료비",
    summary: "임신 1회당 100만원(다태아 140만원) 진료비 바우처",
    benefit:
      "단태아 임신·출산 시 100만원, 다태아(둘 이상) 임신·출산 시 140만원 지원. 분만취약지 거주자는 20만원 추가지원. 임신·출산 관련 진료비, 약제·치료재료 구입비에 사용 가능.",
    eligibility: {
      note: "건강보험 가입자 또는 피부양자인 임산부(요양기관에서 임신확인서 발급 필요). 소득기준 없음.",
    },
    applicationMethod:
      "국민행복카드 발급 후 카드사 홈페이지/영업점 방문/전화로 바우처 서비스 별도 신청",
    applicationPeriod: "분만예정일(출산일)로부터 2년까지 사용 가능",
    requiredDocuments: ["임신확인서"],
    officialLink: "https://www.gov.kr/portal/service/serviceInfo/SD0000007672",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 복지로 복지서비스 상세(bokjiro.go.kr, WLF00001188) 및
  // 보건복지부 2026년 산모신생아 건강관리 지원사업 안내 훈령(mohw.go.kr, list_no=1488490), 2026-08-05 확인
  {
    id: "gov-postpartum-care-support",
    title: "산모·신생아 건강관리 지원사업",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산"],
    category: "돌봄서비스",
    summary: "산후도우미 가정방문 서비스 바우처(중위소득 150%)",
    benefit:
      "건강관리사(산후도우미)가 가정을 방문해 산모 회복 및 신생아 돌봄을 지원(단축형/표준형/연장형 중 선택). 서비스 기간·본인부담금은 소득유형과 출산형태(단태아/쌍태아 등)에 따라 상이.",
    eligibility: {
      incomePercentMax: 150,
      note: "기초생활보장수급자·차상위계층은 소득기준과 무관하게 지원. 다수 지자체가 자체 예산으로 150% 초과 가구 대상 예외지원을 별도 운영(지역별 상이, 관할 보건소 확인 필요).",
    },
    applicationMethod:
      "복지로 온라인 신청(모의계산으로 소득유형·예상지원금 확인 가능) 또는 거주지 관할 보건소 방문 신청",
    applicationPeriod: "출산 전후 관할 보건소/복지로에서 신청(구체 신청기한은 지자체 보건소 확인 필요)",
    officialLink:
      "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001188",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 복지로 복지서비스 상세(bokjiro.go.kr, WLF00001088) 및
  // 찾기쉬운 생활법령정보(easylaw.go.kr, csmSeq=735), 2026-08-05 확인
  {
    id: "gov-high-risk-pregnancy-medical",
    title: "고위험 임산부 의료비 지원",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["임신중"],
    category: "의료비",
    summary: "19대 고위험 임신질환 입원치료비 90%(최대 300만원)",
    benefit:
      "조기진통, 분만관련출혈, 중증임신중독증, 양막조기파열, 전치태반, 절박유산 등 19대 고위험 임신질환으로 입원치료 받은 경우 비급여 진료비(병실료·환자특식 제외)의 90%를 1인당 최대 300만원까지 지원. 의료급여수급권자는 비급여 본인부담금 전액 지원.",
    eligibility: {
      note: "2024년부터 소득기준 폐지. 19대 고위험 임신질환으로 진단받아 입원치료를 받은 건강보험가입자(피부양자 포함) 또는 의료급여수급권자.",
    },
    applicationMethod: "관할 보건소 방문 신청 또는 복지로 온라인 신청",
    applicationPeriod: "퇴원 후 관할 보건소에서 신청(신청기한은 보건소별 상이하므로 확인 필요)",
    requiredDocuments: ["진단서 또는 입퇴원확인서", "진료비 영수증·세부내역서"],
    officialLink:
      "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001088",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 정부24 민원안내(gov.kr, SME000000100) 및
  // 복지로 지자체 서비스(bokjiro.go.kr, WLF00004051 등), 2026-08-05 확인
  {
    id: "gov-infertility-treatment-support",
    title: "난임부부 시술비 지원",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["임신준비"],
    category: "의료비",
    summary: "난임시술 최대 25회, 회당 최대 110만원 지원",
    benefit:
      "체외수정 신선배아 최대 20회(1회당 최대110만원), 동결배아(1회당 최대50만원), 인공수정 최대 5회(1회당 최대30만원) 지원. 배아동결비 최대30만원, 유산방지제·착상보조제 각 최대20만원 추가 지원.",
    eligibility: {
      note: "2026년 기준 소득기준(가구 합산소득) 전면 폐지. 난임진단서 보유, 법률혼 또는 사실혼(보건소 확인) 부부 중 최소 1인이 건강보험 가입 대한민국 국민.",
    },
    applicationMethod:
      "관할 보건소 방문 또는 정부24/e보건소 공공보건포털 온라인 신청(시술 시작 전 지원결정통지서 발급 필요)",
    applicationPeriod: "상시 신청(시술 전 사전 신청 필수)",
    requiredDocuments: ["난임진단서", "혼인관계증명서(사실혼은 사실혼확인보건소 확인서)", "건강보험자격확인서"],
    officialLink: "https://www.gov.kr/portal/service/serviceInfo/SME000000100",
    lastVerifiedAt: "2026-08-05",
  },
];
