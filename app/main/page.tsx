

// export default function Main() {

//   return (
//     <div className="flex flex-col min-h-screen bg-black overflow-hidden">
//       <div className="flex flex-col md:flex-row justify-center items-center flex-grow mt-3 md:mt-16">
//         <div className="text-center md:text-left">
//           <h1 className='text-2xl md:text-3xl font-semibold md:ml-48 mt-3 md:mt-48'>
//             Yes..! I'm, <br />
//             <span className='text-red-800 font-extrabold text-3xl md:text-5xl font-serif'>ALBIN JOHN</span>
//           </h1>
//           <h2 className='text-xl md:text-2xl md:ml-48 mt-4'>FRONTEND DEVELOPER</h2>
//           <p className='mt-3 font-thin md:ml-48'>
//             “It's not a bug. It's an undocumented feature!”
//           </p>
//         </div>
//         <div className="mt-3 md:mt-0 md:ml-16">
//           <img src="Albi.jpg" alt="Albin John" className="w-48 h-48 md:w-96 md:h-96 object-cover rounded-full shadow-lg" />
//         </div>
//       </div>
//     </div>
//   );
// }



export default function Main() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-black">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-white">
              Yes..! I'm, <br />
              <span className="text-red-800 font-extrabold text-3xl md:text-5xl font-serif">ALBIN JOHN</span>
            </h1>
            <h2 className="text-xl md:text-2xl mt-4 text-orange-100">FRONTEND DEVELOPER</h2>
            <p className="mt-3 font-thin text-orange-300">
              “It's not a bug. It's an undocumented feature!”
            </p>
          </div>
          <div className="mt-3 md:mt-0 md:ml-8">
            <img src="Albi.jpg" alt="Albin John" className=" w-64 h-64 md:w-64 md:h-64 object-cover rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    );
  }


  