import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { APP_IMAGES } from '../assets/images';
import { Phone, FileText, Sparkles, Building2, Trees, Cpu, Calendar, Maximize2, X, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onScrollToConsultation: () => void;
  onOpenPassModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToConsultation,
  onOpenPassModal
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<number>(0);

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);

  const heroThemes = [
    {
      badge: "초특급 호재 1위",
      icon: Cpu,
      title: "군공항 이전 확정 & 반도체 895조 메가 클러스터",
      sub: "소음·고도제한 완전 철폐 및 호남권 최고 소득 첨단 인력 배후 주거타운",
      accent: "text-amber-400"
    },
    {
      badge: "호남권 최대 규모",
      icon: Building2,
      title: "총 2,772세대 39개동 매머드급 하이엔드 랜드마크",
      sub: "1BL(929), 2-1BL(915), 2-2BL(928) 롯데건설 최고급 시그니처 브랜드",
      accent: "text-amber-300"
    },
    {
      badge: "희소 에코 라이프",
      icon: Trees,
      title: "풍암호수를 품은 광주 최대 민간공원 1지구 특례사업",
      sub: "단지 앞 풍암호수 수변 산책로 영구 조망 및 화개초등학교 도보 3분 안심학군",
      accent: "text-emerald-400"
    },
    {
      badge: "계약 특별 혜택",
      icon: Sparkles,
      title: "친환경 음식물 처리기 전 세대 무상 제공 & 4BAY 혁신설계",
      sub: "더블 드레스룸, 대형 팬트리 2개소, 실사용 면적 극대화 64~103평형대 체감",
      accent: "text-amber-300"
    }
  ];

  const currentTheme = heroThemes[activeHeroTab];

  // 대표 사진 1장만 사용한다. 바꾸시려면 photos/birdeye.jpg 를 넣으세요.
  const currentBg = {
    badge: '공식 광역 조감도',
    src: APP_IMAGES.mainBirdEyeView,
    alt: '중앙공원 롯데캐슬 시그니처 광역 조감도 전경',
    description: '중앙공원 1지구 풍암호수와 도심 스카이라인을 담은 공식 광역 조감도',
  };


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-photo-scrim/40 via-photo-scrim to-surface text-on-photo pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      {/* 1. Full-Bleed Atmospheric Background Photo (User's original attached photo / selectable) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={currentBg.src}
          alt={currentBg.alt}
          className="w-full h-full object-cover object-center scale-100 transition-all duration-700 ease-out filter brightness-100 contrast-105"
        />
        {/* Elegant dark overlay so texts are readable while retaining photo details */}
        <div className="absolute inset-0 bg-gradient-to-b from-photo-scrim/55 via-photo-scrim/35 to-photo-scrim/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-bright/12 via-transparent to-photo-scrim/55" />
        {/* 아래 아이보리 섹션으로 부드럽게 이어지는 페이드 */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-surface" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Interactive Hero Feature Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {heroThemes.map((theme, index) => {
            const isActive = activeHeroTab === index;
            const Icon = theme.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveHeroTab(index)}
                className={`px-3.5 py-2.5 sm:py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-amber-400 text-stone-950 shadow-md shadow-amber-400/20 scale-105'
                    : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800 backdrop-blur-sm'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                <span>{theme.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Highlight Banner */}
        <div className="p-3 rounded-xl bg-stone-900/85 border border-amber-500/40 max-w-2xl mx-auto mb-5 transition-all backdrop-blur-md">
          <div className="text-xs sm:text-sm font-bold text-amber-300">
            {currentTheme.title}
          </div>
          <div className="text-[11px] sm:text-xs text-stone-300 mt-0.5">
            {currentTheme.sub}
          </div>
        </div>

        {/* Project Title Heading */}
        <div className="space-y-2 mb-5">
          <div className="text-xs sm:text-sm md:text-base font-serif uppercase tracking-[0.3em] text-amber-400/90 font-medium">
            LOTTE CASTLE SIGNATURE · 조아라 팀장 전담
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
            중앙공원 롯데캐슬 시그니처
          </h1>
          <p className="text-lg sm:text-2xl font-light text-stone-200 tracking-wide drop-shadow">
            분양 정보 및 주택형 1:1 전담 상담
          </p>
        </div>

        {/* PROMINENT VISUAL DISPLAY: Clear Photo Showcase Frame Right in the Hero */}
        <div className="w-full max-w-3xl mx-auto my-4 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl shadow-stone-950/80 bg-stone-950/90 backdrop-blur-md relative group">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900 cursor-pointer" onClick={() => setIsPhotoModalOpen(true)}>
            <img
              src={currentBg.src}
              alt={currentBg.alt}
              className="w-full h-full object-cover sm:object-contain group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay badge on photo */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-stone-950 shadow-md">
                {currentBg.badge}
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-950/80 text-amber-200 border border-amber-400/30 backdrop-blur-sm">
                클릭시 원본 확대
              </span>
            </div>

            <div className="absolute bottom-3 right-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPhotoModalOpen(true);
                }}
                className="px-3.5 py-2.5 rounded-xl bg-stone-950/85 hover:bg-amber-400 hover:text-stone-950 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>원본 사진 전체보기</span>
              </button>
            </div>
          </div>

          <div className="p-3 bg-stone-900/95 border-t border-amber-500/30 flex items-center justify-between text-left">
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{currentBg.alt}</span>
              </div>
              <div className="text-xs text-stone-300 mt-0.5">
                {currentBg.description}
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Manager & Contact Card */}
        <div className="max-w-xl mx-auto my-5 p-6 sm:p-7 rounded-2xl bg-stone-900/90 border-2 border-amber-500/50 shadow-2xl shadow-stone-950/80 backdrop-blur-md relative overflow-hidden group w-full">
          {/* Subtle gold corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-400 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-amber-400 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-amber-400 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-400 rounded-br-xl pointer-events-none" />

          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
            분양 상담 총괄 전담
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            담당자 <span className="text-amber-300 underline decoration-amber-400/50 underline-offset-4">{CONSULTATION_CONFIG.managerName}</span>
          </div>

          <a
            href={CONSULTATION_CONFIG.phoneTelLink}
            className="inline-block text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-amber-400 hover:text-amber-300 transition-transform group-hover:scale-105 my-1"
          >
            {CONSULTATION_CONFIG.managerPhone}
          </a>

          <div className="mt-3 text-xs sm:text-sm text-stone-300 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>실시간 전화 및 1:1 방문 예약 상담 가능</span>
            <span>·</span>
            <span>견본주택: 상무누리로 154</span>
          </div>
        </div>

        {/* 3 Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto mb-8 w-full">
          {/* Button 1: 전화 상담하기 */}
          <a
            href={CONSULTATION_CONFIG.phoneTelLink}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm sm:text-base font-bold whitespace-nowrap text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-1 focus:ring-4 focus:ring-amber-500/30"
          >
            <Phone className="w-4 h-4 fill-stone-950 shrink-0" />
            <span>전화 상담하기</span>
          </a>

          {/* Button 2: 분양 정보 문의하기 */}
          <button
            onClick={onScrollToConsultation}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm sm:text-base font-bold whitespace-nowrap text-white bg-stone-800 hover:bg-stone-700 border border-stone-600 hover:border-amber-400/60 shadow-md transition-all transform hover:-translate-y-1 focus:ring-4 focus:ring-stone-600/30"
          >
            <FileText className="w-4 h-4 text-amber-400 shrink-0" />
            <span>분양 정보 문의하기</span>
          </button>

          {/* Button 3: VIP 방문예약증 발급 */}
          <button
            onClick={onOpenPassModal}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm sm:text-base font-bold whitespace-nowrap text-amber-300 bg-amber-950/50 hover:bg-amber-900/60 border border-amber-600/60 shadow-md transition-all transform hover:-translate-y-1 focus:ring-4 focus:ring-amber-800/40"
          >
            <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
            <span>VIP 방문예약증 발급</span>
          </button>
        </div>

        {/* Key Quick Highlights Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-stone-800/80 text-left w-full">
          <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
            <div className="text-xs text-amber-400 font-medium">초대형 개발호재</div>
            <div className="text-sm sm:text-base font-bold text-white mt-0.5">군공항 이전 & 895조 반도체</div>
            <div className="text-[11px] text-stone-300 mt-1">소음·고도제한 완전해소</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
            <div className="text-xs text-amber-400 font-medium">단지 규모</div>
            <div className="text-sm sm:text-base font-bold text-white mt-0.5">총 2,772세대 랜드마크</div>
            <div className="text-[11px] text-stone-300 mt-1">풍암호수 품은 중앙공원 1지구</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
            <div className="text-xs text-amber-400 font-medium">주택형 라인업</div>
            <div className="text-sm sm:text-base font-bold text-white mt-0.5">102㎡·121㎡·139㎡·펜트</div>
            <div className="text-[11px] text-stone-300 mt-1">4BAY 판상형 / 더블 드레스룸</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
            <div className="text-xs text-amber-400 font-medium">특별 계약 혜택</div>
            <div className="text-sm sm:text-base font-bold text-white mt-0.5">음식물처리기 무상제공</div>
            <div className="text-[11px] text-stone-300 mt-1">조아라 팀장 전담 1:1 안내</div>
          </div>
        </div>

        {/* Fast Action VIP Pass Trigger Link */}
        <div className="mt-6">
          <button
            onClick={onOpenPassModal}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-300 hover:text-amber-300 underline decoration-stone-600 hover:decoration-amber-400 transition-colors"
          >
            <span>※ 모델하우스 방문 전 필수: 디지털 [방문예약증] 모바일 발급 및 확인</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Viewing the High-Resolution Background Photo */}
      {isPhotoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-stone-900 border-2 border-amber-500 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
              <div>
                <span className="text-xs font-extrabold px-3 py-1 rounded bg-amber-400 text-stone-950">
                  {currentBg.badge}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mt-2">
                  {currentBg.alt}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                  {currentBg.description}
                </p>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
                aria-label="닫기"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-stone-950 flex items-center justify-center max-h-[75vh]">
              <img
                src={currentBg.src}
                alt={currentBg.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-inner"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-800 text-xs text-stone-300">
              <div className="font-semibold text-white">{currentBg.alt}</div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold hover:from-amber-300 hover:to-amber-400 transition-colors shadow-md"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
