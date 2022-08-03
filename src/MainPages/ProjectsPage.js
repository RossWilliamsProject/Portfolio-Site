import React from 'react'
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import Work from '../Components/ProjectComponents/Work'
import NavBar from '../Components/NavBarComponents/NavBar';

const ProjectsPage = () => {
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