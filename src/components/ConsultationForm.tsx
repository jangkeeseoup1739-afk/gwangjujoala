import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { FLOOR_PLANS } from '../data/projectData';
import { buildSmsText, buildSmsHref, type Lead } from '../config/form';
import {
  Phone, Calendar, CheckCircle2, AlertCircle, Sparkles,
  User, MessageSquare, Clock, Copy, Check, Ticket,
} from 'lucide-react';

interface ConsultationFormProps {
  onPassCreated: (passData: { name: string; phone: string; date: string; unitType: string }) => void;
}

const TIME_SLOTS = [
  '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00',
];

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ onPassCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    visitDate: new Date().toISOString().split('T')[0],
    visitTime: '14:00',
    unitType: FLOOR_PLANS[0] ? `${FLOOR_PLANS[0].name} (전용 ${FLOOR_PLANS[0].areaDedicated})` : '',
  });

  const [issued, setIssued] = useState<Lead | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleIssue = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage('성함을 입력해 주세요.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('올바른 휴대전화 번호 (10~11자리)를 입력해 주세요.');
      return;
    }

    const lead: Lead = {
      id: 'LC-' + Date.now().toString().slice(-6),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      visitDate: formData.visitDate,
      visitTime: formData.visitTime,
      unitType: formData.unitType,
      inquiryTopic: '모델하우스 방문예약',
      notes: '',
      manager: CONSULTATION_CONFIG.managerName,
      createdAt: new Date().toISOString(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    };

    setIssued(lead);
    onPassCreated({
      name: lead.name,
      phone: lead.phone,
      date: `${lead.visitDate} ${lead.visitTime}`,
      unitType: lead.unitType,
    });
  };

  const handleCopy = async () => {
    if (!issued) return;
    try {
      await navigator.clipboard.writeText(buildSmsText(issued));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setErrorMessage('복사에 실패했습니다. 내용을 직접 선택해 복사해 주세요.');
    }
  };

  const handleReset = () => {
    setIssued(null);
    setErrorMessage(null);
    setCopied(false);
    setFormData((prev) => ({ ...prev, name: '', phone: '' }));
  };

  const inputClass =
    'w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink placeholder-ink-muted text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill';

  return (
    <section id="consultation" className="py-20 bg-surface text-ink border-t border-gold-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
          <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
            MODEL HOUSE VISIT PASS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            모델하우스 <span className="text-gold">방문예약증 발급</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            아래에서 방문예약증을 발급받으신 뒤, {CONSULTATION_CONFIG.managerName}에게 전화나 문자로
            알려주시면 예약이 확정됩니다.
          </p>
        </div>

        {issued ? (
          /* ── 발급 완료 ── */
          <div className="bg-surface rounded-2xl border-2 border-gold-line p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-ok-tint border-2 border-ok flex items-center justify-center text-ok mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gold font-bold">
                VISIT PASS ISSUED
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-ink">
                방문예약증이 발급되었습니다
              </h3>
            </div>

            {/* 발급 내용 요약 — 예약증 자체는 모달로 크게 보여준다 */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-surface-2 border border-gold-line space-y-2 text-xs text-ink">
              <div className="flex justify-between">
                <span className="text-ink-soft">예약자 성함</span>
                <span className="font-bold">{issued.name} 님</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">방문 일시</span>
                <span className="font-bold">{issued.visitDate} {issued.visitTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">관심 주택형</span>
                <span className="font-bold text-gold text-right">{issued.unitType}</span>
              </div>
              <div className="flex justify-between border-t border-line pt-2">
                <span className="text-ink-soft">견본주택</span>
                <span className="font-bold text-right">{CONSULTATION_CONFIG.modelHouseAddress}</span>
              </div>

              <button
                type="button"
                onClick={() =>
                  onPassCreated({
                    name: issued.name,
                    phone: issued.phone,
                    date: `${issued.visitDate} ${issued.visitTime}`,
                    unitType: issued.unitType,
                  })
                }
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-3 bg-surface-3 hover:bg-line-strong text-gold border border-gold-line font-bold text-sm rounded-xl transition-all"
              >
                <Ticket className="w-4 h-4" />
                <span>방문예약증 다시 보기</span>
              </button>
            </div>

            {/* 예약 확정 안내 */}
            <div className="p-5 rounded-xl bg-gold-tint border-2 border-gold-line">
              <div className="flex items-center gap-2 text-gold font-bold text-sm mb-3">
                <Sparkles className="w-4 h-4" />
                <span>마지막 한 단계 — 예약 확정</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-soft mb-4 leading-relaxed">
                아래 버튼으로 {CONSULTATION_CONFIG.managerName}에게 알려주시면 예약이 확정되고,
                방문 시 대기 없이 1:1 전담 상담을 받으실 수 있습니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={CONSULTATION_CONFIG.phoneTelLink}
                  className="press inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-sm rounded-xl shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 fill-on-gold" />
                  <span>전화로 확정</span>
                </a>
                <a
                  href={buildSmsHref(CONSULTATION_CONFIG.managerPhone, issued)}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-surface-2 hover:bg-surface-3 text-gold border border-gold-line font-bold text-sm rounded-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>문자로 보내기</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-surface-2 hover:bg-surface-3 text-ink-soft border border-line-strong font-bold text-sm rounded-xl transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-ok" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? '복사됨' : '내용 복사'}</span>
                </button>
              </div>

              <p className="mt-3 text-[11px] text-ink-muted">
                ※ 문자 보내기는 휴대폰에서 동작합니다. PC에서는 '내용 복사' 후 보내주시거나 바로 전화 주세요.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-3 hover:bg-line-strong text-ink-soft border border-line-strong text-sm font-medium rounded-xl transition-all"
              >
                <span>다른 이름으로 다시 발급</span>
              </button>
            </div>
          </div>
        ) : (
          /* ── 발급 신청 ── */
          <form
            onSubmit={handleIssue}
            data-reveal="scale"
            className="bg-surface rounded-2xl border-2 border-line hover:border-gold-line p-6 sm:p-10 shadow-2xl transition-all space-y-6"
          >
            {errorMessage && (
              <div className="p-4 rounded-xl bg-danger-tint border border-danger/40 flex items-start gap-3 text-danger text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-danger shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft mb-2">
                  <User className="w-3.5 h-3.5 text-gold" />
                  고객 성함 <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="예: 홍길동"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft mb-2">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  연락처 (휴대전화) <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="예: 010-1234-5678"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft mb-2">
                  <Ticket className="w-3.5 h-3.5 text-gold" />
                  관심 주택형
                </label>
                <select
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  className={inputClass}
                >
                  {FLOOR_PLANS.map((plan) => (
                    <option key={plan.id} value={`${plan.name} (전용 ${plan.areaDedicated})`}>
                      {plan.name} — 전용 {plan.areaDedicated} ({plan.areaDedicatedPyeong})
                    </option>
                  ))}
                  <option value="아직 정하지 못함">아직 정하지 못했습니다 (상담 후 결정)</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft mb-2">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  방문 희망 일자
                </label>
                <input
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft mb-2">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  방문 희망 시간
                </label>
                <select
                  value={formData.visitTime}
                  onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                  className={inputClass}
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>
                      {Number(t.slice(0, 2)) < 12
                        ? `오전 ${t}`
                        : `오후 ${String(Number(t.slice(0, 2)) % 12 || 12).padStart(2, '0')}:00`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="press sheen w-full py-4 px-6 bg-gradient-to-r from-gold-fill via-gold-fill to-gold-fill-2 hover:from-gold-fill-2 hover:to-gold-fill-2 text-on-gold font-extrabold text-base rounded-xl shadow-lg shadow-gold-fill-2/25 flex items-center justify-center gap-2 transition-all"
            >
              <Ticket className="w-5 h-5" />
              <span>방문예약증 발급받기</span>
            </button>

            <p className="text-[11px] text-ink-muted text-center leading-relaxed">
              입력하신 내용은 <strong className="text-ink-soft">방문예약증을 만드는 데에만</strong> 쓰이며
              이 기기를 벗어나지 않습니다.
              <br />
              발급 후 전화 또는 문자로 알려주셔야 예약이 확정됩니다.
            </p>

            <div className="pt-2 border-t border-line flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <span className="text-xs text-ink-muted">바로 상담을 원하시면</span>
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-2 hover:bg-surface-3 text-gold border border-gold-line font-bold text-sm rounded-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{CONSULTATION_CONFIG.managerName} {CONSULTATION_CONFIG.managerPhone}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
