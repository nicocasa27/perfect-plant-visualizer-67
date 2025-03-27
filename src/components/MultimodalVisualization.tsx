
import React from 'react';
import { motion } from 'framer-motion';

const MultimodalVisualization = () => {
  return (
    <div className="relative w-full py-8 md:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-medium text-center mb-8"
      >
        Experience Sarovi's Multimodal Intelligence
      </motion.h2>
      
      <div className="relative mt-10 w-full h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cream via-purple-50/20 to-cream-light/80 opacity-40 z-10 pointer-events-none"
          aria-hidden="true"
        />
        
        <iframe 
          src="https://ai.sarovi.pl/embed" 
          title="Sarovi Multimodal AI Visualization" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          style={{ border: 'none' }}
          className="z-0"
        />
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-8 text-lg"
      >
        Our AI system processes multiple types of data simultaneously - text, audio, images, and video - 
        to provide comprehensive healthcare insights and solutions.
      </motion.p>
    </div>
  );
};

export default MultimodalVisualization;
