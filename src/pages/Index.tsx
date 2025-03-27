
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
import MultimodalSection from '../components/MultimodalSection';

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
        
        {/* Multimodal Section */}
        <MultimodalSection />
        
        <StatsSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
