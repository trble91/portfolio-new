"use client"
import React from "react";
import Header from "@/Components/Header.jsx";
import Homepage from "@/Components/Screens/Homepage.jsx";
import AboutMe from "@/Components/Screens/AboutMe";
// import Skills from "@/Components/Screens/Skills";
import Photography from "@/Components/Screens/Photography";
// import Nav from "@/Components/Nav.jsx";
import './globals.css'
import Experiences from "@/Components/Screens/Experiences";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <div className="snap-mandatory min-h-screen dark:bg-gray-800 dark:text-gray-300">
          <Header />
          {/* <Nav /> */}
          <Homepage />
          <AboutMe />
          {/* <Skills /> */}
          <Experiences />
          <Photography />
        </div>
      </React.StrictMode>
    </>
  );
}
