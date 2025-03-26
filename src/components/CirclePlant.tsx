
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll
  const yPosition = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  
  useEffect(() => {
    const handleResize = () => {
      // Update any size-dependent calculations if needed
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <motion.div 
      ref={containerRef} 
      style={{ y: yPosition, scale, opacity }}
      className="relative inline-block"
    >
      <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-black breathing-animation shadow-lg"></div>
    </motion.div>
  );
};

export default CirclePlant;
