"use client"
import React from 'react'
import Navbar from "../Navbar/page.jsx";
import Header from "../Header/page.jsx"


export default function Skills() {
  return (
    <>
    <Header />
    <div className='flex relative text-center top-20 bottom-0 md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center'>
        <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-700 text-2xl dark:text-gray-900'>
            Skills
        </h3>   
     <div className='flex absolute top-14 mr-60 flex-row text-gray-700 text-md top-18 items-center max-w-600px px-10] dark:text-gray-900'>
       <ul>
         <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>PostgreSQL</li>
          <li>Tailwind</li>
          <li>CSS</li>
          <li>SCSS</li>
        </ul>
        </div>
        <div className='flex absolute top-14 ml-60 flex-row text-gray-700 text-md top-18 items-center max-w-600px px-10] dark:text-gray-900'>
        <ul>
          <li>Python</li>
          <li>HTML</li>
          <li>Framer-Motion</li>
          <li>Flask</li>
          <li>Django</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>PeeWee</li>
          <li>Adobe Suite</li> 
        </ul>
       </div>
    </div>
      <Navbar />
  </>
  )
}
