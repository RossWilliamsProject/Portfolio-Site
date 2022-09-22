import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
//import CovidR from '../Components/FullProjectComponents/CovidR.js'
import { useEffect } from 'react';
import React from 'react'

import DissertationOverview from '../Components/ProjectOverviewComponents/DissertationOverview.js'



const DissertationPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <DissertationOverview/>

      <Footer />
    </div>
  )
}

export default DissertationPage