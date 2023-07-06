"use client";

import React from "react";
import Header from "@/Components/Header.jsx";
import Experiences from "@/Components/Screens/Experiences.jsx";
import AboutMe from "@/Components/Screens/AboutMe.jsx";
import Photography from "@/Components/Screens/Photography.jsx";
import Skills from "@/Components/Screens/Skills.jsx";
import Homepage from "@/Components/Screens/Homepage.jsx";
import Footer from "@/Components/Footer.jsx";

export default function Home() {
  return (
      <React.StrictMode>
        <main className="snap-mandatory min-h-screen">
          <Header />
          <Homepage />
          <AboutMe />
          <Experiences />
          <Skills />
          <Photography />
        </main>
        <Footer />
      </React.StrictMode>
  );
}
