import React from "react";
import "./index.css";
import HomePage from "./MainPages/HomePage";
import AboutPage from "./MainPages/AboutPage";
import ProjectsPage from "./MainPages/ProjectsPage";
import ContactPage from "./MainPages/ContactPage";

import CovidRPage from "./ProjectsPages/CovidRPage";
import DissertationPage from "./ProjectsPages/DissertationPage";
import Project3Page from "./ProjectsPages/Project3Page";
import MealPlannerPage from "./ProjectsPages/MealPlannerPage";
import PortfolioPage from "./ProjectsPages/PortfolioPage";
import TitanicPage from "./ProjectsPages/TitanicPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Projects" element={<ProjectsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />


        <Route path="/CovidRPage" element={<CovidRPage/>} />
        <Route path="/DissertationPage" element={<DissertationPage/>} />
        <Route path="/Project3" element={<Project3Page/>} />
        <Route path="/MealPlannerPage" element={<MealPlannerPage/>} />
        <Route path="/PortfolioPage" element={<PortfolioPage/>} />
        <Route path="/TitanicPage" element={<TitanicPage/>} />

      </Routes>
    </>
  );
}

export default App;
