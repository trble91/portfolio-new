import React from 'react'
import Link from 'next/link';
import Experiences from './Screens/Experiences';
import AboutMe from './Screens/AboutMe';
import Photography from './Screens/Photography';

export default function Nav() {
  return (
    <nav className="sticky bottom-0 p-5 flex-row-reverse items-end justify-between max-w-[600px] mx-auto z-20 xl:items-center"> 
     <Link href={<Experiences />}>
      <a className=''>Experiences</a>
     </Link>
     <Link href={<Photography />}>
      <a className=''>Photography</a>
     </Link>
     <Link href={<AboutMe />}>
      <a className=''>Bio</a>
     </Link>
     <Link href="/">
      <a className=''>Home</a>
     </Link>
    </nav>
  )
}
