import { APP_IMAGES } from '../assets/images';

export interface FloorPlan {
  id: string;
  /** 화면에 보이는 타입명 (예: 139B-2) */
  name: string;
  /** 전용면적 ㎡ / 평 */
  areaDedicated: string;
  areaDedicatedPyeong: string;
  /** 공급면적 · 계약면적 · 발코니 확장면적 (도면 표기 그대로) */
  areaSupply: string;
  areaContract: string;
  areaBalcony: string;
  /** 블럭별 세대수. 해당 블럭에 없으면 생략 */
  units: { bl1?: number; bl21?: number; bl22?: number; note?: string };
  /** 총 세대수 */
  totalUnits: number;
  /** 도면에 적힌 구조 특화 문구 */
  structure: string;
}

export interface CatalystItem {
  id: string;
  title: string;
  subtitle: string;
  impactScale: string;
  category: string;
  description: string;
  points: string[];
  quote: string;
}

export interface PremiumItem {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  iconName: string;
}

export interface UnitPhoto {
  id: string;
  title: string;
  space: string;
  category: string;
  badge: string;
  description: string;
  specs: string[];
  keyPoint: string;
  imageUrl: string;
}

export const CUPCAMON_PREMIUM_7: PremiumItem[] = [
  {
    number: "01",
    title: "광주 최대 민간공원 특례사업",
    subtitle: "풍암호수를 품은 도심 속 압도적 숲세권",
    desc: "여의도 공원을 능가하는 광주 최대 중앙공원 1지구. 사계절 변화하는 풍암호수와 수변 산책로를 단지 앞마당처럼 영구 조망으로 누립니다.",
    iconName: "Trees"
  },
  {
    number: "02",
    title: "국가 첨단 반도체 895조 호재",
    subtitle: "대한민국 미래 50년을 이끌 895조 메가 클러스터",
    desc: "정부 및 대기업 주도의 총 895조원 규모 반도체·AI 혁신 벨트와 연계되어 호남권 첨단 모빌리티 및 테크 연구 인력의 최고급 주거 수요를 선점합니다.",
    iconName: "Cpu"
  },
  {
    number: "03",
    title: "전남·광주 군공항 이전 확정",
    subtitle: "60년 소음·고도제한 완전 철폐 및 248만평 복합개발",
    desc: "도심 발전의 최대 걸림돌이었던 군공항 이전 확정으로 전투기 소음 영구 종식 및 서구 도심 고도제한 해제. 820만㎡ 종전부지 미래 테크노폴리스 조성 수혜.",
    iconName: "PlaneTakeoff"
  },
  {
    number: "04",
    title: "총 2,772세대 매머드급 랜드마크",
    subtitle: "39개동 규모의 호남권 대표 하이엔드 주거타운",
    desc: "1BL(929세대), 2-1BL(915세대), 2-2BL(928세대)로 완성되는 매머드급 대단지로 서구의 스카이라인을 새롭게 정의합니다.",
    iconName: "Building2"
  },
  {
    number: "05",
    title: "화개초 도보 3분 안심 통학권",
    subtitle: "초등학교 도보 통학 및 명문 학군 에듀 프리미엄",
    desc: "단지 인근 화개초등학교가 도보 3분 거리에 위치하여 어린 자녀의 안심 통학이 가능하며, 풍암지구 학원가 인프라를 편리하게 이용합니다.",
    iconName: "GraduationCap"
  },
  {
    number: "06",
    title: "광주 도심 쇼핑·문화 특급 인프라",
    subtitle: "더현대 광주(예정) & 신세계백화점 확장 연계",
    desc: "반경 2.5km 내 유스퀘어, 신세계백화점, 더현대 광주 복합쇼핑몰(예정), 광주기아챔피언스필드, 대형 병원 등 광주 중심 생활권을 누립니다.",
    iconName: "ShoppingBag"
  },
  {
    number: "07",
    title: "롯데건설 하이엔드 '시그니처' 혁신설계",
    subtitle: "음식물처리기 무상제공 & 4BAY 판상형 더블 드레스룸",
    desc: "친환경 음식물 처리기 전 세대 무상 제공(계약세대 한정), 판상형 4-BAY 맞통풍, 대형 팬트리 2개소, 독립형 알파룸 등 프리미엄 라이프를 실현합니다.",
    iconName: "Sparkles"
  }
];

