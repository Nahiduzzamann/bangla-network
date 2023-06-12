// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="bg-cover bg-center py-16 md:py-32 mt-20" style={{ backgroundImage: 'url(https://i.ibb.co/V94xFRC/1140-wi-fi-scams-web.jpg)' }}>
// <div className="container mx-auto px-4 p-8 text-center bg-black bg-opacity-50 shadow-2xl rounded-2xl">
//         <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to <span className='text-orange-400'>Bangla Network</span></h1>
//         <h3 className='flex flex-wrap justify-center'>
//           <span className='text-gray-300 text-3xl font-semibold'>
//             Take Your Business &nbsp;
//           </span>
//           <span className='text-red-800 text-4xl font-semibold'>
//             To The Next Leve
//           </span>
//         </h3>
//         <p className="text-lg md:text-xl text-white mt-5">To build, construct, maintain, enlarge, pull down, remove or replace, dispose off, improve or develop and work, manage, and control any buildings, offices, godowns, warehouses, shops, machinery and plant and telephone exchanges, telex exchanges, message relay systems, microwave stationes, repeater stations, maintenance and operation of telecommunications services and conveniences.</p>
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://i.ibb.co/V94xFRC/1140-wi-fi-scams-web.jpg',
    'https://i.ibb.co/mRmFXwD/managed-wi-fi-solution.webp',
    'https://i.ibb.co/qYw2Jfx/tips-jaringan-wifi.jpg',
    'https://i.ibb.co/9h5KWDS/WIFI.jpg',
    'https://i.ibb.co/bdbrPnF/WIFI.png',
    'https://i.ibb.co/0cshXBG/all-network.jpg',
    'https://i.ibb.co/NsdbZ6m/c-band-auction-80-b-connected-real-estate.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-cover bg-center py-16 md:py-32 mt-20"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="container mx-auto px-4 p-8 text-center bg-black bg-opacity-50 shadow-2xl rounded-2xl">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to <span className='text-orange-400'>Bangla Network</span></h1>
        <h3 className='flex flex-wrap justify-center'>
          <span className='text-gray-300 text-3xl font-semibold'>
            Take Your Business &nbsp;
          </span>
          <span className='text-red-800 text-4xl font-semibold'>
            To The Next Leve
          </span>
        </h3>
        <p className="text-lg md:text-xl text-white mt-5">To build, construct, maintain, enlarge, pull down, remove or replace, dispose off, improve or develop and work, manage, and control any buildings, offices, godowns, warehouses, shops, machinery and plant and telephone exchanges, telex exchanges, message relay systems, microwave stationes, repeater stations, maintenance and operation of telecommunications services and conveniences.</p>
      </div>
    </div>
  );
};

export default Banner;
