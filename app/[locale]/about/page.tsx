"use client";
import React from 'react'
import HeroSection from "@/sections/home_page/HeroSection"
import BackgroundImages from "@/images/about/Background.png"
import ContactComponent from "@/components/ContactComponent"
import InformationSection from '@/sections/about/InformationSection'
import NewsSection from '@/sections/about/NewsSection'
import OurMisionSection from '@/sections/about/OurMisionSection'
import { useTranslations } from "next-intl";

const About = () => {
	const t = useTranslations("about");
	return (
		<div>
			<HeroSection image={BackgroundImages} title={t("heroTitleAbout")}/>
			<InformationSection />
			<OurMisionSection/>
			<NewsSection />
			<ContactComponent />
		</div>
	)
}

export default About