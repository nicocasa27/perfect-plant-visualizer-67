
import React, { useEffect, useRef } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.add('plant-animation');
    }
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block opacity-0">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black"></div>
    </div>
  );
};

export default CirclePlant;
