
import React, { useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const circleSize = isMobile ? 'w-24 h-24' : 'w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36';
  
  return (
    <div ref={containerRef} className="relative inline-block my-2 md:my-3">
      <div className={`${circleSize} rounded-full bg-black breathing-animation shadow-lg`}></div>
    </div>
  );
};

export default CirclePlant;