export interface BlockInfo {
  block: string;
  title: string;
  badge: string;
  scale: string;
  units: string;
  location: string;
  floors: string;
  lineup: string;
  features: string;
  highlights: string[];
}

export const BLOCK_INFO_LIST: BlockInfo[] = [
  {
    block: "1BL (1블럭)",
    title: "중앙공원 북측 숲세권 단지",
    badge: "도심생활권",
    scale: "총 929세대",
    units: "929세대",
    location: "광주광역시 서구 화정동·금호동 일원",
    floors: "지하 3층 ~ 지상 28층",
    lineup: "84㎡, 102㎡, 114㎡ 중대형",
    features: "중앙공원 북측 숲세권 연결, 금호지구 생활권 및 지하철 2호선(예정) 연계",
    highlights: ["중앙공원 북측 숲세권", "금호지구 중심 인프라", "지하철 2호선 연계"]
  },
  {
    block: "2-1BL (2-1블럭)",
    title: "풍암호수 직접 조망 단지",
    badge: "수변 특화",
    scale: "총 915세대",
    units: "915세대",
    location: "광주광역시 서구 풍암동 일원",
    floors: "지하 3층 ~ 지상 28층",
    lineup: "121㎡, 139㎡, 166㎡ 대형 특화",
    features: "풍암호수 직접 조망권 확보, 수변 산책로 직결 출입구, 힐링 에코 라이프",
    highlights: ["풍암호수 영구 수변조망", "단지 직결 산책로 출입구", "사계절 에코 라이프"]
  },
  {
    block: "2-2BL (2-2블럭)",
    title: "화개초 안심통학 랜드마크",
    badge: "추천 블럭",
    scale: "총 928세대",
    units: "928세대",
    location: "광주광역시 서구 풍암동 일원",
    floors: "지하 3층 ~ 지상 28층 (용적률 219.88%)",
    lineup: "84㎡, 102㎡, 121㎡, 139A/B/C㎡, 펜트하우스",
    features: "화개초 도보 3분 안심학군, 판상형 4BAY 중대형 평면(102~139㎡), 최고급 펜트하우스",
    highlights: ["화개초 도보 3분 안심학군", "판상형 4-BAY 혁신설계", "대형 워크인 드레스룸 & 팬트리 2개소"]
  }
];

