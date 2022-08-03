import React from 'react'
import NavBar from '../Components/NavBarComponents/NavBar';
import HomeHeroImage from '../Components/HeroImageComponents/HomeHeroImage'
import Footer from '../Components/FooterComponents/Footer'
import Work from '../Components/ProjectComponents/Work'

const HomePage = () => {
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