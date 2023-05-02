import React from "react";
import "./index.css";
import HomePage from "./MainPages/HomePage";
import AboutPage from "./MainPages/AboutPage";
import ProjectsPage from "./MainPages/ProjectsPage";
import ContactPage from "./MainPages/ContactPage";

import Project1Page from "./ProjectsPages/Project1Page";
import Project2Page from "./ProjectsPages/Project2Page";
import Project3Page from "./ProjectsPages/Project3Page";
import Project4Page from "./ProjectsPages/Project4Page";
import Project5Page from "./ProjectsPages/Project5Page";

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

        <Route path="/Project2Page" element={<Project2Page/>} />
        <Route path="/Project3Page" element={<Project3Page/>} />
        <Route path="/Project4Page" element={<Project4Page/>} />
        <Route path="/Project5Page" element={<Project5Page/>} />

      </Routes>
    </>
  );
}

export default App;
