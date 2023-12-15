"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

export default function Photography() {
  return (
   <div className='flex sticky flex-row text-center sm:max-w-[300px]  md:flex-row md:text-left xl:flex-row max-w-[400px] xl:px-5 min-h-screen justify-center xl: space-y-4 mx-auto items-center snap-center'>
    <h3 className='absolute top-10 uppercase tracking-[17px] text-gray-700 text-2xl sm:text-gray-700 sm:text-base md:text-gray-700 lg:text-gray-700 xl:text-gray-800'>
        Photography
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
                duration: 3.0,
            }}
            className='flex relative flex-col text-center mt-20 snap-center'>
        <Image src="/assets/bride.jpg" alt="Bride" width={200} height={50} />
        <Image src="/assets/yankee Large.jpeg" alt="Yankee Stadium" width={200} height={50} />
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
                duration: 3.0,
            }} 
            className='flex relative flex-col text-center mt-20 snap-center'>
        <Image src="/assets/groom Large.jpeg" alt="groom" width={200} height={50} />
        <Image src="/assets/corner Large.jpeg" alt="cornerClass" width={200} height={50} />
        </motion.div>
    </>
    </div>
  )
}

