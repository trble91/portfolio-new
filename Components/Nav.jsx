'use client'
import React from "react";
import Link from "next/link";
import Experiences from "./Screens/Experiences";
import Bio from "./Screens/Bio";
import Photography from "./Screens/Photography";

export default function Nav() {
  return (
    <nav className="relative bottom-0 p-5 flex-row-reverse items-end space-between max-w-[600px] mx-auto z-20 xl:items-center">
      <Link href="/Experiences">Experiences</Link>
      <Link href="/Photography">Photography</Link>
      <Link href="/Bio">Bio</Link>
      <Link href="/">Home</Link>
    </nav>
  );
}
