
import React, { useState, useEffect } from 'react';
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

  return (
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
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
