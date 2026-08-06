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
];

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
