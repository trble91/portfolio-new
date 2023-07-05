"use client"

import Head from "next/head";
import React from 'react'
import Header from "@/Components/Header.jsx";
import Experiences from "@/Components/Experiences.jsx";
import AboutMe from "@/Components/AboutMe.jsx";
import Projects from "@/Components/Projects.jsx";
import Photography from "@/Components/Photography.jsx";
import Skills from "@/Components/Skills.jsx";
import Homepage from "@/Components/Homepage.jsx";

export default function Home() {
  return (
    <main className="snap-start">
      <Header />
      <Homepage />
      <AboutMe />
      <Projects />
      <Experiences />
      <Skills />
      <Photography />
        
    </main>
  )
}
