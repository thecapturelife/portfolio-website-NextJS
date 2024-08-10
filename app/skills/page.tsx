// import Link from 'next/link';
// import React from 'react';
// import { CgProfile } from 'react-icons/cg';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaFigma, FaVuejs } from 'react-icons/fa';
// import { GiSkills } from 'react-icons/gi';
// import { MdOutlineConnectWithoutContact } from 'react-icons/md';
// import { SiRedux, SiTailwindcss, SiTypescript, SiNextdotjs, SiOpenproject,SiAdobephotoshop ,SiAdobepremierepro  } from 'react-icons/si';
// import { RiNextjsLine } from "react-icons/ri";


// const Skills = () => {
//   return (
//     <div className="p-6 bg-black text-white h-screen">
//       <h1>Technical skills</h1>
    
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
//         <div className="flex flex-col items-center text-center ">
//           <FaHtml5 className="text-orange-500 w-16 h-16 hover:text-orange-300 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">HTML</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <FaCss3Alt className="text-blue-400 w-16 h-16 hover:text-blue-300 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">CSS</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <FaJsSquare className="text-yellow-400 w-16 h-16 hover:text-yellow-300 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">JavaScript</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <FaReact className="text-blue-600 w-16 h-16 hover:text-blue-800 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">ReactJS</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <SiRedux className="text-purple-500 w-16 h-16 hover:text-purple-400 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Redux</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <SiTypescript className="text-blue-600 w-16 h-16 hover:text-blue-500 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">TypeScript</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <SiTailwindcss className="text-teal-400 w-16 h-16 hover:text-teal-300 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Tailwind</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <FaBootstrap className="text-purple-600 w-16 h-16 hover:text-purple-500 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Bootstrap</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <RiNextjsLine className=" w-16 h-16 hover:text-gray-700 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Next.js</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <FaFigma className="text-pink-500 w-16 h-16 hover:text-pink-400 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Figma</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <SiAdobephotoshop className="text-blue-500 w-16 h-16 hover:text-blue-400 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Photoshop</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <SiAdobepremierepro className="text-blue-500 w-16 h-16 hover:text-blue-400 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Photoshop</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <FaVuejs className="text-green-500 w-16 h-16 hover:text-green-200 transition-colors duration-200 ease-in-out" />
//           <p className="mt-2">Vue.js</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;



'use client'

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaFigma, FaVuejs } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiTypescript, SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si';
import { RiNextjsLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="p-6 bg-black text-white min-h-screen"> {/* Changed h-screen to min-h-screen for better responsiveness */}
      <h1 className="text-3xl font-bold mb-6">Technical Skills</h1> {/* Added styling for title */}
    
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center">
          <FaHtml5 className="text-orange-500 w-16 h-16 hover:text-orange-300 transition-colors duration-200 ease-in-out" aria-label="HTML" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaCss3Alt className="text-blue-400 w-16 h-16 hover:text-blue-300 transition-colors duration-200 ease-in-out" aria-label="CSS" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaJsSquare className="text-yellow-400 w-16 h-16 hover:text-yellow-300 transition-colors duration-200 ease-in-out" aria-label="JavaScript" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaReact className="text-blue-600 w-16 h-16 hover:text-blue-800 transition-colors duration-200 ease-in-out" aria-label="ReactJS" />
          <p className="mt-2">ReactJS</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiRedux className="text-purple-500 w-16 h-16 hover:text-purple-400 transition-colors duration-200 ease-in-out" aria-label="Redux" />
          <p className="mt-2">Redux</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiTypescript className="text-blue-600 w-16 h-16 hover:text-blue-500 transition-colors duration-200 ease-in-out" aria-label="TypeScript" />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiTailwindcss className="text-teal-400 w-16 h-16 hover:text-teal-300 transition-colors duration-200 ease-in-out" aria-label="Tailwind CSS" />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaBootstrap className="text-purple-600 w-16 h-16 hover:text-purple-500 transition-colors duration-200 ease-in-out" aria-label="Bootstrap" />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <RiNextjsLine className="w-16 h-16 hover:text-gray-700 transition-colors duration-200 ease-in-out" aria-label="Next.js" />
          <p className="mt-2">Next.js</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaFigma className="text-pink-500 w-16 h-16 hover:text-pink-400 transition-colors duration-200 ease-in-out" aria-label="Figma" />
          <p className="mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiAdobephotoshop className="text-blue-500 w-16 h-16 hover:text-blue-400 transition-colors duration-200 ease-in-out" aria-label="Photoshop" />
          <p className="mt-2">Photoshop</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <SiAdobepremierepro className="text-blue-500 w-16 h-16 hover:text-blue-400 transition-colors duration-200 ease-in-out" aria-label="Premiere Pro" />
          <p className="mt-2">Premiere Pro</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaVuejs className="text-green-500 w-16 h-16 hover:text-green-200 transition-colors duration-200 ease-in-out" aria-label="Vue.js" />
          <p className="mt-2">Vue.js</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
