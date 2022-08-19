import React from 'react'
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import Work from '../Components/ProjectComponents/Work'
import NavBar from '../Components/NavBarComponents/NavBar';
import { useEffect } from 'react';

const ProjectsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <NavBar />
            <AltHeroImage heading="Projects" text="Recent Works"/>
            <Work/>
            <Footer />
        </div>
    )
}

export default ProjectsPage