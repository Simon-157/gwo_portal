//libraries
import React from "react";
// component
import AboutSections from "@/components/index/about/about_info";
import Banner from "@/components/index/banner";
import CallToAction from "@/components/index/cta";
import HomeLayout from "@/components/ui/Layout";
// import Testimonials from "@components/index/testimonials";

export default function Home() {
	return (
		<>
			<Banner />
			<HomeLayout>
				
				<AboutSections/>
			
				<CallToAction />
			</HomeLayout>
		</>
	);
}

