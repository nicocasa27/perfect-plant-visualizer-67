
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
      }, 500); // Wait for fade-out to complete
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 md:py-16 lg:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="container px-4 mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="z-10 text-center">
            <h1 className="text-center font-medium max-w-7xl text-black">
              <span className="block text-[8vw] md:text-[7vw] lg:text-[6vw] leading-tight mb-2 md:mb-4">
                Intelligent Medical
              </span>
              <div className="flex justify-center items-center mb-2">
                <CirclePlant />
              </div>
              <span className="inline-block min-w-32 md:min-w-40 px-3 md:px-4 py-1 md:py-2 bg-gray-100 rounded-lg shadow-sm">
                <span className={`inline-block text-blue-600 text-[5vw] md:text-[3vw] lg:text-[2vw] ${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
                  {roles[currentRoleIndex]}
                </span>
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl max-w-3xl text-center mt-4 md:mt-6 mx-auto text-black">
              Empowering healthcare professionals to achieve more with less effort, every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
