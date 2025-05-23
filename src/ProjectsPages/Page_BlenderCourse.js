import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer.js'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage.js'
import NavBar from '../Components/NavBarComponents/NavBar.js'
import { useEffect } from 'react';

import PROJECT_BLENDERCOURSE from '../Components/ProjectOverviewComponents/Project_BlenderCourse.js'
import PICS_PROJECT_BLENDERCOURSE from "../Components/ProjectOverviewComponents/Pics_Project_BlenderCourse.js";

const PAGE_BLENDERCOURSE = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <PROJECT_BLENDERCOURSE/>
      <PICS_PROJECT_BLENDERCOURSE/>
      <Footer />
    </div>
  )
}

export default PAGE_BLENDERCOURSE