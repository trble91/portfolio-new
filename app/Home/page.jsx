"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Homepage() {
  return (
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
          duration: 1,
        }}
        className="flex relative flex-col bottom-2 text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center"
      >
        <h3 className="absolute top-60 uppercase max-w-[300px] tracking-[17px] text-gray-700 text-2xl sm:text-gray-700 ">
          The way to get started is to quit talking and begin doing
        </h3>
        <p className="absolute bottom-70 uppercase -mt-10 tracking-[2px] text-gray-700 text-md marker:mb-10">
          - Walt Disney
        </p>
      </motion.div>
    </>
  );
}