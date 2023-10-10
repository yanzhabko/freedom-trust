"use client";
import React from 'react'
import HeroSection from "@/sections/home_page/HeroSection"
import BackgroundImage from "@/images/responsibilities/BackGroundImage.png"
import InfoSection from '@/sections/responsibilities/InfoSection'
import { useTranslations } from "next-intl";

const Responsibilities = () => {
	const t = useTranslations("responsibilities");
	return (
		<div>
			<HeroSection image={BackgroundImage} title={t("heroTitleResponsibilities")}/>
			<InfoSection/>
		</div>
	)
}

export default Responsibilities