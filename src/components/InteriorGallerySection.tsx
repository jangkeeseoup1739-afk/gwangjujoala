import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { MODELHOUSE_UNITS_GALLERY, UnitPhoto } from '../data/projectData';
import { Sparkles, CheckCircle2, Phone, Gift, Eye, Maximize2, Home, Droplet, Shirt, Coffee, UtensilsCrossed, Trees, Building, X } from 'lucide-react';

interface InteriorGallerySectionProps {
  onScrollToConsultation: () => void;
  onOpenPassModal: () => void;
}

export const InteriorGallerySection: React.FC<InteriorGallerySectionProps> = ({
  onScrollToConsultation,
  onOpenPassModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<UnitPhoto | null>(null);

  const categories = [
    { id: 'all', label: '전체 실물 갤러리' },
    { id: '거실', label: '거실 & 다이닝' },
    { id: '침실', label: '안방 & 마스터존' },
    { id: '수납/드레스룸', label: '드레스룸 & 스타일러' },
    { id: '주방', label: '11자형 하이엔드 주방' },
    { id: '무상제공', label: '★ 음식물처리기 무상' },
    { id: '욕실', label: '호텔식 욕실' },
    { id: '조망/단지', label: '풍암호수 에코뷰' },
    { id: '견본주택', label: 'VIP 상담 라운지' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? MODELHOUSE_UNITS_GALLERY
      : MODELHOUSE_UNITS_GALLERY.filter((item) => item.category === selectedCategory);

  const getSpaceIcon = (category: string) => {
    switch (category) {
      case '수납/드레스룸':
        return <Shirt className="w-4 h-4 text-gold" />;
      case '침실':
        return <Home className="w-4 h-4 text-gold" />;
      case '거실':
        return <Coffee className="w-4 h-4 text-gold" />;
      case '주방':
        return <UtensilsCrossed className="w-4 h-4 text-gold" />;
      case '욕실':
        return <Droplet className="w-4 h-4 text-sky-700" />;
      case '조망/단지':
        return <Trees className="w-4 h-4 text-ok" />;
      case '견본주택':
        return <Building className="w-4 h-4 text-gold" />;
      case '무상제공':
        return <Gift className="w-4 h-4 text-gold" />;
      default:
        return <Sparkles className="w-4 h-4 text-gold" />;
    }
  };

  return (
    <section id="interior" className="py-20 bg-surface text-ink border-t border-gold-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
            MODEL HOUSE REAL UNIT & PHOTO GALLERY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            견본주택 실물 유니트 <span className="text-gold">인테리어 사진 갤러리</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            빛과 여백, 최고급 마감재가 어우러진 중앙공원 롯데캐슬 시그니처의 실제 건립 세대와 견본주택 현장 사진입니다.
          </p>
        </div>

        {/* Free Amenity Callout Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-gold-tint via-surface-2 to-gold-tint p-6 sm:p-8 border-2 border-gold-line shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-tint-2 border border-gold-fill/40 text-gold text-xs font-bold">
                <Gift className="w-4 h-4 text-gold" />
                <span>BASIC KITCHEN 무상제공 특별 프로모션</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                친환경 주방 <span className="text-gold underline decoration-gold underline-offset-4">음식물 처리기 전 세대 무상 제공</span>
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft max-w-2xl leading-relaxed">
                ※ 무상제공 품목은 계약세대에 한하여 제공됩니다. 싱크대 하부 전동 분쇄 처리 방식으로 냄새와 번거로움 없이 위생적인 프리미엄 주방 라이프를 누리실 수 있습니다.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="press inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all"
              >
                <Phone className="w-4 h-4 fill-on-gold" />
                <span>{CONSULTATION_CONFIG.managerName}에게 무상 혜택 문의</span>
              </a>
              <span className="text-[11px] text-gold/80 text-center font-mono">
                직통: {CONSULTATION_CONFIG.managerPhone}
              </span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gold-fill text-on-gold shadow-md shadow-gold-fill-2/25 scale-105'
                  : 'bg-surface-2 text-ink-soft hover:text-ink hover:bg-surface-3 border border-line'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Cards Grid with REAL Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              data-reveal="scale"
              data-reveal-delay={String((i % 3) + 1)}
              className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group ${
                item.category === '무상제공'
                  ? 'bg-gradient-to-b from-gold-tint/40 via-surface-2 to-surface border-gold-line shadow-xl'
                  : 'bg-surface-2 border-line hover:border-gold-line'
              }`}
            >
              <div>
                {/* Photo Image Card */}
                {item.imageUrl && (
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 cursor-pointer group/img border border-line bg-photo-scrim shadow-inner"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-photo-scrim/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-20 transition-opacity" />
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-photo-scrim/80 backdrop-blur-md rounded-lg text-[11px] text-gold-bright font-semibold flex items-center gap-1.5 border border-gold-bright/45 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-bright" />
                      <span>실물 사진 확대</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getSpaceIcon(item.category)}
                    <span className="text-xs font-semibold text-gold">{item.space}</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.category === '무상제공'
                        ? 'bg-gold-fill text-on-gold'
                        : 'bg-surface text-ink-soft border border-line'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-ink mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3 bg-surface/70 rounded-xl border border-line text-xs space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold text-gold/90">핵심 설계 포인트</div>
                  <div className="text-ink-soft font-medium">{item.keyPoint}</div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-line-strong text-xs">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-ink-soft">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="text-xs text-ink-soft hover:text-ink flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-gold" />
                  <span>실물 사진 & 스펙</span>
                </button>
                <button
                  onClick={onScrollToConsultation}
                  className="text-xs font-bold text-gold hover:text-gold underline"
                >
                  관람 예약 신청
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* High Definition Photo Lightbox Modal */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/55 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-surface-2 rounded-2xl border-2 border-gold-line overflow-hidden text-ink shadow-2xl max-h-[90vh] flex flex-col">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-surface-2/88 hover:bg-surface text-ink-soft hover:text-ink flex items-center justify-center border border-line-strong transition-all"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              {activeModalItem.imageUrl && (
                <div className="w-full max-h-[50vh] overflow-hidden bg-surface-3 flex items-center justify-center">
                  <img
                    src={activeModalItem.imageUrl}
                    alt={activeModalItem.title}
                    className="w-full h-full max-h-[50vh] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                </div>
              )}

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-center gap-2 text-xs text-gold font-bold mb-1">
                  <span>{activeModalItem.space}</span>
                  <span>·</span>
                  <span>{activeModalItem.badge}</span>
                </div>

                <h3 className="text-2xl font-black text-ink mb-2">
                  {activeModalItem.title}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed mb-5">
                  {activeModalItem.description}
                </p>

                <div className="p-4 bg-surface rounded-xl border border-line mb-6 space-y-2">
                  <div className="text-xs font-bold text-gold">주요 특화 사양 & 마감재</div>
                  {activeModalItem.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-ink-soft">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={CONSULTATION_CONFIG.phoneTelLink}
                    className="flex-1 py-3.5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 fill-on-gold" />
                    <span>{CONSULTATION_CONFIG.managerName}에게 유니트 상담</span>
                  </a>
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onOpenPassModal();
                    }}
                    className="px-5 py-3.5 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong rounded-xl text-xs font-semibold"
                  >
                    방문예약증 발급
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guided Notice Box */}
        <div className="p-5 rounded-2xl bg-surface-2 border border-line text-center text-xs sm:text-sm text-ink-soft space-y-1">
          <p>
            ※ 견본주택(상무누리로 154)에 방문하시면 실제 건립된 세대 유니트와 무상제공 품목(음식물처리기 등)을 직접 체험하실 수 있습니다.
          </p>
          <p>
            ※ 방문 시 안내데스크에서 <strong>담당자 {CONSULTATION_CONFIG.managerName}</strong>을 지정해 주시면 대기 없이 1:1 전담 동행 안내를 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
