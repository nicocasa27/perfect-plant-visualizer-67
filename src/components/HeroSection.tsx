
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
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center bg-[#f2e5cc] before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjJlNWNjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlOGQ3YjciIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] before:opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-light/80 to-cream-dark/10 opacity-70"></div>
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
