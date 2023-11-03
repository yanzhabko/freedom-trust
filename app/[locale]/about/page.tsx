import React from "react";
import ContactComponent from "@/components/ContactComponent";
import HistorySection from "@/sections/about_page/HistorySection";
import MissionSection from "@/sections/about_page/MissionSection";
import HeroSection from "@/sections/home_page/HeroSection";
import background from "@/images/about_page/background.png";
import NewsSection from "@/sections/about_page/NewsSection";
import { MantineProvider } from "@mantine/core";

const About = () => {
  return (
    <MantineProvider>
      <HeroSection image={background} title="Title" />
      <HistorySection />
      <MissionSection />
      <NewsSection />
      <ContactComponent />
    </MantineProvider>
  );
};

export default About;
