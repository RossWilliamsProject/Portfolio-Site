import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer.js'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage.js'
import NavBar from '../Components/NavBarComponents/NavBar.js'
import { useEffect } from 'react';

import PROJECT_ANTIQUESHOPLOOKDEV from '../Components/ProjectOverviewComponents/Project_AntiqueShopLookDev.js'

const PAGE_ANTIQUESHOPLOOKDEV = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <PROJECT_ANTIQUESHOPLOOKDEV/>

      <Footer />
    </div>
  )
}

export default PAGE_ANTIQUESHOPLOOKDEV