import React from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons'

export default function Skills() {
  return (
    <>
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>   
        <div>
          <div>
         <ul>
          <p>Tech Stacks</p>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>PostgreSQL</li>
          </ul>
         <ul>
         <p>Tech Stacks</p>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>PostgreSQL</li>
          </ul>
         <ul>
         <p>Tech Stacks</p>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>PostgreSQL</li>
          </ul>
          </div>
        </div> 
    </motion.div>
    </>
  )
}
