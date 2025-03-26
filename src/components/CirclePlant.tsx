
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-black breathing-animation shadow-lg"></div>
    </div>
  );
};

export default CirclePlant;
