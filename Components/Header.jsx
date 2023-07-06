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
            duuration: 1.5,
            }}
            className="flex flex-row items-center">
            <SocialIcon 
                url="https://www.github.com"
                fgColor="gray"
                bgColor="transparent" />

            <SocialIcon 
                network="email"
                fgColor="gray"
                bgColor="transparent" />

            <SocialIcon 
                url="https://www.linkedin.com"
                fgColor="gray"
                bgColor="transparent" />
        </motion.div>
        {/* <motion.div 
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
            duuration: 1.5,
            }}
            className="flex flex-row items-center">
            <SocialIcon 
                url="https://www.instagram.com"
                fgColor="gray"
                bgColor="transparent" />
            <SocialIcon 
                url="https://www.facebook.com"
                fgColor="gray"
                bgColor="transparent" />

            <SocialIcon 
                url="https://www.twitter.com"
                fgColor="gray"
                bgColor="transparent" />
        </motion.div> */}
    </header>
  )
}