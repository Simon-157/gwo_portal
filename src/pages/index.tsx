// libraries
import Banner from '@/components/index/banner';
import Community from '@/components/index/community';
import CallToAction from '@/components/index/cta';
import Empower from '@/components/index/empower';
import Hero from '@/components/index/hero';
import Services from '@/components/index/services';
import ThreeSections from '@/components/index/steps/3 steps';
import HomeLayout from '@/components/ui/Layout';
import React from 'react'

const Home = () => {

    return (
        <>
			<Banner />
            <HomeLayout>
                <Hero />
                <Empower />
                <ThreeSections />
                <Services />
                <Community />
                {/* <Testimonials /> */}
                <CallToAction />
            </HomeLayout>

        </>
    );
}

export default Home
