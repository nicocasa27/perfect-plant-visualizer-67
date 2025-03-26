
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  top: string;
  left: string;
  delay: number;
  duration: number;
  size: string;
  color: string;
  blur?: string;
}

const FloatingElement = ({
  top,
  left,
  delay,
  duration,
  size,
  color,
  blur = "0px"
}: FloatingElementProps) => {
  return (
    <motion.div
      className="absolute rounded-full opacity-30"
      style={{
        top,
        left,
        width: size,
        height: size,
        backgroundColor: color,
        filter: `blur(${blur})`,
      }}
      animate={{
        y: [0, -15, 0, 15, 0],
        x: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement
        top="15%"
        left="10%"
        delay={0}
        duration={5}
        size="150px"
        color="#9b87f5"
        blur="40px"
      />
      <FloatingElement
        top="65%"
        left="85%"
        delay={1}
        duration={6}
        size="180px"
        color="#D946EF"
        blur="50px"
      />
      <FloatingElement
        top="80%"
        left="20%"
        delay={2}
        duration={7}
        size="120px"
        color="#33C3F0"
        blur="35px"
      />
      <FloatingElement
        top="25%"
        left="75%"
        delay={1.5}
        duration={5.5}
        size="100px"
        color="#F97316"
        blur="30px"
      />
    </div>
  );
};

export default FloatingElements;
