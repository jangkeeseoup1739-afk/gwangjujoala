import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { FLOOR_PLANS, FloorPlan } from '../data/projectData';
import { floorPlanPhoto } from '../assets/images';
import { Maximize2, Phone, X, Layers } from 'lucide-react';

interface FloorPlansSectionProps {
  onScrollToConsultation: () => void;
}

/** 블럭별 세대수를 "1BL 471세대" 처럼 한 줄로 */
function unitsLabel(plan: FloorPlan): string {
  const parts: string[] = [];
  if (plan.units.bl1) parts.push(`1BL ${plan.units.bl1}세대`);
  if (plan.units.bl21) parts.push(`2-1BL ${plan.units.bl21}세대`);
  if (plan.units.bl22) parts.push(`2-2BL ${plan.units.bl22}세대`);
  return parts.join(' · ');
}

export const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({ onScrollToConsultation }) => {
  const [openPlan, setOpenPlan] = useState<FloorPlan | null>(null);
  const openPhoto = openPlan ? floorPlanPhoto(openPlan.id) : undefined;

  return (
    <section id="floorplans" className="py-20 bg-surface text-ink border-t border-gold-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
            UNIT PLANS &amp; ARCHITECTURAL LAYOUTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            타입별 <span className="text-gold">평면도</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            전용 84㎡부터 펜트하우스 233㎡까지 총 {FLOOR_PLANS.length}개 타입입니다.
            도면을 누르면 크게 보실 수 있습니다.
          </p>
        </div>

        {/* 도면 목록 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {FLOOR_PLANS.map((plan) => {
            const photo = floorPlanPhoto(plan.id);
            return (
              <button
                key={plan.id}
                onClick={() => setOpenPlan(plan)}
                className="text-left bg-surface-2 rounded-xl border border-line hover:border-gold-line hover:shadow-lg transition-all overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold-fill"
              >
                {/* 도면 */}
                <div className="relative aspect-[16/9] bg-surface-3 overflow-hidden">
                  {photo ? (
                    <img
                      src={photo}
                      alt={`${plan.name} 타입 평면도`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink-muted text-xs gap-1.5">
                      <Layers className="w-4 h-4" />
                      <span>도면 준비 중</span>
                    </div>
                  )}
                  {photo && (
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-surface-2/92 rounded-md text-[10px] text-gold font-semibold flex items-center gap-1 border border-gold-line opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                      <span>크게보기</span>
                    </div>
                  )}
                </div>

                {/* 타입명 · 전용면적 · 세대수 */}
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xl font-extrabold text-ink">{plan.name}</span>
                    <span className="text-xs text-ink-muted font-mono">{plan.areaDedicatedPyeong}</span>
                  </div>
                  <div className="mt-1 text-sm text-gold font-bold font-mono">
                    전용 {plan.areaDedicated}
                  </div>
                  <div className="mt-2 pt-2 border-t border-line text-[11px] text-ink-soft">
                    {unitsLabel(plan)}
                    <span className="text-ink-muted"> · 총 {plan.totalUnits}세대</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 하단 안내 */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-surface-2 border border-gold-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-soft text-center sm:text-left">
            <strong className="text-ink">분양가와 잔여 동호수</strong>는 타입·층·향에 따라 달라집니다.
            <br className="hidden sm:block" />
            {CONSULTATION_CONFIG.managerName}에게 문의하시면 원하시는 타입의 로열 동호수를 바로 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={CONSULTATION_CONFIG.phoneTelLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-sm rounded-xl shadow-md transition-all"
            >
              <Phone className="w-4 h-4 fill-on-gold" />
              <span>{CONSULTATION_CONFIG.managerName}에게 전화 상담</span>
            </a>
            <button
              onClick={onScrollToConsultation}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong font-bold text-sm rounded-xl transition-all"
            >
              <span>상담 신청하기</span>
            </button>
          </div>
        </div>
      </div>

      {/* 도면 크게보기 */}
      {openPlan && (
        <div
          onClick={() => setOpenPlan(null)}
          className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm animate-fadeIn p-3 sm:p-6 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-surface-2 rounded-2xl border-2 border-gold-line shadow-2xl max-w-5xl w-full max-h-full flex flex-col overflow-hidden"
          >
            {/* 헤더 */}
            <div className="shrink-0 flex items-center justify-between gap-3 p-4 sm:p-5 border-b border-line">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-ink">{openPlan.name}</span>
                  <span className="text-sm text-gold font-bold font-mono">
                    전용 {openPlan.areaDedicated}
                  </span>
                </div>
                <div className="text-[11px] text-ink-soft mt-0.5">
                  {unitsLabel(openPlan)} · 총 {openPlan.totalUnits}세대
                  {openPlan.units.note && (
                    <span className="text-ink-muted"> ({openPlan.units.note})</span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setOpenPlan(null)}
                className="shrink-0 p-2 rounded-lg text-ink-soft hover:text-on-gold hover:bg-gold-fill border border-line-strong transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 도면 */}
            <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-5">
              {openPhoto ? (
                <>
                  <img
                    src={openPhoto}
                    alt={`${openPlan.name} 타입 평면도 원본`}
                    className="w-full h-auto object-contain rounded-lg bg-surface-3"
                  />
                  {/* 휴대폰에서는 글자가 작아 읽기 어렵다. 원본을 따로 열어 확대할 수 있게 한다. */}
                  <a
                    href={openPhoto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden mt-2.5 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-surface-3 border border-line-strong text-xs font-semibold text-ink-soft"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>도면 원본 열기 (손가락으로 확대)</span>
                  </a>
                </>
              ) : (
                <div className="py-16 text-center text-ink-muted text-sm">
                  도면 준비 중입니다. {CONSULTATION_CONFIG.managerName}에게 문의해 주세요.
                </div>
              )}

              {/* 면적 상세 */}
              <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                {[
                  ['전용면적', `${openPlan.areaDedicated} (${openPlan.areaDedicatedPyeong})`],
                  ['공급면적', openPlan.areaSupply],
                  ['계약면적', openPlan.areaContract],
                  ['발코니 확장면적', openPlan.areaBalcony],
                ].map(([label, value]) => (
                  <div key={label} className="p-3 rounded-lg bg-surface-3 border border-line">
                    <div className="text-ink-muted text-[11px] mb-0.5">{label}</div>
                    <div className="text-ink font-bold font-mono text-[11px] leading-snug">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 p-3.5 rounded-lg bg-gold-tint border border-gold-line text-xs text-gold font-semibold">
                ※ {openPlan.structure}
              </div>
            </div>

            {/* 하단 CTA */}
            <div className="shrink-0 p-4 sm:p-5 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-ink-muted text-center sm:text-left">
                분양가는 층·향에 따라 달라집니다. 실제 시공 시 일부 사양이 변경될 수 있습니다.
              </span>
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-sm rounded-xl shadow-md transition-all"
              >
                <Phone className="w-4 h-4 fill-on-gold" />
                <span>{openPlan.name} 타입 분양가 문의</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
