import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { FLOOR_PLANS, FloorPlan } from '../data/projectData';
import { floorPlanPhoto } from '../assets/images';
import { Maximize2, Check, Phone, Eye, Layers, Compass, Sparkles, Building2, Tag, X } from 'lucide-react';

interface FloorPlansSectionProps {
  onScrollToConsultation: () => void;
}

export const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({ onScrollToConsultation }) => {
  const [activePlanId, setActivePlanId] = useState<string>('102');
  const [zoomPhoto, setZoomPhoto] = useState<string | null>(null);

  const currentPlan = FLOOR_PLANS.find((p) => p.id === activePlanId) || FLOOR_PLANS[0];
  const planPhoto = floorPlanPhoto(currentPlan.id);

  return (
    <section id="floorplans" className="py-20 bg-surface text-ink border-t border-gold-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
            UNIT PLANS &amp; ARCHITECTURAL LAYOUTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            2-2블럭 타입별 <span className="text-gold">평면도 및 실사용 면적</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            판상형 4-BAY 구조, 더블 팬트리와 드레스룸 2개소, 실사용 면적 극대화로 실평수 64~103평형대의 여유를 선사합니다.
          </p>
        </div>

        {/* Plan Selectors Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FLOOR_PLANS.map((plan) => {
            const isActive = plan.id === activePlanId;
            return (
              <button
                key={plan.id}
                onClick={() => setActivePlanId(plan.id)}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold-fill text-on-gold shadow-lg shadow-gold-fill-2/25 scale-105'
                    : 'bg-surface-2 text-ink-soft hover:text-ink hover:bg-surface-3 border border-line'
                }`}
              >
                <span>{plan.name}</span>
                <span className="text-[11px] opacity-80">({plan.pyeongName})</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-surface text-gold font-mono' : 'bg-surface-3 text-ink-soft'
                  }`}
                >
                  {plan.householdCount}세대
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Plan Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-2 rounded-2xl border-2 border-line p-6 sm:p-10 shadow-2xl">
          {/* Left: Architectural Blueprint Visualizer */}
          <div className="lg:col-span-7 bg-surface rounded-xl p-6 border border-line relative group overflow-hidden">
            {/* Top architectural label */}
            <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-fill animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-gold uppercase">
                  {currentPlan.name} ({currentPlan.pyeongName}) 평면 레이아웃
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gold font-bold bg-gold-tint px-2 py-0.5 rounded border border-gold-line">
                  {currentPlan.priceEst}
                </span>
              </div>
            </div>

            {/* 평면도 사진이 올라와 있으면 사진을, 없으면 아래 구조 도식을 보여준다 */}
            {planPhoto ? (
              <div
                onClick={() => setZoomPhoto(planPhoto)}
                className="relative rounded-lg overflow-hidden border border-line-strong bg-surface-3 cursor-pointer group/plan"
              >
                <img
                  src={planPhoto}
                  alt={`${currentPlan.name} (${currentPlan.pyeongName}) 평면도`}
                  className="w-full h-auto object-contain max-h-[520px] mx-auto transition-transform duration-500 group-hover/plan:scale-102"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-surface-2/92 rounded-lg text-[11px] text-gold font-semibold flex items-center gap-1.5 border border-gold-line shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>평면도 크게보기</span>
                </div>
              </div>
            ) : (
            <div className="relative min-h-[350px] flex flex-col justify-between p-4 bg-surface-3/70 rounded-lg border border-dashed border-line-strong/80">
              {/* Compass & North indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] text-ink-soft font-mono bg-surface-2/92 px-2.5 py-1 rounded border border-line">
                <Compass className="w-3.5 h-3.5 text-gold" />
                <span>남향 / 남동·남서향 배치</span>
              </div>

              {/* Blueprint Floor Layout Simulation */}
              <div className="my-auto py-6 space-y-4">
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
                  <div className="p-3 bg-surface-2/92 rounded border border-gold-line text-gold">
                    <div className="text-[10px] text-ink-soft">침실 1</div>
                    발코니 확장형
                  </div>
                  <div className="p-3 bg-surface-2/92 rounded border border-gold-line text-gold">
                    <div className="text-[10px] text-ink-soft">거실 (LDK)</div>
                    초광폭 와이드
                  </div>
                  <div className="p-3 bg-surface-2/92 rounded border border-gold-line text-gold">
                    <div className="text-[10px] text-ink-soft">침실 2</div>
                    수납 빌트인
                  </div>
                  <div className="p-3 bg-surface-2/92 rounded border border-gold-line text-gold">
                    <div className="text-[10px] text-ink-soft">안방 (Master)</div>
                    스위트룸 특화
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-surface/60 rounded border border-line text-ink-soft">
                    <div className="text-[10px] text-gold/80">수납 특화</div>
                    대형 팬트리 2EA
                  </div>
                  <div className="p-2.5 bg-surface/60 rounded border border-line text-ink-soft">
                    <div className="text-[10px] text-gold/80">주방 설계</div>
                    11자형 / ㄷ자형 아일랜드
                  </div>
                  <div className="p-2.5 bg-surface/60 rounded border border-line text-ink-soft">
                    <div className="text-[10px] text-gold/80">드레스존</div>
                    드레스룸 2EA (스타일러존)
                  </div>
                </div>

                <div className="p-3 bg-gold-tint rounded border border-gold-line text-center">
                  <span className="text-xs font-semibold text-gold">
                    ※ {currentPlan.structure}
                  </span>
                </div>
              </div>

              {/* Bottom Spec Footer */}
              <div className="pt-3 border-t border-line flex items-center justify-between text-xs text-ink-soft font-mono">
                <span className="text-gold font-bold">{currentPlan.effectiveAreaPyeong}</span>
                <span>용적률 219.88%</span>
              </div>
            </div>
            )}

            <div className="mt-4 flex items-center justify-between text-xs text-ink-soft">
              <span>* 견본주택 현장에서 건립 세대 실물 유니트를 직접 관람하실 수 있습니다.</span>
            </div>
          </div>

          {/* Right: Plan Details & CTA */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-gold tracking-wider uppercase">
                  2-2블럭 대표 주택형
                </span>
                <span className="text-xs text-ink-soft font-mono">({currentPlan.pyeongName})</span>
              </div>
              <h3 className="text-3xl font-extrabold text-ink">
                {currentPlan.name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm font-bold text-gold bg-gold-tint px-2.5 py-1 rounded border border-gold-line">
                  분양가: {currentPlan.priceEst}
                </span>
                <span className="text-xs text-ink-soft font-mono">
                  {currentPlan.effectiveAreaPyeong}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink-soft mt-3 leading-relaxed">
                {currentPlan.description}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-surface rounded-lg border border-line">
                <span className="text-ink-soft block">전용 면적</span>
                <span className="text-ink font-bold">{currentPlan.areaDedicated}</span>
              </div>
              <div className="p-3 bg-surface rounded-lg border border-line">
                <span className="text-ink-soft block">공급 세대수</span>
                <span className="text-gold font-bold">{currentPlan.householdCount}세대</span>
              </div>
            </div>

            {/* Core Feature Bullet Points */}
            <div className="space-y-2 pt-2 border-t border-line">
              <div className="text-xs font-bold text-ink-soft mb-2">설계 및 특화 포인트</div>
              {currentPlan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ink-soft">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Inquire Action Button */}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-sm rounded-xl shadow-lg transition-all"
              >
                <Phone className="w-4 h-4 fill-on-gold" />
                <span>{CONSULTATION_CONFIG.managerName}에게 {currentPlan.name} 상담</span>
              </a>

              <button
                onClick={onScrollToConsultation}
                className="w-full py-2.5 px-4 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong font-medium text-xs rounded-xl transition-all"
              >
                {currentPlan.name} 잔여 동호수 및 금융조건 문의하기
              </button>
            </div>
          </div>
        </div>

        {/* 2-2 Block Total Distribution Table from User Photo KakaoTalk_20261010_163859264_01.jpg */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-2 border border-line">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-base font-bold text-ink flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gold" />
                <span>1지구 2-2BL 세대수 총괄 현황표</span>
              </h4>
              <p className="text-xs text-ink-soft mt-0.5">
                총 928세대 · 용적률 219.88% · 풍암호수 뷰 &amp; 산책로 진입 · 화개초 도보 3분
              </p>
            </div>
            <div className="text-xs text-ink-soft">
              상담 문의: <strong className="text-gold">{CONSULTATION_CONFIG.managerName}</strong> ({CONSULTATION_CONFIG.managerPhone})
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-surface text-ink-soft">
                  <th className="py-2.5 px-3">타입</th>
                  <th className="py-2.5 px-3">평형</th>
                  <th className="py-2.5 px-3">세대수</th>
                  <th className="py-2.5 px-3">전용면적</th>
                  <th className="py-2.5 px-3">실사용면적(체감)</th>
                  <th className="py-2.5 px-3">분양가 기준</th>
                  <th className="py-2.5 px-3">구조 특화</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-ink">
                <tr className="hover:bg-surface-3">
                  <td className="py-2.5 px-3 font-bold text-ink">84A / 84B</td>
                  <td className="py-2.5 px-3">34평형</td>
                  <td className="py-2.5 px-3">206세대 (175/31)</td>
                  <td className="py-2.5 px-3">전용 84㎡</td>
                  <td className="py-2.5 px-3">확장형</td>
                  <td className="py-2.5 px-3 text-gold">상담 문의</td>
                  <td className="py-2.5 px-3">판상형 4BAY / 안방 드레스룸</td>
                </tr>
                <tr className="hover:bg-surface-3 bg-surface/40">
                  <td className="py-2.5 px-3 font-bold text-gold">102타입</td>
                  <td className="py-2.5 px-3">39평형</td>
                  <td className="py-2.5 px-3 font-bold">164세대</td>
                  <td className="py-2.5 px-3">전용 31평 (102.5㎡)</td>
                  <td className="py-2.5 px-3 font-bold text-gold">실 64.7평형대</td>
                  <td className="py-2.5 px-3 text-gold font-bold">총층 9억대</td>
                  <td className="py-2.5 px-3">판상형 4BAY / 팬트리 2EA / 알파룸 / ㄷ자 주방</td>
                </tr>
                <tr className="hover:bg-surface-3">
                  <td className="py-2.5 px-3 font-bold text-gold">121타입</td>
                  <td className="py-2.5 px-3">45평형</td>
                  <td className="py-2.5 px-3 font-bold">170세대</td>
                  <td className="py-2.5 px-3">전용 36평 (121.2㎡)</td>
                  <td className="py-2.5 px-3 font-bold text-gold">실 81.6평형대</td>
                  <td className="py-2.5 px-3 text-gold font-bold">총층 10억대</td>
                  <td className="py-2.5 px-3">판상형 4BAY / 팬트리 2EA / 알파룸 / 초광폭 거실</td>
                </tr>
                <tr className="hover:bg-surface-3 bg-surface/40">
                  <td className="py-2.5 px-3 font-bold text-gold">139A타입</td>
                  <td className="py-2.5 px-3">52평형</td>
                  <td className="py-2.5 px-3 font-bold">123세대</td>
                  <td className="py-2.5 px-3">전용 42평 (139.1㎡)</td>
                  <td className="py-2.5 px-3 font-bold text-gold">실 95.2평형대</td>
                  <td className="py-2.5 px-3 text-gold font-bold">총층 12억 3천</td>
                  <td className="py-2.5 px-3">판상형 4BAY / 팬트리 2EA / 드레스룸 2EA / 11자 주방</td>
                </tr>
                <tr className="hover:bg-surface-3">
                  <td className="py-2.5 px-3 font-bold text-ink">139B-2타입</td>
                  <td className="py-2.5 px-3">52평형</td>
                  <td className="py-2.5 px-3">129세대</td>
                  <td className="py-2.5 px-3">전용 42평 (139.3㎡)</td>
                  <td className="py-2.5 px-3 font-bold text-gold">실 103.0평형대</td>
                  <td className="py-2.5 px-3 text-gold">총층 12억 4천</td>
                  <td className="py-2.5 px-3">탑상형 타워뷰 / 팬트리 2EA / 알파룸+베타룸</td>
                </tr>
                <tr className="hover:bg-surface-3 bg-surface/40">
                  <td className="py-2.5 px-3 font-bold text-ink">139C타입</td>
                  <td className="py-2.5 px-3">52평형</td>
                  <td className="py-2.5 px-3">126세대</td>
                  <td className="py-2.5 px-3">전용 42평 (139.4㎡)</td>
                  <td className="py-2.5 px-3 font-bold text-gold">실 102.9평형대</td>
                  <td className="py-2.5 px-3 text-gold">총층 12억 6천</td>
                  <td className="py-2.5 px-3">판상형 4BAY / 안방 드레스룸 특화 / 남서향 영구조망</td>
                </tr>
                <tr className="hover:bg-surface-3">
                  <td className="py-2.5 px-3 font-bold text-gold">펜트하우스 등</td>
                  <td className="py-2.5 px-3">52~90평형</td>
                  <td className="py-2.5 px-3">10세대</td>
                  <td className="py-2.5 px-3">전용 50~70평</td>
                  <td className="py-2.5 px-3 font-bold text-gold">실 103~315평형대</td>
                  <td className="py-2.5 px-3 text-gold font-bold">상담 지정</td>
                  <td className="py-2.5 px-3">복층 &amp; 루프탑 테라스 / 360° 파노라마 뷰</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 평면도 사진 확대 보기 */}
      {zoomPhoto && (
        <div
          onClick={() => setZoomPhoto(null)}
          className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-surface-2 rounded-2xl border-2 border-gold-line shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-auto p-4 sm:p-6"
          >
            <div className="flex items-center justify-between mb-3 gap-3">
              <div className="text-sm font-bold text-ink">
                {currentPlan.name} <span className="text-ink-soft font-medium">({currentPlan.pyeongName}) 평면도</span>
              </div>
              <button
                onClick={() => setZoomPhoto(null)}
                className="p-2 rounded-lg text-ink-soft hover:text-on-gold hover:bg-gold-fill border border-line-strong transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={zoomPhoto}
              alt={`${currentPlan.name} 평면도 원본`}
              className="w-full h-auto object-contain rounded-lg bg-surface-3"
            />
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-ink-soft">
                ※ 실제 시공 시 일부 사양이 변경될 수 있습니다. 자세한 사항은 담당자에게 문의해 주세요.
              </span>
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-sm rounded-xl shadow-md transition-all"
              >
                <Phone className="w-4 h-4 fill-on-gold" />
                <span>{currentPlan.name} 상담하기</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
