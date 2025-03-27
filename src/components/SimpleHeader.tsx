
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SimpleHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full py-5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 flex items-center justify-center">
            <span className="text-xl">𐰆𐱃</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-medium text-sm">SAROVI</span>
          </div>
        </div>
        
        <a 
          href="https://test.sarovi.pl" 
          className="flex items-center text-sm font-medium uppercase bg-dark text-white px-4 py-2 rounded-lg shadow-sm hover:bg-dark/90 transition-colors"
        >
          {t('navigation.appointment', 'Get Started')}
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </header>
  );
};

export default SimpleHeader;
