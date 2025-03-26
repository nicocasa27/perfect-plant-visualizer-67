
import React from 'react';
import CirclePlant from './CirclePlant';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <h1 className="title-xl text-center font-medium max-w-7xl">
            <span className="block animate-fade-up" style={{ animationDelay: '0.1s' }}>Practice for</span>
            <div className="inline-block mx-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <CirclePlant />
            </div>
            <span className="block animate-fade-up" style={{ animationDelay: '0.7s' }}>Atlasology and Naturopathy</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
