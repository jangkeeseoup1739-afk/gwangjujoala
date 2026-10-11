import React, { useState } from 'react';
import { CONSULTATION_CONFIG } from './config/consultation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CupcamonTabsSection } from './components/CupcamonTabsSection';
import { MegaCatalystSection } from './components/MegaCatalystSection';
import { FloorPlansSection } from './components/FloorPlansSection';
import { SitePlansSection } from './components/SitePlansSection';
import { InteriorGallerySection } from './components/InteriorGallerySection';
import { ModelHouseLocationSection } from './components/ModelHouseLocationSection';
import { ConsultationForm } from './components/ConsultationForm';
import { VisitPassModal } from './components/VisitPassModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingSpeedDial } from './components/FloatingSpeedDial';
import { Footer } from './components/Footer';

export default function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [currentGuest, setCurrentGuest] = useState<{
    name: string;
    phone: string;
    date: string;
    unitType: string;
  }>({
    name: 'VIP 고객',
    phone: '',
    date: '방문 예약 진행 중',
    unitType: '102 (전용 102.9716㎡)',
  });

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePassCreated = (passData: {
    name: string;
    phone: string;
    date: string;
    unitType: string;
  }) => {
    setCurrentGuest(passData);
    setIsPassModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col font-sans selection:bg-gold-fill selection:text-on-gold">
      {/* 1. Navbar */}
      <Navbar
        onOpenPassModal={() => setIsPassModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* z-index 를 주면 쌓임 맥락이 생겨 이 안의 모달이 네비게이션(z-40) 위로
          올라가지 못한다. 그래서 relative 만 둔다. */}
      <main className="flex-grow relative">
        {/* 2. Hero Section (Strictly fulfills Requirement 2) */}
        <HeroSection
          onScrollToConsultation={() => scrollToSection('consultation')}
          onOpenPassModal={() => setIsPassModalOpen(true)}
        />

        {/* 3. Cupcamon.com Official Guide: 사업개요, 프리미엄 7, 블럭별 현황, 광주 메가 인프라, 분양 혜택 */}
        <CupcamonTabsSection
          onScrollToConsultation={() => scrollToSection('consultation')}
          onOpenPassModal={() => setIsPassModalOpen(true)}
        />

        {/* 4. Mega Catalyst Section: 전남 광주 군공항 이전 & 반도체 895조 호재 */}
        <MegaCatalystSection
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* 5. Floor Plans & Layouts (102㎡, 121㎡, 139A/B/C㎡, 펜트하우스) from User Blueprint */}
        <FloorPlansSection
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* 5-1. Official Site Plans & Building Unit Allocation Charts (1BL, 2-1BL, 2-2BL, Elevation) from User Uploads */}
        <SitePlansSection
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* 6. Signature Interior Gallery & Amenities (User Photo Model House Units & 무상제공 음식물처리기) */}
        <InteriorGallerySection
          onScrollToConsultation={() => scrollToSection('consultation')}
          onOpenPassModal={() => setIsPassModalOpen(true)}
        />

        {/* 7. Model House Location & Directions (광주시 서구 상무누리로 154) */}
        <ModelHouseLocationSection
          onOpenPassModal={() => setIsPassModalOpen(true)}
        />

        {/* 8. VIP Consultation Form & Pass Generator (Strictly fulfills Requirement 4) */}
        <ConsultationForm onPassCreated={handlePassCreated} />
      </main>

      {/* 9. Footer (Strictly fulfills Requirement 5 unified contact & cupcamon links) */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenPassModal={() => setIsPassModalOpen(true)}
      />

      {/* 10. Mobile Sticky Bar (Strictly fulfills Requirement 3: 3 fixed bottom buttons) */}
      <MobileStickyBar
        onScrollToConsultation={() => scrollToSection('consultation')}
      />

      {/* 11. Desktop Floating Quick Actions */}
      <FloatingSpeedDial
        onScrollToConsultation={() => scrollToSection('consultation')}
        onOpenPassModal={() => setIsPassModalOpen(true)}
      />

      {/* 12. Digital Visit Pass Voucher Modal (Matching user photo KakaoTalk_20261010_163859264.jpg) */}
      <VisitPassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        guestName={currentGuest.name}
        guestDate={currentGuest.date}
        guestUnit={currentGuest.unitType}
      />
    </div>
  );
}
