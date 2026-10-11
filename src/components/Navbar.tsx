import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from '../config/consultation';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPassModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPassModal, onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '사업안내·특화정보', id: 'cupcamon-guide' },
    { label: '895조 반도체·군공항 호재', id: 'catalysts', badge: '핵심호재' },
    { label: '단지·동호수 실물도면', id: 'siteplans', badge: '공식도면' },
    { label: '주택형 평면도', id: 'floorplans' },
    { label: '실물 사진 갤러리', id: 'interior' },
    { label: '오시는 길', id: 'location' },
    { label: '방문예약·상담', id: 'consultation' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-surface-2/90 backdrop-blur-md border-b border-gold-line text-ink shadow-sm transition-all">
      {/* Top micro banner for urgent announcement */}
      <div className="bg-gradient-to-r from-gold-tint via-surface-2 to-gold-tint px-4 py-1.5 text-xs text-gold border-b border-gold-line text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
        <span>[특급호재] 광주 군공항 이전 확정 & 국가 반도체 895조 메가 클러스터 직접 수혜 단지</span>
        <span className="hidden md:inline text-gold/60">|</span>
        <span className="hidden md:inline text-ink-soft">
          담당자 <strong className="text-gold">{CONSULTATION_CONFIG.managerName}</strong> 직통: {CONSULTATION_CONFIG.managerPhone}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-fill via-gold-fill-2 to-gold-deep p-[1px] shadow-lg shadow-gold-line">
            <div className="w-full h-full bg-surface rounded-[7px] flex items-center justify-center">
              <span className="text-gold font-serif font-black text-lg tracking-wider">LC</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold font-serif">
                LOTTE CASTLE SIGNATURE
              </span>
            </div>
            <div className="text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-gold transition-colors">
              중앙공원 롯데캐슬 시그니처
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-ink-soft hover:text-gold transition-colors relative py-1 focus:outline-none flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[10px] font-semibold text-gold bg-gold-tint-2 border border-gold-line px-1.5 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons (Official website removed) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Visit Pass Button */}
          <button
            onClick={onOpenPassModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gold bg-gold-tint hover:bg-gold-tint-2 border border-gold-line rounded-lg transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>VIP 방문예약증</span>
          </button>

          {/* Mandatory Direct Phone Consultation Button */}
          <a
            href={CONSULTATION_CONFIG.phoneTelLink}
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-on-gold bg-gradient-to-r from-gold-fill via-gold-fill to-gold-fill-2 hover:from-gold-fill-2 hover:to-gold-fill-2 rounded-lg shadow-md shadow-gold-fill-2/20 transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-on-gold" />
            <span>{CONSULTATION_CONFIG.managerName}에게 전화 상담</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={CONSULTATION_CONFIG.phoneTelLink}
            className="p-2 text-on-gold bg-gold-fill rounded-lg focus:outline-none"
            aria-label="전화 상담"
          >
            <Phone className="w-4 h-4 fill-on-gold" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-soft hover:text-ink focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-line px-4 py-5 space-y-3">
          <div className="p-3 bg-surface-2 rounded-lg border border-gold-line mb-3">
            <div className="text-xs text-gold font-semibold mb-1">분양 상담 담당자 직통</div>
            <div className="text-base font-bold text-ink flex items-center justify-between">
              <span>{CONSULTATION_CONFIG.managerName}</span>
              <a
                href={CONSULTATION_CONFIG.phoneTelLink}
                className="text-sm text-gold underline font-mono font-bold"
              >
                {CONSULTATION_CONFIG.managerPhone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2.5 px-3 text-sm text-ink-soft hover:text-ink bg-surface-3/70 rounded-md border border-line"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={CONSULTATION_CONFIG.phoneTelLink}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gold-fill hover:bg-gold-fill-2 text-on-gold rounded-lg font-bold text-sm"
            >
              <Phone className="w-4 h-4 fill-on-gold" />
              <span>{CONSULTATION_CONFIG.managerName}에게 전화 상담</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-gold-tint text-gold rounded-lg text-xs font-medium border border-gold-line"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>VIP 방문예약증 확인</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
