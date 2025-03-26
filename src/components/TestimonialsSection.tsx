
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  delay: number;
}

const Testimonial = ({ quote, author, title, delay }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-gold fill-gold" />
            ))}
          </div>
          <p className="mb-6 italic text-dark/90">"{quote}"</p>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-dark/70">{title}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      author: t('testimonials.author1'),
      title: t('testimonials.title1'),
      delay: 0.1
    },
    {
      quote: t('testimonials.quote2'),
      author: t('testimonials.author2'),
      title: t('testimonials.title2'),
      delay: 0.2
    },
    {
      quote: t('testimonials.quote3'),
      author: t('testimonials.author3'),
      title: t('testimonials.title3'),
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/b7f6896c-ca10-4ca5-b374-18f72382dbd5.png')] bg-cover bg-center opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            {t('testimonials.heading')}
          </h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            {t('testimonials.subheading')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
