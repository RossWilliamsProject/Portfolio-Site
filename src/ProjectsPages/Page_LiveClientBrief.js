import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer.js'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage.js'
import NavBar from '../Components/NavBarComponents/NavBar.js'
//import CovidR from '../Components/FullProjectComponents/CovidR.js'
import { useEffect } from 'react';

import PROJECT_LIVECLIENTBRIEF from '../Components/ProjectOverviewComponents/Project_LiveClientBrief.js'

const PAGE_LIVECLIENTBRIEF = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <PROJECT_LIVECLIENTBRIEF/>

      <Footer />
    </div>
  )
}

export default PAGE_LIVECLIENTBRIEF