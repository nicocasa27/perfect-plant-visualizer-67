
import React, { useState, useEffect, useRef } from 'react';
import CirclePlant from './CirclePlant';

const roles = [
  "Assistant", 
  "Companion", 
  "Friend", 
  "Colleague", 
  "Partner", 
  "Advisor", 
  "Consultant", 
  "Helper", 
  "Expert"
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsChanging(false);
      }, 500); // Wait for fade-out to complete
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gridCellSize = 30;
  const gridOpacity = 0.1;

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, #f2e5cc 0%, #e8d7b7 100%)',
        position: 'relative',
      }}
    >
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,${gridOpacity}) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(0,0,0,${gridOpacity}) 1px, transparent 1px)`,
          backgroundSize: `${gridCellSize}px ${gridCellSize}px`,
        }}
      />

      {/* Mouse movement animations - floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-black opacity-5"
            style={{
              width: 50 + Math.random() * 100 + 'px',
              height: 50 + Math.random() * 100 + 'px',
              left: `calc(${mousePosition.x}% + ${(Math.random() - 0.5) * 400}px)`,
              top: `calc(${mousePosition.y}% + ${(Math.random() - 0.5) * 400}px)`,
              transition: 'left 3s ease-out, top 3s ease-out',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="z-10 text-center">
            <div className="flex justify-center items-center mb-8">
              <CirclePlant />
            </div>
            <h1 className="text-[8vw] md:text-[6vw] lg:text-[4.5vw] text-center font-medium max-w-7xl text-black flex flex-wrap justify-center">
              <span className="inline-block">Intelligent Medical</span>
              <span className="inline-block ml-2 px-3 py-1 bg-dark rounded-lg shadow-sm text-[8vw] md:text-[6vw] lg:text-[4.5vw]">
                <span className={`inline-block text-white ${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
                  {roles[currentRoleIndex]}
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
