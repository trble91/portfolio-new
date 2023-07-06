import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <>
   <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl sm:text-gray-500'>
            Bio
        {/* <Image src="/assets/aaron.png" alt=""  width={500} height={300} priority={false} />     */}
        </h3>  
        <h6 className='absolute top-44 uppercase tracking-[15px] text-gray-500 text-xl sm:text-gray-500'>
           Aaron Daley
        </h6>  
        <div className='flex absolute flex-row text-center text-gray-500 text-lg top-52 xl:flex-row max-w-[500px] items-center snap-center'>
          <p className='flex relative text-m'>
            {"A creative problem-solver, software engineer, and Navy veteran. With a sharp eye for identifying gaps in the market, I'm driven to fill them through skillful approach, collaboration, plus continuous learning. I enjoy building innovative solutions that will make a difference in the world. Along with building software solutions, my passions for curating music and photography helps me to seek innovation and aesthetic in digital product development."} 
          </p>
        </div>
    </motion.div>
    </>
  )
}
