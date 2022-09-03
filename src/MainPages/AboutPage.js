import React from 'react'
import AboutContent from '../Components/AboutComponents/AboutContent'
import EducationContent from '../Components/EducationComponents/EducationContent'
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
            <AltHeroImage heading="About" text="Who Am I?"/>
            <AboutContent />
            <EducationContent />
            <Footer />
        </div>
    )
}

export default AboutPage