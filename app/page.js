"use client";

import React from "react";
import Header from "@/Components/Header.jsx";
import Homepage from "@/Components/Screens/Homepage.jsx";
import Nav from "@/Components/Nav.jsx";
import Skills from "@/Components/Screens/Skills";
import './globals.css'

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <div className="snap-mandatory min-h-screen">
          <Header />
          <Homepage />
          <Skills />
          <Nav />
        </div>
      </React.StrictMode>
    </>
  );
}
