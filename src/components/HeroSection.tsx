
import React, { useState, useEffect } from 'react';
import CirclePlant from './CirclePlant';
import { useIsMobile } from '@/hooks/use-mobile';

const roles = ["Assistant", "Companion", "Friend", "Colleague"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const isMobile = useIsMobile();
  
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
    <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden min-h-[60vh] flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-4">
          <div className="text-right z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Intelligent
            </h1>
          </div>
          
          <div className="flex justify-center mx-auto w-full max-w-[200px] md:max-w-[250px]">
            <CirclePlant />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-left">
              Medical
            </h1>
            
            <div className="mt-1 md:mt-0">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 ${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
                {roles[currentRoleIndex]}
              </h2>
            </div>
          </div>
        </div>
        
        <div className="mt-4 md:mt-6 text-center">
          <p className="text-sm md:text-base max-w-2xl text-center mx-auto text-black">
            Advanced AI for healthcare professionals that analyzes medical data, creates documentation, and assists in clinical decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
