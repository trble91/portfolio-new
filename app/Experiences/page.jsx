"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../Navbar/page.jsx";
import Header from "../Header/page.jsx"

export default function Experiences() {
  const slides = [
    {
      link: "https://pet-front-end.onrender.com/",
      imageSrc: "/assets/fetch-pet-resource.png",
      title: "Pet Resource Site",
      description: "Scroll through threads of cat and dog related content.",
    },
    {
      link: "https://youngtruth.net",
      imageSrc: "/assets/truth-web.png",
      title: "Artist Landing Page",
      description: "Artist/Entrepreneur/Herbalist",
    },
    {
      link: "https://portfolio-new-pi-one.vercel.app",
      imageSrc: "/assets/portfolio-snap.png",
      title: "Portfolio",
      description: "Software Engineer",
    },
    {
      link: "https://trble91.github.io/trivia-game/",
      imageSrc: "/assets/trivia-game.png",
      title: "Trivia Game",
      description: "Test your knowedge with common musical questions",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change the duration to control the slideshow speed

    return () => clearInterval(interval);
  });

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
    <Header />
      <div className="flex relative flex-col bottom- text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-700 text-xl"></h3>
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
            duration: 0.9,
          }}
          className="flex absolute flex-row top-18 items-center max-w-[600px]"
        >
          <div className="">
            <div className="min-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href={slides[currentSlide].link}>
                <Image
                  className="rounded-t-lg"
                  src={slides[currentSlide].imageSrc}
                  width="500"
                  height="300"
                  alt=""
                />
              </a>
              <div className="p-3">
                <a
                  href={slides[currentSlide].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {slides[currentSlide].title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white">
                  {slides[currentSlide].description}
                </p>
                <a
                  href={slides[currentSlide].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-300 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
                    <p><b>Loading...</b></p>
          </div>
        </motion.div>
      </div>
      <Navbar />
    </>
  );
}
