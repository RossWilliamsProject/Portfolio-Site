import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
import { useEffect } from 'react';

import React from 'react'
import TitanicOverview from "../Components/ProjectOverviewComponents/TitanicOverview";

const TitanicPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Titanic" text="Machine Learning Competition" />
      <TitanicOverview />

      <Footer />
    </div>
  )
}

export default TitanicPage
