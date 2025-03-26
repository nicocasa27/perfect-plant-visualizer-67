
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Stethoscope, FileText, UserSquare2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="overflow-hidden h-full border-0 shadow-md bg-gradient-to-br from-cream-light via-white to-cream-light">
        <div className="absolute top-0 left-0 w-full h-32 bg-[url('/lovable-uploads/16ed7418-b324-42b3-95b1-03196c4c156e.png')] bg-cover opacity-10 blur-sm" />
        <CardContent className="p-6 relative z-10 h-full">
          <div className="mb-4 p-3 bg-cream-dark/20 w-fit rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-dark/80">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-dark" />,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
      delay: 0.1
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-dark" />,
      title: t('features.diagnosis.title'),
      description: t('features.diagnosis.description'),
      delay: 0.2
    },
    {
      icon: <FileText className="h-6 w-6 text-dark" />,
      title: t('features.records.title'),
      description: t('features.records.description'),
      delay: 0.3
    },
    {
      icon: <UserSquare2 className="h-6 w-6 text-dark" />,
      title: t('features.telehealth.title'),
      description: t('features.telehealth.description'),
      delay: 0.4
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
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            {t('features.heading')}
          </h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            {t('features.subheading')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
