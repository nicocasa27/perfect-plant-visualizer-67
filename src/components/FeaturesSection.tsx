
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

interface FeatureCardProps {
  title: string;
  description: string;
  delay: number;
  imagePath: string;
  gradient: string;
}

const FeatureCard = ({ title, description, delay, imagePath, gradient }: FeatureCardProps) => {
  return (
    <div className="h-full min-w-[280px] flex-1">
      <Card className="overflow-hidden h-full border-0 shadow-md relative group">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:opacity-80" 
          style={{ backgroundImage: `url('${imagePath}')` }} 
        />
        <div className={`absolute inset-0 ${gradient} opacity-85 group-hover:opacity-90 transition-all duration-300`}></div>
        <CardContent className="p-6 relative z-10 h-full flex flex-col justify-start min-h-[320px]">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white mt-3">{title}</h3>
          <p className="text-white/95 text-lg md:text-xl font-medium">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t('features.multimodal.title'),
      description: t('features.multimodal.description'),
      delay: 0.1,
      imagePath: '/lovable-uploads/83a4ecfb-e2b1-480e-bc05-89409efe8c3d.png',
      gradient: 'bg-gradient-to-br from-purple-600/90 to-pink-500/90'
    },
    {
      title: t('features.actions.title'),
      description: t('features.actions.description'),
      delay: 0.2,
      imagePath: '/lovable-uploads/1a6e08ea-1033-4872-b475-8175f369001c.png',
      gradient: 'bg-gradient-to-br from-blue-600/90 to-teal-400/90'
    },
    {
      title: t('features.imaging.title'),
      description: t('features.imaging.description'),
      delay: 0.3,
      imagePath: '/lovable-uploads/16ed7418-b324-42b3-95b1-03196c4c156e.png',
      gradient: 'bg-gradient-to-br from-amber-600/90 to-orange-600/90'
    },
    {
      title: t('features.records.title'),
      description: t('features.records.description'),
      delay: 0.4,
      imagePath: '/lovable-uploads/83a4ecfb-e2b1-480e-bc05-89409efe8c3d.png',
      gradient: 'bg-gradient-to-br from-green-600/90 to-emerald-400/90'
    }
  ];

  return (
    <section className="py-16 md:py-20 overflow-hidden" id="features">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('features.heading')}
          </h2>
          <p className="text-xl text-dark/80 max-w-2xl mx-auto">
            {t('features.subheading')}
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex min-w-full py-4 gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First set of features */}
              {features.map((feature, index) => (
                <FeatureCard
                  key={`feature-1-${index}`}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                  imagePath={feature.imagePath}
                  gradient={feature.gradient}
                />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {features.map((feature, index) => (
                <FeatureCard
                  key={`feature-2-${index}`}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                  imagePath={feature.imagePath}
                  gradient={feature.gradient}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
