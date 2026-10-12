import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { APP_IMAGES, photoSlot } from '../assets/images';
import { MapPin, Navigation, Copy, Check, Phone, Car, Train, Calendar, Sparkles } from 'lucide-react';

interface ModelHouseLocationSectionProps {
  onOpenPassModal: () => void;
}

export const ModelHouseLocationSection: React.FC<ModelHouseLocationSectionProps> = ({ onOpenPassModal }) => {
  const [copied, setCopied] = useState(false);

  const address = CONSULTATION_CONFIG.modelHouseAddress;
  const mapImage = photoSlot('map');
  const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(address)}`;
  const kakaoMapUrl = `https://map.kakao.com/?q=${encodeURIComponent(address)}`;

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
                <span className="font-bold text-ink text-base">견본주택 위치</span>
              </div>
              <span className="text-xs text-gold font-semibold bg-gold-tint px-2.5 py-1 rounded border border-gold-line">
                방문 예약 필수제 운영
              </span>
            </div>

            {/* 지도.
                photos/map.jpg 를 넣으면 그 이미지(네이버 지도 캡처 등)를 쓴다.
                없을 때는 외부 지도를 불러오지 않고 위치 안내 카드를 보여준다.
                — 외부 지도를 iframe 으로 띄우면 차단되는 환경에서 깨진 상자가 보인다. */}
            <div className="relative aspect-[16/10] rounded-xl border border-line overflow-hidden bg-surface-3">
              {mapImage ? (
                <a
                  href={naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full group/map"
                >
                  <img
                    src={mapImage}
                    alt={`견본주택 위치 — ${address}`}
                    className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover/map:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-surface-2/92 rounded-md text-[11px] text-gold font-semibold border border-gold-line shadow-sm">
                    지도에서 보기
                  </span>
                </a>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-surface-2 to-surface-3">
                  <div className="w-14 h-14 rounded-full bg-gold-tint border-2 border-gold-line flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-gold" />
                  </div>
                  <div className="text-xs text-ink-soft mb-1">견본주택</div>
                  <div className="text-lg sm:text-xl font-extrabold text-ink mb-1">
                    {address}
                  </div>
                  <div className="text-xs text-ink-soft">
                    {CONSULTATION_CONFIG.modelHouseLocationDetail.split('/')[0].trim()}
                  </div>
                  <div className="mt-4 text-[11px] text-ink-muted">
                    아래 버튼으로 네이버 지도·카카오맵에서 길찾기를 바로 하실 수 있습니다.
                  </div>
                </div>
              )}
            </div>

            {mapImage && (
              <p className="mt-2 text-[11px] text-ink-muted">
                ※ 지도는 <strong className="text-ink-soft">단지 위치(2-1BL)</strong>입니다.
                견본주택은 아래 주소를 확인해 주세요.
              </p>
            )}

            {/* 지도 앱으로 바로 열기 */}
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong rounded-lg text-xs font-bold transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>네이버 지도로 길찾기</span>
              </a>
              <a
                href={kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong rounded-lg text-xs font-bold transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>카카오맵으로 길찾기</span>
              </a>
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
                  href={naverMapUrl}
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
