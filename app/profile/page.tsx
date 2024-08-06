'use client'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { GiSkills } from 'react-icons/gi'
import { MdOutlineConnectWithoutContact } from 'react-icons/md'
import { SiOpenproject } from 'react-icons/si'
import DownloadButton from '../components/DownloadBtn'
import AnimatedButton from '../components/Gotoservice'

const Profile = () => {
  const serviceRoot = () => {
    window.location.href = '/service';
  };
  return (
    <div className="min-h-screen bg-black">
      <div className="flex justify-between items-center p-2 bg-black shadow-md">
        <div className="w-32 h-32">
          <img src="Logo.png" alt="Logo" />
        </div>
        <div className="flex space-x-4">
          <Link href="/profile">
            <CgProfile className="w-14 h-14 text-gray-700 hover:text-blue-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href='/skills'>
            <GiSkills className="w-14 h-14 text-gray-700 hover:text-green-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href='/projects'>
            <SiOpenproject className="w-14 h-14 text-gray-700 hover:text-orange-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href='/connect'>
            <MdOutlineConnectWithoutContact className="w-14 h-14 text-gray-700 hover:text-red-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center  bg-black shadow-md rounded-md">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img src="Albi.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Albin John</h1>
        <p className="text-gray-400 mb-4">Frontend Developer | ReactJS | NextJS | UI UX Designer</p>
        <h2 className="text-gray-400">1 Year experience in Frontend Development</h2>
        <br/>
        <p className="text-gray-400">Intern @ Bridgeon Solutions LLP , Kakkancheri </p>
        <br/>
        <p className="text-gray-400" >Diploma In Fire and Safety NEBOSH </p>
        <br/>
        <Link href="/ALBIN-JOHN (2).pdf">
          <DownloadButton/>
        </Link>
        <div onClick={serviceRoot}>
        <AnimatedButton />
        </div>
        {/* <button  onClick={serviceRoot}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mt-9">Go to Services
        </button> */}
      </div>
    </div>
  )
}

export default Profile




