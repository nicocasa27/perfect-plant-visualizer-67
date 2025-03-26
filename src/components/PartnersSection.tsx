
import React from 'react';
import { motion } from 'framer-motion';

// Placeholder SVG component for partner logos
const PartnerLogo = ({ className }: { className?: string }) => (
  <div className={`w-32 h-16 mx-4 rounded-md bg-cream-dark/30 flex items-center justify-center ${className}`}>
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="8" width="24" height="24" rx="2" fill="#2d2d2d" fillOpacity="0.2" />
      <path d="M14 20H26M20 14V26" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

const PartnersSection = () => {
  // Create an array of partners (we'll just use placeholders)
  const partners = Array(10).fill(null);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
          Trusted by Partners and Doctors
        </h2>
        
        <div className="relative">
          {/* This creates an infinite scroll effect */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex min-w-full py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {partners.map((_, i) => (
                <PartnerLogo key={`logo-1-${i}`} />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((_, i) => (
                <PartnerLogo key={`logo-2-${i}`} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
