import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { APP_IMAGES } from '../assets/images';
import { Layers, Maximize2, Phone, Sparkles, Building2, CheckCircle2, ChevronRight, X, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface SitePlansSectionProps {
  onScrollToConsultation: () => void;
}

interface BlueprintItem {
  id: string;
  title: string;
  subtitle: string;
  category: '단지배치도' | '동호수배치도' | '상세배치표' | '입면도' | '조감도';
  imageUrl: string;
  badge: string;
  description: string;
  points: string[];
}

export const SitePlansSection: React.FC<SitePlansSectionProps> = ({ onScrollToConsultation }) => {
  const [activeBlock, setActiveBlock] = useState<'panorama' | '1BL' | '2-1BL' | '2-2BL' | 'elevation'>('panorama');
  const [activeModalBlueprint, setActiveModalBlueprint] = useState<BlueprintItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const blockData: Record<string, {
    title: string;
    sub: string;
    units: string;
    features: string;
    items: BlueprintItem[];
  }> = {
    'panorama': {
      title: '공식 광역 조감도 (전체 2,772세대 항공 파노라마)',
      sub: '풍암호수, 중앙공원 숲세권, 월드컵경기장, 39개동 매머드 랜드마크 전경',
      units: '총 2,772세대',
      features: '광주 서구의 새로운 스카이라인과 사계절 푸른 중앙공원 및 풍암호수를 품은 압도적 스케일의 공식 광역 조감도입니다.',
      items: [
        {
          id: 'main-aerial-panorama',
          title: '중앙공원 롯데캐슬 시그니처 공식 광역 조감도',
          subtitle: '단지 전경, 풍암호수공원, 광주 월드컵경기장 및 도심 스카이라인',
          category: '조감도',
          imageUrl: APP_IMAGES.mainBirdEyeView,
          badge: '공식 광역조감도',
          description: '도심 속 거대한 호수와 녹지공원, 롯데건설 하이엔드 주동이 어우러진 중앙공원 롯데캐슬 시그니처의 공식 항공 조감도입니다.',
          points: [
            '풍암호수 및 수변 산책로와 인접한 2-1BL 수변 특화 라인',
            '화개초등학교 및 안심 통학권을 확보한 2-2BL 랜드마크',
            '광주 서남권 도심과 숲세권을 잇는 2,772세대 초대형 매머드 스케일'
          ]
        }
      ]
    },
    '2-2BL': {
      title: '2-2블럭 (화개초 안심통학 랜드마크)',
      sub: '총 928세대 · 84㎡, 102㎡, 121㎡, 139A/B/C㎡, 펜트하우스',
      units: '928세대',
      features: '단지 바로 앞 화개초등학교 안심통학, 판상형 4-BAY 중대형 평형 집중 배치, 최고급 펜트하우스 라인업',
      items: [
        {
          id: '2-2bl-layout',
          title: '2-2블럭 단지 배치도 (조경 & 보행 동선)',
          subtitle: '광주광역시 서구 풍암동 일원 (2,772세대 중 928세대)',
          category: '단지배치도',
          imageUrl: APP_IMAGES.bl2_2Layout,
          badge: '공식 단지배치도',
          description: '화개초등학교 연결 보행로와 중앙광장, 남향 위주 판상형 4-BAY 주동 배치가 완비된 공식 단지 배치도입니다.',
          points: [
            '화개초 도보 3분 안심 통학로 및 단지 내 보행전용 순환로',
            '남향/남동향/남서향 배치로 일조권 및 통풍성 극대화',
            '단지 내 풍부한 테마 정원과 에코 커뮤니티 공간 직결'
          ]
        },
        {
          id: '2-2bl-layout-detail',
          title: '2-2블럭 세부 배치 및 레벨 계획도',
          subtitle: '동별 간격, 지하주차장 진입로, 지형 단차 계획',
          category: '단지배치도',
          imageUrl: APP_IMAGES.bl2_2LayoutDetail,
          badge: '세부 배치도',
          description: '동간 거리 간섭을 최소화하고 보행자와 차량 동선을 완전 분리한 2-2블럭 세부 지형 단면 및 배치도입니다.',
          points: [
            '지상에 차 없는 공원형 안심 단지 설계',
            '동간 거리 최대화로 세대 간 사생활 침해 완벽 차단',
            '지하주차장 광폭 주차면 및 전기차 충전 스테이션'
          ]
        },
        {
          id: '2-2bl-units',
          title: '2-2블럭 동호수 배치도 (전체 주동)',
          subtitle: '동별 층수 및 세대별 타입 라인업 현황',
          category: '동호수배치도',
          imageUrl: APP_IMAGES.bl2_2Units,
          badge: '동호수 배치도',
          description: '2-2블럭 전체 동별 최고 층수와 각 라인별 주택형(84, 102, 121, 139㎡) 배치 현황을 한눈에 볼 수 있는 도면입니다.',
          points: [
            '최고 28층 스카이라인 및 라인별 엘리베이터 동선',
            '102㎡, 121㎡, 139㎡ 로열층 조망 라인 확인 가능',
            '최상층 프라이빗 펜트하우스 단독 세대 확인'
          ]
        },
        {
          id: '2-2bl-units-detail',
          title: '2-2블럭 동호수 상세배치표 (군별 분류)',
          subtitle: '타입별 색상 구분 및 세대수 정밀 표기',
          category: '상세배치표',
          imageUrl: APP_IMAGES.bl2_2UnitsDetail,
          badge: '정밀 동호표',
          description: '각 동의 층별 호수 번호와 타입별 전용면적 컬러 매핑이 완벽히 정리된 상세 동호수 배치표입니다.',
          points: [
            '색상별 평형 구분으로 원하는 호실 즉각 파악 가능',
            '필로티 층 및 특화 세대 층수 표기',
            '조아라 팀장과 상담 시 잔여 세대 즉시 확인 가능'
          ]
        }
      ]
    },
    '2-1BL': {
      title: '2-1블럭 (풍암호수 영구조망 수변특화)',
      sub: '총 915세대 · 121㎡, 139㎡, 166㎡ 대형 하이엔드 라인업',
      units: '915세대',
      features: '풍암호수 수변 산책로를 단지 앞마당처럼 영구 조망하는 독보적 수변 뷰, 대형 평형 중심의 하이엔드 주거타운',
      items: [
        {
          id: '2-1bl-layout',
          title: '2-1블럭 단지 배치도 (호수공원 직결)',
          subtitle: '광주광역시 서구 풍암동 일원 (915세대)',
          category: '단지배치도',
          imageUrl: APP_IMAGES.bl2_1Layout,
          badge: '공식 단지배치도',
          description: '풍암호수 수변 산책로와 직접 연결되는 단지 출입구와 호수 조망을 극대화한 주동 배치가 돋보이는 도면입니다.',
          points: [
            '단지 앞 풍암호수공원 영구 조망권 확보 라인',
            '사계절 수변 테마 산책로 직결 보행 게이트',
            '롯데건설 최고급 대형 평형 단독 클러스터'
          ]
        },
        {
          id: '2-1bl-units',
          title: '2-1블럭 동호수 배치도',
          subtitle: '동별 층수 및 대형 평형 라인 배정 현황',
          category: '동호수배치도',
          imageUrl: APP_IMAGES.bl2_1Units,
          badge: '동호수 배치도',
          description: '호수 조망권 프리미엄이 가장 높은 2-1블럭 각 동의 층수 및 세대 라인을 정밀하게 나타낸 배치도입니다.',
          points: [
            '풍암호수 파노라마 뷰 라인 확인',
            '중대형 및 대형 펜트하우스 층별 구성',
            '탁 트인 개방감과 조망 간섭 제로 주동 배치'
          ]
        },
        {
          id: '2-1bl-units-detail',
          title: '2-1블럭 동호수 상세배치표',
          subtitle: '타입별 정밀 층호수 및 세대수 구성',
          category: '상세배치표',
          imageUrl: APP_IMAGES.bl2_1UnitsDetail,
          badge: '정밀 동호표',
          description: '2-1블럭 각 세대의 정확한 호실 번호와 면적 구분이 담긴 공식 상세 배치표입니다.',
          points: [
            '호수 뷰 정면 로열동호수 라인 파악 가능',
            '층별 세대수 및 전용면적 컬러 매핑',
            '조아라 팀장 직통 잔여호실 실시간 대조 가능'
          ]
        }
      ]
    },
    '1BL': {
      title: '1블럭 (중앙공원 북측 숲세권 도심생활권)',
      sub: '총 929세대 · 84㎡, 102㎡, 114㎡ 실속 중대형',
      units: '929세대',
      features: '중앙공원 북측 청정 숲세권과 금호지구 완성된 도심 생활 인프라, 도시철도 2호선(예정) 접근성',
      items: [
        {
          id: '1bl-layout',
          title: '1블럭 단지 배치도',
          subtitle: '광주광역시 서구 화정동·금호동 일원 (929세대)',
          category: '단지배치도',
          imageUrl: APP_IMAGES.bl1Layout,
          badge: '공식 단지배치도',
          description: '중앙공원 숲세권과 금호지구 생활권을 동시에 아우르는 1블럭 929세대의 전체 마스터 단지 배치도입니다.',
          points: [
            '북측 숲세권 산책로와 도심 도로망 입체 연결',
            '남향 중심 일조 특화 판상형 주동 배치',
            '주민 복합 커뮤니티 및 어린이 놀이터 분산 배치'
          ]
        },
        {
          id: '1bl-units',
          title: '1블럭 동호수 배치도',
          subtitle: '101동~108동 주동 층수 및 라인 구성',
          category: '동호수배치도',
          imageUrl: APP_IMAGES.bl1Units,
          badge: '동호수 배치도',
          description: '1블럭 각 동의 전체 층수와 타입별 라인 위치를 명확히 보여주는 공식 동호수 배치도입니다.',
          points: [
            '동별 최고 층수 및 조망 방향 확인',
            '84㎡ 및 102㎡ 실속 평형 로열 라인',
            '지하철 2호선 접근성 우수 동 확인'
          ]
        },
        {
          id: '1bl-units-detail',
          title: '1블럭 동호수 상세배치표',
          subtitle: '전 세대 정밀 호실 및 평형 매핑',
          category: '상세배치표',
          imageUrl: APP_IMAGES.bl1UnitsDetail,
          badge: '정밀 동호표',
          description: '1블럭 929세대 전체의 층별 호실 번호가 정확히 기재된 공식 상세 배치표입니다.',
          points: [
            '실거주 선호도 높은 34평/39평 동호수 확인',
            '동별 필로티 및 로열층 세부 파악',
            '조아라 팀장을 통한 1BL 잔여 동호수 조회 가능'
          ]
        }
      ]
    },
    'elevation': {
      title: '외관 입면도 & 스카이라인 디자인',
      sub: '롯데건설 최고급 하이엔드 주거 철학이 담긴 시그니처 입면',
      units: '총 39개동',
      features: '고급 커튼월룩, 옥상 조형물 및 야간 경관조명, 광주 도심의 새로운 스카이라인을 창조하는 랜드마크 외관',
      items: [
        {
          id: 'elevation-main',
          title: '시그니처 아파트 메인 입면도 (전면 & 측면)',
          subtitle: '하이엔드 커튼월룩 및 옥상 조형 랜드마크',
          category: '입면도',
          imageUrl: APP_IMAGES.elevationFacade,
          badge: '공식 외관 입면도',
          description: '롯데건설의 독보적인 하이엔드 브랜드 감각이 반영된 외관 입면도로, 메탈릭 컬러와 커튼월룩의 조화가 돋보입니다.',
          points: [
            '고급스러운 커튼월룩 특화 입면 디자인',
            '단지 전체의 품격을 높이는 시그니처 옥상 조형물',
            '야간 도심을 밝히는 감성 경관 조명 계획'
          ]
        },
        {
          id: 'elevation-detail',
          title: '외관 입면 디테일 및 층별 마감재 계획',
          subtitle: '저층부 석재 마감 및 상층부 경관 디자인',
          category: '입면도',
          imageUrl: APP_IMAGES.elevationFacadeDetail,
          badge: '입면 디테일',
          description: '저층부 최고급 석재 마감과 상층부 유리 난간 일체형 창호가 적용된 정밀 외관 입면 디테일 도면입니다.',
          points: [
            '저층부 럭셔리 천연 화강석 마감 적용',
            '철제 난간 없는 유리 난간대 적용으로 조망 간섭 제로',
            '내구성 및 단열성을 극대화한 최고 등급 외장재'
          ]
        }
      ]
    }
  };

  const currentData = blockData[activeBlock];

  const openLightbox = (item: BlueprintItem) => {
    setActiveModalBlueprint(item);
    setZoomLevel(1);
  };

  return (
    <section id="siteplans" className="py-20 bg-surface-3 text-ink border-t border-gold-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-tint border border-gold-line text-gold text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-gold" />
            <span>공식 실물 도면 100% 반영 안내</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight leading-tight">
            단지배치도 &amp; 동호수배치도 <span className="text-gold">공식 실물 도면관</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            1BL(929), 2-1BL(915), 2-2BL(928) 단지 배치도, 세대별 동호수 배치도, 아파트 외관 입면도를 고화질로 확인하세요.
          </p>
        </div>

        {/* 4 Block Tabs Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 p-2 bg-surface-2/92 rounded-2xl border border-line max-w-4xl mx-auto shadow-xl">
          {[
            { id: 'panorama', label: '광역 조감도 (전경)', badge: '항공뷰' },
            { id: '2-2BL', label: '2-2BL (928세대·화개초)', badge: '추천블럭' },
            { id: '2-1BL', label: '2-1BL (915세대·호수조망)', badge: '수변특화' },
            { id: '1BL', label: '1BL (929세대·숲세권)', badge: '도심연계' },
            { id: 'elevation', label: '외관 입면도 (스카이라인)', badge: '디자인' },
          ].map((tab) => {
            const isActive = activeBlock === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveBlock(tab.id as any)}
                className={`flex-1 min-w-[150px] py-3.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center focus:outline-none flex items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-fill to-gold-fill-2 text-on-gold shadow-lg shadow-gold-fill-2/25 scale-102'
                    : 'text-ink-soft hover:text-ink hover:bg-surface-2 border border-transparent hover:border-line'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isActive
                      ? 'bg-surface text-gold'
                      : 'bg-surface-3 text-ink-soft'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Current Block Overview Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border-2 border-line mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold bg-gold-tint px-3 py-1 rounded-full border border-gold-line">
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>{currentData.title}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-ink">
              {currentData.sub}
            </h3>
            <p className="text-xs sm:text-sm text-ink-soft max-w-3xl leading-relaxed">
              {currentData.features}
            </p>
          </div>

          <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
            <a
              href={CONSULTATION_CONFIG.phoneTelLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 fill-on-gold" />
              <span>{CONSULTATION_CONFIG.managerName}에게 {activeBlock} 잔여호실 문의</span>
            </a>
            <span className="text-[11px] text-gold/80 text-center font-mono font-medium">
              직통: {CONSULTATION_CONFIG.managerPhone}
            </span>
          </div>
        </div>

        {/* Blueprints Display Grid */}
        <div className={`grid gap-8 mb-14 ${
          currentData.items.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {currentData.items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-surface border-2 border-line hover:border-gold-line p-6 flex flex-col justify-between transition-all group shadow-xl"
            >
              <div>
                {/* Image Box */}
                <div
                  onClick={() => openLightbox(item)}
                  className="relative aspect-[16/11] w-full rounded-xl overflow-hidden mb-5 cursor-pointer border border-line bg-surface-3 flex items-center justify-center group/blueprint"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/blueprint:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/8 group-hover/blueprint:bg-transparent transition-colors" />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-surface-2/92 backdrop-blur-md rounded-lg text-xs text-gold font-bold flex items-center gap-1.5 border border-gold-line shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-gold" />
                    <span>도면 크게보기</span>
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-surface-2 rounded-md text-[10px] font-bold text-gold border border-gold-line">
                    {item.badge}
                  </div>
                </div>

                {/* Title & Info */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gold bg-gold-tint px-2.5 py-0.5 rounded border border-gold-line">
                    {item.category}
                  </span>
                  <span className="text-xs text-ink-soft font-mono">LOTTE CASTLE SIGNATURE</span>
                </div>

                <h4 className="text-xl font-bold text-ink mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-line-strong text-xs mb-4">
                  {item.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-ink">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-line-strong flex items-center justify-between">
                <button
                  onClick={() => openLightbox(item)}
                  className="text-xs font-bold text-ink-soft hover:text-ink flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-gold" />
                  <span>정밀 확대보기</span>
                </button>
                <a
                  href={CONSULTATION_CONFIG.phoneTelLink}
                  className="text-xs font-bold text-gold hover:text-gold underline"
                >
                  해당 도면 동호수 지정 문의
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Blueprint Lightbox High-Resolution Modal */}
        {activeModalBlueprint && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/60 backdrop-blur-lg">
            <div className="relative w-full max-w-6xl h-[92vh] bg-surface rounded-2xl border-2 border-gold-line/70 overflow-hidden flex flex-col shadow-2xl">
              {/* Modal Top Bar */}
              <div className="p-4 sm:px-6 bg-surface-2 border-b border-line flex items-center justify-between shrink-0">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-gold flex items-center gap-2">
                    <span>{activeModalBlueprint.category}</span>
                    <span>·</span>
                    <span>{activeModalBlueprint.badge}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-ink">
                    {activeModalBlueprint.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.3, 3))}
                    className="p-2 bg-surface-3 hover:bg-line-strong text-ink rounded-lg text-xs flex items-center gap-1 border border-line-strong"
                    title="확대"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span className="hidden sm:inline">확대</span>
                  </button>
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.3, 0.7))}
                    className="p-2 bg-surface-3 hover:bg-line-strong text-ink rounded-lg text-xs flex items-center gap-1 border border-line-strong"
                    title="축소"
                  >
                    <ZoomOut className="w-4 h-4" />
                    <span className="hidden sm:inline">축소</span>
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-2 bg-surface-3 hover:bg-line-strong text-ink rounded-lg text-xs hidden sm:inline-block border border-line-strong"
                  >
                    100%
                  </button>
                  <button
                    onClick={() => setActiveModalBlueprint(null)}
                    className="p-2 bg-surface-3 hover:bg-line-strong text-ink-soft hover:text-ink rounded-lg border border-line-strong ml-2"
                    aria-label="닫기"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Zoomable Image View */}
              <div className="flex-1 overflow-auto bg-surface-3 p-4 flex items-center justify-center cursor-grab active:cursor-grabbing">
                <div
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s ease-out'
                  }}
                  className="max-w-full max-h-full flex items-center justify-center"
                >
                  <img
                    src={activeModalBlueprint.imageUrl}
                    alt={activeModalBlueprint.title}
                    className="max-w-full max-h-[70vh] object-contain rounded select-none shadow-2xl"
                      loading="lazy"
                      decoding="async"
                    />
                </div>
              </div>

              {/* Modal Bottom Contact Action */}
              <div className="p-4 sm:px-6 bg-surface-2 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs">
                <div className="text-ink-soft text-center sm:text-left">
                  ※ 도면 상의 로열동호수 및 잔여 세대 분양가는 <strong>조아라 팀장 ({CONSULTATION_CONFIG.managerPhone})</strong>에게 즉시 확인하실 수 있습니다.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={CONSULTATION_CONFIG.phoneTelLink}
                    className="flex-1 sm:flex-initial py-2.5 px-5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold rounded-lg flex items-center justify-center gap-1.5 shadow"
                  >
                    <Phone className="w-4 h-4 fill-on-gold" />
                    <span>조아라 팀장에게 이 동호수 문의</span>
                  </a>
                  <button
                    onClick={() => {
                      setActiveModalBlueprint(null);
                      onScrollToConsultation();
                    }}
                    className="py-2.5 px-4 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong rounded-lg font-medium"
                  >
                    상담 예약 신청
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guided Notice Box */}
        <div className="p-6 rounded-2xl bg-surface border border-line text-center text-xs sm:text-sm text-ink-soft space-y-2">
          <p className="font-bold text-gold">
            [견본주택 동호수 지정 특별 안내]
          </p>
          <p>
            중앙공원 롯데캐슬 시그니처 견본주택(상무누리로 154)에 방문하시면 전체 대형 단지 모형도와 실시간 분양 계약 현황판을 통해 원하시는 동호수를 직접 지정하실 수 있습니다.
          </p>
          <p>
            안내데스크에서 <strong>담당자 {CONSULTATION_CONFIG.managerName}</strong>을 지정해 주시면 가장 유리한 로열층 추천과 1:1 전담 동행 서비스를 받으실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};
