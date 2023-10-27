import React from 'react'
import ContactComponent from '@/components/ContactComponent'
import HistorySection from '@/sections/about_page/HistorySection'
import MissionSection from '@/sections/about_page/MissionSection'
import HeroSection from '@/sections/home_page/HeroSection'
import background from "@/images/about_page/background.png"



const About = () => {
	return (
		<section>
			<HeroSection image={background} title='Title' />
			<HistorySection />
			<MissionSection />
			{/* News */}
			<ContactComponent />
		</section>
	)
}

export default About