export const CATALYSTS: CatalystItem[] = [
  {
    id: "semiconductor",
    title: "국가 첨단 반도체 895조 메가 클러스터",
    subtitle: "대한민국 미래 50년을 견인할 초대형 첨단 전략산업 연계 호재",
    impactScale: "총 895조원",
    category: "국가전략 첨단산업",
    description:
      "정부 및 대기업 주도의 총 895조원 규모 반도체·첨단 AI 혁신 클러스터 조성과 연계되어, 광주·전남 일대에 고소득 첨단 연구직 및 대기업 배후 주거 수요가 폭발적으로 유입됩니다. 중앙공원 롯데캐슬 시그니처는 이들 하이엔드 전문직이 선택할 호남권 최고의 랜드마크 주거단지로 직결됩니다.",
    points: [
      "895조 반도체·AI 융복합 벨트 조성에 따른 고소득 하이테크 인구 유입",
      "서남권 첨단 모빌리티 및 국가 인공지능 컴퓨팅 센터 배후 거주지",
      "부동산 가치 상승을 견인하는 최상위 자산가 및 대기업 임직원 배후단지",
      "광주 중심 입지와 도심 인프라가 결합된 독보적인 미래가치 프리미엄"
    ],
    quote: "895조 반도체 국가 메가 프로젝트의 최대 배후 주거 수혜 단지"
  },
  {
    id: "airport",
    title: "전남·광주 군공항 이전 사업 확정",
    subtitle: "60년 숙원 해결! 820만㎡(약 248만평) 종전부지 첨단 미래도시 조성",
    impactScale: "약 248만평 복합개발",
    category: "도시공간 대전환",
    description:
      "광주 도심의 최대 걸림돌이었던 군공항 이전이 확정됨에 따라, 수십 년간 묶여있던 고도제한이 전면 해소되고 전투기 소음이 영구적으로 사라집니다. 이전 부지에는 인공지능, 미래차, 첨단 비즈니스 타운이 조성되어 중앙공원이 위치한 서구 일대의 쾌적성과 자산가치가 수직 상승합니다.",
    points: [
      "광주 서구·광산구 일대 소음 공해 및 비행안전구역 고도제한 완전 철폐",
      "820만㎡ 군공항 종전부지에 첨단 테크노폴리스 및 미래 신도시 개발",
      "중앙공원 롯데캐슬 시그니처가 누리는 쾌적한 주거환경 극대화",
      "광주 서남권 도시철도·도로망 입체 교통망 확장 연계"
    ],
    quote: "소음 해소와 고도제한 해제, 광주 최대 개발 호재의 직접 수혜"
  },
  {
    id: "central-park",
    title: "풍암호수를 품은 광주 최대 민간공원 특례사업",
    subtitle: "여의도 공원 수배 규모의 도심 속 숲세권 & 호수공원 영구조망",
    impactScale: "총 2,772세대 랜드마크",
    category: "희소 에코 랜드마크",
    description:
      "광주광역시 민간공원 특례사업 중 최대 규모인 중앙공원 1지구에 조성되며, 아름다운 풍암호수와 수변 산책로를 단지 앞마당처럼 누리는 독보적인 에코 라이프를 선사합니다. 화개초등학교 도보 3분의 안전 통학권을 갖춘 프리미엄 단지입니다.",
    points: [
      "풍암호수 리모델링 수변특화 공원 및 사계절 힐링 산책로 직결",
      "단지 인근 화개초등학교 도보 3분 안심 통학 에듀 프리미엄",
      "롯데건설의 최상위 하이엔드 주거 철학이 담긴 시그니처 설계",
      "호수 조망권과 공원 영구 조망권을 동시에 확보한 독보적 희소성"
    ],
    quote: "도심 속 거대한 호수와 숲을 품은 희소성 1위 주거 명작"
  }
];

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: "84A",
    name: "84A",
    areaDedicated: "84.9437㎡",
    areaDedicatedPyeong: "25.6955평",
    areaSupply: "113.1797㎡ (34.2369평)",
    areaContract: "170.8771㎡ (51.6903평)",
    areaBalcony: "26.3475㎡ (7.9701평)",
    units: { bl21: 379, bl22: 175, note: "2-1BL 379세대는 임대" },
    totalUnits: 554,
    structure: "판상형 4-BAY구조 / 활용도 높은 'ㄷ'자형 주방 설계 / 드레스룸 1EA / 팬트리 2EA",
  },
  {
    id: "84B",
    name: "84B",
    areaDedicated: "84.9841㎡",
    areaDedicatedPyeong: "25.7077평",
    areaSupply: "113.7747㎡ (34.4168평)",
    areaContract: "171.4995㎡ (51.8786평)",
    areaBalcony: "24.6600㎡ (7.4597평)",
    units: { bl21: 29, bl22: 31, note: "2-1BL 29세대는 임대" },
    totalUnits: 60,
    structure: "탑상형 구조 / 남서측 2개면 간섭 없는 조망 가능 / 팬트리 2EA / 드레스룸 1EA",
  },
  {
    id: "102",
    name: "102",
    areaDedicated: "102.9716㎡",
    areaDedicatedPyeong: "31.1489평",
    areaSupply: "129.8738㎡ (39.2868평)",
    areaContract: "194.0776㎡ (58.7085평)",
    areaBalcony: "32.7300㎡ (9.9008평)",
    units: { bl22: 164 },
    totalUnits: 164,
    structure: "판상형 4BAY 구조 / 팬트리 2EA / 드레스룸 / 알파룸 / 활용도 높은 'ㄷ'자형 주방",
  },
  {
    id: "114",
    name: "114",
    areaDedicated: "114.9621㎡",
    areaDedicatedPyeong: "34.7760평",
    areaSupply: "146.2016㎡ (44.2260평)",
    areaContract: "233.9871㎡ (70.7811평)",
    areaBalcony: "34.0618㎡ (10.3037평)",
    units: { bl1: 471 },
    totalUnits: 471,
    structure: "판상형 4BAY 구조 / 팬트리 2EA / 드레스룸 / 알파룸 / 활용도 높은 'ㄷ'자형 주방",
  },
  {
    id: "119A",
    name: "119A",
    areaDedicated: "119.9422㎡",
    areaDedicatedPyeong: "36.2825평",
    areaSupply: "152.3365㎡ (46.0818평)",
    areaContract: "243.9249㎡ (73.7873평)",
    areaBalcony: "35.9750㎡ (10.8824평)",
    units: { bl1: 99 },
    totalUnits: 99,
    structure: "판상형 4BAY 구조 / 팬트리 2EA / 드레스룸 / 알파룸 / 활용도 높은 'ㄷ'자형 주방",
  },
  {
    id: "119B",
    name: "119B",
    areaDedicated: "119.9730㎡",
    areaDedicatedPyeong: "36.2918평",
    areaSupply: "152.2792㎡ (46.0645평)",
    areaContract: "243.8911㎡ (73.7771평)",
    areaBalcony: "35.7411㎡ (10.8117평)",
    units: { bl1: 152 },
    totalUnits: 152,
    structure: "판상형 4BAY 구조 / 팬트리 2EA / 드레스룸 / '11자형' 주방 특화 / 간섭없는 남측 공원·호수 조망 / 주방 북측 통창",
  },
  {
    id: "121",
    name: "121",
    areaDedicated: "121.9554㎡",
    areaDedicatedPyeong: "36.8915평",
    areaSupply: "150.5013~153.1347㎡ (45.5286~46.3232평)",
    areaContract: "227.6721~229.1752㎡ (68.8708~69.3256평)",
    areaBalcony: "33.7589㎡ (10.2121평)",
    units: { bl21: 144, bl22: 170 },
    totalUnits: 314,
    structure: "판상형 4BAY 구조 / 팬트리 2EA / 알파룸 / 드레스룸 / 활용도 높은 'ㄷ'자형 주방 / 넓은 거실 공간 확보",
  },
  {
    id: "135A",
    name: "135A",
    areaDedicated: "135.9742㎡",
    areaDedicatedPyeong: "41.1322평",
    areaSupply: "172.7908㎡ (52.2692평)",
    areaContract: "276.6213㎡ (83.6779평)",
    areaBalcony: "38.9340㎡ (11.7775평)",
    units: { bl1: 102 },
    totalUnits: 102,
    structure: "판상형 4BAY 구조 / 팬트리 2EA·침실3 / 알파룸 / 드레스룸 / '11자형' 주방 / 남서측 간섭 없는 도심 조망",
  },
  {
    id: "135B",
    name: "135B",
    areaDedicated: "135.9796㎡",
    areaDedicatedPyeong: "41.1338평",
    areaSupply: "173.1419㎡ (52.3754평)",
    areaContract: "276.9765㎡ (83.7854평)",
    areaBalcony: "36.1078㎡ (10.9226평)",
    units: { bl1: 102 },
    totalUnits: 102,
    structure: "탑상형 구조 / 팬트리 3EA / 침실3 / 드레스룸 / 남서측 2개면 조망 가능 / 안방 옆 침실3 특화",
  },
  {
    id: "139A",
    name: "139A",
    areaDedicated: "139.9830㎡",
    areaDedicatedPyeong: "42.3449평",
    areaSupply: "172.3180~175.3407㎡ (52.1262~53.0406평)",
    areaContract: "260.8962~262.6216㎡ (78.9211~79.4430평)",
    areaBalcony: "37.0800㎡ (11.2167평)",
    units: { bl21: 185, bl22: 123 },
    totalUnits: 308,
    structure: "판상형 4-BAY 구조 / 팬트리 2EA·드레스룸 2EA / 알파룸 / 넓은 거실 공간 확보 / '11자형' 주방",
  },
  {
    id: "139B-1",
    name: "139B-1",
    areaDedicated: "139.9988㎡",
    areaDedicatedPyeong: "42.3496평",
    areaSupply: "173.2028㎡ (52.3938평)",
    areaContract: "261.7910㎡ (79.1918평)",
    areaBalcony: "45.8311㎡ (13.8639평)",
    units: { bl21: 20 },
    totalUnits: 20,
    structure: "탑상형 구조 / 팬트리 2EA·드레스룸 2EA / 알파룸 1EA·베타룸 1EA / 3개면 개방형으로 북서·북동·남동향 조망 가능",
  },
  {
    id: "139B-2",
    name: "139B-2",
    areaDedicated: "139.9940㎡",
    areaDedicatedPyeong: "42.3482평",
    areaSupply: "175.6770㎡ (53.1423평)",
    areaContract: "262.9647㎡ (79.5468평)",
    areaBalcony: "36.3191㎡ (10.9865평)",
    units: { bl22: 129 },
    totalUnits: 129,
    structure: "탑상형 구조 / 팬트리 2EA·알파룸 1EA·베타룸 1EA·드레스룸 1EA",
  },
  {
    id: "139C",
    name: "139C",
    areaDedicated: "139.9600㎡",
    areaDedicatedPyeong: "42.3379평",
    areaSupply: "172.5560~175.5782㎡ (52.1820~53.1124평)",
    areaContract: "261.1197~262.8447㎡ (78.9887~79.5108평)",
    areaBalcony: "47.1900㎡ (14.2750평)",
    units: { bl21: 77, bl22: 126 },
    totalUnits: 203,
    structure: "판상형 4-BAY 구조 / 팬트리 2EA·드레스룸 2EA·알파룸 1EA / 안방 드레스룸 특화 / 남서측 간섭 없는 조망 가능",
  },
  {
    id: "139D",
    name: "139D",
    areaDedicated: "139.9912㎡",
    areaDedicatedPyeong: "42.3473평",
    areaSupply: "173.7936㎡ (52.5726평)",
    areaContract: "262.3771㎡ (79.3691평)",
    areaBalcony: "37.2900㎡ (11.2802평)",
    units: { bl21: 77 },
    totalUnits: 77,
    structure: "탑상형 구조 / 팬트리 4EA·알파룸 1EA·드레스룸 1EA / 안방 옆 알파룸 특화",
  },
  {
    id: "166",
    name: "166",
    areaDedicated: "166.9819㎡",
    areaDedicatedPyeong: "50.5120평",
    areaSupply: "208.1422~211.7479㎡ (62.9630~64.0537평)",
    areaContract: "313.8048~315.8628㎡ (94.9280~95.5485평)",
    areaBalcony: "41.5439㎡ (12.5670평)",
    units: { bl21: 4, bl22: 10 },
    totalUnits: 14,
    structure: "판상형 4-BAY구조 / 팬트리 1EA·알파룸 1EA·드레스룸 1EA / 지하1층 특화 테라스 구조",
  },
  {
    id: "211",
    name: "211",
    areaDedicated: "211.6191㎡",
    areaDedicatedPyeong: "64.0148평",
    areaSupply: "272.1755㎡ (82.3331평)",
    areaContract: "433.7689㎡ (131.2151평)",
    areaBalcony: "61.4850㎡ (18.5992평)",
    units: { bl1: 2 },
    totalUnits: 2,
    structure: "펜트하우스 / 침실1 드레스룸·침실2 화장대 / 복층형 테라스 특화",
  },
  {
    id: "233",
    name: "233",
    areaDedicated: "233.8898㎡",
    areaDedicatedPyeong: "70.7517평",
    areaSupply: "298.4531㎡ (90.2821평)",
    areaContract: "477.0525㎡ (144.3084평)",
    areaBalcony: "54.5124㎡ (16.4900평)",
    units: { bl1: 1 },
    totalUnits: 1,
    structure: "펜트하우스 최상위 타입 / 침실 3 + 드레스룸 다수 / 3면 테라스 특화",
  },
];

