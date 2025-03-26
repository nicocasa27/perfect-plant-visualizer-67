
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cream-dark/40 to-cream-light/40" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/16ed7418-b324-42b3-95b1-03196c4c156e.png')] bg-cover opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6"
          >
            {t('cta.heading')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-dark/80 mb-8"
          >
            {t('cta.subheading')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to={`/${currentLanguage}/appointment`}>
              <Button size="lg" className="bg-dark text-white hover:bg-dark/80 rounded-full px-8 py-6 h-auto text-lg">
                {t('cta.button')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <a href="https://test.sarovi.pl" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm text-dark hover:bg-white rounded-full px-8 py-6 h-auto text-lg border-2 border-dark/20">
                {t('cta.startNow')}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
