import React from 'react'
import AboutContent from '../Components/AboutComponents/AboutContent'
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
import { useEffect } from 'react';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <NavBar />
            <AltHeroImage heading="About" text="Details About Me"/>
            <AboutContent />
            <Footer />
        </div>
    )
}

export default AboutPage