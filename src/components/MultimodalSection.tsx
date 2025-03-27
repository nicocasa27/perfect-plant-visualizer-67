
import React from 'react';
import { motion } from 'framer-motion';
import MultimodalVisualization from './MultimodalVisualization';

const MultimodalSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MultimodalVisualization />
        </motion.div>
      </div>
    </section>
  );
};

export default MultimodalSection;
