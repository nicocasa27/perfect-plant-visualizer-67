
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isOpen, setIsOpen] = useState(false);

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
          
          <NavigationMenu className="z-10">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-item uppercase text-sm bg-transparent hover:bg-transparent focus:bg-transparent">
                  {t('navigation.solutions')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white w-[400px] p-4 rounded-md shadow-lg">
                  <div className="grid gap-3">
                    <div className="row-span-3">
                      <div className="font-medium mb-2 text-sm">AI Solutions</div>
                      <ul className="grid gap-3 p-4">
                        <li className="group">
                          <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/diagnostic`} className="block text-dark/80 hover:text-gold transition-colors duration-200">
                            <div className="font-medium">Diagnostic AI</div>
                            <p className="text-xs text-dark/70">Advanced diagnostic tools powered by artificial intelligence</p>
                          </Link>
                        </li>
                        <li className="group">
                          <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/predictive`} className="block text-dark/80 hover:text-gold transition-colors duration-200">
                            <div className="font-medium">Predictive Analytics</div>
                            <p className="text-xs text-dark/70">Forecasting health outcomes through pattern recognition</p>
                          </Link>
                        </li>
                        <li className="group">
                          <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/imaging`} className="block text-dark/80 hover:text-gold transition-colors duration-200">
                            <div className="font-medium">Medical Imaging</div>
                            <p className="text-xs text-dark/70">Enhanced medical imaging analysis and interpretation</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
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
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-1 p-4 absolute left-0 right-0 z-20">
          <nav className="flex flex-col space-y-3">
            <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}`} className="nav-item uppercase text-sm">{t('navigation.home', 'Home')}</Link>
            <div className="nav-item uppercase text-sm flex flex-col">
              <button className="flex justify-between items-center" onClick={() => {}}>
                {t('navigation.solutions')}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/diagnostic`} className="block text-dark/80 hover:text-gold transition-colors duration-200">
                  Diagnostic AI
                </Link>
                <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/predictive`} className="block text-dark/80 hover:text-gold transition-colors duration-200">
                  Predictive Analytics
                </Link>
                <Link to={`/${currentLanguage === 'en' ? '' : currentLanguage}/solutions/imaging`} className="block text-dark/80 hover:text-gold transition-colors duration-200">
                  Medical Imaging
                </Link>
              </div>
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
