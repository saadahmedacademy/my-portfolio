import Link from 'next/link'
import React from 'react'
import { FaInstalod } from "react-icons/fa";

function navbar() {
  return (
    <header className="sticky z-10 text-white bg-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-cente justify-center items-center text-white mb-4 md:mb-0">
     <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white">    
        <FaInstalod  className='text-3xl rotate[90%] text-black' />
     </span>
      <span className="ml-3 text-xl font-bold">M.SaadAhmed Portfolio</span>
    </a>
    <nav className="md:mx-auto flex flex-wrap items-center gap-5 text-base font-semibold  justify-center">
      <Link href={'/'} className="hover:text-green-400 hover:border-b-2 border-orange-500">Home</Link>
      <Link href={'#about'} className="hover:text-green-400 hover:border-b-2 border-orange-500">About</Link>
      <Link href={'#contect'} className=" hover:text-green-400 hover:border-b-2 border-orange-500">Contect</Link>
      <Link href={'#projects'} className=" hover:text-green-400 hover:border-b-2 border-orange-500">Projects</Link>
    </nav>
  </div>
</header>
  )
}

export default navbar