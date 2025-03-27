
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, TrendingUp, Users } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
            Proven Results in Medical Settings
          </h2>
          
          {/* Stats Row - Rearranged to be inline */}
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
            {/* Accuracy Stat */}
            <motion.div 
              className="text-center flex-1 min-w-[150px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-2">
                <Shield size={32} className="text-gold" />
              </div>
              <h3 className="text-5xl font-bold text-dark mb-2">91%</h3>
              <p className="text-gray-600">Accuracy in diagnostics</p>
            </motion.div>
            
            {/* Time Saved Stat */}
            <motion.div 
              className="text-center flex-1 min-w-[150px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-2">
                <Clock size={32} className="text-gold" />
              </div>
              <h3 className="text-5xl font-bold text-dark mb-2">80%</h3>
              <p className="text-gray-600">Of doctors' time saved</p>
            </motion.div>
            
            {/* Revenue Increase Stat */}
            <motion.div 
              className="text-center flex-1 min-w-[150px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-2">
                <TrendingUp size={32} className="text-gold" />
              </div>
              <h3 className="text-5xl font-bold text-dark mb-2">35%</h3>
              <p className="text-gray-600">Increased revenue for practices</p>
            </motion.div>
            
            {/* Clinical Trials Stat */}
            <motion.div 
              className="text-center flex-1 min-w-[150px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-2">
                <Users size={32} className="text-gold" />
              </div>
              <h3 className="text-5xl font-bold text-dark mb-2">10+</h3>
              <p className="text-gray-600">Ongoing clinical trials</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
