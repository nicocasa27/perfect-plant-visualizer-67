
import React, { useState, useEffect } from 'react';
import CirclePlant from './CirclePlant';

const roles = ["Assistant", "Companion", "Friend", "Colleague"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <CirclePlant />
          </div>
          <div className="relative z-10 bg-gold-light/80 px-8 py-4 rounded-lg backdrop-blur-sm">
            <h1 className="title-xl text-center font-medium max-w-7xl">
              <span className="block">Intelligent Medical {roles[currentRoleIndex]}</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-center mt-8">
              Advanced AI for healthcare professionals that analyzes medical data, creates documentation, and assists in clinical decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
