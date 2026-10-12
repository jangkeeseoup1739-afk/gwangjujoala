import React from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { Phone, Calendar, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenPassModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onOpenPassModal }) => {
  return (
    <footer className="bg-surface-3 text-ink-soft border-t border-line pb-24 lg:pb-12 pt-14 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Banner inside Footer */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-gold-line mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-gold font-bold text-sm tracking-wide">
              {CONSULTATION_CONFIG.projectName} 분양 상담 총괄
            </div>
            <div className="text-ink text-base sm:text-lg font-extrabold flex items-center gap-2">
              <span>담당자: {CONSULTATION_CONFIG.managerName}</span>
              <span className="text-ink-muted">|</span>
              <span className="text-gold font-mono">{CONSULTATION_CONFIG.managerPhone}</span>
            </div>
            <p className="text-ink-soft text-xs">
              견본주택: {CONSULTATION_CONFIG.modelHouseAddress} ({CONSULTATION_CONFIG.modelHouseLocationDetail})
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={CONSULTATION_CONFIG.phoneTelLink}
              className="px-4 py-2.5 bg-gold-fill hover:bg-gold-fill-2 text-on-gold font-bold rounded-lg flex items-center gap-1.5 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 fill-on-gold" />
              <span>{CONSULTATION_CONFIG.managerName}에게 전화 상담</span>
            </a>
            <button
              onClick={onOpenPassModal}
              className="px-4 py-2.5 bg-gold-tint hover:bg-gold-tint-2 text-gold border border-gold-line rounded-lg flex items-center gap-1.5 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>모바일 방문예약증 확인</span>
            </button>
          </div>
        </div>

        {/* Legal & Project Disclaimers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-line-strong">
          <div className="md:col-span-6 space-y-2">
            <div className="text-ink font-bold text-sm">
              {CONSULTATION_CONFIG.projectName}
            </div>
            <p className="leading-relaxed text-ink-soft">
              사업명: 광주 중앙공원 1지구 민간공원 특례사업 · 시공: {CONSULTATION_CONFIG.constructor} · 시행: {CONSULTATION_CONFIG.developer}
              <br />
              단지 규모: {CONSULTATION_CONFIG.totalUnits} ({CONSULTATION_CONFIG.blockInfo})
              <br />
              견본주택 주소: {CONSULTATION_CONFIG.modelHouseAddress}
              <br />
              담당자 직통: <strong className="text-gold font-mono">{CONSULTATION_CONFIG.managerPhone}</strong> ({CONSULTATION_CONFIG.managerName})
            </p>
          </div>

          <div className="md:col-span-6 space-y-2 text-ink-soft leading-relaxed">
            <div className="text-ink-soft font-bold">유의사항 및 안내</div>
            <p>
              ※ 본 홈페이지에 사용된 CG 및 조감도, 일러스트, 평면도는 소비자의 이해를 돕기 위한 것으로 실제 시공 시 인허가 과정에 따라 다소 변경될 수 있습니다.
              <br />
              ※ 군공항 이전 및 반도체 895조 투자 등 주변 개발계획은 국가 정책 및 지자체 계획에 따라 변동될 수 있습니다.
              <br />
              ※ 견본주택 방문 시 안내데스크에서 <strong>{CONSULTATION_CONFIG.managerName}</strong>을 지정해 주셔야 대기 없이 1:1 전담 동행 안내가 가능합니다.
            </p>
          </div>
        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-ink-soft">
          <div>
            © 2026 {CONSULTATION_CONFIG.projectName}. All rights reserved. 담당자: {CONSULTATION_CONFIG.managerName} ({CONSULTATION_CONFIG.managerPhone})
          </div>

          <button
            onClick={onScrollToTop}
            className="py-2 flex items-center gap-1.5 text-ink-soft hover:text-gold transition-colors"
          >
            <span>맨 위로 이동</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
