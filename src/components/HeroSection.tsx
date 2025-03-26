
import React from 'react';
import CirclePlant from './CirclePlant';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <h1 className="title-xl text-center font-medium max-w-7xl">
            <span className="block animate-fade-up" style={{ animationDelay: '0.1s', animationDuration: '0.9s' }}>Sarovi</span>
            <div className="inline-block mx-4">
              <CirclePlant />
            </div>
            <span className="block animate-fade-up" style={{ animationDelay: '0.3s', animationDuration: '0.9s' }}>Intelligent Medical Companion</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-center mt-8 animate-fade-up" style={{ animationDelay: '0.5s', animationDuration: '0.9s' }}>
            Advanced AI for healthcare professionals that analyzes medical data, creates documentation, and assists in clinical decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
