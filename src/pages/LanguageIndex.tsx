
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import { VideoPlayerDemo } from '../components/VideoPlayerDemo';
import { useParams } from 'react-router-dom';

// This is a simplified implementation
// In a production app, you would use a proper i18n library like react-i18next
const translations = {
  en: {
    watchVideo: "Watch How Our Platform Works",
  },
  pl: {
    watchVideo: "Zobacz, jak działa nasza platforma",
  },
  de: {
    watchVideo: "Sehen Sie, wie unsere Plattform funktioniert",
  },
  sv: {
    watchVideo: "Se hur vår plattform fungerar",
  }
};

const LanguageIndex = () => {
  const { language = "en" } = useParams<{ language: "en" | "pl" | "de" | "sv" }>();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PartnersSection />
        <div className="container mx-auto my-16 px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
            {t.watchVideo}
          </h2>
          <VideoPlayerDemo />
        </div>
      </main>
    </div>
  );
};

export default LanguageIndex;
