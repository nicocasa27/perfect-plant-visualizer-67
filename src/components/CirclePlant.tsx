
import React from 'react';

const CirclePlant = () => {
  return (
    <div className="relative w-full aspect-square">
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img 
          src="/lovable-uploads/ef80ee1e-8431-4961-ad7d-db03e7bd4ff5.png" 
          alt="Colorful landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[60%] h-[60%] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CirclePlant;
