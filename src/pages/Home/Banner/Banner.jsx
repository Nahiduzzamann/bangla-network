import React from 'react';

const Banner = () => {
  return (
    <div className="bg-cover bg-center py-16 md:py-32" style={{ backgroundImage: 'url(https://i.ibb.co/D7JLDqz/IMG-1629.jpg)' }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to Bangla Network</h1>
        <p className="text-lg md:text-xl text-white">Experience seamless communication and advanced technology solutions.</p>
      </div>
    </div>
  );
};

export default Banner;
