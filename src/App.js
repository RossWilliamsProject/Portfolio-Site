import React from "react";
import "./index.css";
import HomePage from "./MainPages/HomePage";
import AboutPage from "./MainPages/AboutPage";
import ProjectsPage from "./MainPages/ProjectsPage";
import ContactPage from "./MainPages/ContactPage";

import Project1Page from "./ProjectsPages/Project1Page";

//import DissertationPage from "./ProjectsPages/DissertationPage";
//import Project2Page from "./ProjectsPages/Project2Page";
//import MealPlannerPage from "./ProjectsPages/MealPlannerPage";
//import PortfolioPage from "./ProjectsPages/PortfolioPage";
//import TitanicPage from "./ProjectsPages/TitanicPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Projects" element={<ProjectsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />


        <Route path="/Project1Page" element={<Project1Page/>} />

        <Route path="/Project1Page" element={<Project1Page/>} />
        <Route path="/Project1Page" element={<Project1Page/>} />
        <Route path="/Project1Page" element={<Project1Page/>} />
        <Route path="/Project1Page" element={<Project1Page/>} />
        <Route path="/Project1Page" element={<Project1Page/>} />

      </Routes>
    </>
  );
}

export default App;
