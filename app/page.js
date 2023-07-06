"use client"

import React from 'react'
import Header from "@/Components/Header.jsx";
import Experiences from "@/Components/Experiences.jsx";
import AboutMe from "@/Components/AboutMe.jsx";
import Projects from "@/Components/Projects.jsx";
import Photography from "@/Components/Photography.jsx";
import Skills from "@/Components/Skills.jsx";
import Homepage from "@/Components/Homepage.jsx";
import Contact from '@/Components/Contact';

export default function Home() {
  return (
    <main className="snap-mandatory min-h-screen">
      <Header />
      {/* <Homepage /> */}
      <AboutMe />
      <Projects />
      <Experiences />
      <Skills />
      <Photography />
      <Contact />
    </main>
  )
}
