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
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-3xl font-bold mb-6 mt-24">Choose Your Option</h1>
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
