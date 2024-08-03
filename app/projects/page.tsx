import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { SiOpenproject } from 'react-icons/si';

const Projects = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Navigation Section */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
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

      {/* Projects Section */}
      <div className="p-6 md:p-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">E-Commerce Project</h1>
          <div className="flex flex-col md:flex-row items-start">
            <img src="e-cm.png" alt="E-Commerce Project Image" className="w-full md:w-1/2 h-auto rounded-md" />
            <div className="md:ml-10 mt-6 md:mt-0">
              <p className="text-lg font-light font-serif mb-6">
                "I've crafted an engaging e-commerce platform for pet food using ReactJS, HTML, CSS, and Tailwind CSS.<br />
                This site blends sleek design with seamless functionality, offering pet lovers an easy and<br />
                enjoyable shopping experience. From vibrant product displays to intuitive navigation,<br />
                every detail is designed to make shopping for your furry friends a breeze.<br />
                Dive in and see how modern technology can bring a touch of convenience and style to pet care!"
              </p>
              <h2 className="text-lg font-semibold">
                GitHub Link Here:
                <a href="https://github.com/thecapturelife/MyReact-first-project-petsfood" className="text-blue-500 underline ml-2">
                  https://github.com/thecapturelife/MyReact-first-project-petsfood
                </a>
              </h2>
              <h2 className="text-lg mt-2">
                Vercel Link Here:
                <a href="https://pets-food-beige.vercel.app/" className="text-blue-500 underline ml-2">
                  https://pets-food-beige.vercel.app/
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Social Media App - Next.js</h1>
          <div className="flex flex-col md:flex-row items-center">
            <p className="flex-1 pr-0 md:pr-10 text-lg italic mb-6 md:mb-0">
              I am developing an innovative social media app using Next.js for the frontend and a robust backend API. This app promises a seamless user experience with real-time interactions, intuitive navigation, and engaging features to connect and share with others effortlessly. Stay tuned as I bring modern technology to the forefront of social connectivity!
            </p>
            <img src="social.png" alt="Social Media App" className="w-full md:w-1/2 h-auto rounded-md" />
          </div>
          <h2 className="text-lg font-semibold mt-4">
            GitHub Link Here:
            <a href="https://github.com/thecapturelife/Spedire-SocialMediaApp-Nextjs" className="text-blue-500 underline ml-2">
              https://github.com/thecapturelife/Spedire-SocialMediaApp-Nextjs
            </a>
          </h2>
          <h2 className="text-lg mt-2">Vercel Link: "Coming Soon"</h2>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 text-white py-4">
        <p className="text-center text-lg">Check out my <a href="https://github.com/your-github-username" className="text-blue-500 underline">GitHub profile</a> to see more of my work!</p>
        <div className="mt-4 text-center text-sm">
          <h2 className="font-thin">Copyright @ AJ since 2024</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
