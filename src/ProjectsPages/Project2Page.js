import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
//import CovidR from '../Components/FullProjectComponents/CovidR.js'
import { useEffect } from 'react';
import React from 'react'

import CovidROverview from '../Components/ProjectOverviewComponents/CovidROverview.js'



const Project2Page = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <CovidROverview/>

      <Footer />
    </div>
  )
}

export default Project2Page