// import Link from 'next/link'
// import React from 'react'
// import { CgProfile } from 'react-icons/cg'
// import { GiSkills } from 'react-icons/gi'
// import { MdOutlineConnectWithoutContact } from 'react-icons/md'
// import { SiOpenproject } from 'react-icons/si'
// import { TiHomeOutline } from "react-icons/ti";

// const Skills = () => {
//   return (
//     <div>
//         <div className="flex justify-between items-center p-2">
//         <div className=" w-32 h-32">
//           <img src="Logo.png" alt="Logo" />
//         </div>
//         <div className="flex space-x-4">

//           <Link href="./profile" >
//           <CgProfile className="w-14 h-14 text-gray-700 hover:text-blue-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//           <Link href='./skills'>
//           <GiSkills  className="w-14 h-14 text-gray-700 hover:text-green-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//           <Link href='./projects'>
//           <SiOpenproject className="w-14 h-14 text-gray-700 hover:text-orange-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//           <Link href='./connect'>
//           <MdOutlineConnectWithoutContact className="w-14 h-14 text-gray-700 hover:text-red-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skills



import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaFigma, FaVuejs } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { SiRedux, SiTailwindcss, SiTypescript, SiNextdotjs, SiOpenproject,SiAdobephotoshop ,SiAdobepremierepro  } from 'react-icons/si';
import { RiNextjsLine } from "react-icons/ri";


const Skills = () => {
  return (
    <div className="p-6 bg-black text-white">
      {/* Navigation Section */}
      <div className="flex justify-between items-center p-2 mb-6">
        <div className="w-32 h-32">
          <img src="Logo.png" alt="Logo" />
        </div>
        <div className="flex space-x-4">
          <Link href="./profile">
            <CgProfile className="w-14 h-14 text-white hover:text-blue-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href="./skills">
            <GiSkills className="w-14 h-14 text-white hover:text-green-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href="./projects">
            <SiOpenproject className="w-14 h-14 text-white hover:text-orange-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href="./connect">
            <MdOutlineConnectWithoutContact className="w-14 h-14 text-white hover:text-red-500 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center">
          <FaHtml5 className="text-orange-500 w-16 h-16 hover:text-orange-300 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaCss3Alt className="text-blue-400 w-16 h-16 hover:text-blue-300 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaJsSquare className="text-yellow-400 w-16 h-16 hover:text-yellow-300 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaReact className="text-blue-600 w-16 h-16 hover:text-blue-800 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">ReactJS</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiRedux className="text-purple-500 w-16 h-16 hover:text-purple-400 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Redux</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiTypescript className="text-blue-600 w-16 h-16 hover:text-blue-500 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiTailwindcss className="text-teal-400 w-16 h-16 hover:text-teal-300 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaBootstrap className="text-purple-600 w-16 h-16 hover:text-purple-500 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <RiNextjsLine className=" w-16 h-16 hover:text-gray-700 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Next.js</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaFigma className="text-pink-500 w-16 h-16 hover:text-pink-400 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiAdobephotoshop className="text-blue-500 w-16 h-16 hover:text-blue-400 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Photoshop</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiAdobepremierepro className="text-blue-500 w-16 h-16 hover:text-blue-400 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Photoshop</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaVuejs className="text-green-500 w-16 h-16 hover:text-green-200 transition-colors duration-200 ease-in-out" />
          <p className="mt-2">Vue.js</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
