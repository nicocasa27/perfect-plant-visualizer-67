
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black breathing-animation"></div>
    </div>
  );
};

export default CirclePlant;
