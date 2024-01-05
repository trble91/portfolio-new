'use client'

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative absolute space-x-4 space-y-8 text-center p-5 uppercase mb-2 -mt-10 tracking-[10px] text-gray-700 text-sm font-medium text-center text-white bg-gray-100 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800">
      <Link href="/">Home</Link>
      {/* <Link href="/Contact">Contact</Link> */}
      <Link href="/Experiences">Experiences</Link>
      <Link href="/Photos">Photos</Link>
      <Link href="/Skills">Skills</Link>
    </nav>
  );
}
