import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

export default function Photography() {
  return (
    <>
   <motion.div className='flex sticky flex-row text-center md:flex-row md:text-left xl:flex-row max-w-[400px] xl:px-5 min-h-screen justify-center xl: space-y-4 mx-auto items-center snap-center'>
    <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl sm:text-gray-500 md:text-gray-500 lg:text-gray-500 xl:text-gray-500'>
        Photography
    </h3>   
    <span>
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
                duration: 2.0,
            }}
            className='flex relative flex-col text-center mt-20 snap-center'>
        <Image src="/assets/bride.jpg" alt="" width={500} height={300} />
        <Image src="/assets/yankee Large.jpeg" alt="" width={500} height={300} />
        </motion.div>
    </span>
    <span>
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
            className='flex relative flex-col text-center mt-20 snap-center'>
        <Image src="/assets/groom Large.jpeg" alt="" width={500} height={300} />
        <Image src="/assets/corner Large.jpeg" alt="" width={500} height={300} />
        </motion.div>
    </span>
    </motion.div>
    </>
  )
}

