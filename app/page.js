"use client"

import React from 'react'
import Header from "@/Components/Header.jsx";
import Experiences from "@/Components/Screens/Experiences.jsx";
import AboutMe from "@/Components/Screens/AboutMe.jsx";
// import Projects from "@/Components/Screens/Projects.jsx";
import Photography from "@/Components/Screens/Photography.jsx";
import Skills from "@/Components/Screens/Skills.jsx";
import Homepage from "@/Components/Screens/Homepage.jsx";
import Contact from '@/Components/Screens/Contact.jsx';
// import Circles from '@/Components/Circles.jsx';

export default function Home() {
  return (
    <>
    <main className="snap-mandatory min-h-screen">
      <Header />
      <Homepage />
      <AboutMe />
      {/* <Projects /> */}
      <Experiences />
      <Skills />
      <Photography />
      {/* <Contact /> */}
      {/* <Circles /> */}
    </main>
    </>
  )
}
