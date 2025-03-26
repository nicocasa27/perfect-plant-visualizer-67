
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import { VideoPlayerDemo } from '../components/VideoPlayerDemo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PartnersSection />
        <div className="container mx-auto my-16 px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
            Watch How Our Platform Works
          </h2>
          <VideoPlayerDemo />
        </div>
      </main>
    </div>
  );
};

export default Index;
