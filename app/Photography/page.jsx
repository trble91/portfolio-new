"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar/page.jsx";
import Header from "../Header/page.jsx"
import Head from "next/head.js";

export default function Photography() {
  const imageSources = [
    "/assets/groom Large.jpeg",
    "/assets/corner Large.jpeg",
  ];
  const imageSources2 = [
    "/assets/yankee-Large.jpeg",
    "/assets/bride.jpg"
  ];
  return (
    <>
    <Header />
      <div className="flex sticky flex-row text-center sm:max-w-[300px]  md:flex-row md:text-left xl:flex-row max-w-[400px] xl:px-5 min-h-screen justify-center xl: space-y-4 mx-auto items-center snap-center">
        <h3 className="absolute top-10 uppercase tracking-[17px] text-gray-700 text-2xl sm:text-gray-700 sm:text-base md:text-gray-700 lg:text-gray-700 xl:text-gray-800">
      
        </h3>
        <>
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 5.0,
            }}
            className="flex relative flex-col bottom-20 top-2 text-center mt-20 snap-center"
          >
            {imageSources.map((src, index) => (
        <Image
          key={index} 
          src={src}
          alt={`Image ${index + 1}`}
          width={200}
          height={50}
        />
      ))}
          </motion.div>
        </>
        <>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 5.0,
            }}
            className="flex relative flex-col bottom-20 top-2 text-center mt-20 snap-center"
          >
             {imageSources2.map((src, index) => (
        <Image
          key={index} 
          src={src}
          alt={`Image ${index + 1}`}
          width={200}
          height={50}
        />
      ))}
          </motion.div>
        </>
      </div>
      <Navbar />
    </>
  );
}
