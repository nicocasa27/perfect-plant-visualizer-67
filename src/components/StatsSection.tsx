
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, TrendingUp, Users } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">
            Proven Results in Medical Settings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Accuracy Stat */}
            <motion.div 
              className="text-center"
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
              className="text-center"
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
              className="text-center"
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
              className="text-center"
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
        
        {/* Compliance Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-medium mb-8">Regulatory Compliance</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/c23ad9c3-6ef9-4edd-ae89-8bb43cedae10.png" 
                alt="GDPR Compliance" 
                className="h-32 mb-2"
              />
              <p className="font-medium">GDPR Compliant</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/7435c095-2477-4261-b13f-20e6ad868d35.png" 
                alt="HIPAA Compliance" 
                className="h-32 mb-2"
              />
              <p className="font-medium">HIPAA Compliant</p>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Your data is protected with enterprise-grade security and encryption.
            We maintain strict compliance with healthcare data protection regulations worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
