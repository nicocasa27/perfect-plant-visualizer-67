
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
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="z-0 mb-8">
            <CirclePlant />
          </div>
          <div className="z-10 text-center">
            <h1 className="title-xl text-center font-medium max-w-7xl">
              <span className="block">Intelligent Medical</span>
              <span className="inline-block min-w-40 px-4 py-2 bg-gold-light/90 rounded-lg">
                <span className={`inline-block ${isChanging ? 'animate-fade-out' : 'animate-fade-in'}`}>
                  {roles[currentRoleIndex]}
                </span>
              </span>
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
