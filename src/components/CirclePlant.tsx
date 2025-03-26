
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-black breathing-animation shadow-lg"></div>
    </div>
  );
};

export default CirclePlant;
