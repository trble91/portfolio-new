"use client"
import React from "react";
import Header from "@/Components/Header.jsx";
import Homepage from "@/Components/Screens/Homepage.jsx";
import Bio from "@/Components/Screens/Bio";
import Photography from "@/Components/Screens/Photography";
import Nav from "@/Components/Nav.jsx";
import './globals.css'
import Experiences from "@/Components/Screens/Experiences";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <div className="snap-mandatory min-h-screen dark:bg-gray-800 dark:text-gray-900">
          <Header />
          <Homepage />
          <Bio />
          <Experiences />
          <Photography />
          <Nav />
        </div>
      </React.StrictMode>
    </>
  );
}
