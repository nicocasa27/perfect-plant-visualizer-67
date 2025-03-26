
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import { VideoPlayerDemo } from '../components/VideoPlayerDemo';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageIndex = () => {
  const { language = "en" } = useParams<{ language: string }>();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Set the language based on the URL parameter
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PartnersSection />
        <div className="container mx-auto my-16 px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
            {t('watchVideo')}
          </h2>
          <VideoPlayerDemo />
        </div>
      </main>
    </div>
  );
};

export default LanguageIndex;
