
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import InputOutputSection from '../components/InputOutputSection';
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
        <div className="py-8 bg-gradient-to-b from-transparent to-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-medium text-center mb-4">
              Multimodal Intelligence for Healthcare
            </h2>
            <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-16">
              Sarovi processes diverse medical data formats simultaneously, delivering comprehensive clinical insights in real-time.
            </p>
          </div>
        </div>
        <InputOutputSection />
        <StatsSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
