import React from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { Phone, FileText } from 'lucide-react';

interface MobileStickyBarProps {
  onScrollToConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onScrollToConsultation }) => {
  return (
    <aside
      aria-label="모바일 빠른 상담 메뉴"
      className="fixed bottom-0 left-0 right-0 z-40 bg-surface-2/95 backdrop-blur-lg border-t border-gold-line px-3 py-2.5 shadow-[0_-4px_20px_rgba(41,37,36,0.10)] lg:hidden"
    >
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-2.5">
        {/* 1. 전화 상담 (tel:010-5767-6645) */}
        <a
          href={CONSULTATION_CONFIG.phoneTelLink}
          className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-gradient-to-r from-gold-fill via-gold-fill to-gold-fill-2 text-on-gold font-black text-xs sm:text-sm shadow-md shadow-gold-fill-2/20 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 fill-on-gold shrink-0" />
          <span className="leading-tight">조아라 팀장 전화 상담</span>
        </a>

        {/* 2. 분양 문의 (scrolls to inquiry form) */}
        <button
          onClick={onScrollToConsultation}
          className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-surface-2 border border-gold-line text-ink hover:text-ink font-bold text-xs sm:text-sm active:scale-95 transition-all text-center focus:outline-none"
        >
          <FileText className="w-4 h-4 text-gold shrink-0" />
          <span className="leading-tight">분양 문의 & 방문예약</span>
        </button>
      </div>
    </aside>
  );
};
