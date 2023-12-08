import React from "react";
import Link from "next/link";
import Experiences from "./Screens/Experiences";
import AboutMe from "./Screens/AboutMe";
import Photography from "./Screens/Photography";

export default function Nav() {
  return (
    <nav className="sticky bottom-0 p-5 flex-row-reverse items-end justify-between max-w-[600px] mx-auto z-20 xl:items-center">
      <Link href='/Screens/Experiences'>Experiences</Link>
      <Link href='/Screens/Photography'>Photography</Link>
      <Link href='/Screens/AboutMe'>Bio</Link>
      <Link href="/"> Home</Link>
    </nav>
  );
}
