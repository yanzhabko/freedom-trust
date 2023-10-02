'use client'
import React from "react";
import HeroSection from "@/sections/home_page/HeroSection";
import DonateSection from "@/sections/home_page/DonateSection";
import WhatDoSection from "@/sections/home_page/WhatDoSection";
import ContactComponent from "@/components/ContactComponent";
import BackgroundImages from "@/images/home_page/background.png";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('home');
  return (
    <div>
      <HeroSection
        image={BackgroundImages}
        title={t('hero_title')}
      />
      <DonateSection />
      <WhatDoSection />
      <ContactComponent />
    </div>
  );
}
