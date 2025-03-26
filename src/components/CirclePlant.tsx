
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CirclePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll
  const yPosition = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  
  return (
    <div ref={containerRef} className="relative">
      <motion.div 
        style={{ y: yPosition, scale, opacity }}
        className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
      >
        <DotLottieReact
          src="https://lottie.host/1d043f26-5e60-4bd1-a102-1324561e935b/ZzJoFV5Nsz.lottie"
          loop
          autoplay
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default CirclePlant;
