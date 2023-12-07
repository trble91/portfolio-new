"use client"
import React from "react";
import Header from "@/Components/Header.jsx";
import Homepage from "@/Components/Screens/Homepage.jsx";
import AboutMe from "@/Components/Screens/AboutMe";
import Skills from "@/Components/Screens/Skills";
import Photography from "@/Components/Screens/Photography";
// import Nav from "@/Components/Nav.jsx";
import './globals.css'

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <div className="snap-mandatory min-h-screen">
          <Header />
          {/* <Nav /> */}
          <Homepage />
          <AboutMe />
          {/* <Skills /> */}
          <Photography />
        </div>
      </React.StrictMode>
    </>
  );
}
