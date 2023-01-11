import "./ProjectStyles.css";
import NavBar from '../Components/NavBarComponents/NavBar';
import Footer from '../Components/FooterComponents/Footer'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import { useEffect } from 'react';

import React from 'react'
import TimeSeriesOverview from "../Components/ProjectOverviewComponents/TimeSeriesOverview";

const TimeSeriesPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <NavBar />
      <AltHeroImage heading="Projects" text="Recent Works"/>

      <TimeSeriesOverview/>
      <Footer />
    </div>
  )
}

export default TimeSeriesPage