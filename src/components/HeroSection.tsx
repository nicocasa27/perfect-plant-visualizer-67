
import React from 'react';
import CirclePlant from './CirclePlant';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 scale-150">
            <CirclePlant />
          </div>
          <h1 className="title-xl text-center font-medium max-w-7xl relative z-10">
            <span className="block">Intelligent Medical Assistant</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-center mt-8 relative z-10">
            Advanced AI for healthcare professionals that analyzes medical data, creates documentation, and assists in clinical decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
