// import Link from 'next/link';
// import React from 'react';
// import { CgProfile } from 'react-icons/cg';
// import { GiSkills } from 'react-icons/gi';
// import { MdOutlineConnectWithoutContact } from 'react-icons/md';
// import { SiOpenproject ,SiLeetcode  } from 'react-icons/si';
// import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";

// const Connect = () => {
//   return (
//     <div className="bg-black text-white min-h-screen p-6">
//       <div className="flex justify-between items-center p-2 mb-6">
//         <div className="w-32 h-32">
//           <img src="Logo.png" alt="Logo" />
//         </div>
//         <div className="flex space-x-4">
//           <Link href="./profile">
//             <CgProfile className="w-14 h-14 text-gray-400 hover:text-blue-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//           <Link href="./skills">
//             <GiSkills className="w-14 h-14 text-gray-400 hover:text-green-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//           <Link href="./projects">
//             <SiOpenproject className="w-14 h-14 text-gray-400 hover:text-orange-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//           <Link href="./connect">
//             <MdOutlineConnectWithoutContact className="w-14 h-14 text-gray-400 hover:text-red-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col items-center">
//         <h1 className="text-3xl font-bold mb-6">Connect with Me</h1>
//         <div className="flex space-x-6">
//           <a href="mailto:albinjohn1996th@gmail.com" aria-label="Email">
//             <FaEnvelope className="w-12 h-12 text-blue-400 hover:text-blue-300 transition-colors duration-200 ease-in-out" />
//           </a>
//           <a href="https://www.linkedin.com/in/albin-john96/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//             <FaLinkedin className="w-12 h-12 text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out" />
//           </a>
//           <a href="https://github.com/thecapturelife" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//             <FaGithub className="w-12 h-12 text-gray-400 hover:text-gray-300 transition-colors duration-200 ease-in-out" />
//           </a>
//           <a href="https://www.instagram.com/the_capture_life/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//             <FaInstagram className="w-12 h-12 text-pink-500 hover:text-pink-400 transition-colors duration-200 ease-in-out" />
//           </a>
//           <a href="https://leetcode.com/u/albinjohn1996th/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//             <SiLeetcode className="w-12 h-12 text-yellow-500 hover:text-yellow-300 transition-colors duration-200 ease-in-out" />
//           </a>
//           <a href="https://x.com/albinJohn1996" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//             <FaXTwitter className="w-12 h-12 text-blue-400 hover:text-blue-300 transition-colors duration-200 ease-in-out" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Connect;



import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { SiOpenproject, SiLeetcode } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Connect = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="flex justify-between items-center p-4 mb-6 bg-black rounded-md">
        <div className="w-32 h-32">
          <img src="Logo.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex space-x-4">
          <Link href="./profile">
            <CgProfile className="w-12 h-12 text-gray-400 hover:text-blue-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href="./skills">
            <GiSkills className="w-12 h-12 text-gray-400 hover:text-green-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href="./projects">
            <SiOpenproject className="w-12 h-12 text-gray-400 hover:text-orange-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
          <Link href="./connect">
            <MdOutlineConnectWithoutContact className="w-12 h-12 text-gray-400 hover:text-red-400 hover:scale-110 transition-transform duration-200 ease-in-out" />
          </Link>
        </div>
      </div>

      {/* Connect Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Connect with Me</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="mailto:albinjohn1996th@gmail.com">
            <FaEnvelope className="w-12 h-12 text-blue-400 hover:text-blue-300 transition-colors duration-200 ease-in-out" aria-label="Email" />
          </Link>
          <Link href="https://www.linkedin.com/in/albin-john96/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-12 h-12 text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out" aria-label="LinkedIn" />
          </Link>
          <Link href="https://github.com/thecapturelife" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-12 h-12 text-gray-400 hover:text-gray-300 transition-colors duration-200 ease-in-out" aria-label="GitHub" />
          </Link>
          <Link href="https://www.instagram.com/the_capture_life/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-12 h-12 text-pink-500 hover:text-pink-400 transition-colors duration-200 ease-in-out" aria-label="Instagram" />
          </Link>
          <Link href="https://leetcode.com/u/albinjohn1996th/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="w-12 h-12 text-yellow-500 hover:text-yellow-300 transition-colors duration-200 ease-in-out" aria-label="LeetCode" />
          </Link>
          <Link href="https://x.com/albinJohn1996" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-12 h-12 text-blue-400 hover:text-blue-300 transition-colors duration-200 ease-in-out" aria-label="Twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
