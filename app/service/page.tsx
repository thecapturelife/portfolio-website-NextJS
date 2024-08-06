'use client'
import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import CustomModal from './Modal'; 
const Service = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId : any) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-center items-center mt-20">
        <h1 className="font-extrabold text-4xl">
          <span className="text-red-800">My</span> Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 ">
        <div
          className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 cursor-pointer"
          onClick={() => openModal('frontend')}
        >
          <div className="flex justify-between items-center ">
            <h2 className="font-extrabold text-2xl text-red-800">Frontend Development</h2>
            <CgDetailsMore size={50} className="text-gray-700" />
           
          </div>
        </div>
        <div
          className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 cursor-pointer"
          onClick={() => openModal('uiux')}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-2xl text-red-800">UI UX Designing</h2>
            <CgDetailsMore size={50} className="text-gray-700" />
          </div>
        </div>
        <div
          className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 cursor-pointer"
          onClick={() => openModal('backend')}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-2xl text-red-800">Backend Development</h2>
            <CgDetailsMore size={50} className="text-gray-700" />
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={activeModal === 'frontend'}
        onClose={closeModal}
        title="Frontend Development"
        content="Using Nextjs , Reactjs , Vuejs , TypeScript , Javascript , Tailwind , Css , Html5 "
      />
      <CustomModal
        isOpen={activeModal === 'uiux'}
        onClose={closeModal}
        title="UI UX Designing"
        content="Using Figma , Adobe Photoshop"
      />
      <CustomModal
        isOpen={activeModal === 'backend'}
        onClose={closeModal}
        title="Backend Development"
        content="Using Nodejs , MongoDB , ExpressJs"
      />
    </div>
  );
};

export default Service;
