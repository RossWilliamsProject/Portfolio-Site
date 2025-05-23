import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
import { useEffect } from 'react';

import PICS_PROJECT_ANTIQUESHOPPICS from '../Components/ProjectOverviewComponents/Pics_Project_AniqueShopPics'

const PAGE_ANTIQUESHOPPICS = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <PICS_PROJECT_ANTIQUESHOPPICS/>

      <Footer />
    </div>
  )
}

export default PAGE_ANTIQUESHOPPICS