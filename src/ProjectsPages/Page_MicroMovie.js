import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer.js'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage.js'
import NavBar from '../Components/NavBarComponents/NavBar.js'
import { useEffect } from 'react';

import PROJECT_MICROMOVIE from '../Components/ProjectOverviewComponents/Project_MicroMovie.js'

const PAGE_MICROMOVIE = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <PROJECT_MICROMOVIE/>

      <Footer />
    </div>
  )
}

export default PAGE_MICROMOVIE