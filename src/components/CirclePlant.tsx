
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-black breathing-animation opacity-70"></div>
    </div>
  );
};

export default CirclePlant;
