// 'use client'
// import React from 'react';

// const CustomModal = ({ isOpen, onClose, title, content }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-gray-500 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
//         <h4 className="text-lg font-semibold mb-4">{title}</h4>
//         <p>{content}</p>
//         <div className="flex justify-end mt-4">
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomModal;




'use client'
import React from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-500 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p>{content}</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

