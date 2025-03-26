
import React, { useState, useEffect } from 'react';
import CirclePlant from './CirclePlant';

const roles = ["Assistant", "Companion", "Friend", "Colleague"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsChanging(false);
      }, 500);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 md:py-14 lg:py-16 overflow-hidden min-h-[60vh] flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 md:gap-4">
          <div className="text-right z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Intelligent
            </h1>
          </div>
          
          <div className="flex justify-center mx-auto w-full max-w-[220px] md:max-w-[260px]">
            <CirclePlant />
          </div>
          
          <div className="text-left z-10 flex flex-col md:flex-row md:items-center md:gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Medical
            </h1>
            <div className={`${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 md:ml-2">
                {roles[currentRoleIndex]}
              </h2>
            </div>
          </div>
        </div>
        
        <div className="mt-4 md:mt-6 text-center">
          <p className="text-xs md:text-sm max-w-2xl text-center mx-auto text-black">
            Advanced AI for healthcare professionals that analyzes medical data, creates documentation, and assists in clinical decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
