import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { APP_IMAGES } from '../assets/images';
import { MapPin, Navigation, Copy, Check, Phone, Car, Train, Calendar, Sparkles } from 'lucide-react';

interface ModelHouseLocationSectionProps {
  onOpenPassModal: () => void;
}

export const ModelHouseLocationSection: React.FC<ModelHouseLocationSectionProps> = ({ onOpenPassModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CONSULTATION_CONFIG.modelHouseAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-surface-3 text-ink border-t border-gold-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
            LOCATION &amp; DIRECTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            모델하우스 <span className="text-gold">오시는 길 &amp; 견본주택 위치</span>
          </h2>
          <p className="mt-3 text-ink-soft text-sm sm:text-base">
            상무시민공원 종합운동장 맞은편에 위치해 있으며, 방문 전 사전 예약이 필수입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Simulated Map & Directions (Modeled after the map in user photo) */}
          <div className="lg:col-span-7 bg-surface-2 rounded-2xl border-2 border-line p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="font-bold text-ink text-base">견본주택 약도 안내</span>
              </div>
              <span className="text-xs text-gold font-semibold bg-gold-tint px-2.5 py-1 rounded border border-gold-line">
                방문 예약 필수제 운영
              </span>
            </div>

            {/* Stylized Architectural Map Diagram */}
            <div className="relative aspect-[16/10] bg-surface rounded-xl border border-line overflow-hidden p-6 flex flex-col justify-between">
              {/* Rivers & Highways simulation matching user ticket */}
              <div className="absolute inset-0 pointer-events-none opacity-70">
                {/* River 영산강 & 광주천 */}
                <div className="absolute top-0 bottom-0 left-8 w-10 bg-sky-100 -rotate-12 border-x border-sky-300 flex items-center justify-center">
                  <span className="text-[10px] text-sky-700 -rotate-90 font-mono tracking-widest">영산강</span>
                </div>
                <div className="absolute bottom-4 left-16 right-0 h-10 bg-sky-50 -rotate-6 border-y border-sky-600/20 flex items-center justify-center">
                  <span className="text-[10px] text-sky-700 font-mono tracking-widest">광주천</span>
                </div>
                {/* Road grid */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-line-strong" />
                <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-line-strong" />
                <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-line-strong" />
                <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-line-strong" />
                <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-line-strong" />
              </div>

              {/* Surrounding Landmark Labels */}
              <div className="relative z-10 flex justify-between items-start text-[11px] text-ink-soft">
                <div className="bg-surface-2 px-2 py-1 rounded border border-line-strong">
                  유덕 IC
                </div>
                <div className="bg-surface-2 px-2 py-1 rounded border border-line-strong">
                  상무소각장
                </div>
                <div className="bg-surface-2 px-2 py-1 rounded border border-line-strong">
                  CGV / 롯데마트
                </div>
              </div>

              {/* Pinpoint Center: Model House */}
              <div className="relative z-20 mx-auto my-auto text-center">
                <div className="inline-block p-4 rounded-2xl bg-gold-tint-2 border-2 border-gold-fill shadow-2xl shadow-gold-fill-2/25 animate-pulse">
                  <div className="flex items-center gap-2 text-gold font-bold text-sm sm:text-base">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-ping inline-block" />
                    <span>견본주택 (모델하우스)</span>
                  </div>
                  <div className="text-ink text-xs sm:text-sm font-semibold mt-1">
                    {CONSULTATION_CONFIG.modelHouseAddress}
                  </div>
                  <div className="text-gold text-[11px] mt-0.5 font-medium">
                    상무시민공원 종합운동장 맞은편
                  </div>
                </div>
              </div>

              {/* Bottom surrounding landmarks */}
              <div className="relative z-10 flex justify-between items-end text-[11px] text-ink-soft">
                <div className="bg-surface-2 px-2 py-1 rounded border border-line-strong">
                  광주환경공단
                </div>
                <div className="bg-surface-2 px-2 py-1 rounded border border-line-strong">
                  계수초 / 운천초 / 전남중
                </div>
                <div className="bg-surface-2 px-2 py-1 rounded border border-line-strong">
                  광주서부경찰서
                </div>
              </div>
            </div>

            {/* Address bar & copy action */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl bg-surface border border-line">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="text-xs text-ink-soft">모델하우스 네비게이션 주소</div>
                  <div className="text-sm sm:text-base font-bold text-ink">
                    {CONSULTATION_CONFIG.modelHouseAddress}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong rounded-lg text-xs font-semibold transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-ok" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? '주소 복사완료' : '주소 복사하기'}</span>
                </button>
                <a
                  href={`https://map.naver.com/v5/search/${encodeURIComponent(CONSULTATION_CONFIG.modelHouseAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold rounded-lg text-xs font-bold transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>지도 길찾기</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Desk Instructions & Digital Pass Voucher Trigger */}
          <div className="lg:col-span-5 space-y-6">
            {/* VIP Consultation Lounge Real Photo Card */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-gold-line shadow-2xl group bg-photo-scrim">
              <img
                src={APP_IMAGES.modelHouseLounge}
                alt="견본주택 VIP 안내데스크 및 1:1 상담 라운지"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
              <div className="absolute inset-0 bg-gradient-to-t from-photo-scrim/92 via-photo-scrim/25 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <div className="font-bold text-on-photo flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                  <span>견본주택 VIP 전담 상담 라운지</span>
                </div>
                <span className="text-gold-bright bg-gold-deep/85 px-2 py-0.5 rounded border border-gold-bright/45 text-[11px] font-semibold">
                  조아라 팀장 지정석
                </span>
              </div>
            </div>

            {/* Reception Desk Instruction Box matching User Image */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-gold-tint/70 via-surface-2 to-surface border-2 border-gold-line shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>안내데스크 필독 안내</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-ink leading-snug">
                “오시면 꼭 안내데스크에서 <br />
                <span className="text-gold underline decoration-gold underline-offset-4">
                  {CONSULTATION_CONFIG.managerName} 예약
                </span>
                이라고 말씀해 주세요”
              </h3>

              <div className="mt-4 p-3.5 rounded-xl bg-surface-2/92 border border-gold-line space-y-2 text-xs sm:text-sm text-ink-soft leading-relaxed">
                <p>
                  ※ 모델하우스는 혼잡 방지 및 원활한 1:1 맞춤 상담을 위해 <strong>사전 예약 고객 우선 입장</strong>으로 운영됩니다.
                </p>
                <p>
                  ※ 도착 후 안내데스크에 <strong>담당자 {CONSULTATION_CONFIG.managerName}</strong>을 지명하시면, 대기 없이 즉시 프라이빗 1:1 관람 및 로열호실 특별 혜택 안내를 받으실 수 있습니다.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-line flex flex-col gap-3">
                <button
                  onClick={onOpenPassModal}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-gold-fill via-gold-fill to-gold-fill-2 hover:from-gold-fill-2 hover:to-gold-fill-2 text-on-gold font-extrabold text-sm rounded-xl shadow-lg shadow-gold-fill-2/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4 fill-on-gold" />
                  <span>모바일 [방문예약증] 즉시 발급·확인하기</span>
                </button>

                <a
                  href={CONSULTATION_CONFIG.phoneTelLink}
                  className="w-full py-3 px-4 bg-surface-2 hover:bg-surface-3 text-ink border border-gold-line font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>방문 전 조아라 팀장 직통 통화 ({CONSULTATION_CONFIG.managerPhone})</span>
                </a>
              </div>
            </div>

            {/* Transportation Details */}
            <div className="p-6 rounded-2xl bg-surface-2 border border-line space-y-4">
              <h4 className="text-base font-bold text-ink flex items-center gap-2">
                <span>교통편 안내</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-ink-soft">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">자가용 이용 시</strong>
                    네비게이션 '상무누리로 154' 또는 '상무시민공원 종합운동장' 검색. 모델하우스 전용 주차장 무료 주차 지원.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">대중교통 이용 시</strong>
                    광주 지하철 1호선 상무역/김대중컨벤션센터역 인근 버스 연계, 계수초등학교 및 상무시민공원 정류장 하차 도보 3분.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
