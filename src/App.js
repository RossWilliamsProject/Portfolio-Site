import React from "react";
import "./index.css";
import HomePage from "./MainPages/HomePage";
import AboutPage from "./MainPages/AboutPage";
import ProjectsPage from "./MainPages/ProjectsPage";
import ContactPage from "./MainPages/ContactPage";

import PAGE_ANTIQUESHOPLOOKDEV from "./ProjectsPages/Page_AntiqueShopLookDev";
import PAGE_ANTIQUESHOPPICS from "./ProjectsPages/Page_AntiqueShopPics";

import PAGE_TAVERNLOOKDEV from "./ProjectsPages/Page_TavernLookDev";
import PAGE_BLENDERCOURSE from "./ProjectsPages/Page_BlenderCourse";
import PAGE_MICROMOVIE from "./ProjectsPages/Page_MicroMovie";
import PAGE_LIVECLIENTBRIEF from "./ProjectsPages/Page_LiveClientBrief";
import PAGE_ANIMATIONDISSERTATION from "./ProjectsPages/Page_AnimationDisseration";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Projects" element={<ProjectsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />


        <Route path="/Page_AntiqueShopLookDev" element={<PAGE_ANTIQUESHOPLOOKDEV/>} />
        <Route path="/Page_AntiqueShopPics" element={<PAGE_ANTIQUESHOPPICS/>} />

        <Route path="/Page_TavernLookDev" element={<PAGE_TAVERNLOOKDEV/>} />
        <Route path="/Page_BlenderCourse" element={<PAGE_BLENDERCOURSE/>} />
        <Route path="/Page_MicroMovie" element={<PAGE_MICROMOVIE/>} />
        <Route path="/Page_LiveClientBrief" element={<PAGE_LIVECLIENTBRIEF/>} />
        <Route path="/Page_AnimationDisseration" element={<PAGE_ANIMATIONDISSERTATION/>} />

      </Routes>
    </>
  );
}

export default App;
