
import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
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
            duration: 0.9,
            }}
            className="flex flex-row items-center">
            <SocialIcon 
                url="https://www.github.com/trble91"
                fgColor="grey"
                bgColor="transparent"
                />

            <SocialIcon 
                network="email"
                url="mailto:aaron.wdaley@gmail.com"
                fgColor="grey"
                bgColor="transparent"
                />

            <SocialIcon 
                url="https://www.linkedin.com/in/daleyaaron"
                fgColor="grey"
                bgColor="transparent" 
                />
        </motion.div>
    </header>
  )
}