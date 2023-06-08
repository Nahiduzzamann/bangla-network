import React from 'react';

const Banner = () => {
  return (
    <div className="bg-cover bg-center py-16 md:py-32" style={{ backgroundImage: 'url(https://i.ibb.co/D7JLDqz/IMG-1629.jpg)' }}>
      <div className="container mx-auto px-4 p-8 text-center bg-black bg-opacity-50 shadow-2xl rounded-2xl">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to Bangla Network</h1>
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
