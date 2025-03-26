
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full bg-black breathing-animation shadow-lg"></div>
    </div>
  );
};

export default CirclePlant;
