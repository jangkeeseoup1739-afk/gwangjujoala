import React from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { Phone, Calendar } from 'lucide-react';

interface FloatingSpeedDialProps {
  onScrollToConsultation: () => void;
  onOpenPassModal: () => void;
}

export const FloatingSpeedDial: React.FC<FloatingSpeedDialProps> = ({
  onScrollToConsultation,
  onOpenPassModal,
}) => {
  return (
    <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Pass badge */}
      <button
        onClick={onOpenPassModal}
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-surface-2 hover:bg-surface-2 border border-gold-line text-gold rounded-full shadow-xl backdrop-blur-md transition-all hover:scale-105"
      >
        <Calendar className="w-4 h-4 text-gold" />
        <span className="text-xs font-bold">VIP 방문예약증 확인</span>
      </button>

      {/* Big Direct Call Floating Card */}
      <a
        href={CONSULTATION_CONFIG.phoneTelLink}
        className="group flex items-center gap-3.5 p-3.5 pr-5 bg-gradient-to-r from-gold-fill via-gold-fill to-gold-fill-2 hover:from-gold-fill-2 hover:to-gold-fill-2 text-on-gold rounded-2xl shadow-2xl shadow-gold-fill-2/25 transition-all hover:scale-105"
      >
        <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-gold shadow-md">
          <Phone className="w-5 h-5 fill-gold" />
        </div>
        <div className="text-left">
          <div className="text-[11px] font-bold text-ink leading-tight">
            {CONSULTATION_CONFIG.managerName} 직통 상담
          </div>
          <div className="text-base font-black font-mono tracking-tight text-on-gold leading-tight">
            {CONSULTATION_CONFIG.managerPhone}
          </div>
        </div>
      </a>
    </div>
  );
};
