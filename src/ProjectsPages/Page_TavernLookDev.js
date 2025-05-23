import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer.js'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage.js'
import NavBar from '../Components/NavBarComponents/NavBar.js'
import { useEffect } from 'react';

import PROJECT_TAVERNLOOKDEV from '../Components/ProjectOverviewComponents/Project_TavernLookDev.js'
import PICS_PROJECT_TAVERNLOOKDEV from "../Components/ProjectOverviewComponents/Pics_Project_TavernLookDev.js";

const PAGE_TAVERNLOOKDEV = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works" />
      <PROJECT_TAVERNLOOKDEV />
      <PICS_PROJECT_TAVERNLOOKDEV />
      <Footer />
    </div>
  )
}

export default PAGE_TAVERNLOOKDEV