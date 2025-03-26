
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Accuracy Stat */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Shield size={40} className="text-gold" />
              </div>
              <h3 className="text-4xl font-bold text-dark mb-2">91%</h3>
              <p className="text-gray-600">Accuracy in diagnostics</p>
            </motion.div>
            
            {/* Time Saved Stat */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Clock size={40} className="text-gold" />
              </div>
              <h3 className="text-4xl font-bold text-dark mb-2">80%</h3>
              <p className="text-gray-600">Of doctors' time saved</p>
            </motion.div>
            
            {/* Revenue Increase Stat */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <TrendingUp size={40} className="text-gold" />
              </div>
              <h3 className="text-4xl font-bold text-dark mb-2">35%</h3>
              <p className="text-gray-600">Increased revenue for practices</p>
            </motion.div>
            
            {/* Clinical Trials Stat */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-gold" />
              </div>
              <h3 className="text-4xl font-bold text-dark mb-2">10+</h3>
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
                src="/lovable-uploads/2d3dfd2b-ba80-4b3a-8e39-011dbb857539.png" 
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
