
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Pill } from 'lucide-react';

// Audio wave animation component
const AudioWaves = () => {
  return (
    <div className="audio-wave-container flex items-center h-6 gap-[2px]">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-gold rounded-full"
          animate={{
            height: [
              `${Math.floor(Math.random() * 10) + 5}px`,
              `${Math.floor(Math.random() * 15) + 10}px`,
              `${Math.floor(Math.random() * 10) + 5}px`
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Animation for text appearing letter by letter
const TextReveal = ({ text, className }) => {
  const characters = text.split("");
  
  return (
    <div className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * 0.03 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// Connection line animation between elements and central node
const ConnectionLine = ({ startRef, endRef, index }) => {
  const [path, setPath] = useState("");
  
  useEffect(() => {
    if (!startRef.current || !endRef.current) return;
    
    const updatePath = () => {
      const startRect = startRef.current.getBoundingClientRect();
      const endRect = endRef.current.getBoundingClientRect();
      
      // Calculate center points
      const startX = startRect.left + startRect.width / 2;
      const startY = startRect.top + startRect.height / 2;
      const endX = endRect.left + endRect.width / 2;
      const endY = endRect.top + endRect.height / 2;
      
      // Calculate angle to determine where line meets the square
      const angle = Math.atan2(endY - startY, endX - startX);
      
      // Radius of the central circle
      const radius = endRect.width / 2;
      
      // Point where line meets the circle
      const circleX = endX - radius * Math.cos(angle);
      const circleY = endY - radius * Math.sin(angle);
      
      // Adjust to be relative to SVG container
      const container = document.getElementById('connection-svg').getBoundingClientRect();
      const relStartX = startX - container.left;
      const relStartY = startY - container.top;
      const relCircleX = circleX - container.left;
      const relCircleY = circleY - container.top;
      
      // Create smooth curved path that stops at the circle boundary
      // More organized curve with less extreme bending
      const curveOffsetX = (relCircleX - relStartX) * 0.15;
      const curveOffsetY = (relCircleY - relStartY) * 0.15;
      
      setPath(`M ${relStartX} ${relStartY} C ${relStartX + curveOffsetX} ${relStartY + curveOffsetY}, ${relCircleX - curveOffsetX} ${relCircleY - curveOffsetY}, ${relCircleX} ${relCircleY}`);
    };
    
    updatePath();
    window.addEventListener('resize', updatePath);
    
    return () => window.removeEventListener('resize', updatePath);
  }, [startRef, endRef]);
  
  return (
    <motion.path
      d={path}
      stroke="rgba(179, 155, 103, 0.5)"
      strokeWidth="1.5"
      fill="transparent"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    />
  );
};

// Main component
const InputOutputSection = () => {
  const centerRef = useRef(null);
  const svgRef = useRef(null);
  
  // Refs for input/output boxes
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const outputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  const [sendAnimation, setSendAnimation] = useState(false);
  
  // Input items
  const inputs = [
    { 
      id: 'audio',
      content: <AudioWaves />,
      description: 'Clinical conversation transcription'
    },
    { 
      id: 'video',
      content: (
        <div className="w-full h-full bg-dark/5">
          <video 
            src="https://blbldezytmeerjvebjax.supabase.co/storage/v1/object/public/vid//ai%20(1).mp4" 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop
          />
        </div>
      ),
      description: 'Surgical procedure guidance'
    },
    { 
      id: 'image',
      content: (
        <div className="w-full h-full bg-dark/5">
          <img 
            src="https://blbldezytmeerjvebjax.supabase.co/storage/v1/object/public/vid//mri.png" 
            alt="MRI Scan" 
            className="w-full h-full object-cover"
          />
        </div>
      ),
      description: 'Diagnostic imaging analysis'
    },
    { 
      id: 'text',
      content: (
        <div className="p-1 text-[8px] font-mono text-left h-full overflow-y-auto bg-dark/5">
          <TextReveal text="Patient: 45 y/o male..." className="text-[8px]" />
        </div>
      ),
      description: 'Patient medical history'
    }
  ];
  
  // Output items
  const outputs = [
    { 
      id: 'notes',
      content: (
        <div className="p-1 text-[8px] font-mono text-left h-full overflow-y-auto bg-dark/5">
          <TextReveal text="Physical exam reveals..." className="text-[8px]" />
        </div>
      ),
      description: 'Comprehensive documentation'
    },
    { 
      id: 'diagnosis',
      content: (
        <div className="p-1 text-[8px] font-mono text-left h-full overflow-y-auto bg-dark/5">
          <TextReveal text="Differential Diagnosis" className="text-[8px]" />
        </div>
      ),
      description: 'Accurate diagnostic assessment'
    },
    { 
      id: 'imaging',
      content: (
        <div className="w-full h-full bg-dark/5">
          <img 
            src="https://blbldezytmeerjvebjax.supabase.co/storage/v1/object/public/vid//mri%20(1).png" 
            alt="X-ray Analysis" 
            className="w-full h-full object-cover"
          />
        </div>
      ),
      description: 'Advanced detection analysis'
    },
    { 
      id: 'orders',
      content: (
        <div className="relative p-1 text-[8px] font-mono text-left h-full overflow-y-auto bg-dark/5">
          <TextReveal text="Medication orders" className="text-[8px]" />
          
          <motion.button
            onClick={() => setSendAnimation(true)}
            className="absolute bottom-1 right-1 bg-gold hover:bg-gold-dark text-white rounded-sm p-0.5 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={8} />
          </motion.button>
          
          {sendAnimation && (
            <motion.div 
              className="absolute inset-0 bg-green-500/20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => setTimeout(() => setSendAnimation(false), 2000)}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.2, opacity: [0, 1, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Pill className="text-green-600" size={16} />
              </motion.div>
            </motion.div>
          )}
        </div>
      ),
      description: 'One-click medication orders'
    }
  ];
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 relative">
          {/* Inputs - Left Side */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {inputs.map((input, index) => (
              <div className="flex flex-col items-center" key={input.id}>
                <motion.div
                  ref={inputRefs[index]}
                  className="bg-white shadow-lg w-20 h-20 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {input.content}
                  </div>
                </motion.div>
                <div className="mt-2 text-xs text-center max-w-[120px]">
                  {input.description}
                </div>
              </div>
            ))}
          </div>
          
          {/* Central Element */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <motion.div 
              ref={centerRef}
              className="w-24 h-24 bg-dark rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.2)]"
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0.2)",
                  "0 0 30px rgba(0,0,0,0.4)",
                  "0 0 0 rgba(0,0,0,0.2)"
                ]
              }}
              transition={{ 
                scale: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5 
                },
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          </div>
          
          {/* Outputs - Right Side */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {outputs.map((output, index) => (
              <div className="flex flex-col items-center" key={output.id}>
                <motion.div
                  ref={outputRefs[index]}
                  className="bg-white shadow-lg w-20 h-20 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {output.content}
                  </div>
                </motion.div>
                <div className="mt-2 text-xs text-center max-w-[120px]">
                  {output.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* SVG for connection lines */}
        <svg 
          id="connection-svg"
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none" 
          style={{ zIndex: 1 }}
        >
          {inputRefs.map((ref, i) => (
            <ConnectionLine key={`in-${i}`} startRef={ref} endRef={centerRef} index={i} />
          ))}
          {outputRefs.map((ref, i) => (
            <ConnectionLine key={`out-${i}`} startRef={centerRef} endRef={ref} index={i} />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default InputOutputSection;
