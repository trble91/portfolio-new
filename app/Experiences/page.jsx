"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Experiences() {
  return (
    <>
      <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-700 text-xl">
          Projects
        </h3>
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
            duration: 3.0,
          }}
          className="flex absolute flex-row top-18 items-center max-w-[600px]"
        >
          <a href="https://pet-front-end.onrender.com/">
            <Image
              src="/assets/fetch-pet-resource.png"
              alt="fetch"
              width="300"
              height="300"
              className="flex relative flex-col text-center mt-20 snap-center"
            />
          </a>

          <a href="https://github.com/sydney-rd/PawMeets-react-frontend">
            <Image
              src="/assets/PawMeets2.png"
              alt="pawmeets"
              width="300"
              height="300"
              className="flex relative flex-col text-center mt-20 snap-center"
            />
          </a>

          <a href="https://youngtruth.net">
            <Image
              src="/assets/truth-web.png"
              alt="truth"
              width="300"
              height="300"
              className="flex relative flex-col text-center mt-20 snap-center"
            />
          </a>
        </motion.div>
      </div>
      <Navbar />
    </>
  );
}
