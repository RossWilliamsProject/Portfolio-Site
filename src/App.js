import React from "react";
import "./index.css";
import HomePage from "./MainPages/HomePage";
import AboutPage from "./MainPages/AboutPage";
import ProjectsPage from "./MainPages/ProjectsPage";
import ContactPage from "./MainPages/ContactPage";

import Project1Page from "./ProjectsPages/Project1Page";
import Project2Page from "./ProjectsPages/Project2Page";
import Project3Page from "./ProjectsPages/Project3Page";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Projects" element={<ProjectsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />


        <Route path="/Project1" element={<Project1Page/>} />
        <Route path="/Project2" element={<Project2Page/>} />
        <Route path="/Project3" element={<Project3Page/>} />

      </Routes>
    </>
  );
}

export default App;
