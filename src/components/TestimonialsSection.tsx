
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
    <div className="h-full min-w-[300px] md:min-w-[350px] flex-1 px-3">
      <Card className="h-full border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-gold fill-gold" />
            ))}
          </div>
          <p className="mb-6 italic text-dark/90 text-lg">{quote}</p>
          <div className="border-t pt-4 border-dark/10">
            <p className="font-medium text-lg">{author}</p>
            <p className="text-sm text-dark/70">{title}</p>
          </div>
        </CardContent>
      </Card>
    </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.heading')}
          </h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            {t('testimonials.subheading')}
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex min-w-full py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={`testimonial-1-${index}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  delay={testimonial.delay}
                />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={`testimonial-2-${index}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  delay={testimonial.delay}
                />
              ))}
              
              {/* Triple set to ensure enough content for larger screens */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={`testimonial-3-${index}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  delay={testimonial.delay}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
