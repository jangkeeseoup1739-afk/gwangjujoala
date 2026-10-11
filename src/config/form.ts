/**
 * 방문예약증 · 문자 보내기 관련 도우미
 *
 * 이 홈페이지는 고객 정보를 서버로 보내지 않습니다.
 * 입력값은 방문예약증을 만드는 데에만 쓰이고, 고객이 직접
 * 전화하거나 문자를 보내는 방식으로 담당자에게 전달됩니다.
 */

/** 방문예약 1건 */
export interface Lead {
  id: string;
  name: string;
  phone: string;
  visitDate: string;
  visitTime: string;
  unitType: string;
  inquiryTopic: string;
  notes: string;
  manager: string;
  createdAt: string;
  /** 어느 페이지에서 발급했는지 */
  pageUrl: string;
}

/** 고객이 담당자에게 보낼 문자 본문 */
export function buildSmsText(lead: Lead): string {
  const lines = [
    '[중앙공원 롯데캐슬 시그니처 모델하우스 방문예약]',
    `성함: ${lead.name}`,
    `연락처: ${lead.phone}`,
    `관심 주택형: ${lead.unitType}`,
    `방문 희망: ${lead.visitDate} ${lead.visitTime}`,
  ];
  if (lead.notes) lines.push(`추가 문의: ${lead.notes}`);
  return lines.join('\n');
}

/** 기기에 맞는 문자 보내기 링크 (iOS 와 안드로이드의 구분자가 다르다) */
export function buildSmsHref(managerPhone: string, lead: Lead): string {
  const body = encodeURIComponent(buildSmsText(lead));
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const sep = isIOS ? '&' : '?';
  return `sms:${managerPhone.replace(/[^0-9+]/g, '')}${sep}body=${body}`;
}
