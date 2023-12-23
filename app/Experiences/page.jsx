"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar.jsx";
import Header from "../../components/Header.jsx"

export default function Experiences() {
  return (
    <>
    <Header />
      <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-700 text-xl">

        </h3>
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
            duration: 2.0,
          }}
          className="flex absolute flex-row top-18 items-center max-w-[600px]"
        >
          <div className="">
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://pet-front-end.onrender.com/">
                    <Image 
                      className="rounded-t-lg"  
                      src="/assets/fetch-pet-resource.png"
                      width="300"
                      height="300"
                      alt="" />
                </a>
                <div className="p-3">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pet Resource Site</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Scroll through threads of cat and dog related content.</p>
                    <a href="https://pet-front-end.onrender.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://youngtruth.net">
            <Image 
                      className="rounded-t-lg"  
                      src="/assets/truth-web.png"
                      width="300"
                      height="300"
                      alt="" />                </a>
                <div className="p-3">
                <a href="https://youngtruth.net">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Artist Landing Page</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Artist/Entrepreneur/Herbalist </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                <Image 
                      className="rounded-t-lg"  
                      src="/assets/love.jpg"
                      width="300"
                      height="300"
                      alt="" />           
                </a>
                <div className="p-3">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Landing Page</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Creative Director</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
          </div>
        </motion.div>
        </div>
      <Navbar />
    </>
  );
}