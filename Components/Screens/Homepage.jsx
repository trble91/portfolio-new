import React from "react";
import Image from "next/image";
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
          duration: 2,
        }}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-end"
      >
        <h3 className="absolute top-24 uppercase tracking-[17px] text-gray-500 text-2xl sm:text-gray-500">
          The way to get started is to quit talking and begin doing
        </h3>
        <p className="absolute bottom-48 uppercase tracking-[2px] text-gray-500 text-md marker:mb-10">
          - Walt Disney
        </p>
      </motion.div>
    </>
  );
}
