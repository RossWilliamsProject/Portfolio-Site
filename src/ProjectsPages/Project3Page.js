import "./ProjectStyles.css";
import NavBar from '../Components/NavBarComponents/NavBar';
import Footer from '../Components/FooterComponents/Footer'

import React from 'react'
import Project3Overview from "../Components/ProjectOverviewComponents/Project3Overview";

const Project3Page = () => {
  return (
    <div>
      <NavBar />
      <Project3Overview/>
      <Footer />
    </div>
  )
}

export default Project3Page