
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
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden min-h-[70vh] flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-6">
          <div className="text-right z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              Intelligent
            </h1>
          </div>
          
          <div className="flex justify-center mx-auto w-full max-w-[280px] md:max-w-[320px]">
            <CirclePlant />
          </div>
          
          <div className="text-left z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              Medical
            </h1>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 text-center">
          <div className="inline-block">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 ${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
              {roles[currentRoleIndex]}
            </h2>
          </div>
          
          <p className="text-sm md:text-base max-w-2xl text-center mt-4 md:mt-6 mx-auto text-black">
            Advanced AI for healthcare professionals that analyzes medical data, creates documentation, and assists in clinical decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
