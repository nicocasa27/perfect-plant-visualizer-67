
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
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center bg-[#f2e5cc]">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="z-10 text-center">
            <h1 className="text-[13vw] md:text-[11vw] lg:text-[9vw] text-center font-medium max-w-7xl text-black">
              <span className="block mb-4">Intelligent Medical</span>
              <div className="flex justify-center items-center mb-2">
                <CirclePlant />
              </div>
              <span className="inline-block min-w-32 px-3 py-1 bg-dark rounded-lg shadow-sm text-[5vw] md:text-[4vw] lg:text-[3vw]">
                <span className={`inline-block text-white ${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
                  {roles[currentRoleIndex]}
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-center mt-6 mx-auto text-black">
              Empowering healthcare professionals to achieve more with less effort, every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
