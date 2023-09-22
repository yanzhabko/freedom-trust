import React from "react"
import HeroSection from "@/sections/home_page/HeroSection"
import DonateSection from "@/sections/home_page/DonateSection"
import ContactComponent from "@/components/ContactComponent"
import BackgroundImages from "@/images/home_page/background.png"

export default function Home() {
  return (
    <div>
      <HeroSection image={BackgroundImages} title="Ukrainian Society for Children and Adults with Autims"/>
      <DonateSection />
      <ContactComponent />
    </div>
  )
}
