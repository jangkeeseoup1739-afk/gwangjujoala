import React from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { photoSlot } from '../assets/images';
import { X, Phone, Download, Printer, Check, MapPin, Share2 } from 'lucide-react';

interface VisitPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  guestName?: string;
  guestDate?: string;
  guestUnit?: string;
}

export const VisitPassModal: React.FC<VisitPassModalProps> = ({
  isOpen,
  onClose,
  guestName = 'VIP 고객',
  guestDate,
  guestUnit = '102㎡ (구 39평형)',
}) => {
  // 예약증은 견본주택을 찾아가는 용도이므로 견본주택 약도를 우선 쓴다
  const mapImage = photoSlot('map-modelhouse') ?? photoSlot('map');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/55 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-md my-8 animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-ink hover:text-on-gold bg-surface-2/90 hover:bg-gold-fill rounded-full border border-line-strong shadow-md focus:outline-none"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* The VIP Pass Card (modeled faithfully after KakaoTalk_20261010_163859264.jpg) */}
        <div className="relative rounded-3xl bg-[#2a1e1b] p-3 shadow-2xl border-[5px] border-[#d4af37] text-center overflow-hidden">
          {/* Inner subtle gold border */}
          <div className="rounded-[18px] border border-[#d4af37]/40 p-5 bg-gradient-to-b from-[#2e201c] via-[#241916] to-[#1c1311] text-stone-100">
            {/* Header */}
            <div className="text-xs sm:text-sm font-medium text-amber-200/90 tracking-wide font-sans mb-3">
              중앙공원 롯데캐슬 시그니처 모델하우스
            </div>

            {/* Emblem & Title */}
            <div className="flex items-center justify-center gap-3 my-2">
              {/* Left Eagle / Emblem */}
              <div className="text-[#d4af37] text-xl select-none font-serif">⚜️</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-white font-serif drop-shadow-md">
                방문예약증
              </h3>
              {/* Right Eagle / Emblem */}
              <div className="text-[#d4af37] text-xl select-none font-serif">⚜️</div>
            </div>

            {/* Highlighting Instruction in Yellow */}
            <div className="my-3 space-y-1">
              <div className="text-base sm:text-lg font-black text-[#fed766] tracking-tight drop-shadow">
                오시면 꼭 안내데스크에 보여주세요
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-200 tracking-wider">
                ※ 방문예약 필수
              </div>
            </div>

            {/* Guest details strip if booked */}
            {guestName && (
              <div className="my-3 py-2 px-3 bg-[#19110f]/90 rounded-lg border border-[#d4af37]/30 text-left text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-stone-400">예약자:</span>
                  <span className="font-bold text-amber-300">{guestName} 님</span>
                </div>
                {guestDate && (
                  <div className="flex justify-between">
                    <span className="text-stone-400">방문 예정:</span>
                    <span className="font-bold text-white">{guestDate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-stone-400">관심 평형:</span>
                  <span className="font-semibold text-stone-200">{guestUnit}</span>
                </div>
              </div>
            )}

            {/* 지도.
                photos/map.jpg 가 있으면 그 이미지를, 없으면 주소 안내를 보여준다.
                (예약증은 인쇄해서 쓰므로 외부 지도를 불러오지 않는다) */}
            <div className="relative my-4 aspect-[4/3] bg-white rounded-lg border border-stone-300 overflow-hidden">
              {mapImage ? (
                <img
                  src={mapImage}
                  alt={`견본주택 위치 — ${CONSULTATION_CONFIG.modelHouseAddress}`}
                  className="w-full h-full object-contain bg-white"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 bg-stone-50">
                  <div className="w-12 h-12 rounded-full bg-[#8b1528] flex items-center justify-center mb-3 shadow">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-[11px] text-stone-500 mb-0.5">견본주택</div>
                  <div className="text-sm font-black text-stone-900 leading-snug">
                    {CONSULTATION_CONFIG.modelHouseAddress}
                  </div>
                  <div className="mt-1.5 text-[11px] text-stone-600">
                    상무시민공원 종합운동장 맞은편
                  </div>
                </div>
              )}
            </div>

            {/* Model House Address Section */}
            <div className="mt-4 space-y-1">
              <div className="text-xs text-stone-300 font-medium">모델하우스 위치</div>
              <div className="text-lg sm:text-xl font-black text-[#fed766] tracking-tight">
                {CONSULTATION_CONFIG.modelHouseAddress}
              </div>
            </div>

            {/* Manager Name & Phone exactly as in photo */}
            <div className="mt-4 pt-3 border-t border-[#d4af37]/30">
              <div className="text-base sm:text-lg font-bold text-white tracking-widest">
                담당자 <span className="text-[#fed766] ml-2 text-xl font-black tracking-widest">{CONSULTATION_CONFIG.managerName}</span>
              </div>
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="block text-2xl sm:text-3xl font-black font-mono text-[#fed766] hover:text-white transition-colors tracking-tight mt-1"
              >
                {CONSULTATION_CONFIG.managerPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-4 flex items-center justify-between gap-2.5">
          <a
            href={CONSULTATION_CONFIG.phoneTelLink}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4 fill-stone-950" />
            <span>조아라 팀장 직통 통화</span>
          </a>

          <button
            onClick={handlePrint}
            className="py-3 px-4 bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            title="인쇄 또는 PDF 저장"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">인쇄</span>
          </button>

          <button
            onClick={onClose}
            className="py-3 px-4 bg-surface-3 hover:bg-line-strong text-ink border border-line-strong rounded-xl text-xs font-semibold"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
