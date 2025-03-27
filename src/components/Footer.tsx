
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 z-10">
      {/* Divider line */}
      <div className="container mx-auto px-4">
        <Separator className="mb-12 bg-gold/30" />
        
        {/* Compliance Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-medium mb-8">Regulatory Compliance</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/17b3e330-6089-4e14-88f5-6a2b3c92115f.png" 
                alt="GDPR Compliance" 
                className="h-24 mb-2"
              />
              <p className="font-medium">GDPR Compliant</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/7435c095-2477-4261-b13f-20e6ad868d35.png" 
                alt="HIPAA Compliance" 
                className="h-24 mb-2"
              />
              <p className="font-medium">HIPAA Compliant</p>
            </div>
          </div>
          <div className="text-gray-600 max-w-3xl mx-auto mb-8">
            <p>
              Your data is protected with enterprise-grade security and encryption. We maintain strict compliance with healthcare data protection regulations worldwide. We have a strict no-retention policy — we don't train our models on patient data or save any patient information. Your sensitive medical information remains private and secure at all times.
            </p>
          </div>
          <Separator className="mt-8 mb-8 bg-gold/20" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Sarovi</h3>
            <p className="text-dark/80">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-gold transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to={`/${currentLanguage}/solutions`} className="text-dark/80 hover:text-gold transition-colors duration-200">
                  {t('navigation.solutions')}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/research`} className="text-dark/80 hover:text-gold transition-colors duration-200">
                  {t('navigation.research')}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/about`} className="text-dark/80 hover:text-gold transition-colors duration-200">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/contact`} className="text-dark/80 hover:text-gold transition-colors duration-200">
                  {t('navigation.contact')}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/team`} className="text-dark/80 hover:text-gold transition-colors duration-200">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-dark/80 hover:text-gold transition-colors duration-200">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark/80 hover:text-gold transition-colors duration-200">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark/80 hover:text-gold transition-colors duration-200">
                  {t('footer.cookies')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@sarovi.com" className="text-dark/80 hover:text-gold transition-colors duration-200">
                  info@sarovi.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="text-dark/80 hover:text-gold transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-dark/10 text-sm text-dark/70">
          <p className="mb-4">{t('footer.disclaimer')}</p>
          <p className="mb-4 font-medium">Disclaimer: Sarovi is intended for professional healthcare providers and doctors only, not for patients. Clinical judgment should always be exercised alongside any AI recommendations.</p>
        </div>
        
        <div className="border-t border-dark/10 mt-4 pt-4 text-center text-dark/60">
          <p>© {year} Sarovi. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
