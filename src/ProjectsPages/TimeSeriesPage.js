import "./ProjectStyles.css";
import NavBar from '../Components/NavBarComponents/NavBar';
import Footer from '../Components/FooterComponents/Footer'

import React from 'react'
import TimeSeriesOverview from "../Components/ProjectOverviewComponents/TimeSeriesOverview";

const TimeSeriesPage = () => {
  return (
    <div>
      <NavBar />
      <TimeSeriesOverview/>
      <Footer />
    </div>
  )
}

export default TimeSeriesPage