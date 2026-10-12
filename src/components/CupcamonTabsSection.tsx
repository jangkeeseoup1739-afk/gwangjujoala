import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { APP_IMAGES } from '../assets/images';
import { CUPCAMON_PREMIUM_7, BLOCK_INFO_LIST, INFRASTRUCTURE_HIGHLIGHTS } from '../data/projectData';
import { CountUp } from './CountUp';
import {
  Building2,
  Trees,
  Cpu,
  PlaneTakeoff,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  Layers,
  MapPin,
  Gift,
  Phone,
  Compass,
  FileCheck,
  ChevronRight
} from 'lucide-react';

interface CupcamonTabsSectionProps {
  onScrollToConsultation: () => void;
  onOpenPassModal: () => void;
}

export const CupcamonTabsSection: React.FC<CupcamonTabsSectionProps> = ({
  onScrollToConsultation,
  onOpenPassModal
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'premium7' | 'blocks' | 'infra' | 'benefits'>('overview');

  const getPremiumIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-6 h-6 text-ok" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-gold" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-6 h-6 text-gold" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-gold" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-gold" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="cupcamon-guide" className="py-20 bg-surface text-ink border-t border-gold-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
          <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
            LOTTE CASTLE SIGNATURE MASTER GUIDE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            중앙공원 롯데캐슬 시그니처 <span className="text-gold">종합 안내관</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            핵심 사업개요, 프리미엄 7, 블럭별 세부현황, 생활 인프라, 전 세대 음식물처리기 무상 제공 혜택을 한눈에 확인하세요.
          </p>
        </div>

        {/* 5 Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 bg-surface-2/88 rounded-2xl border border-line max-w-4xl mx-auto">
          {[
            { id: 'overview', label: '1. 사업개요' },
            { id: 'premium7', label: '2. 프리미엄 7' },
            { id: 'blocks', label: '3. 블럭별 현황 (1/2-1/2-2BL)' },
            { id: 'infra', label: '4. 광주 메가 인프라' },
            { id: 'benefits', label: '5. 분양 혜택 (무상 제공)' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[130px] py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center focus:outline-none ${
                  isActive
                    ? 'bg-gold-fill text-on-gold shadow-md shadow-gold-fill-2/20'
                    : 'text-ink-soft hover:text-ink hover:bg-surface-2'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: 사업개요 */}
        {activeTab === 'overview' && (
          <div className="animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface p-6 sm:p-10 rounded-2xl border-2 border-line">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-tint border border-gold-line text-gold text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-gold" />
                  <span>단지 사업 개요</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                  광주 중앙공원 1지구 <br />
                  <span className="text-gold">총 <CountUp to={2772} suffix="세대" /></span> 매머드 대단지
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  광주광역시 서구 화정동, 금호동, 풍암동 일원에 조성되는 광주 최대 민간공원 특례사업으로, 롯데건설(주)의 최상위 하이엔드 주거 브랜드 '시그니처'가 적용됩니다.
                </p>

                <div className="p-4 rounded-xl bg-surface-2 border border-gold-line text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-ink-soft">시행사:</span>
                    <span className="font-bold text-ink">{CONSULTATION_CONFIG.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-soft">시공사:</span>
                    <span className="font-bold text-gold">{CONSULTATION_CONFIG.constructor}</span>
                  </div>
                  <div className="flex justify-between border-t border-line pt-2">
                    <span className="text-gold font-bold">분양 상담 전담:</span>
                    <span className="font-bold text-gold">{CONSULTATION_CONFIG.managerName} ({CONSULTATION_CONFIG.managerPhone})</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={CONSULTATION_CONFIG.phoneTelLink}
                    className="press inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-xs sm:text-sm transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4 fill-on-gold" />
                    <span>{CONSULTATION_CONFIG.managerName}에게 전화 상담</span>
                  </a>
                  <button
                    onClick={onOpenPassModal}
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-surface-2 hover:bg-surface-3 text-ink border border-line-strong text-xs font-semibold"
                  >
                    <span>방문예약증 확인</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {/* Real lake & complex photo */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gold-line shadow-lg group">
                  <img
                    src={APP_IMAGES.centralParkLake}
                    alt="풍암호수공원 및 중앙공원 롯데캐슬 시그니처 전경"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-photo-scrim/88 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <div className="text-gold-bright font-bold">
                      풍암호수를 품은 도심 속 초대형 숲세권 파노라마
                    </div>
                    <span className="text-on-photo-soft bg-photo-scrim/75 px-2 py-0.5 rounded border border-on-photo/25 text-[11px]">
                      중앙공원 1지구 특례사업
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-line">
                    <span className="text-[11px] text-gold block font-medium">대지 위치</span>
                    <span className="text-xs sm:text-sm font-bold text-ink mt-0.5 block">광주광역시 서구 풍암동, 금호동 일원</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-line">
                    <span className="text-[11px] text-gold block font-medium">건축 규모</span>
                    <span className="text-xs sm:text-sm font-bold text-ink mt-0.5 block">지하 3층 ~ 지상 28층, 총 39개동 (2,772세대)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-line">
                    <span className="text-[11px] text-gold block font-medium">블럭별 공급</span>
                    <span className="text-xs sm:text-sm font-bold text-ink mt-0.5 block">1BL 929세대 / 2-1BL 915세대 / 2-2BL 928세대</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-line">
                    <span className="text-[11px] text-gold block font-medium">견본주택 위치</span>
                    <span className="text-xs sm:text-sm font-bold text-ink mt-0.5 block">광주시 서구 상무누리로 154 (조아라 팀장 전담)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 프리미엄 7 */}
        {activeTab === 'premium7' && (
          <div className="animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CUPCAMON_PREMIUM_7.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl bg-surface border-2 border-line hover:border-gold-line p-6 flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-tint border border-gold-line flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getPremiumIcon(item.iconName)}
                      </div>
                      <span className="font-serif text-2xl font-black text-gold/80 group-hover:text-gold">
                        {item.number}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-ink mb-1 group-hover:text-gold transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs text-gold font-semibold mb-3">
                      {item.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/80 flex items-center justify-between">
                    <span className="text-[11px] text-ink-soft">LOTTE CASTLE SIGNATURE</span>
                    <button
                      onClick={onScrollToConsultation}
                      className="text-xs text-gold hover:text-gold font-bold flex items-center gap-1"
                    >
                      <span>상담 문의</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 블럭별 세부현황 */}
        {activeTab === 'blocks' && (
          <div className="animate-in fade-in duration-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOCK_INFO_LIST.map((b) => (
                <div
                  key={b.block}
                  className={`rounded-2xl p-6 sm:p-7 border-2 transition-all flex flex-col justify-between ${
                    b.badge === '추천 블럭'
                      ? 'bg-gradient-to-b from-surface via-surface-2 to-gold-tint/40 border-gold-line shadow-xl'
                      : 'bg-surface border-line hover:border-gold-line'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-line-strong text-xs font-bold text-gold">
                        <Layers className="w-3.5 h-3.5 text-gold" />
                        <span>{b.block}</span>
                      </div>
                      <span className="text-xs font-bold text-gold bg-gold-tint px-2.5 py-0.5 rounded border border-gold-line">
                        {b.badge}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-line bg-surface-3 flex items-center justify-center">
                      <img
                        src={
                          b.block.includes('1BL')
                            ? APP_IMAGES.bl1Layout
                            : b.block.includes('2-1BL')
                            ? APP_IMAGES.bl2_1Layout
                            : APP_IMAGES.bl2_2Layout
                        }
                        alt={`${b.block} 공식 단지배치도`}
                        className="w-full h-full object-contain p-1"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-surface-2/90 rounded text-[11px] text-gold font-bold border border-gold-line shadow">
                        공식 실물 배치도
                      </div>
                    </div>

                    <h4 className="text-2xl font-black text-ink mb-2">{b.title}</h4>
                    <div className="text-sm font-bold text-gold mb-1">{b.scale}</div>
                    <div className="text-xs text-ink-soft mb-4">{b.floors}</div>

                    <div className="p-3 bg-surface-2/85 rounded-xl border border-line text-xs mb-4">
                      <div className="text-ink-soft mb-1">공급 주택형 라인업:</div>
                      <div className="font-semibold text-ink">{b.lineup}</div>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-4">
                      {b.features}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-line-strong text-xs">
                      {b.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-ink">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line-strong">
                    <a
                      href={CONSULTATION_CONFIG.phoneTelLink}
                      className="w-full py-2.5 rounded-lg bg-surface-2 hover:bg-surface-3 border border-gold-line text-gold hover:text-gold font-bold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold" />
                      <span>{b.block} 로열동호수 상담</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-line flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-sm font-bold text-ink">
                  블럭별 잔여세대 및 로열동호수 프리미엄 1:1 맞춤 상담
                </div>
                <p className="text-xs text-ink-soft">
                  풍암호수 영구 조망 라인과 초등학교 인접 2-2BL 선호도가 높습니다. 조아라 팀장에게 실시간 잔여 동호수를 확인하세요.
                </p>
              </div>

              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="shrink-0 px-5 py-3 rounded-xl bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-on-gold" />
                <span>{CONSULTATION_CONFIG.managerName}에게 동호수 지정 문의</span>
              </a>
            </div>
          </div>
        )}

        {/* TAB 4: 광주 메가 인프라 & 문화벨트 */}
        {activeTab === 'infra' && (
          <div className="animate-in fade-in duration-200 space-y-6">
            {/* Semiconductor vision banner image */}
            <div className="w-full rounded-2xl overflow-hidden border-2 border-gold-line shadow-xl bg-surface-2">
              <div className="relative aspect-[16/9] w-full bg-photo-scrim">
                <img
                  src={APP_IMAGES.semiconductorVision}
                  alt="895조 반도체 메가 클러스터 및 군공항 이전 종전부지 스마트시티 비전"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-gold-line">
                <div>
                  <div className="text-[11px] text-gold font-mono font-bold uppercase tracking-wider">
                    GWANGJU HIGH-TECH INNOVATION BELT
                  </div>
                  <div className="text-sm sm:text-base font-bold text-ink">
                    895조 국가 반도체 메가 클러스터 &amp; 군공항 종전부지 에어로트로폴리스
                  </div>
                </div>
                <span className="shrink-0 self-start sm:self-auto text-xs font-bold text-gold bg-gold-tint-2 px-3 py-1.5 rounded-full border border-gold-line">
                  중앙공원 롯데캐슬 직접 수혜
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {INFRASTRUCTURE_HIGHLIGHTS.map((infra, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface border-2 border-line hover:border-gold-line p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-gold bg-gold-tint px-3 py-1 rounded-full border border-gold-line">
                        {infra.date}
                      </span>
                      <span className="text-xs text-ink-soft font-mono">GWANGJU INFRA</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-ink mb-3">
                      {infra.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-6">
                      {infra.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-line">
                      {infra.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-ink">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-line flex items-center justify-between text-xs">
                    <span className="text-ink-soft">입지 가치 상담</span>
                    <a
                      href={CONSULTATION_CONFIG.phoneTelLink}
                      className="text-gold hover:text-gold font-bold underline"
                    >
                      {CONSULTATION_CONFIG.managerName} 직통 상담 ({CONSULTATION_CONFIG.managerPhone})
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: 분양 혜택 (음식물처리기 무상제공 등) */}
        {activeTab === 'benefits' && (
          <div className="animate-in fade-in duration-200">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-gold-tint via-surface-2 to-gold-tint border-2 border-gold-line shadow-2xl space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-tint-2 border border-gold-fill/40 text-gold text-xs font-bold mb-3">
                    <Gift className="w-4 h-4 text-gold" />
                    <span>계약 세대 특별 무상 제공 프로모션</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                    BASIC KITCHEN <span className="text-gold">음식물 처리기 전 세대 무상 제공</span>
                  </h3>
                  <p className="text-sm text-ink-soft max-w-2xl leading-relaxed mt-2">
                    주방 싱크대 하부 전동 분쇄 처리 방식으로 냄새와 음식물 쓰레기 버리는 번거로움을 완전히 해결해 주는 친환경 프리미엄 음식물 처리기를 무상으로 제공합니다. (※ 무상제공 품목 계약세대에 한하여 제공, 견본주택 현장 실물 전시 중)
                  </p>
                </div>

                <a
                  href={CONSULTATION_CONFIG.phoneTelLink}
                  className="shrink-0 px-6 py-4 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-extrabold text-sm rounded-xl shadow-lg transition-all"
                >
                  무상 혜택 적용 문의 ({CONSULTATION_CONFIG.managerName})
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gold-line text-xs">
                <div className="p-4 bg-surface-2 rounded-xl border border-line">
                  <div className="font-bold text-gold mb-1">1. 싱크대 일체형 분쇄기</div>
                  <div className="text-ink-soft">발판 스위치 터치로 즉각 분쇄 및 하수 배출, 청결한 주방</div>
                </div>
                <div className="p-4 bg-surface-2 rounded-xl border border-line">
                  <div className="font-bold text-gold mb-1">2. 4BAY 맞통풍 발코니 확장</div>
                  <div className="text-ink-soft">최대 서비스 면적 극대화로 실사용 체감 64~103평형대 실현</div>
                </div>
                <div className="p-4 bg-surface-2 rounded-xl border border-line">
                  <div className="font-bold text-gold mb-1">3. VIP 1:1 동행 관람</div>
                  <div className="text-ink-soft">조아라 팀장 사전 지정 예약 시 대기 없이 전담 안내</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
