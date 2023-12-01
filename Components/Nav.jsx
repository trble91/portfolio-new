import React from 'react'
import Link from 'next/link';
import Experiences from './Screens/Experiences';
import AboutMe from './Screens/AboutMe';
import Photography from './Screens/Photography';

export default function Nav() {
  return (
    <Nav className="sticky bottom-0 p-5 flex-row-reverse items-end justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
     <>
     <Link>
       {<Experiences />}
     </Link>
     <Link>
      {<Photography />}
     </Link>
     <Link>
      {<AboutMe />}
     </Link>
     </>
    </Nav>
  )
}
