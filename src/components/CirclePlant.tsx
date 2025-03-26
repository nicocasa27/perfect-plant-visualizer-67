
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-black"></div>
      </div>
      <img
        src="/lovable-uploads/78148d8c-72c0-4ad5-b679-e25116fdde6d.png"
        alt="Plant growing"
        className="relative z-10 w-auto h-96 md:h-[30rem] object-contain"
      />
    </div>
  );
};

export default CirclePlant;
