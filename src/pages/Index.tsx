
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import { VideoPlayerDemo } from '../components/VideoPlayerDemo';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    // Ensure English is set for the root path
    if (i18n.language !== 'en') {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingElements />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto my-16 px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
            {t('watchVideo')}
          </h2>
          <VideoPlayerDemo />
        </div>
        <PartnersSection />
        
        {/* AI Visualization Embed */}
        <div className="container mx-auto my-16 px-4">
          <div className="ai-visualization-container" style={{width: '100%', height: '600px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
            <iframe 
              src="https://ai.sarovi.pl/embed" 
              title="AI Visualization" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              style={{border: 'none'}}
            />
          </div>
        </div>
        
        <StatsSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
