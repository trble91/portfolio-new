import React from 'react'
import { motion } from "framer-motion"

export default function Circles() {
  return (
    <>
    <motion.div
      initial={{
        x: 700,
        opacity: 0,
        scale: 0.5,
        }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
        }}
      transition={{
        duration: 2.7,
        }}
    >Circles</motion.div>
    <motion.div
      initial={{
        x: 700,
        opacity: 0,
        scale: 0.5,
        }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
        }}
      transition={{
        duration: 2.7,
        }}
    >Circles</motion.div>
    <motion.div
      initial={{
        x: 700,
        opacity: 0,
        scale: 0.5,
        }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
        }}
      transition={{
        duration: 2.7,
        }}
    >Circles</motion.div>
  
    </>
  )
}
