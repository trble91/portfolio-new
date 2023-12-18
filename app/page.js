"use client"
import React from 'react';
import Header from "@/components/Header.jsx";
import Homepage from "@/app/Home/page.jsx";
import Navbar from "@/components/Navbar.jsx";
import "./globals.css"

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
