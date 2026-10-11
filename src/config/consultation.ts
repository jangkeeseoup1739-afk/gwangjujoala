/**
 * 중앙공원 롯데캐슬 시그니처 - 상담 및 담당자 통합 설정 파일
 * 홈페이지 내 모든 전화 상담, 버튼, 하단 정보에서 이 단일 설정을 참조합니다.
 * (공식 홈페이지 링크 제거 요청 반영 완료)
 */

export interface ConsultationConfig {
  projectName: string;
  subTitle: string;
  managerName: string;
  managerTitle: string;
  managerPhone: string;
  phoneTelLink: string;
  modelHouseAddress: string;
  modelHouseLocationDetail: string;
  constructor: string; // 시공사
  developer: string;   // 시행사
  totalUnits: string;  // 총 세대수
  blockInfo: string;   // 블럭 정보
  completionMessage: string;
}

export const CONSULTATION_CONFIG: ConsultationConfig = {
  projectName: "중앙공원 롯데캐슬 시그니처",
  subTitle: "광주 중앙공원 1지구 특례사업 랜드마크 (총 2,772세대)",
  managerName: "조아라 팀장",
  managerTitle: "분양 상담 총괄",
  managerPhone: "010-5767-6645",
  phoneTelLink: "tel:010-5767-6645",
  modelHouseAddress: "광주시 서구 상무누리로 154",
  modelHouseLocationDetail: "상무시민공원 종합운동장 맞은편 / 안내데스크에서 '조아라 팀장' 지정 필수",
  constructor: "롯데건설(주)",
  developer: "빛고을중앙공원개발(주)",
  totalUnits: "총 2,772세대 (1BL 929세대 / 2-1BL 915세대 / 2-2BL 928세대)",
  blockInfo: "지하 3층 ~ 지상 28층, 총 39개동",
  completionMessage: "상담 신청이 접수되었습니다. 자세한 분양 정보는 담당자 조아라 팀장(010-5767-6645)에게 문의해 주세요.",
};

export default CONSULTATION_CONFIG;
