import React from 'react'
import HeroSection from "@/sections/home_page/HeroSection"
import BackgroundImages from "@/images/about/Background.png"
import ContactComponent from "@/components/ContactComponent"
import InformationSection from '@/sections/about/InformationSection'
import NewsSection from '@/sections/about/NewsSection'
import OurMisionSection from '@/sections/about/OurMisionSection'

const About = () => {
	return (
		<div>
			<HeroSection image={BackgroundImages} title="Who we are?"/>
			<InformationSection />
			<OurMisionSection/>
			<NewsSection />
			<ContactComponent />
		</div>
	)
}

export default About