
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResearchList from '../components/ResearchList';
import FloatingElements from '../components/FloatingElements';

const Research = () => {
  const { t } = useTranslation();
  const { language } = useParams<{ language: string }>();

  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingElements />
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('research.title', 'Research Publications')}
          </h1>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            {t('research.description', 'Explore our latest scientific research and publications in the field of medical AI and diagnostics.')}
          </p>
          
          {/* Research papers grid */}
          <ResearchList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