export const MODELHOUSE_UNITS_GALLERY: UnitPhoto[] = [
  {
    id: "dressroom",
    title: "대형 시스템 워크인 드레스룸",
    space: "마스터존 특화",
    category: "수납/드레스룸",
    badge: "실제 촬영 유니트",
    description: "LG TROMM 스타일러 수납 전용 니치와 최고급 시스템 알루미늄 행거, 명품 핸드백 및 악세서리 분할 수납 선반이 완비된 대형 드레스룸입니다.",
    specs: ["LG 트롬 스타일러 전용 수납 니치 & 콘센트", "천장형 제습·환기 시스템", "알루미늄 프레임 오픈 행거 & 분할 수납장"],
    keyPoint: "사계절 고급 의류와 잡화를 완벽하게 정리하는 하이엔드 수납 공간",
    imageUrl: APP_IMAGES.userPhotoDressroom,
  },
  {
    id: "master",
    title: "호텔 스위트 마스터베드룸",
    space: "안방 침실",
    category: "침실",
    badge: "실제 촬영 유니트",
    description: "은은한 웜톤 간접조명 백월 패널과 테라스 조망 통창, 프라이빗 워크데스크가 어우러진 최고급 안방 침실입니다.",
    specs: ["호텔식 헤드보드 간접등 & 아트월 패널", "시스템 에어컨 빌트인", "풍암호수 자연광을 담아내는 와이드 창호"],
    keyPoint: "풍암호수공원의 맑은 아침 햇살을 맞이하는 안락한 침실",
    imageUrl: APP_IMAGES.userPhotoBedroom,
  },
  {
    id: "entrance",
    title: "현관 프리미엄 에어샤워 & 갤러리 복도",
    space: "현관 / 복도",
    category: "수납/드레스룸",
    badge: "실제 촬영 유니트",
    description: "천연 대리석 디딤판과 하부 간접조명 신발장, 클린 현관 중문 및 예술작품을 연출할 수 있는 긴 갤러리 복도입니다.",
    specs: ["디자이너 3연동 슬라이딩 중문", "양면 대형 신발장 & 골프백 수납 팬트리", "포세린 타일 바닥 마감"],
    keyPoint: "귀가 시 외부 미세먼지를 차단하고 첫인상을 빛내는 고급스러운 진입 공간",
    imageUrl: APP_IMAGES.userPhotoEntrance,
  },
  {
    id: "terrace_view",
    title: "마스터룸 프라이빗 가든 뷰 & 라운지",
    space: "침실 특화",
    category: "침실",
    badge: "실제 촬영 유니트",
    description: "침실에서 바로 이어지는 테라스 조망과 편안한 1인 리클라이너 휴식 공간으로 프라이빗 힐링 라이프를 완성합니다.",
    specs: ["로이 복층유리 이중창 단열 시스템", "은은한 조도 조절 디밍 스위치", "단지 조경 영구 조망"],
    keyPoint: "도심 속에서 자연을 감상하며 하루를 정리하는 마스터 힐링 존",
    imageUrl: APP_IMAGES.userPhotoMasterTerrace,
  },
  {
    id: "living_dining",
    title: "파노라마 오픈 리빙 & 다이닝",
    space: "거실 / 식당",
    category: "거실",
    badge: "실제 유니트",
    description: "최고급 포세린 타일 바닥과 와이드 대리석 아일랜드 식탁, 사각 디자인 조명이 조화를 이루는 프리미엄 공간입니다.",
    specs: ["초광폭 거실 맞통풍 4BAY", "디자이너 실링라이트", "에스프레소 카페 바 연계"],
    keyPoint: "온 가족의 소통과 품격 높은 손님맞이를 완성하는 중심 공간",
    imageUrl: APP_IMAGES.interiorLivingRoom,
  },
  {
    id: "kitchen",
    title: "11자형 대면형 하이엔드 주방",
    space: "주방",
    category: "주방",
    badge: "실제 유니트",
    description: "주부의 가사 동선을 최적화한 11자형 대면형 주방과 와이드 환기창, 세라믹 상판, 최고급 싱크볼 및 인덕션이 적용되었습니다.",
    specs: ["11자 대면형 아일랜드", "자연환기 와이드 주방창", "빌트인 오븐 & 냉장고장"],
    keyPoint: "요리와 대화가 공존하는 럭셔리 키친 라이프스타일",
    imageUrl: APP_IMAGES.kitchenInteriorView,
  },
  {
    id: "food_waste",
    title: "친환경 음식물 처리기 무상 제공",
    space: "BASIC KITCHEN",
    category: "무상제공",
    badge: "★ 무상제공 품목",
    description: "싱크대 하부 전동 분쇄 처리 방식으로 냄새와 번거로움 없이 위생적인 주방을 유지하는 고급 음식물 처리기를 무상 제공합니다.",
    specs: ["싱크대 일체형 자동 분쇄", "냄새 제로 친환경 시스템", "계약세대 한정 무상 설치"],
    keyPoint: "계약 고객만을 위한 특별 프로모션 무상 제공 품목",
    imageUrl: APP_IMAGES.kitchenInteriorView,
  },
  {
    id: "bath",
    title: "슬레이트 그레이 호텔식 건식 분리형 욕실",
    space: "공용/부부 욕실",
    category: "욕실",
    badge: "실제 유니트",
    description: "모던 슬레이트 그레이 포세린 타일과 일체형 플로팅 카운터 세면대, 백라이트 거울 수납장, 대형 욕조가 시공된 호텔 스파 욕실입니다.",
    specs: ["일체형 플로팅 카운터", "LED 간접조명 거울장", "아메리칸 스탠다드 고급 수전"],
    keyPoint: "하루의 피로를 씻어내는 럭셔리 호텔 스타일 힐링 배스",
    imageUrl: APP_IMAGES.bathroomLuxuryView,
  },
  {
    id: "lake_view",
    title: "풍암호수공원 영구 에코 조망권",
    space: "단지 앞 조망",
    category: "조망/단지",
    badge: "시그니처 뷰",
    description: "광주 최대 중앙공원 1지구와 풍암호수 수변 산책로를 단지 앞마당처럼 영구 조망으로 누리는 희소 에코 뷰입니다.",
    specs: ["풍암호수 리모델링 수변공원", "사계절 숲세권 파노라마", "도심 속 힐링 라이프"],
    keyPoint: "호남권 유일의 초대형 도심 호수공원 영구 프리미엄",
    imageUrl: APP_IMAGES.centralParkLake,
  },
  {
    id: "vip_lounge",
    title: "견본주택 VIP 전담 상담 라운지",
    space: "견본주택 현장",
    category: "견본주택",
    badge: "조아라 팀장 전담",
    description: "상무누리로 154 견본주택 현장에서 조아라 팀장이 1:1로 직접 세대 동호수 및 특별 분양 조건을 맞춤 안내합니다.",
    specs: ["1:1 프라이빗 상담 데스크", "단지 모형도 및 세대 투어", "예약자 전용 대기 없는 우선 안내"],
    keyPoint: "안내데스크에서 '조아라 팀장'을 지정하시면 VIP 혜택 적용",
    imageUrl: APP_IMAGES.modelHouseLounge,
  }
];

export const INFRASTRUCTURE_HIGHLIGHTS = [
  {
    title: "중외공원 아시아 예술정원 & 문화 인프라",
    date: "개장 및 확장",
    desc: "아시아 예술정원(문화정원 39,000㎡), 하늘다리, 시립미술관, 비엔날레전시관 등 풍부한 문화예술 인프라를 한 걸음에 누립니다.",
    points: ["문화정원 39,000㎡ 힐링 공간", "하늘다리 산책로 및 아시아 생태놀이터", "광주 시립미술관·역사민속박물관 인접"]
  },
  {
    title: "반경 2.5km 내 쇼핑·교통·의료 메가 인프라",
    date: "광주 중심 생활권",
    desc: "신세계백화점(확장 예정), 더현대 광주 복합쇼핑몰(예정), 유스퀘어 광주종합버스터미널, 대형 종합병원(운암한국병원, 광주현대병원 등)이 집중된 편리한 도심 인프라입니다.",
    points: ["더현대 광주 & 광주 신세계 복합쇼핑벨트", "유스퀘어 광주버스터미널 및 지하철 2호선(예정)", "챔피언스필드 및 종합병원 밀집"]
  }
];
