import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
//import CovidR from '../Components/FullProjectComponents/CovidR.js'
import { useEffect } from 'react';
import React from 'react'

import PortfolioOverview from "../Components/ProjectOverviewComponents/PortfolioOverview";



const PortfolioPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>
      <PortfolioOverview/>

      <Footer />
    </div>
  )
}

export default PortfolioPage