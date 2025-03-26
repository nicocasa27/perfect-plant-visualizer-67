
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Stethoscope, LineChart, Image } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}`} className="nav-item uppercase text-sm">{t('navigation.home', 'Home')}</Link>
          
          <NavigationMenu className="z-50">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  className="nav-item uppercase text-sm bg-transparent hover:bg-transparent focus:bg-transparent"
                >
                  {t('navigation.solutions')}
                </NavigationMenuTrigger>
                {isSolutionsOpen && (
                  <NavigationMenuContent 
                    onMouseLeave={() => setIsSolutionsOpen(false)} 
                    className="bg-white p-4 rounded-md shadow-lg z-50"
                  >
                    <div className="grid grid-cols-3 gap-6 w-[600px]">
                      <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/diagnostic`} className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="mr-3 text-gold-light">
                          <Stethoscope size={24} />
                        </div>
                        <div>
                          <div className="font-medium">Diagnostic AI</div>
                          <p className="text-xs text-dark/70">Advanced diagnostic tools powered by artificial intelligence</p>
                        </div>
                      </Link>
                      <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/predictive`} className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="mr-3 text-gold-light">
                          <LineChart size={24} />
                        </div>
                        <div>
                          <div className="font-medium">Predictive Analytics</div>
                          <p className="text-xs text-dark/70">Forecasting health outcomes through pattern recognition</p>
                        </div>
                      </Link>
                      <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/imaging`} className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="mr-3 text-gold-light">
                          <Image size={24} />
                        </div>
                        <div>
                          <div className="font-medium">Medical Imaging</div>
                          <p className="text-xs text-dark/70">Enhanced medical imaging analysis and interpretation</p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/research`} className="nav-item uppercase text-sm">{t('navigation.research')}</Link>
          <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/about`} className="nav-item uppercase text-sm">{t('navigation.about')}</Link>
          <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/contact`} className="nav-item uppercase text-sm">{t('navigation.contact')}</Link>
        </nav>
        
        <a href="https://test.sarovi.pl" className="hidden md:flex items-center text-sm font-medium uppercase bg-dark text-white px-4 py-2 rounded-lg shadow-sm hover:bg-dark/90 transition-colors">
          {t('navigation.appointment', 'Get Started')}
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
        
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-1 p-4 absolute left-0 right-0 z-50">
          <nav className="flex flex-col space-y-3">
            <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}`} className="nav-item uppercase text-sm">{t('navigation.home', 'Home')}</Link>
            <div className="nav-item uppercase text-sm flex flex-col">
              <button 
                className="flex justify-between items-center" 
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                {t('navigation.solutions')}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isSolutionsOpen && (
                <div className="pl-4 mt-2 space-y-2 bg-white">
                  <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/diagnostic`} className="flex items-center py-1 text-dark/80 hover:text-gold transition-colors duration-200">
                    <Stethoscope size={16} className="mr-2 text-gold-light" />
                    Diagnostic AI
                  </Link>
                  <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/predictive`} className="flex items-center py-1 text-dark/80 hover:text-gold transition-colors duration-200">
                    <LineChart size={16} className="mr-2 text-gold-light" />
                    Predictive Analytics
                  </Link>
                  <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/imaging`} className="flex items-center py-1 text-dark/80 hover:text-gold transition-colors duration-200">
                    <Image size={16} className="mr-2 text-gold-light" />
                    Medical Imaging
                  </Link>
                </div>
              )}
            </div>
            <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/research`} className="nav-item uppercase text-sm">{t('navigation.research')}</Link>
            <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/about`} className="nav-item uppercase text-sm">{t('navigation.about')}</Link>
            <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/contact`} className="nav-item uppercase text-sm">{t('navigation.contact')}</Link>
            <a href="https://test.sarovi.pl" className="flex items-center justify-center text-sm font-medium uppercase bg-dark text-white px-4 py-2 rounded-lg shadow-sm hover:bg-dark/90 transition-colors">
              {t('navigation.appointment', 'Get Started')}
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
