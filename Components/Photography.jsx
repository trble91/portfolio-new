import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

export default function Photography() {
  return (
    <>
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-4 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-both'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Photography
    </h3>   
    <div className='flex sticky flex-row md xl:flex-row max-w-[200px] xl:px-4 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-both'>
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
            duuration: 1.5,
            }}

        className='flex sticky flex-row md xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-both'>
        <Image src="/assets/bride.jpg" alt="" width={400} height={300} />
        <Image src="/assets/groom.jpg" alt="" width={400} height={300} />
        </motion.div>
    </div>
    <div className='flex sticky flex-row md xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-both'>
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
            duuration: 1.0,
            }} 
        className='flex sticky flex-row md xl:flex-row max-w-[200px] xl:px-4 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-both'>
        <Image src="/assets/corner.jpg" alt="" width={500} height={300} />
        <Image src="/assets/yankee.jpg" alt="" width={500} height={300} />
        </motion.div>
    </div>

    </motion.div>
    </>
  )
}

