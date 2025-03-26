
import React, { useRef, useEffect } from 'react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Add subtle movement to the circle based on scroll position
      container.style.transform = `translateX(${scrollY * 0.05}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-black breathing-animation shadow-lg"></div>
    </div>
  );
};

export default CirclePlant;
