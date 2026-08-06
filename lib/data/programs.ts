import type { SupportProgram } from "../schemas";

export const programs: SupportProgram[] = [
  // 출처: 복지로 복지서비스 상세 (bokjiro.go.kr, wlfareInfoId=WLF00004656), 2026-08-05 확인
  {
    id: "gov-first-meeting-voucher",
    title: "첫만남이용권",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    // applicationPeriod가 "출생일로부터 2년 이내"이므로 영유아기·유아 단계까지 신청 가능
    stages: ["출생출산", "영유아기", "유아"],
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
    // applicationPeriod가 "출산일로부터 180일 이내"이므로 영유아기 단계까지 신청 가능
    stages: ["출생출산", "영유아기"],
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
    // applicationPeriod가 "명시 없음"이라 신청 가능 기간을 넓혀 잡을 근거가 없어
    // 출생출산 단계로만 한정(신청기한 확인되면 stages 확장 검토)
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
    // applicationPeriod가 "출생일부터 1년 이내"이므로 영유아기 단계까지 신청 가능
    stages: ["출생출산", "영유아기"],
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
    // applicationPeriod가 "명시 없음"이라 신청 가능 기간을 넓혀 잡을 근거가 없어
    // 출생출산 단계로만 한정(신청기한 확인되면 stages 확장 검토)
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
  // 출처: 종로구보건소 공식 홈페이지(jongno.go.kr, menuId=401291), 2026-08-06 확인
  {
    id: "jongno-postpartum-care-copay-support",
    title: "산모·신생아 건강관리서비스 본인부담금 추가지원",
    agencyType: "기초",
    agencyName: "종로구",
    region: { sido: "서울특별시", sigungu: "종로구" },
    stages: ["출생출산"],
    category: "의료비",
    summary: "산모신생아 건강관리 본인부담금 90%까지 추가지원",
    benefit:
      "산모·신생아 건강관리서비스 이용 시 서비스 가격의 본인부담금(통상 10~50%) 중 자기부담을 총 서비스가격의 10% 수준까지 낮춰주는 추가지원. 쌍생아 이상, 셋째아 이상, 희귀난치성질환 산모, 장애인 산모, 북한이탈주민, 결혼이민자, 미혼모는 소득기준과 무관하게 지원.",
    eligibility: {
      incomePercentMax: 100,
      note: "출산일 기준 10개월 전부터 신청일까지 계속 종로구에 주민등록된 출산가정(기준중위소득 100% 이하). 쌍생아 이상/셋째아 이상/희귀난치성질환 산모/장애인 산모/북한이탈주민/결혼이민자/미혼모는 소득 무관 지원.",
    },
    applicationMethod: "종로구보건소 방문 신청",
    applicationPeriod: "서비스 종료일로부터 30일 이내",
    requiredDocuments: [
      "본인부담금 신청서",
      "개인정보 수집이용동의서",
      "만족도 조사지",
      "산모 통장사본",
      "본인부담금 영수증",
      "서비스제공기록지",
    ],
    officialLink: "https://www.jongno.go.kr/Health.do?menuId=401291&menuNo=401291",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 중구청 공식 홈페이지 다자녀 가정지원 안내(junggu.seoul.kr, cmsid=16349), 2026-08-06 확인.
  // 참고: 중구청 사이트 내 별도 팝업 공지(cid=64081)에는 "둘째 50만/셋째 100만/넷째 이상 300만원(첫째 지급 없음)"으로
  // 다르게 게시되어 있어 두 페이지의 금액이 상충함. 더 상세하고 구조화된 콘텐츠 페이지(cmsid=16349) 수치를 채택했으며,
  // 실제 운영 여부는 중구청 가족정책과(02-3396-5434) 재확인 권장.
  {
    id: "junggu-childbirth-childcare-grant",
    title: "출산양육지원금",
    agencyType: "기초",
    agencyName: "중구",
    region: { sido: "서울특별시", sigungu: "중구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "출생아 순위별 최대 1,000만원 양육지원금 지급",
    benefit:
      "자녀 출산 시 순위별 일시금 지급 — 첫째 100만원, 둘째 200만원, 셋째 300만원, 넷째 400만원, 다섯째 이상 1,000만원.",
    eligibility: {
      note: "신생아 출생일 현재 중구에 12개월 이상 주민등록 후 실제 거주(12개월 미만 거주 시 실거주기간 12개월 경과 후 지원 가능).",
    },
    applicationMethod: "거주지 동주민센터 방문 신청",
    applicationPeriod: "명시 없음(관할 동주민센터 확인 필요)",
    officialLink: "https://www.junggu.seoul.kr/content.do?cmsid=16349",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 용산구보건소 공식 홈페이지(health.yongsan.go.kr, menuNo=201275), 2026-08-06 확인.
  // 참고: 일반 가구 대상 출산장려금 조례(전부개정, 2024.10 입법예고)가 존재하나 공식페이지에서 구체 금액을
  // 확인하지 못해, 확실히 검증된 장애인가정 출산지원금만 반영함.
  {
    id: "yongsan-disabled-family-birth-grant",
    title: "장애인가정 출산지원금",
    agencyType: "기초",
    agencyName: "용산구",
    region: { sido: "서울특별시", sigungu: "용산구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "장애인 가정 출산 시 최대 170만원 지원",
    benefit:
      "등록장애인이 부 또는 모인 가정의 출산비용 지원 — 심하지 않은 장애 120만원, 심한 장애 170만원(구비 지원 50만원 포함).",
    eligibility: {
      note: "신생아 출생일 기준 3개월 전부터 용산구에 주민등록을 두고 거주하는 등록 장애인으로 출산한 장애인 가정의 부 또는 모.",
    },
    applicationMethod: "거주지 동주민센터 방문 또는 정부24/복지로 온라인 신청",
    applicationPeriod: "명시 없음(관할 동주민센터 확인 필요)",
    officialLink: "http://health.yongsan.go.kr/portal/main/contents.do?menuNo=201275",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 성동구보건소 공식 홈페이지(sd.go.kr, key=4816), 2026-08-06 확인
  {
    id: "seongdong-postpartum-care-expense-support",
    title: "성동구 출산가정 산후조리비용 확대지원",
    agencyType: "기초",
    agencyName: "성동구",
    region: { sido: "서울특별시", sigungu: "성동구" },
    stages: ["출생출산", "영유아기"],
    category: "바우처",
    summary: "산후조리비 현금+바우처 최대 150만원 지원",
    benefit:
      "현금 50만원(산모 계좌 입금, 성동구 지원)에 더해 바우처로 첫째 100만원, 둘째 120만원, 셋째 이상 150만원 추가 지원(성동구+서울시 재원).",
    eligibility: {
      note: "현금 지원은 신청일 기준 성동구 거주 및 성동구 출생신고 출산모 대상. 바우처는 신청일 현재 서울시 거주 및 서울시 출생신고 출산모 대상(2026년 7월 1일부터 90일 이상 거주 요건 적용).",
    },
    applicationMethod:
      "동주민센터 방문(현금 신청) 또는 정부24 보조금24·탄생육아 몽땅정보통(umppa.seoul.go.kr) 온라인 신청",
    applicationPeriod:
      "현금: 출산일로부터 60일 이내 / 바우처: 출산 후 180일 이내(미숙아·선천성이상아는 퇴원일로부터 180일 이내)",
    requiredDocuments: [
      "출산서비스 통합처리 신청서",
      "신분증",
      "통장사본(산모명의)",
      "주민등록등초본",
      "가족관계증명서",
    ],
    officialLink: "https://www.sd.go.kr/health/contents.do?key=4816",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 광진구청 공식 홈페이지(gwangjin.go.kr, menuNo=200309), 2026-08-06 확인
  {
    id: "gwangjin-first-birthday-celebration-grant",
    title: "첫돌(출산)축하금 지원",
    agencyType: "기초",
    agencyName: "광진구",
    region: { sido: "서울특별시", sigungu: "광진구" },
    stages: ["영유아기"],
    category: "바우처",
    summary: "첫돌 맞은 아이에 최대 300만원 축하금 지급",
    benefit:
      "출생 후 첫돌이 지난 자녀에게 1회 지급 — 첫째~셋째 자녀 100만원, 넷째 200만원, 다섯째 이상 300만원. 서울사랑상품권(광진구 첫돌축하금) 형태로 지급, 광진구 내 가맹점(음식점, 마트, 병원, 약국, 문화·교육업종 등)에서 사용 가능.",
    eligibility: {
      note: "2025년 이후 광진구에서 출생한 첫째 자녀부터 지원. 출생일 포함하여 지원일까지 계속 동일세대로 광진구 거주하는 부모 또는 보호자.",
    },
    applicationMethod: "거주지 동주민센터 방문 신청",
    applicationPeriod: "출생신고 후 1년이 경과한 날로부터 6개월 이내",
    requiredDocuments: ["신분증", "신청서(조례 별지1호 서식 또는 출산서비스 통합처리신청서)"],
    officialLink: "https://www.gwangjin.go.kr/portal/main/contents.do?menuNo=200309",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 「서울특별시 동대문구 출생 및 양육 지원에 관한 조례」(law.go.kr, ordinSeq=1890197), 2026-08-06 확인.
  // 참고: law.go.kr 조례 원문은 JS 렌더링으로 직접 추출하지 못해, 일관되게 동일 금액을 보도한 언론 3건으로
  // 교차검증함(공식 조례 원문 직접 열람은 못했음). 정확한 신청기한도 미확인.
  {
    id: "dongdaemun-birth-grant",
    title: "출산지원금",
    agencyType: "기초",
    agencyName: "동대문구",
    region: { sido: "서울특별시", sigungu: "동대문구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "출생아 순위별 30만~300만원 출산지원금",
    benefit:
      "순위별 일시금 지급 — 첫째 30만원, 둘째 60만원, 셋째 100만원, 넷째 200만원, 다섯째 이상 300만원(2024.1.1 시행).",
    eligibility: {
      note: "출생일 현재 동대문구에 주민등록을 두고 실제 거주하는 출생아의 부 또는 모.",
    },
    applicationMethod: "거주지 동주민센터 방문 신청",
    applicationPeriod: "명시 없음(출생신고 시 접수, 정확한 신청기한은 동대문구청 가정복지과 확인 필요)",
    officialLink: "https://www.law.go.kr/LSW//ordinInfoP.do?ordinSeq=1890197&chrClsCd=010202&gubun=ELIS",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 중랑구청 공식 홈페이지(jungnang.go.kr, menuNo=201500), 2026-08-06 확인.
  // 참고: 공식페이지 직접 fetch가 기술적으로 반복 실패해 검색엔진에 색인된 동일 페이지 콘텐츠와
  // 언론보도(헤럴드경제, 문화일보)로 교차검증함.
  {
    id: "jungnang-birth-celebration-goods-points",
    title: "중랑형 출산축하용품 지원사업",
    agencyType: "기초",
    agencyName: "중랑구",
    region: { sido: "서울특별시", sigungu: "중랑구" },
    stages: ["출생출산", "영유아기"],
    category: "바우처",
    summary: "출산가정에 육아용품 전용 10만 포인트 지급",
    benefit:
      "출산·육아용품 전용 온라인몰에서 사용 가능한 10만 포인트 지급. 400여 종 육아용품 중 직접 선택해 가정으로 배송받는 방식.",
    eligibility: {
      note: "2026년 1월 1일 이후 출생아를 둔 가정으로, 출생일 기준 중랑구에 12개월 이상 주민등록을 두고 실제 거주 중인 경우.",
    },
    applicationMethod:
      "동주민센터 방문(출생신고 시 행복출산 원스톱서비스로 통합 신청) 또는 중랑구청 홈페이지 온라인 신청",
    applicationPeriod: "출생일로부터 6개월 이내",
    officialLink: "https://www.jungnang.go.kr/portal/main/contents.do?menuNo=201500",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보 성북구 조례 안내(easylaw.go.kr, areaCsmOrdinSeq=221), 2026-08-06 확인
  {
    id: "seongbuk-childbirth-grant",
    title: "출산장려금",
    agencyType: "기초",
    agencyName: "성북구",
    region: { sido: "서울특별시", sigungu: "성북구" },
    stages: ["출생출산", "영유아기"],
    category: "현금지원",
    summary: "셋째 이상 자녀 출산 시 100만~200만원 지급",
    benefit:
      "신생아 출생일 기준 6개월 이상 계속 성북구에 주민등록을 두고 실제 거주하는 신생아의 보호자에게 셋째 자녀 100만원, 넷째 자녀 150만원, 다섯째 자녀 이상 200만원을 지급(첫째·둘째 자녀는 지원 대상 아님).",
    eligibility: {
      note: "신생아 출생일 기준 6개월 이상 계속하여 성북구에 주민등록을 두고 실제 거주하는 신생아의 보호자. 셋째 자녀 이상부터 지원 대상.",
    },
    applicationMethod: "거주지 관할 동장에게 출산서비스 통합처리 신청서 제출(출생신고 접수 시 안내)",
    applicationPeriod: "신생아 출생일부터 1년 이내",
    officialLink:
      "https://www.easylaw.go.kr/CSP/CnpClsOrdinMain.laf?areaCsmOrdinSeq=221&ccfNo=1&cciNo=1&cnpClsNo=1",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 서대문구보건소 공식 홈페이지(sdm.go.kr), 2026-08-06 확인
  {
    id: "seodaemun-pregnancy-congrats-grant",
    title: "임신축하금",
    agencyType: "기초",
    agencyName: "서대문구",
    region: { sido: "서울특별시", sigungu: "서대문구" },
    stages: ["임신중"],
    category: "현금지원",
    summary: "임신부에게 태아 수에 따라 30만~90만원 지급",
    benefit:
      "태아 수에 따라 차등 지급: 단태아 30만원, 쌍태아 60만원, 삼태아 이상 90만원. 신청 다음 달 중순경 본인 계좌로 입금.",
    eligibility: {
      note: "출산예정일(출산일) 기준 1년 전부터 신청일 현재까지 계속하여 서대문구에 주민등록을 두고 실제 거주하는 임신부. 외국인은 임신부와 배우자 모두 출산예정일 1년 전부터 관내 거소확인 필요.",
    },
    applicationMethod: "온라인(정부24에서 서대문구 임신축하금 검색 신청) 또는 관할 동주민센터·보건소 방문 신청",
    applicationPeriod: "출산예정일 또는 출산일 전일까지(출산 후 신청 불가)",
    requiredDocuments: ["신분증", "임신확인서", "지원 신청서", "통장사본", "개인정보 동의서"],
    officialLink: "https://www.sdm.go.kr/health/contents/healthbiz/maternal/pregnancy",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 도봉구청 공식 홈페이지(dobong.go.kr, code=10010135), 2026-08-06 확인
  {
    id: "dobong-birth-celebration-goods",
    title: "출생축하용품 지원",
    agencyType: "기초",
    agencyName: "도봉구",
    region: { sido: "서울특별시", sigungu: "도봉구" },
    stages: ["출생출산"],
    category: "기타",
    summary: "신생아에게 기저귀 등 육아용품 세트 무료 지원",
    benefit:
      "2024년 1월 1일 이후 출생한 도봉구 거주 아동에게 아기양말, 기저귀, 방수패드, 손수건 등 출생축하용품 세트를 신청인이 희망하는 장소로 택배 배송.",
    eligibility: {
      note: "2024년 1월 1일 이후 출생한 도봉구 거주 아동.",
    },
    applicationMethod: "방문신청(동주민센터, 출생신고 시) 또는 온라인신청(정부24 > 원스톱서비스 > 행복출산)",
    applicationPeriod: "명시 없음(관할 동주민센터 확인 필요)",
    officialLink: "https://www.dobong.go.kr/Contents.asp?code=10010135",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 양천구청 공식 홈페이지(yangcheon.go.kr, cbIdx=369, bcIdx=177144), 2026-08-06 확인.
  // 참고: 양천구 자체 "출산지원금 지급 조례"는 2021년생까지만 적용되고 폐지되어 반영하지 않음.
  {
    id: "yangcheon-disabled-family-birth-support",
    title: "장애인가정 출산비 지원(양천구 추가지원)",
    agencyType: "기초",
    agencyName: "양천구",
    region: { sido: "서울특별시", sigungu: "양천구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "장애인 부모 출산 시 양천구가 1인당 50만원 추가지원",
    benefit:
      "국비·서울시비 등록장애인 1인당 120만원 + 양천구 자체 추가지원 50만원(여성장애인·남성장애인 배우자 각각 적용), 총 지원액 170만원.",
    eligibility: {
      note: "출생일 이전부터 신청일 현재까지 6개월 이상 계속 양천구에 주민등록을 두고 거주하는 등록장애인(여성장애인 본인 또는 남성장애인의 배우자가 출산).",
    },
    applicationMethod: "관할 동주민센터 방문 신청",
    applicationPeriod: "명시 없음(관할 동주민센터 확인 필요)",
    requiredDocuments: ["신청서", "출생사실이 기재된 주민등록등본", "통장사본"],
    officialLink: "https://www.yangcheon.go.kr/site/yangcheon/ex/bbs/View.do?cbIdx=369&bcIdx=177144",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보 구로구 조례 안내 및 구로구청 공식 홈페이지(guro.go.kr, key=4187), 2026-08-06 확인
  {
    id: "guro-multichild-birth-celebration-grant",
    title: "다자녀 출생축하금",
    agencyType: "기초",
    agencyName: "구로구",
    region: { sido: "서울특별시", sigungu: "구로구" },
    stages: ["출생출산", "영유아기"],
    category: "현금지원",
    summary: "셋째아 60만원, 넷째아 이상 200만원 출생축하금",
    benefit:
      "셋째 자녀 60만원, 넷째 자녀 이상 200만원 1회 지급(쌍생아 이상은 개별 지급).",
    eligibility: {
      note: "신생아 출생일 6개월 전부터 신청일 현재까지 계속 구로구에 주민등록을 두고 실제 거주하는 보호자(부 또는 모). 신생아는 보호자와 동일 세대원이어야 하며, 셋째아 이상 출산가정만 해당.",
    },
    applicationMethod: "거주지 관할 동장에게 신청(신청서 및 예금통장 사본 제출)",
    applicationPeriod: "신생아 출생일로부터 1년 이내(거주기간 6개월 미만인 경우, 6개월 경과 후 6개월 이내 신청)",
    requiredDocuments: ["신청서(별지 제1호서식)", "신청인 예금통장 사본"],
    officialLink: "https://www.guro.go.kr/www/contents.do?key=4187",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 금천구청 공식 홈페이지(geumcheon.go.kr, key=525), 2026-08-06 확인
  {
    id: "geumcheon-birth-celebration-grant",
    title: "금천구 출생축하금",
    agencyType: "기초",
    agencyName: "금천구",
    region: { sido: "서울특별시", sigungu: "금천구" },
    stages: ["출생출산", "영유아기"],
    category: "현금지원",
    summary: "셋째아 70만원, 넷째아 이상 100만원 출생축하금",
    benefit: "셋째 자녀 70만원, 넷째 자녀 이상 100만원 지급.",
    eligibility: {
      note: "셋째아 이상 출산가정, 금천구 주민등록 및 실거주 요건 적용.",
    },
    applicationMethod: "주민센터 방문 또는 정부24 온라인 신청",
    applicationPeriod: "출생일로부터 1년 이내",
    officialLink: "https://www.geumcheon.go.kr/portal/contents.do?key=525",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 영등포구청 공식 홈페이지(ydp.go.kr, key=3842), 2026-08-06 확인
  {
    id: "yeongdeungpo-disabled-family-birth-support",
    title: "장애인가정 출산지원금 지원(영등포구 추가지원)",
    agencyType: "기초",
    agencyName: "영등포구",
    region: { sido: "서울특별시", sigungu: "영등포구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "장애인가정 출산 시 영등포구가 태아 1인당 50만원 추가지원",
    benefit:
      "서울시·국비 기본지원 태아 1인 기준 120만원 + 영등포구 자체 추가지원 태아 1인 기준 50만원(여성장애인 및 남성장애인 배우자 동일 기준 적용).",
    eligibility: {
      note: "장애인복지법 제32조에 따른 등록장애인으로 당해연도 1월 1일 이후 출산자, 또는 임신기간 4개월 이상 태아를 유산·사산한 자(인공임신중절 제외). 영등포구 거주자.",
    },
    applicationMethod: "장애인의 주민등록지 관할 동주민센터에 출산자 본인 또는 배우자 방문 신청",
    applicationPeriod: "명시 없음(관할 동주민센터 확인 필요)",
    requiredDocuments: ["신청자 신분증", "신청서", "출생증명서 또는 주민등록등본", "입금계좌 통장사본"],
    officialLink: "https://www.ydp.go.kr/www/contents.do?key=3842",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 「서울특별시 동작구 출산지원금 지급에 관한 조례」(law.go.kr, ordinSeq=1746909), 2026-08-06 확인.
  // 참고: 신청방법·신청기한은 원문에서 확인하지 못해 "확인 안됨"으로 표기. 실제 반영 전 동작구청
  // 보육정책과(또는 관련 부서) 재확인 권장.
  {
    id: "dongjak-angel-celebration-grant",
    title: "동작천사축하금",
    agencyType: "기초",
    agencyName: "동작구",
    region: { sido: "서울특별시", sigungu: "동작구" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "출생순위별 30만~200만원 동작천사축하금",
    benefit:
      "첫째 30만원, 둘째 50만원, 셋째 100만원, 넷째 이상 200만원 지급(2022.11.10 조례 전부개정으로 사업명이 동작천사축하금으로 변경됨).",
    eligibility: {
      note: "동작구에 6개월 이상 계속 거주 중인 신생아의 보호자(부 또는 모).",
    },
    applicationMethod: "확인 안됨(관할 동작구청 문의 필요)",
    applicationPeriod: "확인 안됨(관할 동작구청 문의 필요)",
    officialLink: "https://www.law.go.kr/LSW//ordinInfoP.do?ordinSeq=1746909&chrClsCd=010202&gubun=ELIS",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 강동구청 공식 홈페이지(gangdong.go.kr, gdp_005_001_005_001_003), 2026-08-06 확인
  {
    id: "gangdong-multichild-special-allowance",
    title: "다자녀특별장려금",
    agencyType: "기초",
    agencyName: "강동구",
    region: { sido: "서울특별시", sigungu: "강동구" },
    stages: ["출생출산", "영유아기"],
    category: "현금지원",
    summary: "세자녀 이상 가정에 월 10만~20만원 지급",
    benefit:
      "세자녀 가정 세대당 월 10만원, 네자녀 이상 가정 세대당 월 20만원 지급. 신청 익월부터 대상 자녀가 만 6세 미만(0~71개월)까지 지급.",
    eligibility: {
      childAgeMonthsMin: 0,
      childAgeMonthsMax: 71,
      note: "강동구 동일 세대로 구성된 세 자녀 이상 다자녀 가정의 부모 또는 실질적 양육자.",
    },
    applicationMethod: "거주지 관할 동주민센터 신청",
    applicationPeriod: "상시 신청(지급 자체는 신청 익월부터 자녀 만 6세 미만까지 지속)",
    officialLink: "https://www.gangdong.go.kr/web/newportal/contents/gdp_005_001_005_001_003",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 노원구보건소 공식 홈페이지(nowon.kr, healthIncrz1_04.jsp), 2026-08-06 확인.
  // 참고: 사용자가 제공한 nowon.kr 링크(생애주기별 출산·양육지원사업 안내)는 e-Book/PDF 형태라 본문 텍스트를
  // 확인할 수 없었음. 같은 공식 도메인 내 실제 텍스트 콘텐츠 페이지에서 확인 가능한 유일한 노원구 자체
  // 현금성/현물 지원사업이 이 유축기 무료대여였음("노원mom 출산축하용품"은 이전 조사에서도 공식 페이지로
  // 확인되지 않아 이번에도 제외).
  {
    id: "nowon-breast-pump-rental",
    title: "유축기 무료대여",
    agencyType: "기초",
    agencyName: "노원구",
    region: { sido: "서울특별시", sigungu: "노원구" },
    stages: ["출생출산", "영유아기"],
    category: "돌봄서비스",
    summary: "분만 후 60일 이내 수유부에게 유축기 2개월 무료 대여",
    benefit: "스펙트라 S2+ 유축기(소모품 제외, 본체만) 대여일로부터 2개월간 무료 대여.",
    eligibility: {
      note: "분만 후 60일 이내인 노원구 관내 수유부.",
    },
    applicationMethod: "노원구보건소 4층 모자건강센터 방문 신청",
    applicationPeriod: "분만 후 60일 이내",
    requiredDocuments: ["산모 신분증", "주민등록등본", "출생증명서(등본에 출생사실 기재 시 생략 가능)"],
    officialLink: "https://www.nowon.kr/health/healthIncrz/healthIncrz1/healthIncrz1_04.jsp",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 마포구보건소 공식 홈페이지(mapo.go.kr, health04020101), 2026-08-06 확인.
  // 참고: 사용자가 제공한 mapo.go.kr 공지사항 링크(2026년 행복출산 원스톱 서비스 안내)는 이미지 위주
  // 게시물이라 본문 텍스트가 없었음. 같은 공식 도메인의 산후관리 사업 페이지에서 확인 가능한 마포구 자체
  // 현물 지원사업으로 대체함. 마포구 자체 출산축하금 조례(첫째10만~다섯째 이상 500만원)가 3자 법률DB에는
  // 인용되어 있으나, 기존 공식 URL이 현재 404 처리되어 있고 대체 공식 링크를 확보하지 못해 반영하지 않음.
  {
    id: "mapo-postpartum-breast-pump-rental",
    title: "산후 유축기 대여 지원",
    agencyType: "기초",
    agencyName: "마포구",
    region: { sido: "서울특별시", sigungu: "마포구" },
    stages: ["출생출산", "영유아기"],
    category: "돌봄서비스",
    summary: "출산 후 유축기(소모품 포함) 2개월 무료 대여",
    benefit: "스펙트라 S2+ 유축기(소모품 제공) 2개월 대여. 온라인 신청 시 신청 후 3일 이내 수령.",
    eligibility: {
      note: "마포구민 임산부(산모) 또는 대한민국 국민과 혼인해 임신·출산했거나 대한민국 국적 아동을 양육 중인 외국인.",
    },
    applicationMethod:
      "온라인 신청(마포구보건소 온라인서비스 > 유축기 예약 서비스) 또는 마포구보건소 2층 햇빛센터 방문 신청",
    applicationPeriod: "출산 후 신청(대여기간 2개월)",
    requiredDocuments: ["산모 신분증", "(주소 확인 불가 시) 주민등록등본"],
    officialLink: "https://www.mapo.go.kr/site/health/content/health04020101",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 고용노동부 정책자료 "2025.1.1부터 달라지는 육아지원제도"(moel.go.kr), 2026-08-06 확인
  {
    id: "gov-parental-leave-benefit",
    title: "육아휴직급여",
    agencyType: "정부",
    agencyName: "고용노동부",
    region: "nationwide",
    stages: ["출생출산", "영유아기", "유아"],
    category: "현금지원",
    summary: "육아휴직 기간 중 통상임금 일부를 현금 지원",
    benefit:
      "육아휴직 1~3개월차: 통상임금 100%(월 상한 250만원), 4~6개월차: 월 상한 200만원, 7개월차 이후: 통상임금 80%(월 상한 160만원). 하한액 월 70만원. 2025년 2월 23일부터 사후지급금(25% 유보) 제도가 폐지되어 매월 전액 지급. 6+6 부모육아휴직제로 부모 모두 각 3개월 이상 육아휴직을 사용하면 휴직 기간이 1년에서 1년 6개월로 연장(한부모·중증장애아동 부모는 조건 없이 1년 6개월).",
    eligibility: {
      childAgeMonthsMax: 96,
      note: "만 8세 이하 또는 초등학교 2학년 이하 자녀를 양육하기 위해 30일 이상 육아휴직을 부여받은 근로자로, 휴직 시작일 이전 고용보험 피보험 단위기간 합산 180일 이상.",
    },
    applicationMethod:
      "관할 고용센터 방문·우편·팩스 신청 또는 고용보험 홈페이지(ei.go.kr) 온라인 신청(개인서비스 → 모성보호 육아지원 신청)",
    applicationPeriod: "육아휴직 시작 후 매월 단위 신청(해당 월분은 다음 달 말일까지), 육아휴직 종료 후 12개월 이내 신청",
    requiredDocuments: ["육아휴직급여 신청서", "육아휴직 확인서(최초 1회)", "통상임금 확인 서류(임금대장 등)"],
    officialLink: "https://www.moel.go.kr/policy/policydata/view.do?bbs_seq=20250100172",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보(easylaw.go.kr, csmSeq=1380), 2026-08-06 확인
  {
    id: "gov-spouse-paternity-leave-benefit",
    title: "배우자 출산휴가 급여",
    agencyType: "정부",
    agencyName: "고용노동부",
    region: "nationwide",
    stages: ["출생출산"],
    category: "현금지원",
    summary: "배우자 출산 시 20일 유급휴가 급여 지원",
    benefit:
      "2025년 2월 23일부터 배우자 출산휴가가 10일에서 20일로 확대(전 기간 유급). 우선지원대상기업 소속 근로자는 통상임금 100%(상한액 1,684,210원, 20일 기준)를 정부가 지원. 대규모기업 근로자는 최초 5일만 사업주가 유급 지급하고 나머지는 사업주 자체 부담. 출산일부터 120일 이내 사용, 최대 4회 분할 사용 가능.",
    eligibility: {
      note: "배우자가 출산한 근로자로, 휴가 종료일 기준 고용보험 피보험 단위기간 합산 180일 이상.",
    },
    applicationMethod: "관할 고용센터 방문·우편·팩스 신청 또는 고용보험 홈페이지(ei.go.kr) 온라인 신청",
    applicationPeriod: "휴가 종료 후 한꺼번에 신청하며, 휴가 종료일 이후 12개월 이내 미신청 시 지급 불가",
    requiredDocuments: ["배우자 출산휴가 급여 신청서", "배우자 출산휴가 확인서", "통상임금 확인 서류"],
    officialLink: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1380&ccfNo=1&cciNo=2&cnpClsNo=2",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보(easylaw.go.kr) 및 고용24(gov.kr), 2026-08-06 확인
  {
    id: "gov-reduced-working-hours-benefit",
    title: "육아기 근로시간 단축급여",
    agencyType: "정부",
    agencyName: "고용노동부",
    region: "nationwide",
    stages: ["출생출산", "영유아기", "유아"],
    category: "현금지원",
    summary: "육아기 근로시간 단축 시 임금 감소분 일부 지원",
    benefit:
      "주당 최초 10시간 단축분: 통상임금 100% 지원(상한 250만원, 하한 50만원). 나머지 단축분: 통상임금 80% 지원(상한 160만원, 하한 50만원). 근로시간은 주 15시간 이상 35시간 이하로 유지해야 함. 2025년 2월 개정으로 대상 자녀 연령이 8세(초2)에서 12세(초6)로 확대.",
    eligibility: {
      childAgeMonthsMax: 144,
      note: "육아기 근로시간 단축을 30일 이상 실시한 근로자로, 단축 시작 전 고용보험 피보험 단위기간 합산 180일 이상.",
    },
    applicationMethod:
      "관할 고용센터 방문·우편·팩스 신청 또는 고용보험 홈페이지(ei.go.kr)·고용24 온라인 신청",
    applicationPeriod: "단축 시작 후 1개월부터 종료 후 12개월 이내 신청",
    requiredDocuments: [
      "육아기 근로시간 단축급여 신청서",
      "육아기 근로시간 단축 확인서(최초 1회)",
      "단축 전후 근로조건 확인 서류(임금대장, 근로계약서 등)",
    ],
    officialLink: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000303",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보(easylaw.go.kr, csmSeq=735), 2026-08-06 확인
  {
    id: "gov-teen-mother-medical-expense",
    title: "청소년산모 임신·출산 의료비 지원",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["임신중", "출생출산"],
    category: "바우처",
    summary: "만 19세 이하 산모 임신·출산 의료비 바우처 지원",
    benefit:
      "임신 1회당 120만원 범위에서 임산부 및 2세 미만 영유아의 의료비·약제/치료재료 구입비를 국민행복카드 바우처로 지원(산후조리원 비용 제외). 카드 수령 후 분만예정일 이후 2년까지 사용 가능.",
    eligibility: {
      parentAgeMax: 19,
      note: "만 19세 이하 산모(소득·재산 기준 없음).",
    },
    applicationMethod: "사회서비스 전자바우처 포털(socialservice.or.kr) 온라인 신청 또는 국민행복카드 발급 카드사 신청",
    applicationPeriod: "임신 확인 후 상시 신청 가능",
    requiredDocuments: ["청소년산모 임신·출산 의료비 지원 신청 및 임신확인서", "주민등록등본"],
    officialLink: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=735&ccfNo=2&cciNo=2&cnpClsNo=2",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 정부24 서비스 상세(gov.kr, SME000000110), 2026-08-06 확인
  {
    id: "gov-premature-infant-medical-expense",
    title: "미숙아·선천성이상아 의료비 지원",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "의료비",
    summary: "미숙아·선천성이상아 입원치료비 최대 2천만원 지원",
    benefit:
      "건강보험 급여 중 전액본인부담금 및 비급여 진료비 지원. 미숙아는 체중별 최고 2천만원, 선천성이상아는 최고 700만원까지 지원(100만원 미만은 전액, 초과분은 90%). 2024년부터 가구 소득과 관계없이 지원.",
    eligibility: {
      childAgeMonthsMax: 24,
      note: "미숙아: 출생 후 24시간 이내 신생아집중치료실(NICU) 입원치료. 선천성이상아: 출생 후 2년 이내 선천성이상질환 진단 및 입원·수술.",
    },
    applicationMethod: "주소지 관할 보건소 방문 신청 또는 e보건소 공공보건포털·아이마중앱 온라인 신청",
    applicationPeriod: "최종 퇴원일로부터 6개월 이내 신청",
    requiredDocuments: [
      "지원신청서",
      "진료비 영수증·세부내역서",
      "입금계좌통장 사본",
      "주민등록등본",
      "출생보고서/출생증명서(미숙아)",
      "진단서·입퇴원확인서(선천성이상아)",
    ],
    officialLink: "https://www.gov.kr/portal/service/serviceInfo/SME000000110",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 복지로 복지서비스 상세(bokjiro.go.kr, WLF00000040), 2026-08-06 확인
  {
    id: "gov-congenital-metabolic-disorder-screening",
    title: "선천성대사이상 검사 및 환아관리",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "의료비",
    summary: "신생아 대사이상 선별·확진검사비 및 환아 특수식이 지원",
    benefit:
      "출생 후 28일 이내 실시한 건강보험 적용 선별검사의 본인부담금 지원(입원 중 검사는 전액 공단부담으로 본인부담 없음, 유소견 시 재검사 1회 추가지원 가능). 확진검사 결과 대사이상 확진 시 확진검사비 본인부담금 7만원 한도 지원. 확진 환아는 특수조제분유·저단백햇반 지원 및 선천성 갑상선기능저하증 환아 의료비 지원.",
    eligibility: {
      childAgeMonthsMax: 228,
      note: "선별검사는 출생 후 28일 이내 신생아 대상, 환아관리 지원은 확진 시 만 19세 미만.",
    },
    applicationMethod: "주소지 관할 보건소 방문 신청",
    applicationPeriod: "선별·확진검사비는 출생일 기준 1년 이내 신청",
    requiredDocuments: ["검사비 영수증", "검사비 세부내역서", "검사 결과지"],
    officialLink:
      "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000040&wlfareInfoReldBztpCd=01",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 정부24 서비스 상세(gov.kr, SD0000007044), 2026-08-06 확인
  {
    id: "gov-newborn-hearing-screening",
    title: "신생아 난청 조기진단 지원",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "의료비",
    summary: "신생아 난청 검사비 및 보청기 구입비 지원",
    benefit:
      "출생 후 28일 이내 실시한 건강보험 적용 외래 선별검사의 본인부담금 지원(최대 2회). 재검(Refer) 판정 후 확진검사비 본인부담금 7만원 한도 지원. 양측성 난청(좋은 귀 평균청력 40~59dB)은 보청기 2개(개당 135만원 한도), 일측성 난청(나쁜 귀 55dB 이상·좋은 귀 40dB 이하)은 보청기 1개(135만원 한도) 지원. 2024년부터 소득기준 폐지.",
    eligibility: {
      childAgeMonthsMax: 144,
      note: "검사비는 60개월 미만 영유아, 보청기 지원은 만 12세 미만 아동 대상, 소득무관.",
    },
    applicationMethod: "주민등록 주소지 관할 보건소 방문 신청 또는 e보건소 공공보건포털·아이마중앱 온라인 신청",
    applicationPeriod: "확진검사비 신청기한은 출생일 기준 1년 이내",
    requiredDocuments: ["검사비 영수증", "검사비 세부내역서", "검사 결과지"],
    officialLink: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/SD0000007044",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 복지로 복지서비스 상세(bokjiro.go.kr, WLF00000092), 2026-08-06 확인
  {
    id: "gov-low-income-diaper-formula-support",
    title: "저소득층 기저귀·조제분유 지원",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "바우처",
    summary: "저소득 가정 영아 기저귀·조제분유 구매비 지원",
    benefit:
      "기저귀 월 9만원, 조제분유 월 11만원 지원(동시 지원 시 영아 1인당 월 20만원). 국민행복카드에 바우처 포인트로 지급되어 지정 유통점에서 사용. 만 2세 미만(0~24개월) 영아까지 최대 24개월 지원. 2026년 7월부터 장애인·다자녀(2인 이상) 가구는 기준중위소득 100% 이하로 대상 확대.",
    eligibility: {
      childAgeMonthsMax: 24,
      incomePercentMax: 100,
      note: "기초생활보장수급자, 차상위계층, 한부모가족은 소득기준 없이 지원. 장애인 가구·다자녀(2인 이상) 가구는 기준중위소득 100% 이하(2026.7월부터 확대 적용).",
    },
    applicationMethod: "관할 시·군·구 보건소 또는 읍·면·동 주민센터 방문 신청",
    applicationPeriod: "영아 출생 후 상시 신청 가능(최대 24개월간 지원)",
    requiredDocuments: [
      "저소득층 기저귀·조제분유 지원 신청서",
      "영아 부모 건강보험증 사본 및 소득증빙자료",
      "가구원수 확인자료(주민등록등본, 가족관계증명서 등)",
    ],
    officialLink: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000092",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 보건복지부 장애인건강과 공식 페이지(mohw.go.kr), 2026-08-06 확인
  {
    id: "gov-disabled-woman-childbirth-expense",
    title: "여성장애인 출산비용 지원",
    agencyType: "정부",
    agencyName: "보건복지부",
    region: "nationwide",
    stages: ["출생출산"],
    category: "현금지원",
    summary: "등록 여성장애인 출산 시 태아 1인당 120만원 지원",
    benefit:
      "등록 여성장애인이 출산하거나 임신 4개월 이상 유산·사산한 경우 태아 1인 기준 120만원을 현금으로 지원(다태아는 태아 수에 비례). 인공임신중절 수술은 제외(모자보건법 제14조 제1항 사유는 예외). 소득기준 없음.",
    eligibility: {
      note: "장애인복지법 제32조에 따라 등록된 여성장애인 중 출산 또는 임신 4개월 이상 유산·사산한 자.",
    },
    applicationMethod: "행정복지센터(읍·면·동 주민센터) 방문 신청 또는 복지로·정부24 온라인 신청",
    applicationPeriod: "출산(유·사산) 후 상시 신청 가능",
    requiredDocuments: ["여성장애인 출산비용 지원 신청서", "출생증명서(또는 유산·사산 진단서)", "장애인등록증"],
    officialLink: "https://www.mohw.go.kr/menu.es?mid=a10710060800",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 아이돌봄서비스 공식 홈페이지(idolbom.go.kr, 여성가족부), 2026-08-06 확인.
  // 참고: 가구 소득유형(가~바형)별 정확한 소득구간·정부지원율은 공식페이지 원문에서 확인하지 못해
  // incomePercentMax는 비워두고 note에 정성적으로만 기재함.
  {
    id: "gov-idolbom-childcare-service",
    title: "아이돌봄서비스",
    agencyType: "정부",
    agencyName: "여성가족부",
    region: "nationwide",
    stages: ["영유아기", "유아"],
    category: "돌봄서비스",
    summary: "아이돌보미 파견 돌봄서비스 비용 소득별 차등 지원",
    benefit:
      "시간제서비스(생후 3개월~12세, 연 960시간 이내)와 영아종일제서비스(생후 3개월~36개월, 월 200시간 이내)를 정부지원 대상으로 제공. 시간당 기본단가는 유형별로 상이(시간제 기본형 12,790원, 종합형 16,620원, 영아종일제 12,790원 등). 가구 소득유형(가~바형)에 따라 본인부담률이 차등 적용되며, 질병감염아동지원은 기본요금 50% 지원, 긴급돌봄은 건당 3,000원 추가요금. 국민행복카드로 결제.",
    eligibility: {
      childAgeMonthsMax: 144,
      note: "생후 3개월~12세 아동 가정. 정부지원 소득기준은 가구 소득유형(가~바형)에 따라 차등 적용되며 구체적 구간은 매년 고시로 결정(공식 확인 필요).",
    },
    applicationMethod:
      "복지로(온라인)에서 정부지원 자격(소득유형) 신청 후, 아이돌봄서비스 홈페이지(idolbom.go.kr)에서 회원가입 및 서비스 신청·연계",
    applicationPeriod: "연중 상시 신청",
    requiredDocuments: ["아이돌봄서비스 신청서", "가족관계증명서", "소득증빙자료(건강보험료 납부확인서 등)"],
    officialLink: "https://www.idolbom.go.kr/front/",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보(easylaw.go.kr, csmSeq=1126), 2026-08-06 확인
  {
    id: "gov-multichild-car-acquisition-tax",
    title: "다자녀가구 자동차 취득세 감면",
    agencyType: "정부",
    agencyName: "행정안전부",
    region: "nationwide",
    stages: ["영유아기", "유아"],
    category: "세제혜택",
    summary: "18세 미만 자녀 2명 이상 가구 자동차 취득세 감면",
    benefit:
      "18세 미만 자녀 2명 이상을 양육하는 가구는 자동차 취득세 50% 경감, 3명 이상 양육 가구는 취득세 면제(차종·감면한도는 지방세특례제한법 및 차량 종류에 따라 상이). 자녀 수는 가족관계등록부 기준(입양자녀는 친생부모 자녀 수에서 제외 등 세부 규정 있음). 적용기한 2027년 12월 31일까지.",
    eligibility: {
      childAgeMonthsMax: 216,
      note: "18세 미만 자녀 2명 이상을 양육하는 가구주 명의 차량 취득 시 적용. 감면 한도는 차종(승용/승합/화물)에 따라 상이.",
    },
    applicationMethod: "자동차 등록 시 관할 시·군·구청 세무과 방문 신청 또는 위택스(wetax.go.kr) 문의",
    applicationPeriod: "자동차 등록일로부터 60일 이내 신청",
    requiredDocuments: ["지방세 감면신청서", "가족관계증명서(자녀 수 확인)", "자동차 등록 관련 서류"],
    officialLink: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1126&ccfNo=6&cciNo=1&cnpClsNo=1",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 법제처 찾기쉬운 생활법령정보(easylaw.go.kr, csmSeq=1773), 2026-08-06 확인
  {
    id: "gov-newborn-special-supply",
    title: "신생아 특별공급(주택 특별·우선공급)",
    agencyType: "정부",
    agencyName: "국토교통부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "주거",
    summary: "2년 이내 출산 무주택가구 대상 주택 특별공급",
    benefit:
      "입주자모집공고일 기준 2년 이내 출산(입양 포함)한 무주택 세대에 공공분양·민간분양·공공임대 주택을 특별공급. 공공주택은 신생아 특별공급 물량 중 70%는 도시근로자 가구 월평균소득 100% 이하에 우선공급, 20%는 140% 이하에 공급, 나머지 10%는 소득 초과자 대상 100% 추첨제. 민간분양은 신혼부부·생애최초 특공 물량의 20%를 출산가구에 우선공급.",
    eligibility: {
      childAgeMonthsMax: 24,
      incomePercentMax: 140,
      note: "무주택세대구성원, 자산요건 충족, 월평균소득 전년도 도시근로자 가구당 월평균소득 140% 이하(맞벌이 200% 이하).",
    },
    applicationMethod: "청약홈(applyhome.co.kr) 및 각 분양공고문에 따른 청약 신청",
    applicationPeriod: "분양 공고별 청약 일정에 따름",
    requiredDocuments: ["청약통장", "가족관계증명서(출산 확인)", "주민등록등본", "소득·자산 증빙서류"],
    officialLink: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1773&ccfNo=2&cciNo=1&cnpClsNo=5",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 주택도시기금 기금e든든 공식 페이지(myhome.go.kr), 2026-08-06 확인
  {
    id: "gov-newborn-special-loan-purchase",
    title: "신생아 특례 디딤돌대출(주택구입자금)",
    agencyType: "정부",
    agencyName: "국토교통부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "주거",
    summary: "2년 내 출산가구 대상 저리 주택구입자금 대출",
    benefit:
      "특례금리 연 1.80~4.50%(소득수준별 차등), 대출한도 최대 4억원(LTV 70%, 생애최초 80%, DTI 60% 이내). 추가 출산 시 특례금리 적용기간이 5년씩 연장(최장 15년). 2025년 6월 27일 이전 계약 체결 건은 한도 5억원 이내 적용.",
    eligibility: {
      childAgeMonthsMax: 24,
      note: "대출접수일 기준 2년 이내 출산(2023.1.1. 이후 출생아부터 적용)한 무주택 세대주 또는 1주택 세대주(대환대출). 부부합산 연소득 1.3억원 이하(맞벌이 각각 소득이 있는 경우 합산 2억원 이하).",
    },
    applicationMethod: "주택도시기금 기금e든든(nhuf.molit.go.kr) 온라인 신청 또는 취급은행(우리·신한·국민·농협·하나은행) 방문 신청",
    applicationPeriod: "소유권이전등기 전 신청(또는 등기 후 3개월 이내)",
    requiredDocuments: ["주택매매계약서", "가족관계증명서(출산 확인)", "소득증빙서류", "주민등록등본"],
    officialLink: "https://www.myhome.go.kr/hws/portal/cont/selectBabySpecialCaseStepStoneLoneView.do",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 주택도시기금 기금e든든 공식 페이지(myhome.go.kr), 2026-08-06 확인
  {
    id: "gov-newborn-special-loan-jeonse",
    title: "신생아 특례 버팀목대출(전세자금)",
    agencyType: "정부",
    agencyName: "국토교통부",
    region: "nationwide",
    stages: ["출생출산", "영유아기"],
    category: "주거",
    summary: "2년 내 출산가구 대상 저리 전세자금 대출",
    benefit:
      "특례금리 연 1.3~4.3%(소득·보증금 규모별 차등), 대출한도 최대 2.4억원(임차보증금의 80% 이내). 추가 출산 자녀 1명당 특례금리 적용기간 4년 연장. 2025년 6월 26일 이전 계약 건은 한도 3억원 이내 적용. 순자산가액 3.45억원 이하 요건 있음.",
    eligibility: {
      childAgeMonthsMax: 24,
      note: "대출접수일 기준 2년 이내 출산(2023.1.1. 이후 출생아부터 적용)한 무주택 세대주. 부부합산 연소득 1.3억원 이하(맞벌이 2억원 이하), 순자산가액 3.45억원 이하, 임차보증금 5% 이상 지불 필수.",
    },
    applicationMethod: "주택도시기금 기금e든든(nhuf.molit.go.kr) 온라인 신청 또는 수탁은행 방문 신청",
    applicationPeriod: "임대차계약서상 잔금지급일과 주민등록등본상 전입일 중 빠른 날로부터 3개월 이내 신청",
    requiredDocuments: ["임대차계약서", "가족관계증명서(출산 확인)", "소득증빙서류", "주민등록등본"],
    officialLink: "https://www.myhome.go.kr/hws/portal/cont/selectBabySpecialCaseCrutchLoneView.do",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: umppa.seoul.go.kr 사업소개 페이지, 2026-08-06 확인
  {
    id: "seoul-childcare-cost-support",
    title: "서울형 아이돌봄비 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["영유아기"],
    category: "현금지원",
    summary: "24~36개월 영아 돌봄공백 가정에 돌봄비 지원",
    benefit:
      "친인척조력자형: 기본 돌봄시간(월 40시간) 충족 시 영아 1명 월 30만원, 2명 월 45만원, 3명 월 60만원. 민간서비스형: 월 20~40시간 이용 시 시간당 영아 1명 7,500원, 2명 11,250원, 3명 15,000원.",
    eligibility: {
      childAgeMonthsMin: 24,
      childAgeMonthsMax: 36,
      incomePercentMax: 150,
      note: "맞벌이 가정은 부부합산소득의 25% 경감 적용. 친인척조력자는 4촌 이내 친인척만 인정.",
    },
    applicationMethod: "탄생육아 몽땅정보통(umppa.seoul.go.kr) 온라인 신청",
    applicationPeriod: "매월 1~15일 접수(아동이 23개월부터 신청 가능)",
    requiredDocuments: ["사회보장급여 결정 결과통지서(당해년도)", "가족관계증명서(친인척형)", "수급자 통장사본(친인척형)"],
    officialLink:
      "https://umppa.seoul.go.kr/hmpg/reca/care/sesu/bzin/bzmgPageDetail.do?biz_mng_no=59F45FE9BC024848AD07143C962E6869",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: seoul-agi.seoul.go.kr + umppa.seoul.go.kr, 2026-08-06 확인
  {
    id: "seoul-parents-taxi",
    title: "서울 엄마아빠택시 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["영유아기"],
    category: "바우처",
    summary: "24개월 이하 영아 가정에 카시트 택시 포인트 지원",
    benefit: "영아 1인당 연 10만원 이용포인트 지원(운영업체에서 최대 2만원 추가 포인트 지급 가능).",
    eligibility: {
      childAgeMonthsMax: 24,
      note: "2023년 1월생 이후 영아 대상. 실질적 양육자(부, 모, (외)조부모, 3촌 이내 친인척으로 영아와 동일 주민등록)이면 신청 가능, 위탁아동 양육가정 포함.",
    },
    applicationMethod:
      "몽땅정보 만능키 온라인 신청 또는 동주민센터 방문 신청, 영아 1명당 운영업체(타다/파파) 중 1개 선택(선택 후 변경 불가)",
    applicationPeriod: "상시 접수(2026년부터 연중 상시 신청으로 확대)",
    officialLink:
      "https://umppa.seoul.go.kr/hmpg/sprt/mdtx/bzin/bzmgPageDetail.do?biz_mng_no=3EF7489ACF614F939FEF8514308797D2",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: news.seoul.go.kr 공식 소개 페이지, 2026-08-06 확인
  {
    id: "seoul-dadungi-happy-card",
    title: "서울 다둥이행복카드(다자녀가족 지원)",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["영유아기", "유아"],
    category: "바우처",
    summary: "2자녀 이상 가족 우대카드로 공공시설 이용료 감면",
    benefit:
      "서울대공원·서울상상나라·서울형 키즈카페 무료입장, 서울달 30% 할인, 시립체육시설 입장료 면제·프로그램 50% 할인, 하수도요금 30% 감면, 지역난방비 할인 등.",
    eligibility: {
      note: "서울시 거주 2자녀 이상 가족(막내 자녀 18세 이하), 신청 당시 부 또는 모 한 명과 자녀들이 서울시에 주민등록.",
    },
    applicationMethod: "신용/체크카드는 신한은행·우리은행 영업점 방문 발급, 신분확인용 카드는 서울온 앱에서 모바일카드로 발급",
    applicationPeriod: "상시",
    requiredDocuments: ["신분증", "가족관계증명서", "주민등록등본"],
    officialLink: "https://news.seoul.go.kr/welfare/archives/100261",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: seoul.go.kr 정책아카이브, 2026-08-06 확인
  {
    id: "seoul-type-kids-cafe",
    title: "서울형 키즈카페",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["영유아기", "유아"],
    category: "돌봄서비스",
    summary: "0~9세 아동 저비용 실내놀이시설 이용",
    benefit: "0~9세 아동 대상 회당 이용료 5천원 내외(구립은 3천원 내외), 보육교사 등 전문인력 놀이돌봄 지원, 한부모가족 우대.",
    eligibility: {
      childAgeMonthsMax: 108,
      note: "서울시민(조부모 등 직계가족 포함) 및 서울 소재 직장인의 취학 전 자녀 등 0~9세 아동. 한부모가족은 한부모가족증명서 제시 시 우대.",
    },
    applicationMethod: "사전예약제(시설별 회차 예약), 서울시 우리동네키움포털 등에서 운영현황 확인 및 예약",
    applicationPeriod: "상시(시설별 운영시간 내 회차 예약)",
    officialLink: "https://www.seoul.go.kr/policy/view.do?id=46&lan=",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: news.seoul.go.kr(citybuild), 2026-08-06 확인
  {
    id: "seoul-newlywed-deposit-interest-support",
    title: "서울시 신혼부부 임차보증금 이자지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["임신준비"],
    category: "주거",
    summary: "무주택 신혼·예비신혼부부 임차보증금 대출이자 지원",
    benefit:
      "임차보증금의 90% 이내, 최대 3억원 대출에 대해 소득구간별 최대 연 3.0%+ 추가지원 최대 연 1.5%(다자녀 등) 이자지원. 기본 2년+2년, 자녀 증가 시 최장 10~12년까지 연장 가능.",
    eligibility: {
      note: "부부합산 연소득 1억 3천만원 이하, 혼인신고일 기준 7년 이내 신혼부부 또는 추천서 신청일로부터 6개월 이내 예비신혼부부, 본인·배우자 무주택자, 서울시민이거나 대출 후 1개월 내 서울 전입 예정자, 생애 최초 1회 지원.",
    },
    applicationMethod: "서울주거포털(housing.seoul.go.kr)에서 융자추천서 신청 후 협약은행(국민·하나·신한은행)에서 대출 실행",
    applicationPeriod: "상시접수",
    officialLink: "https://news.seoul.go.kr/citybuild/archives/508747",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: seoul-agi.seoul.go.kr, 2026-08-06 확인
  {
    id: "seoul-korean-medicine-infertility-treatment",
    title: "서울형 한의약 난임치료 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["임신준비"],
    category: "의료비",
    summary: "원인불명 난임부부 한의약 치료비 최대 120만원 지원",
    benefit: "3개월분 첩약 치료비용의 90% 지원(최대 120만원), 기초생활수급자·차상위계층은 100% 지원. 최소 1개월 이상 치료 참여 필수.",
    eligibility: {
      parentAgeMax: 45,
      note: "여성 만 45세 이하, 신청일 기준 서울시 주민등록, 법률혼 및 사실혼 모두 가능, 원인불명 난임 진단 필수, 국가/서울시 난임부부 시술비 지원과 중복 불가.",
    },
    applicationMethod: "서울시 임신출산정보센터(seoul-agi.seoul.go.kr) 온라인 신청 또는 주소지·직장소재지 관할 보건소 방문 신청",
    applicationPeriod: "상시접수",
    requiredDocuments: [
      "신청서",
      "원인불명 난임진단서",
      "검사결과지(신청일 기준 6개월 이내)",
      "주민등록등본",
      "가족관계증명서(필요시)",
      "사실혼 증명서(해당 시)",
    ],
    officialLink: "https://seoul-agi.seoul.go.kr/infertility-treatment-support",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: ourbaby.seoul.kr + seoul-agi.seoul.go.kr, 2026-08-06 확인
  {
    id: "seoul-baby-health-first-step",
    title: "서울아기 건강 첫걸음",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["임신중", "출생출산", "영유아기"],
    category: "돌봄서비스",
    summary: "영유아 건강관리 간호사가 가정을 방문해 건강관리 지원",
    benefit:
      "출산 후 이른 시일 내 보편방문(산모·신생아 건강평가, 모유수유교육 등) 실시, 건강 위험요인이 있는 경우 만 2세까지 25~29회 지속방문 및 부모교육·연계서비스 제공.",
    eligibility: {
      childAgeMonthsMax: 24,
      note: "소득기준 없음. 서울시민 중 출산한 모든 임산부와 영유아 대상.",
    },
    applicationMethod: "서울시 임신출산정보센터(seoul-agi.seoul.go.kr) 온라인 신청(회원가입→로그인→사업신청) 또는 관할 자치구 보건소 등록",
    applicationPeriod: "상시(출산 후 신청)",
    officialLink: "https://seoul-agi.seoul.go.kr/health-first-step",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: news.seoul.go.kr(welfare), 2026-08-06 확인
  {
    id: "seoul-self-employed-birth-benefit",
    title: "서울시 1인 자영업자 등 임산부 출산급여·배우자 출산휴가급여 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["출생출산"],
    category: "현금지원",
    summary: "고용보험 미가입 자영업자·프리랜서 출산급여 지원",
    benefit:
      "임산부 출산급여: 고용보험 지원(150만원)에 서울시 90만원 추가지원해 총 240만원 보장(다태아는 170만원 추가해 총 320만원). 배우자 출산휴가급여: 최대 80만원 지원.",
    eligibility: {
      note: "2024년 4월 22일 이후 자녀를 출산한 서울시 거주 1인 자영업자·프리랜서·노무제공자 등. 부부가 각각 요건 충족 시 각각 신청 가능. 배우자 출산휴가급여는 배우자 출산일 이전 18개월 중 3개월 이상 소득활동 필요.",
    },
    applicationMethod: "몽땅정보 만능키(umppa.seoul.go.kr) 온라인 신청 또는 다산콜센터(120)",
    applicationPeriod: "임산부 출산급여: 출산일로부터 1년 이내 / 배우자 출산휴가급여: 출산휴가 종료일로부터 1년 이내",
    officialLink: "https://news.seoul.go.kr/welfare/archives/568576",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: umppa.seoul.go.kr + mediahub.seoul.go.kr(2026년 완화), 2026-08-06 확인
  {
    id: "seoul-childbirth-housing-support",
    title: "자녀출산 무주택가구 주거비 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["출생출산", "영유아기"],
    category: "주거",
    summary: "출산·입양 무주택가구 전월세 주거비 차액 지원",
    benefit: "월 최대 30만원, 2년간 최대 720만원 주거비 지원(다태아 또는 추가출산 시 1~2년 연장되어 최장 4년까지 지원).",
    eligibility: {
      incomePercentMax: 180,
      note: "2025년 1월 1일 이후 출산·입양(입양아는 출생일로부터 48개월 이하)한 서울시 거주 무주택 가구(부·모 모두 무주택), 전세보증금 5억원 이하 또는 보증금 월세 환산액과 월세액 합산 229만원 이하(2026년 기준, 전용 85㎡ 이하), 공공임대주택 미거주, 출산 후 1년 이내 신청.",
    },
    applicationMethod: "탄생육아 몽땅정보통(umppa.seoul.go.kr) 온라인 신청",
    applicationPeriod: "2026년 상반기 2월 2일~6월 30일, 하반기 7월 1일~12월 31일(연 2회 모집공고)",
    requiredDocuments: [
      "가족관계증명서(배우자 있으면 모두)",
      "청약홈 주택소유현황(배우자 있으면 모두)",
      "확정일자 날인된 임대차계약서",
      "신용정보조회서",
    ],
    officialLink:
      "https://umppa.seoul.go.kr/hmpg/sprt/cnls/bzin/bzmgPageDetail.do?biz_mng_no=197DA8F773AAE8DCE063A6022162FF67",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: news.seoul.go.kr(2024확대) + mediahub.seoul.go.kr(2025~2026 바우처 전환), 2026-08-06 확인
  {
    id: "seoul-housekeeping-service-support",
    title: "서울형 가사서비스 지원",
    agencyType: "광역",
    agencyName: "서울특별시",
    region: { sido: "서울특별시" },
    stages: ["임신중", "출생출산"],
    category: "돌봄서비스",
    summary: "임산부·맞벌이·다자녀 가정 가사서비스 무료 제공",
    benefit:
      "가구당 연 70만원 상당 바우처를 신용(체크)카드로 지급, 본인부담 없음(청소·설거지·세탁·쓰레기배출 등 서비스, 요리·돌봄 등은 제외).",
    eligibility: {
      incomePercentMax: 180,
      note: "임산부는 임신 3개월(12주)부터 출산 후 1년 이내, 맞벌이는 부부 모두 주 20시간 이상 근로하며 12세 이하 자녀 양육, 다자녀는 18세 이하 자녀 2명 이상(그중 1명 이상 12세 이하). 강서구 등 일부 자치구 위임 가사서비스와는 별개의 서울시 전역 사업.",
    },
    applicationMethod: "몽땅정보 만능키 또는 서울맘케어·서울형 가사서비스 누리집을 통한 온라인 신청",
    applicationPeriod: "연 1회 공고(2026년 신청은 3월 30일 개시), 예산 소진 시 조기 마감",
    officialLink: "https://news.seoul.go.kr/welfare/archives/560008",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 복지로 복지서비스 상세(bokjiro.go.kr, WLF00003253), 2026-08-06 확인.
  // 사용자가 알려준 송파구청 "여성·영유아·가족복지 > 출산·양육지원" 카테고리 페이지(key=5645)에서
  // 발견 — 전국 모든 시군구가 동일하게 운영하는 국가사업이라 정부(전국) 항목으로 분류함.
  {
    id: "gov-home-childcare-allowance",
    title: "가정양육수당 지원사업",
    agencyType: "정부",
    agencyName: "교육부",
    region: "nationwide",
    stages: ["영유아기", "유아"],
    category: "현금지원",
    summary: "어린이집 미이용 24~86개월 아동에 월 10~20만원 지급",
    benefit:
      "어린이집·유치원(특수학교 포함)·종일제 아이돌봄서비스를 이용하지 않고 가정에서 양육하는 24개월 이상 86개월 미만 아동에게 월 10만원 지급. 장애아동은 24~36개월 미만 월 20만원, 36~86개월 미만 월 10만원 지급. 매월 25일 아동 또는 부모 명의 계좌로 지급. 출생일로부터 60일 이내 신청 시 출생월부터 소급 지원.",
    eligibility: {
      childAgeMonthsMin: 24,
      childAgeMonthsMax: 86,
      note: "어린이집·유치원(특수학교 포함)·종일제 아이돌봄서비스를 이용하지 않는 미취학 아동. 소득 수준과 무관하게 지원(부모급여 도입에 따라 0~23개월은 부모급여로 지원). 보육료·유아학비·종일제 아이돌봄서비스와 중복 지원 불가.",
    },
    applicationMethod: "동주민센터 방문 또는 복지로(bokjiro.go.kr) 온라인 신청",
    applicationPeriod: "상시 신청 가능",
    requiredDocuments: ["신분증", "통장사본"],
    officialLink:
      "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003253",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 송파구청 "보육료 지원사업" 공식 페이지(songpa.go.kr, key=2944, 최종수정일 2026-06-24), 2026-08-06 확인.
  // 전국 모든 어린이집에 동일하게 적용되는 국가 보육료 지원 단가라 정부(전국) 항목으로 분류함. 복지로 내
  // 해당 서비스의 정확한 wlfareInfoId를 확정하지 못해, 직접 확인한 송파구청 페이지를 출처로 사용.
  {
    id: "gov-childcare-fee-support",
    title: "보육료 지원사업",
    agencyType: "정부",
    agencyName: "교육부",
    region: "nationwide",
    stages: ["영유아기", "유아"],
    category: "바우처",
    summary: "만0~5세 어린이집 이용 시 보육료 전액 지원",
    benefit:
      "어린이집을 이용하는 만0~5세 영유아에게 국민행복카드를 통해 보육료를 지원(어린이집에 직접 입금). 2026년 기준 월 지원단가: 0세반 584,000원, 1세반 515,000원, 2세반 426,000원, 3~5세반 280,000원. 만0~2세 연장보육(16~19시30분) 이용 시 시간당 1,000~3,000원, 야간연장보육(19시30분 이후 등) 시간당 4,000~5,000원 추가 지원.",
    eligibility: {
      childAgeMonthsMax: 71,
      note: "대한민국 국적 및 유효 주민번호를 보유하고 어린이집을 이용하는 만0~5세 영유아(장애아보육료·다문화보육료 등은 별도 요건). 소득기준 없음. 가정양육수당·유아학비 등과 중복 지원 불가.",
    },
    applicationMethod:
      "동주민센터(아동 주민등록 주소지) 방문 또는 복지로(bokjiro.go.kr) 온라인 신청. 어린이집 이용 전 사전 신청 필요.",
    applicationPeriod: "상시 신청 가능",
    requiredDocuments: ["사회복지급여(서비스) 신청(변경)서", "국민행복카드 발급신청 및 개인신용정보 동의서"],
    officialLink: "https://www.songpa.go.kr/www/contents.do?key=2944",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 송파구청 "송파구 공동육아나눔터 운영" 공식 페이지(songpa.go.kr, key=2961), 2026-08-06 확인
  {
    id: "songpa-shared-childcare-space",
    title: "송파구 공동육아나눔터 운영",
    agencyType: "기초",
    agencyName: "송파구",
    region: { sido: "서울특별시", sigungu: "송파구" },
    stages: ["영유아기", "유아"],
    category: "돌봄서비스",
    summary: "18세 미만 자녀 가정이 무료로 이용하는 놀이·교류 공간",
    benefit:
      "장난감과 도서를 이용할 수 있는 놀이 공간, 애착 형성 및 자녀 발달 촉진 놀이, 강사 없이 진행되는 육아·미술놀이 자조모임 등 제공. 1호점(풍납동), 2호점(잠실본동) 2개소 운영, 월~토 10시~17시30분.",
    eligibility: {
      note: "송파구 거주 18세 미만 자녀와 부모(보호자 동반 필수). 이용료 없음.",
    },
    applicationMethod: "홈페이지(songpa.familynet.or.kr) 접수, 전화 문의 또는 현장 신청서 작성 후 이용",
    applicationPeriod: "상시 이용 가능(운영시간 내)",
    officialLink: "https://www.songpa.go.kr/www/contents.do?key=2961",
    lastVerifiedAt: "2026-08-06",
  },
  // 출처: 송파구청 "장난감도서관 운영" 공식 페이지(songpa.go.kr, key=6176, 최종수정일 2026-05-19), 2026-08-06 확인
  {
    id: "songpa-toy-library",
    title: "장난감도서관 운영",
    agencyType: "기초",
    agencyName: "송파구",
    region: { sido: "서울특별시", sigungu: "송파구" },
    stages: ["영유아기", "유아"],
    category: "돌봄서비스",
    summary: "취학 전 영유아 대상 장난감·돌잔치용품 대여 서비스",
    benefit:
      "장난감 및 돌잔치·백일상 대여 서비스. 연회비 거주자(부모) 1만원, 다자녀·기초생활수급권자 등 5천원(회원카드 발급일로부터 1년 유효). 송파구 내 오금점·위례점·잠실점·장지점·풍납점 5개소 운영, 화~토 09:30~17:30.",
    eligibility: {
      note: "취학 전 영유아 (손)자녀를 둔 송파구 거주자 또는 송파구 소재 회사 재직자.",
    },
    applicationMethod:
      "송파구육아종합지원센터(spscc.or.kr) 홈페이지 회원가입 후 구비서류 지참해 방문 신청, 이후 현장 또는 예약 대여",
    applicationPeriod: "상시 이용 가능(운영시간 내)",
    requiredDocuments: ["신분증", "주민등록등본(자녀 미등재 시 가족관계증명서 추가)"],
    officialLink: "https://www.songpa.go.kr/www/contents.do?key=6176",
    lastVerifiedAt: "2026-08-06",
  },
];

// 아래 2개 구는 웹서치 및 언론 보도로 사업 존재 정황은 확인했으나, 구청 자체 .go.kr 공식 페이지를 확보하지
// 못해(DNS 접속 실패, 전용 페이지 미발견 등) 이번 시드 데이터에는 반영하지 않았다. 이 프로젝트의 데이터
// 신뢰 기준(officialLink는 반드시 검증 가능한 공식 도메인)에 맞지 않기 때문이며, 추후 구청 콜센터 등을 통해
// 공식 링크를 확보하면 추가할 수 있다:
//
// - 송파구 "송파베이비샤워"(2026년 신설, 신생아 가정 화장품 3종 무상 지급): 시정일보 등 언론 보도만 확인,
//   구청 공식 페이지 미발견(위 공동육아나눔터·장난감도서관 등 다른 송파구 사업은 공식 페이지로 확인해 반영함).
// - 은평구 "다자녀 출산용품 교환권"(둘째 이상, 15만원 상당): 정부24·모두의혜택 등에서 확인했으나 은평구
//   자체 전용 페이지(ep.go.kr)를 찾지 못해 구체적인 officialLink(구체적 서비스 페이지)를 확보하지 못함.
// - 강북구 "임산부 물품(유축기·안전벨트·혈압계) 대여"(2025.8 제정 조례 근거): 뉴스1 등 언론 보도로 확인,
//   구청 보건소 공식 페이지(mhealth.gangbuk.go.kr)는 DNS 접속 실패.

// 아래 3개 구는 사용자가 제공한 공식 링크를 직접 확인했으나, 다음 사유로 이번 시드 데이터에 반영하지 않았다:
//
// - 송파구(songpa.go.kr/www/contents.do?key=2953): "출산축하금 지원사업" 실재하나 공식페이지에 명시된 지원대상이
//   "2021.12.31. 이전 출생 신생아"로 한정되어 있고, "2022.1.1. 이후 출생아에게는 첫만남이용권을 지원함"이라고
//   명시되어 있어 2026년 현재 신규 출산가정에는 적용되지 않는 사실상 종료된 사업. 오해를 막기 위해 미반영.
// - 강북구(gangbuk.go.kr/portal/main/contents.do?menuNo=200640): "출산 양육 돌봄" 안내 페이지를 직접 확인했으나
//   첫만남이용권/부모급여/아동수당/산후조리경비 등 이미 반영된 정부·서울시 공통사업 링크 모음일 뿐, 강북구
//   자체의 별도 현금성 출산장려금·축하금 사업은 이 페이지에 없었음.
// - 은평구(ep.go.kr/health/contents.do?key=1582): "난임부부 시술비 지원" 확인됨. 지원금액(신선배아 110만원,
//   동결배아 50만원, 인공수정 30만원, 25회)이 기존 gov-infertility-treatment-support(정부, 전국 공통)와
//   동일해 은평구 자체 추가지원이 아닌 국가사업의 지역 접수창구 안내로 판단, 중복 등록하지 않음.
