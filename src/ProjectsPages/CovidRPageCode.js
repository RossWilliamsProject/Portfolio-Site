import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
//import CovidR from '../Components/FullProjectComponents/CovidR.js'
import { useEffect } from 'react';
import React from 'react'

import CovidR from '../Components/FullProjectComponents/CovidR.js'



const CovidRPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Covid-19 in R" text="An Exploratory Data Analysis"/>
      <CovidR/>

      <Footer />
    </div>
  )
}

export default CovidRPage