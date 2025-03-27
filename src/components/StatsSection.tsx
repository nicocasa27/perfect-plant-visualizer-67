
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, TrendingUp, Users } from 'lucide-react';
import { Button } from './ui/button';

const StatsSection = () => {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  const stats = [
    { 
      id: 'accuracy', 
      icon: <Shield size={32} className="text-gold" />,
      value: '91%', 
      label: 'Accuracy in diagnostics',
      description: 'Our AI consistently achieves superior diagnostic precision compared to traditional methods.'
    },
    { 
      id: 'time', 
      icon: <Clock size={32} className="text-gold" />,
      value: '80%', 
      label: 'Of doctors\' time saved',
      description: 'Medical professionals can focus more on patient care and less on administrative tasks.'
    },
    { 
      id: 'revenue', 
      icon: <TrendingUp size={32} className="text-gold" />,
      value: '35%', 
      label: 'Increased revenue for practices',
      description: 'Healthcare providers see significant financial benefits through improved efficiency.'
    },
    { 
      id: 'trials', 
      icon: <Users size={32} className="text-gold" />,
      value: '10+', 
      label: 'Ongoing clinical trials',
      description: 'We continuously validate our technology through rigorous scientific research.'
    }
  ];

  // Count-up animation variants
  const countVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-medium text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Proven Results in Medical Settings
        </motion.h2>
        
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="text-center flex-1 min-w-[180px] group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredStat(stat.id)}
              onHoverEnd={() => setHoveredStat(null)}
            >
              <motion.div 
                className="absolute -inset-4 bg-gold/5 rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: hoveredStat === stat.id ? 1 : 0.95 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="flex justify-center mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-5xl font-bold text-dark mb-2"
                  variants={countVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                
                <p className="text-gray-600 mb-3">{stat.label}</p>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredStat === stat.id ? 1 : 0,
                    height: hoveredStat === stat.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-3"
                >
                  <p className="text-sm text-gray-500 mx-auto max-w-[220px]">
                    {stat.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredStat === stat.id ? 1 : 0,
                    y: hoveredStat === stat.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="text-gold hover:text-gold-dark transition-colors"
                  >
                    Learn more
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
