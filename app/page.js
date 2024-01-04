"use client"

import "./styles.css"
import React from 'react';
import Header from "@/app/Header/page.jsx";
import Homepage from "@/app/Home/page.jsx";
import Navbar from "@/app/Navbar/page.jsx";


export default function Home() {

  return (
    <>
      <React.StrictMode>
        <div className="snap-mandatory min-h-screen">
          <Header />
          <Homepage />
          <Navbar />
        </div>
      </React.StrictMode>
    </>
  );
}
