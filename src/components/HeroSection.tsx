
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
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <div className="text-right">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black">
              Intelligent
            </h1>
          </div>
          
          <div className="flex justify-center">
            <CirclePlant />
          </div>
          
          <div className="text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black">
              Medical
            </h1>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block">
            <h2 className={`text-5xl md:text-6xl font-bold text-indigo-600 ${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
              {roles[currentRoleIndex]}
            </h2>
          </div>
          
          <p className="text-base md:text-lg max-w-2xl text-center mt-6 mx-auto text-black">
            Advanced AI for healthcare professionals that analyzes medical data, creates documentation, and assists in clinical decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
