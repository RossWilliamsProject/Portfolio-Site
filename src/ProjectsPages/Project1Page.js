import "./ProjectStyles.css";
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
import React from 'react'

const Project1Page = () => {
  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Titanic" text="Machine Learning Competition" />
      Titanic Stuff
      <Footer />
    </div>
  )
}

export default Project1Page