
import React, { useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full bg-black breathing-animation opacity-80"></div>
    </div>
  );
};

export default CirclePlant;
