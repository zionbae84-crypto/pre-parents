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
  // 출처: 서울시 탄생응원 서울프로젝트 몽땅정보 만능키(umppa.seoul.go.kr) 및
  // 서울시 뉴스(news.seoul.go.kr/welfare/archives/543754), 2026-08-05 확인
  {
    id: "seoul-pregnant-transport-support",
    title: "서울시 임산부 교통비 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["임신중"],
    category: "바우처",
    summary: "서울 거주 임산부에게 교통비 최대 100만원 지원",
    benefit:
      "첫째 임신·출산 시 70만원, 둘째 80만원, 셋째 이상 100만원을 임산부 본인 명의 신용/체크카드에 포인트로 충전. 대중교통, 택시, 유류비 등 교통수단에 사용 가능.",
    eligibility: {
      note: "신청일 기준 서울시 거주 임산부(다문화가족 외국인 임산부 포함). 2026년 7월 1일 이후 신청분부터 서울시 90일 이상 계속 거주 요건 적용. 소득기준 없음.",
    },
    applicationMethod:
      "서울시 임산부 교통비 지원 홈페이지(seoulmomcare.com) 온라인 신청 또는 거주지 주민센터·보건소 방문 신청",
    applicationPeriod:
      "임신 중 신청 시 분만예정일로부터 12개월 되는 달 말일까지, 출산 후 신청 시 자녀 출생일로부터 12개월 되는 달 말일까지",
    officialLink:
      "https://umppa.seoul.go.kr/hmpg/sprt/bzin/bzmgComtDetail.do?biz_mng_no=34B5EA8BEB354E2DB26136CFE52AEFF2",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 서울시 탄생응원 서울프로젝트 몽땅정보 만능키(umppa.seoul.go.kr), 2026-08-05 확인
  {
    id: "seoul-postpartum-care-expense",
    title: "서울형 산후조리경비 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["출생출산"],
    category: "바우처",
    summary: "서울 출산가정에 산후조리경비 최대 150만원 바우처",
    benefit:
      "첫째 출산 시 100만원, 둘째 120만원, 셋째 이상 150만원을 바우처(서울사랑상품권 등)로 지원. 산후조리원 비용, 산후도우미, 의약품 등에 사용. 현금지급 불가.",
    eligibility: {
      note: "신청일 기준 서울 거주 출산모(외국인 배우자, 미혼모 포함). 2026년 7월 1일부터 서울시 90일 이상 거주 요건 적용.",
    },
    applicationMethod: "서울시 산후조리경비 지원 온라인 신청 또는 거주지 주민센터·보건소 방문 신청",
    applicationPeriod:
      "출산일로부터 180일 이내 신청(유산·사산은 임신 16주 이상 확인일로부터 180일 이내). 기한 경과 시 소급 적용 불가.",
    officialLink:
      "https://umppa.seoul.go.kr/hmpg/sprt/bzin/bzmgComtDetail.do?biz_mng_no=58D83411277E40D1BFF6255A10CBCDD5",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 강남구청 공식 홈페이지 종합민원 신청서식(gangnam.go.kr, B_000060/14890), 2026-08-05 확인
  {
    id: "gangnam-childbirth-grant",
    title: "강남구 출산양육지원금",
    agencyType: "기초",
    agencyName: "강남구",
    region: { sido: "서울특별시", sigungu: "강남구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "강남구 출생아 가정에 최대 500만원 현금지원",
    benefit:
      "첫째 200만원, 둘째 200만원, 셋째 300만원, 넷째 이상 500만원을 1회 현금 지급(계좌입금). 첫째·둘째 200만원은 2023년생부터 적용.",
    eligibility: {
      note: "강남구에 출생신고된 아동, 보호자와 아동이 주민등록상 동일세대, 보호자의 강남구 거주기간 1년 이상.",
    },
    applicationMethod: "거주지 관할 동주민센터 방문신청 또는 정부24 온라인신청",
    applicationPeriod: "명시 없음(관할 동주민센터 확인 필요)",
    requiredDocuments: ["신분증", "통장사본(신생아의 부 또는 모)", "출산양육지원금 신청서"],
    officialLink: "https://www.gangnam.go.kr/board/B_000060/14890/view.do?mid=ID03_010104",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보 출산장려금(서울특별시 서초구) 조례 안내
  // (easylaw.go.kr, areaCsmOrdinSeq=220), 2026-08-05 확인
  {
    id: "seocho-childbirth-grant",
    title: "서초구 출산장려금",
    agencyType: "기초",
    agencyName: "서초구",
    region: { sido: "서울특별시", sigungu: "서초구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "서초구 신생아 가정에 최대 100만원 현금지원",
    benefit:
      "첫째아 30만원, 둘째아 50만원, 셋째아 이상 100만원 현금 지급(쌍생아는 출생순위별로 각각 지급).",
    eligibility: {
      note: "출생일 기준 365일 이전부터 서초구에 계속 주민등록을 두고 실제 거주 중인 신생아의 부 또는 모.",
    },
    applicationMethod: "오케이민원센터장 또는 거주지 관할 동장에게 제출(동주민센터 방문신청)",
    applicationPeriod: "신생아 출생일부터 1년 이내",
    requiredDocuments: ["출산지원금 지원신청서", "예금통장 사본"],
    officialLink:
      "https://easylaw.go.kr/CSP/CnpClsOrdinMain.laf?popMenu=ov&areaCsmOrdinSeq=220&ccfNo=1&cciNo=1&cnpClsNo=1",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 관악구청 공식 홈페이지 한눈에 보는 출산 및 양육 관련 연령별 지원사업(gwanak.go.kr), 2026-08-05 확인.
  // 참고: 2021년 언론보도는 조례 개정으로 자녀순위별 10만~200만원 현금 지급으로 상향되었다고 보도했으나
  // 관악구청 공식 페이지 기준 현재 운영 내용은 2만원 상당 유아용품 지급이므로 공식 페이지 기준으로 반영함
  {
    id: "gwanak-birth-celebration-grant",
    title: "관악구 출생축하금",
    agencyType: "기초",
    agencyName: "관악구",
    region: { sido: "서울특별시", sigungu: "관악구" },
    stages: ["출생출산"],
    category: "기타",
    summary: "관악구 출생아 가정에 2만원 상당 유아용품 지원",
    benefit: "관악구 거주 및 출생신고한 영아 가정에 2만원 상당의 유아용품을 지급(현물지원).",
    eligibility: {
      note: "관악구에 출생신고한 영아를 둔 가정. 소득기준 없음.",
    },
    applicationMethod: "정부24(plus.gov.kr) 온라인 신청 또는 거주지 동주민센터 방문 신청",
    applicationPeriod: "명시 없음(관할 동주민센터 확인 필요)",
    officialLink: "https://www.gwanak.go.kr/site/gwanak/06/10614011300002025051402.jsp",
    lastVerifiedAt: "2026-08-05",
  },
  // 출처: 강서구청 공식 홈페이지 강서구 임신부 가사돌봄서비스(gangseo.seoul.kr/welfare/wel100501), 2026-08-05 확인
  {
    id: "gangseo-pregnant-housework-service",
    title: "강서구 임신부 가사돌봄서비스",
    agencyType: "기초",
    agencyName: "강서구",
    region: { sido: "서울특별시", sigungu: "강서구" },
    stages: ["임신중"],
    category: "돌봄서비스",
    summary: "강서구 임신부 대상 가사·병원동행 돌봄서비스 지원",
    benefit:
      "청소, 세탁, 식기세척 등 기본 가사 및 병원 동행 서비스를 할인 요금(평일 회당 7,000원, 토요일 회당 8,000원)에 최대 10회(1회 4시간) 이용. 이용자가 서비스 제공업체에 직접 결제.",
    eligibility: {
      note: "강서구에 주민등록을 두고 거주하는 임신부(임신판정~출산 전). 서울형 가사서비스, 한부모가족 가사서비스와 중복 지원 불가.",
    },
    applicationMethod: "정부24 온라인 신청 또는 거주지 동주민센터 방문 신청",
    applicationPeriod: "2026년 3월 23일(월) ~ 10월 30일(금)",
    officialLink: "https://www.gangseo.seoul.kr/welfare/wel100501",
    lastVerifiedAt: "2026-08-05",
  },
];
