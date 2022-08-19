import React from 'react'
import NavBar from '../Components/NavBarComponents/NavBar';
import HomeHeroImage from '../Components/HeroImageComponents/HomeHeroImage'
import Footer from '../Components/FooterComponents/Footer'
import Work from '../Components/ProjectComponents/Work'
import { useEffect } from 'react';

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <NavBar/>
            <HomeHeroImage/>
            <Work/>
            <Footer />
        </div>
    )
}

export default HomePage