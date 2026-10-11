import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { Phone, Calendar, CheckCircle2, ShieldCheck, AlertCircle, Sparkles, Send, User, MessageSquare, Clock } from 'lucide-react';

interface ConsultationFormProps {
  onPassCreated: (passData: { name: string; phone: string; date: string; unitType: string }) => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ onPassCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    visitDate: new Date().toISOString().split('T')[0],
    visitTime: '14:00',
    unitType: '102㎡ (구 39평형)',
    inquiryTopic: '분양가 및 잔여호실 안내',
    notes: '',
    agreePrivacy: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    date: string;
    unitType: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('성함을 입력해 주세요.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('올바른 휴대전화 번호 (10~11자리)를 입력해 주세요.');
      return;
    }

    if (!formData.agreePrivacy) {
      setErrorMessage('개인정보 수집 및 상담 제공에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);

    // Realistic API submission simulation with persistence to localStorage
    setTimeout(() => {
      try {
        const leadRecord = {
          id: 'LC-' + Date.now().toString().slice(-6),
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          visitDate: formData.visitDate,
          visitTime: formData.visitTime,
          unitType: formData.unitType,
          inquiryTopic: formData.inquiryTopic,
          notes: formData.notes.trim(),
          manager: CONSULTATION_CONFIG.managerName,
          managerPhone: CONSULTATION_CONFIG.managerPhone,
          createdAt: new Date().toISOString(),
        };

        // Save to localStorage
        const existing = JSON.parse(localStorage.getItem('lotte_castle_consultations') || '[]');
        existing.push(leadRecord);
        localStorage.setItem('lotte_castle_consultations', JSON.stringify(existing));

        // Update state
        setSubmittedData({
          name: leadRecord.name,
          phone: leadRecord.phone,
          date: `${leadRecord.visitDate} ${leadRecord.visitTime}`,
          unitType: leadRecord.unitType,
        });
        setSubmitSuccess(true);
        setIsSubmitting(false);

        // Inform parent
        onPassCreated({
          name: leadRecord.name,
          phone: leadRecord.phone,
          date: `${leadRecord.visitDate} ${leadRecord.visitTime}`,
          unitType: leadRecord.unitType,
        });
      } catch (err) {
        setIsSubmitting(false);
        setErrorMessage('상담 신청 전송 중 오류가 발생했습니다. 직접 전화 상담을 이용해 주세요.');
      }
    }, 700);
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setSubmittedData(null);
    setFormData((prev) => ({
      ...prev,
      name: '',
      phone: '',
      notes: '',
    }));
  };

  return (
    <section id="consultation" className="py-20 bg-surface text-ink border-t border-gold-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
            VIP CONSULTATION &amp; MODEL HOUSE RESERVATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            분양 상담 &amp; <span className="text-gold">모델하우스 방문예약 신청</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            신청 시 <strong className="text-gold">{CONSULTATION_CONFIG.managerName}</strong>이 전담하여 1:1 맞춤 로열 동호수 안내 및 모바일 방문예약증을 발급해 드립니다.
          </p>
        </div>

        {/* State 1: Submitted Success view strictly matching Requirement 4 */}
        {submitSuccess && submittedData ? (
          <div className="bg-surface rounded-2xl border-2 border-gold-line p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-ok-tint border-2 border-ok flex items-center justify-center text-ok mb-4 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gold font-bold">
                APPLICATION CONFIRMED
              </span>

              {/* Requirement 4: Mandatory Exact Notice Text */}
              <div className="my-4 p-5 rounded-xl bg-gold-tint border-2 border-gold-line max-w-xl text-center">
                <p className="text-base sm:text-lg md:text-xl font-bold text-gold leading-relaxed">
                  “상담 신청이 접수되었습니다. 자세한 분양 정보는 담당자 조아라 팀장(010-5767-6645)에게 문의해 주세요.”
                </p>
              </div>

              <p className="text-xs sm:text-sm text-ink-soft">
                입력하신 연락처로 담당자 {CONSULTATION_CONFIG.managerName}이 신속히 배정되어 세부 분양가 및 모델하우스 동행 안내를 드립니다.
              </p>
            </div>

            {/* Generated Mobile Pass Ticket Card View matching User Photo */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-surface-2 via-surface-2 to-surface-2 border-2 border-gold-fill/80 shadow-2xl text-center max-w-md mx-auto relative overflow-hidden">
              <div className="text-xs uppercase tracking-widest text-ink-soft font-serif">
                중앙공원 롯데캐슬 시그니처 모델하우스
              </div>
              <div className="text-2xl font-black text-gold my-1 font-serif">
                방 문 예 약 증
              </div>
              <div className="text-sm font-bold text-yellow-300 mb-3 bg-gold-tint py-1 px-3 rounded-full inline-block border border-yellow-500/30">
                오시면 꼭 안내데스크에 보여주세요 (방문예약 필수)
              </div>

              <div className="p-4 bg-surface-2/92 rounded-xl border border-line text-left space-y-2 text-xs text-ink my-3">
                <div className="flex justify-between">
                  <span className="text-ink-soft">예약자 성함:</span>
                  <span className="font-bold text-ink">{submittedData.name} 님</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">관심 주택형:</span>
                  <span className="font-bold text-gold">{submittedData.unitType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">방문 일시:</span>
                  <span className="font-bold text-ink">{submittedData.date}</span>
                </div>
                <div className="flex justify-between border-t border-line pt-2">
                  <span className="text-ink-soft">견본주택 위치:</span>
                  <span className="font-bold text-ink text-right">{CONSULTATION_CONFIG.modelHouseAddress}</span>
                </div>
                <div className="flex justify-between border-t border-line pt-2">
                  <span className="text-ink-soft">지정 상담사:</span>
                  <span className="font-bold text-gold">{CONSULTATION_CONFIG.managerName}</span>
                </div>
              </div>

              <div className="text-xs text-gold font-mono font-bold mt-2">
                직통 연락처: {CONSULTATION_CONFIG.managerPhone}
              </div>
            </div>

            {/* Post-submission Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-sm rounded-xl shadow-lg transition-all"
              >
                <Phone className="w-4 h-4 fill-on-gold" />
                <span>{CONSULTATION_CONFIG.managerName}에게 바로 전화 걸기</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-3 hover:bg-line-strong text-ink-soft border border-line-strong text-sm font-medium rounded-xl transition-all"
              >
                <span>다른 내용으로 추가 문의하기</span>
              </button>
            </div>
          </div>
        ) : (
          /* State 2: Active Input Form */
          <form
            onSubmit={handleSubmit}
            className="bg-surface rounded-2xl border-2 border-line hover:border-gold-line p-6 sm:p-10 shadow-2xl transition-all space-y-6"
          >
            {errorMessage && (
              <div className="p-4 rounded-xl bg-danger-tint border border-danger/40 flex items-start gap-3 text-danger text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-danger shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold" />
                  <span>고객 성함 <span className="text-gold">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink placeholder-ink-muted text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>연락처 (휴대전화) <span className="text-gold">*</span></span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="예: 010-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink placeholder-ink-muted text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Unit Type */}
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5">
                  관심 주택형 선택
                </label>
                <select
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill"
                >
                  <option value="84㎡ (구 34평형)">84㎡ (구 34평형)</option>
                  <option value="102㎡ (구 39평형)">102㎡ (구 39평형 - 판상형 4BAY)</option>
                  <option value="121㎡ (구 45평형)">121㎡ (구 45평형 - 초광폭 거실)</option>
                  <option value="139A㎡ (구 52평형)">139A㎡ (구 52평형 - 11자형 주방)</option>
                  <option value="139B-2㎡ (구 52평형)">139B-2㎡ (구 52평형 - 타워뷰)</option>
                  <option value="139C㎡ (구 52평형)">139C㎡ (구 52평형 - 영구조망)</option>
                  <option value="펜트하우스 (166~233P)">펜트하우스 (166~233P㎡)</option>
                </select>
              </div>

              {/* Inquiry Topic */}
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5">
                  상담 희망 내용
                </label>
                <select
                  value={formData.inquiryTopic}
                  onChange={(e) => setFormData({ ...formData, inquiryTopic: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill"
                >
                  <option value="분양가 및 잔여호실 안내">분양가 및 잔여호실 안내</option>
                  <option value="견본주택 1:1 관람 예약">견본주택 1:1 관람 예약 (방문예약증 발급)</option>
                  <option value="군공항 이전 & 895조 호재 투자 상담">군공항 이전 &amp; 895조 반도체 호재 투자 상담</option>
                  <option value="중도금 및 계약 조건 상담">중도금 및 계약 조건 상담</option>
                  <option value="음식물처리기 등 무상옵션 혜택 문의">음식물처리기 등 무상옵션 혜택 문의</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Visit Date */}
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  <span>방문 희망 일자</span>
                </label>
                <input
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill"
                />
              </div>

              {/* Visit Time */}
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>방문 희망 시간</span>
                </label>
                <select
                  value={formData.visitTime}
                  onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill"
                >
                  <option value="10:00">오전 10:00</option>
                  <option value="11:30">오전 11:30</option>
                  <option value="13:00">오후 01:00</option>
                  <option value="14:00">오후 02:00 (추천)</option>
                  <option value="15:30">오후 03:30</option>
                  <option value="17:00">오후 05:00</option>
                </select>
              </div>
            </div>

            {/* Additional notes */}
            <div>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span>추가 문의사항 (선택사항)</span>
              </label>
              <textarea
                rows={2}
                placeholder="궁금하신 내용이나 희망 동호수 조건 등을 적어주시면 사전 검토 후 맞춤 상담해 드립니다."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 bg-surface-2 border border-line-strong focus:border-gold-fill rounded-xl text-ink placeholder-ink-muted text-sm focus:outline-none focus:ring-1 focus:ring-gold-fill"
              />
            </div>

            {/* Privacy agreement */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-gold focus:ring-gold-fill bg-surface-2 border-line-strong"
                />
                <span className="text-xs text-ink-soft leading-relaxed">
                  [필수] 개인정보 수집 및 분양 상담 제공 동의 (수집항목: 성함, 연락처 / 목적: 중앙공원 롯데캐슬 시그니처 분양 안내 및 방문예약 확인 / 보관기간: 분양 완료 시 파기)
                </span>
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex-1 py-4 px-6 bg-gradient-to-r from-gold-fill via-gold-fill to-gold-fill-2 hover:from-gold-fill-2 hover:to-gold-fill-2 text-on-gold font-extrabold text-base rounded-xl shadow-lg shadow-gold-fill-2/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-on-gold border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 fill-on-gold" />
                    <span>상담 신청 및 방문예약증 발급하기</span>
                  </>
                )}
              </button>

              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="w-full sm:w-auto py-4 px-6 bg-surface-3 hover:bg-line-strong text-gold border border-gold-line font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>{CONSULTATION_CONFIG.managerName} 직통 통화</span>
              </a>
            </div>

            <div className="text-center text-[11px] text-ink-muted">
              ※ 상담 신청 접수 시에만 접수 완료 메시지와 방문예약증이 발급됩니다.
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
