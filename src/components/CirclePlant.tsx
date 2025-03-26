
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-white breathing-animation shadow-lg"></div>
    </div>
  );
};

export default CirclePlant;
