import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
import TitanicPython from '../Components/FullProjectComponents/TitanicPython.js'
import { useEffect } from 'react';

import React from 'react'

const Project1Page = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Titanic" text="Machine Learning Competition" />
      <TitanicPython />

      <Footer />
    </div>
  )
}

export default Project1Page
