"use client";
import React from "react";
import Header from "@/Components/Header.jsx";
import Homepage from "@/Components/Screens/Homepage.jsx";
import Footer from "@/Components/Footer.jsx";
import "./globals.css";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <div className="snap-mandatory min-h-screen">
          <Header />
          <Homepage />
          <Footer />
        </div>
      </React.StrictMode>
    </>
  );
}
