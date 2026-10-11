import React from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { APP_IMAGES } from '../assets/images';
import { CATALYSTS } from '../data/projectData';
import { Sparkles, TrendingUp, PlaneTakeoff, Cpu, TreePine, Phone, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface MegaCatalystSectionProps {
  onScrollToConsultation: () => void;
}

export const MegaCatalystSection: React.FC<MegaCatalystSectionProps> = ({ onScrollToConsultation }) => {
  return (
    <section id="catalysts" className="py-20 bg-surface-3 text-ink border-t border-gold-line relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-tint-2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-tint-2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-tint border border-gold-line text-gold text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-gold" />
            <span>2026 광주 부동산 시장을 뒤흔들 핵심 게임체인저</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight leading-tight">
            전남·광주 <span className="text-gold">군공항 이전</span> &amp; <br className="hidden sm:inline" />
            국가 <span className="text-gold underline decoration-gold decoration-wavy underline-offset-8">반도체 895조</span> 초대형 호재
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            현재 광주 부동산 시장에서 가장 파급력이 큰 양대 메가 호재! <br className="hidden sm:inline" />
            중앙공원 롯데캐슬 시그니처가 미래 가치와 비즈니스 수혜를 정조준합니다.
          </p>
        </div>

        {/* High-Tech Mega Vision Graphic Card */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden border-2 border-gold-line shadow-2xl mb-12 group bg-photo-scrim">
          <img
            src={APP_IMAGES.semiconductorVision}
            alt="국가 반도체 895조 메가 클러스터 & 광주 군공항 종전부지 스마트시티 미래비전"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                      decoding="async"
                    />
          <div className="absolute inset-0 bg-gradient-to-t from-photo-scrim/92 via-photo-scrim/35 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <div className="text-xs text-gold-bright font-mono font-bold uppercase tracking-wider mb-1">
                NATIONAL HIGH-TECH STRATEGY · 895 TRILLION WON
              </div>
              <div className="text-xl sm:text-2xl font-black text-on-photo">
                대한민국 반도체 메가 클러스터 &amp; 군공항 종전부지 248만평 첨단 미래도시
              </div>
              <div className="text-xs sm:text-sm text-on-photo-soft mt-1">
                광주 서구 랜드마크 중앙공원 롯데캐슬 시그니처가 최고 수혜지로 급부상합니다.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gold-bright bg-gold-deep/85 px-3 py-1.5 rounded-full border border-gold-bright/50">
                최대 수혜 단지
              </span>
            </div>
          </div>
        </div>

        {/* Mega Catalyst Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Catalyst 1: 반도체 895조 */}
          <div className="relative rounded-2xl bg-gradient-to-br from-surface-2 via-surface-2 to-surface p-8 border-2 border-gold-line shadow-xl shadow-gold-line hover:border-gold-fill transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold-tint-2 border border-gold-line flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-gold" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-gold bg-gold-tint border border-gold-line px-3 py-1 rounded-full">
                INVESTMENT 895조원
              </span>
            </div>

            <div className="text-xs text-gold font-semibold mb-1">국가 미래 첨단 전략산업 연계</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mb-4 group-hover:text-gold transition-colors">
              반도체 895조 메가 클러스터 호재
            </h3>

            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
              정부와 민간 기업이 총 895조원을 투입하는 초대형 첨단 반도체·AI 클러스터 개발과 연계되어, 광주·전남 일대에 차세대 인공지능 반도체 패키징 및 모빌리티 첨단 밸리가 조성됩니다. 고소득 석·박사 연구인력 및 대기업 임직원의 호남권 대규모 유입으로, 서구 랜드마크 하이엔드 아파트의 수요와 자산가치가 급상승합니다.
            </p>

            <div className="space-y-3 pt-4 border-t border-line">
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>호남권 최고 소득층 및 첨단 테크 연구인력 배후 주거단지</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>국가 첨단 AI 데이터센터 &amp; 미래차 융합 벨트 중심축</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>자산 가치 방어와 시세 상승을 견인할 독보적 수요 기반</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-gold">
              <span className="font-medium">상담 전담: {CONSULTATION_CONFIG.managerName}</span>
              <span className="font-mono">{CONSULTATION_CONFIG.managerPhone}</span>
            </div>
          </div>

          {/* Catalyst 2: 군공항 이전 */}
          <div className="relative rounded-2xl bg-gradient-to-br from-surface-2 via-surface-2 to-surface p-8 border-2 border-gold-line shadow-xl shadow-gold-line hover:border-gold-fill transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold-tint-2 border border-gold-line flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <PlaneTakeoff className="w-8 h-8 text-gold" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-gold bg-gold-tint border border-gold-line px-3 py-1 rounded-full">
                종전부지 248만평 개발
              </span>
            </div>

            <div className="text-xs text-gold font-semibold mb-1">60년 숙원 사업 해결</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mb-4 group-hover:text-gold transition-colors">
              전남·광주 군공항 이전 본격화
            </h3>

            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
              수십 년간 서구와 광산구를 옭아맸던 군공항 소음과 비행안전구역 고도제한이 완전 해소됩니다. 약 820만㎡(248만평)에 달하는 거대한 종전 부지는 첨단 솔라시티, 스마트 비즈니스 허브, 수변 테크노폴리스로 탈바꿈하며, 그 인접지인 서구 중앙공원 일대는 쾌적한 주거환경과 도심 인프라를 동시에 선점합니다.
            </p>

            <div className="space-y-3 pt-4 border-t border-line">
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>비행기 굉음 소음 스트레스 영구 종식 및 주거 쾌적성 극대화</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>고도제한 철폐로 서구 도심 스카이라인 및 토지 가치 재평가</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>광주 신도심 개발 중심축 이동으로 서구 아파트 자산가치 수직 상승</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-gold">
              <span className="font-medium">상담 전담: {CONSULTATION_CONFIG.managerName}</span>
              <span className="font-mono">{CONSULTATION_CONFIG.managerPhone}</span>
            </div>
          </div>
        </div>

        {/* Investment Synergy Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-gold-tint/60 via-surface-2 to-gold-tint/60 border border-gold-line p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs uppercase tracking-wider text-gold font-bold">
              LOTTE CASTLE SIGNATURE INVESTMENT VALUE
            </div>
            <div className="text-xl sm:text-2xl font-bold text-ink">
              “지금이 선점 타이밍! 895조 호재 연계 프리미엄을 {CONSULTATION_CONFIG.managerName}에게 확인하세요”
            </div>
            <p className="text-sm text-ink-soft">
              군공항 이전 단계별 시세 변동 분석 및 잔여 세대 분양가·로열동호수 상담을 1:1로 안내해 드립니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={CONSULTATION_CONFIG.phoneTelLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-sm shadow-lg shadow-gold-fill-2/20 transition-all"
            >
              <Phone className="w-4 h-4 fill-on-gold" />
              <span>{CONSULTATION_CONFIG.managerName}에게 전화 상담</span>
            </a>
            <button
              onClick={onScrollToConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-3 hover:bg-line-strong text-ink border border-line-strong text-sm font-semibold transition-all"
            >
              <span>호재 분석 자료 신청</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
