
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-black breathing-animation shadow-lg"></div>
    </div>
  );
};

export default CirclePlant;
