'use client'

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative absolute space-x-4 space-y-8 text-center p-5 uppercase mb-2 -mt-10 tracking-[10px] text-gray-700">
      <Link href="/">Home</Link>
      <Link href="/Contact">Contact</Link>
      <Link href="/Experiences">Experiences</Link>
      <Link href="/Photography">Photography</Link>
      <Link href="/Skills">Skills</Link>
    </nav>
  );
}
