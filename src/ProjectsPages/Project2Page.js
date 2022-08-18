import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
import CovidR from '../Components/PythonComponents/CovidR.js'

import React from 'react'

const Project2Page = () => {
  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Covid-19" text="Exploratory Data Analysis" />
      <CovidR/>

      <Footer />
    </div>
  )
}

export default Project2Page