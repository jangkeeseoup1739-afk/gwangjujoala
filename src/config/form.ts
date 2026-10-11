/**
 * 상담신청 전송 설정
 *
 * 고객이 상담신청 폼을 작성하면 여기 적힌 주소로 전송되어
 * 구글 스프레드시트에 자동으로 쌓입니다.
 *
 * ▶ 설정 방법: docs/상담신청-받기-설정.md 를 보세요 (5분이면 됩니다)
 *
 * 아래 endpoint 가 비어 있으면 전송되지 않고,
 * 고객에게 "문자로 보내기 / 전화 걸기" 버튼이 대신 나타납니다.
 */
export const FORM_CONFIG = {
  /** 구글 Apps Script 웹앱 주소 (https://script.google.com/macros/s/.../exec) */
  endpoint: '',
};

/** 상담신청 1건 */
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
  /** 어느 페이지에서 신청했는지 (유입 확인용) */
  pageUrl: string;
}

export type SubmitResult =
  /** 스프레드시트 저장이 확인됨 */
  | { status: 'saved' }
  /** 전송은 했지만 브라우저가 응답을 읽지 못함 (대부분 정상 저장됨) */
  | { status: 'sent' }
  /** 전송 실패 — 문자/전화 안내로 넘어가야 함 */
  | { status: 'failed'; reason: 'not-configured' | 'network' | string };

const TIMEOUT_MS = 12000;

function timeoutSignal(): AbortSignal | undefined {
  try {
    return AbortSignal.timeout(TIMEOUT_MS);
  } catch {
    return undefined; // 구형 브라우저
  }
}

/**
 * 상담신청을 구글 스프레드시트로 전송한다.
 *
 * Apps Script 웹앱은 브라우저에서 바로 호출할 때 CORS 응답을 돌려주지 못하는
 * 경우가 있다. 그래서 2단계로 시도한다.
 *   1차 — 보통 요청으로 보내고 응답까지 읽어 저장을 확인한다.
 *   2차 — 1차가 CORS로 막히면 no-cors 로 다시 보낸다. 데이터는 전달되지만
 *         응답을 읽을 수 없으므로 'sent'(확인 불가)로 구분해 돌려준다.
 * 둘 다 실패하면 'failed' 를 돌려주고, 화면에서 문자/전화 안내를 띄운다.
 */
export async function submitLead(lead: Lead): Promise<SubmitResult> {
  const endpoint = FORM_CONFIG.endpoint.trim();
  if (!endpoint) return { status: 'failed', reason: 'not-configured' };

  // text/plain 으로 보내면 사전 요청(preflight)이 생기지 않는다.
  const init: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(lead),
  };

  // 1차: 응답을 읽어 저장 확인
  try {
    const res = await fetch(endpoint, { ...init, redirect: 'follow', signal: timeoutSignal() });
    if (!res.ok) return { status: 'failed', reason: `http-${res.status}` };
    try {
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (data && data.ok === false) {
        return { status: 'failed', reason: data.error || 'script-error' };
      }
    } catch {
      // 본문을 못 읽어도 200이면 저장된 것으로 본다
    }
    return { status: 'saved' };
  } catch {
    // 1차가 CORS/네트워크로 막힘 → 2차
  }

  // 2차: no-cors (전달은 되지만 응답 확인 불가)
  try {
    await fetch(endpoint, { ...init, mode: 'no-cors', signal: timeoutSignal() });
    return { status: 'sent' };
  } catch {
    return { status: 'failed', reason: 'network' };
  }
}

/** 전송이 실패했을 때 고객이 문자로 보낼 수 있도록 만드는 본문 */
export function buildSmsText(lead: Lead): string {
  const lines = [
    '[중앙공원 롯데캐슬 시그니처 분양상담 신청]',
    `성함: ${lead.name}`,
    `연락처: ${lead.phone}`,
    `관심 주택형: ${lead.unitType}`,
    `방문 희망: ${lead.visitDate} ${lead.visitTime}`,
    `문의 내용: ${lead.inquiryTopic}`,
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
