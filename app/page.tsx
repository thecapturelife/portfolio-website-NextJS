import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { GiSkills } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { SiOpenproject } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center p-4">
        <div className="w-24 h-24 md:w-32 md:h-32">
          <img src="Logo.png" alt="Logo" />
        </div>
        <div className="flex space-x-2 md:space-x-4">
          <Link href="./profile">
            <CgProfile className="w-10 h-10 md:w-14 md:h-14 text-gray-700 hover:text-blue-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href='./skills'>
            <GiSkills className="w-10 h-10 md:w-14 md:h-14 text-gray-700 hover:text-green-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href='./projects'>
            <SiOpenproject className="w-10 h-10 md:w-14 md:h-14 text-gray-700 hover:text-orange-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href='./connect'>
            <MdOutlineConnectWithoutContact className="w-10 h-10 md:w-14 md:h-14 text-gray-700 hover:text-red-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center flex-grow mt-8 md:mt-16">
        <div className="text-center md:text-left">
          <h1 className='text-2xl md:text-3xl font-semibold md:ml-48 mt-8 md:mt-48'>
            Yes..! I'm, <br />
            <span className='text-red-800 font-extrabold text-3xl md:text-5xl font-serif'>ALBIN JOHN</span>
          </h1>
          <h2 className='text-xl md:text-2xl md:ml-48 mt-4'>FRONTEND DEVELOPER</h2>
          <p className='mt-4 font-thin md:ml-48'>
            “It's not a bug. It's an undocumented feature!”
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-16">
          <img src="Albi.jpg" alt="Albin John" className="w-48 h-48 md:w-96 md:h-96 object-cover rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
}
