import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Homepage from './Screens/Homepage';

export default function footer() {
  return (
    <footer className="sticky bottom-0 p-5 flex-row-reverse items-end justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
        <motion.div 
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
            }}
          animate={{
            x: 1,
            opacity: 1,
            scale: 1,
            }}
          transition={{
            duration: 0.9,
            }}
            >
            <a href="bit.ly/daleyportfolio" className='flex relative float-right'>
                <Image 
                src="/assets/aaron.png"
                alt="" width={50} height={50}
                />
           </a>
        </motion.div>
    </footer>
  )
}
