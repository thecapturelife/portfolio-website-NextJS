// components/Navbar.tsx
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { SiOpenproject } from 'react-icons/si';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';

export default function Navbar() { 
  return (
    <div className="flex justify-between items-center p-2 bg-black shadow-md">
      <div className="w-16 h-16">
        <img src="/Logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>
      {/* <div>
        <h1 className="font-bold text-2xl mb-2">
          <span className="text-red-800">P</span>rofile<span/>
        </h1>
      </div> */}
      <div className="flex space-x-2"> {/* Reduced spacing between icons */}
        <Link href="/profile">
          <div className="group relative flex flex-col items-center">
            <CgProfile className="w-8 h-8 text-gray-700 hover:text-blue-500 hover:scale-110 transition-transform duration-200 ease-in-out" /> {/* Reduced icon size */}
            <span className="absolute mt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-xs bg-gray-800 text-white p-1 rounded">
              Profile
            </span>
          </div>
        </Link>
        <Link href="/skills">
          <div className="group relative flex flex-col items-center">
            <GiSkills className="w-8 h-8 text-gray-700 hover:text-green-500 hover:scale-110 transition-transform duration-200 ease-in-out" /> {/* Reduced icon size */}
            <span className="absolute mt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-xs bg-gray-800 text-white p-1 rounded">
              Skills
            </span>
          </div>
        </Link>
        <Link href="/projects">
          <div className="group relative flex flex-col items-center">
            <SiOpenproject className="w-8 h-8 text-gray-700 hover:text-orange-500 hover:scale-110 transition-transform duration-200 ease-in-out" /> {/* Reduced icon size */}
            <span className="absolute mt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-xs bg-gray-800 text-white p-1 rounded">
              Projects
            </span>
          </div>
        </Link>
        <Link href="/connect">
          <div className="group relative flex flex-col items-center">
            <MdOutlineConnectWithoutContact className="w-8 h-8 text-gray-700 hover:text-red-500 hover:scale-110 transition-transform duration-200 ease-in-out" /> {/* Reduced icon size */}
            <span className="absolute mt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-xs bg-gray-800 text-white p-1 rounded">
              Connect
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
