
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Image, Video, AudioLines, FileCheck, Stethoscope, Pill, ArrowUpRight, Send } from 'lucide-react';

// Audio wave animation component
const AudioWaves = () => {
  return (
    <div className="audio-wave-container flex items-center h-10 gap-[3px]">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gold rounded-full"
          animate={{
            height: [
              `${Math.floor(Math.random() * 15) + 10}px`,
              `${Math.floor(Math.random() * 30) + 20}px`,
              `${Math.floor(Math.random() * 15) + 10}px`
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
      
      // Adjust to be relative to SVG container
      const container = document.getElementById('connection-svg').getBoundingClientRect();
      const relStartX = startX - container.left;
      const relStartY = startY - container.top;
      const relEndX = endX - container.left;
      const relEndY = endY - container.top;
      
      // Create curved path
      setPath(`M ${relStartX} ${relStartY} Q ${(relStartX + relEndX) / 2} ${(relStartY + relEndY) / 2 - 30} ${relEndX} ${relEndY}`);
    };
    
    updatePath();
    window.addEventListener('resize', updatePath);
    
    return () => window.removeEventListener('resize', updatePath);
  }, [startRef, endRef]);
  
  return (
    <motion.path
      d={path}
      stroke="rgba(179, 155, 103, 0.7)"
      strokeWidth="2"
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
        <div className="rounded-lg overflow-hidden w-full h-full bg-dark/5">
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
        <div className="rounded-lg overflow-hidden w-full h-full bg-dark/5">
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
        <div className="p-2 text-xs font-mono text-left h-full overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Patient: 45 y/o male, presenting with 3-day history of severe headache, photophobia, and neck stiffness. Temp: 101.2°F. Previous history of sinusitis treated 2 months ago. Allergic to penicillin." className="text-xs" />
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
        <div className="p-2 text-xs font-mono text-left h-full overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Physical exam reveals positive Kernig's and Brudzinski's signs. Pupils equal and reactive. Fundoscopic exam shows no papilledema." className="text-xs" />
        </div>
      ),
      description: 'Comprehensive documentation'
    },
    { 
      id: 'diagnosis',
      content: (
        <div className="p-2 text-xs font-mono text-left h-full overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Differential Diagnosis:
1. Bacterial Meningitis (G00.9)
2. Viral Meningitis (A87.9)
3. Subarachnoid Hemorrhage (I60.9)" className="text-xs" />
        </div>
      ),
      description: 'Accurate diagnostic assessment'
    },
    { 
      id: 'imaging',
      content: (
        <div className="rounded-lg overflow-hidden w-full h-full bg-dark/5">
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
        <div className="relative p-2 text-xs font-mono text-left h-full overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Recommended Orders:
1. Ceftriaxone 2g IV q12h
2. Vancomycin 15-20 mg/kg IV q8-12h
3. Dexamethasone 10mg IV" className="text-xs" />
          
          <motion.button
            onClick={() => setSendAnimation(true)}
            className="absolute bottom-2 right-2 bg-gold hover:bg-gold-dark text-white rounded-full p-1.5 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={14} />
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
                <Pill className="text-green-600" size={32} />
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
              <motion.div
                key={input.id}
                ref={inputRefs[index]}
                className="bg-white shadow-lg rounded-lg overflow-hidden aspect-square flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1 p-4">
                  {input.content}
                </div>
                <div className="p-3 text-sm text-center border-t border-gray-100">
                  {input.description}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Central Element */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <motion.div 
              ref={centerRef}
              className="w-16 h-16 bg-dark rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.2)]"
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
              <motion.div
                key={output.id}
                ref={outputRefs[index]}
                className="bg-white shadow-lg rounded-lg overflow-hidden aspect-square flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1 p-4">
                  {output.content}
                </div>
                <div className="p-3 text-sm text-center border-t border-gray-100">
                  {output.description}
                </div>
              </motion.div>
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
