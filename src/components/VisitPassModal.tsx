import React from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
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

            {/* Simulated Simplified Map Box (Matching the photo layout) */}
            <div className="relative my-4 aspect-[4/3] bg-white rounded-lg border border-stone-300 p-3 text-stone-900 text-left overflow-hidden select-none">
              {/* Grid Roads */}
              <div className="absolute inset-0">
                {/* River 영산강 */}
                <div className="absolute top-0 bottom-0 left-4 w-7 bg-sky-200 -rotate-12 border-r border-sky-400 flex items-center justify-center">
                  <span className="text-[9px] text-sky-800 -rotate-90 font-bold">영산강</span>
                </div>
                {/* Road 광주천 */}
                <div className="absolute bottom-6 left-10 right-0 h-7 bg-sky-100 -rotate-6 border-y border-sky-300 flex items-center justify-center">
                  <span className="text-[9px] text-sky-800 font-bold">광주천</span>
                </div>
                {/* Grid lines */}
                <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-stone-300" />
                <div className="absolute top-1/4 left-0 right-0 h-[1.5px] bg-stone-300" />
                <div className="absolute top-3/4 left-0 right-0 h-[1.5px] bg-stone-300" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-stone-300" />
                <div className="absolute left-3/4 top-0 bottom-0 w-[1.5px] bg-stone-300" />
              </div>

              {/* Labels */}
              <div className="relative z-10 text-[9px] text-stone-700 font-semibold space-y-1">
                <div className="absolute top-1 left-2 bg-stone-100/90 px-1 rounded border border-stone-400">
                  유덕 IC
                </div>
                <div className="absolute top-12 left-10 text-[8px] text-stone-600">
                  • 광주환경공단
                </div>
                <div className="absolute top-3 right-12 text-[8px] text-stone-600">
                  • 상무소각장
                </div>
                <div className="absolute top-12 right-2 text-[8px] text-stone-600">
                  • CGV / 롯데마트
                </div>
                <div className="absolute bottom-16 right-4 text-[8px] text-stone-600">
                  • 계수초 / 운천초
                </div>
              </div>

              {/* Red Pin Target: 견본주택 */}
              <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <div className="bg-[#8b1528] text-white text-[11px] font-black px-2 py-0.5 rounded shadow-md border border-white">
                  견본주택
                </div>
                <div className="w-3 h-3 bg-[#8b1528] mx-auto mt-0.5 shadow-sm" />
              </div>

              {/* Bottom Park */}
              <div className="absolute bottom-2 left-[36%] z-10 bg-emerald-50 border border-emerald-300 px-2 py-1 rounded text-[8px] text-emerald-900 font-medium text-center">
                상무 시민공원 <br />종합운동장
              </div>
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
