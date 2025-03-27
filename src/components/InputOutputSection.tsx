
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Image, Video, AudioLines, FileCheck, FileMedical, Stethoscope, Pill, ArrowUpRight } from 'lucide-react';

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

const ConnectionLine = ({ startX, startY, endX, endY, index }) => {
  const pathRef = useRef(null);
  
  // Create a curved path between the input and output
  const path = `M ${startX} ${startY} C ${(startX + endX) / 2 + 50} ${startY}, ${(startX + endX) / 2 - 50} ${endY}, ${endX} ${endY}`;
  
  return (
    <motion.path
      ref={pathRef}
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

const InputOutputSection = () => {
  const svgRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      // Update connection paths on resize if needed
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Input items
  const inputs = [
    { 
      id: 'audio',
      title: 'Audio Input',
      icon: <AudioLines size={24} className="text-gold" />,
      content: <AudioWaves />,
      description: 'Transcribe doctor-patient conversation'
    },
    { 
      id: 'video',
      title: 'Video Input',
      icon: <Video size={24} className="text-gold" />,
      content: (
        <div className="rounded-lg overflow-hidden w-full h-32 bg-dark/5">
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
      title: 'Image Input',
      icon: <Image size={24} className="text-gold" />,
      content: (
        <div className="rounded-lg overflow-hidden w-full h-32 bg-dark/5">
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
      title: 'Text Input',
      icon: <FileText size={24} className="text-gold" />,
      content: (
        <div className="p-2 text-sm font-mono text-left h-32 overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Patient: 45 y/o male, presenting with 3-day history of severe headache, photophobia, and neck stiffness. Temp: 101.2°F. Previous history of sinusitis treated 2 months ago. Allergic to penicillin. No significant family history. Current medications: lisinopril for hypertension." className="text-xs" />
        </div>
      ),
      description: 'Clinical history interpretation'
    }
  ];
  
  // Output items
  const outputs = [
    { 
      id: 'notes',
      title: 'Doctor\'s Notes',
      icon: <FileCheck size={24} className="text-gold" />,
      content: (
        <div className="p-2 text-sm font-mono text-left h-32 overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Physical exam reveals positive Kernig's and Brudzinski's signs. Pupils equal and reactive. Fundoscopic exam shows no papilledema. Recommend lumbar puncture to evaluate for meningitis. Blood cultures, CBC, CMP, and CT head ordered." className="text-xs" />
        </div>
      ),
      description: 'Comprehensive documentation'
    },
    { 
      id: 'diagnosis',
      title: 'Diagnosis & ICD Codes',
      icon: <FileMedical size={24} className="text-gold" />,
      content: (
        <div className="p-2 text-sm font-mono text-left h-32 overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Differential Diagnosis:
1. Bacterial Meningitis (G00.9)
2. Viral Meningitis (A87.9)
3. Subarachnoid Hemorrhage (I60.9)
4. Migraine with Aura (G43.109)

Primary Suspected: Bacterial Meningitis (G00.9)" className="text-xs" />
        </div>
      ),
      description: 'Accurate coding and assessment'
    },
    { 
      id: 'imaging',
      title: 'Image Analysis',
      icon: <Stethoscope size={24} className="text-gold" />,
      content: (
        <div className="rounded-lg overflow-hidden w-full h-32 bg-dark/5">
          <img 
            src="https://blbldezytmeerjvebjax.supabase.co/storage/v1/object/public/vid//mri%20(1).png" 
            alt="X-ray Analysis" 
            className="w-full h-full object-cover"
          />
        </div>
      ),
      description: 'Advanced detection and analysis'
    },
    { 
      id: 'orders',
      title: 'Medications & Referrals',
      icon: <Pill size={24} className="text-gold" />,
      content: (
        <div className="p-2 text-sm font-mono text-left h-32 overflow-y-auto bg-dark/5 rounded-lg">
          <TextReveal text="Recommended Orders:
1. Ceftriaxone 2g IV q12h
2. Vancomycin 15-20 mg/kg IV q8-12h
3. Dexamethasone 10mg IV prior to antibiotics
4. Neurology consult
5. ICU admission for close monitoring
6. Repeat lumbar puncture in 24-48 hours" className="text-xs" />
        </div>
      ),
      description: 'Treatment recommendations'
    }
  ];
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">
          Transforming Medical Data into Clinical Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 relative">
          {/* Inputs - Left Side */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-medium mb-4 text-center md:text-left">Inputs</h3>
            {inputs.map((input, index) => (
              <motion.div
                key={input.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {input.icon}
                  <h4 className="font-medium">{input.title}</h4>
                </div>
                {input.content}
                <p className="text-sm mt-2 text-dark/70">{input.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Central Element */}
          <div className="md:col-span-1 flex justify-center items-center">
            <motion.div 
              className="w-16 h-16 md:w-24 md:h-24 bg-dark rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5 
              }}
            >
              {/* No text, just the black circle */}
            </motion.div>
          </div>
          
          {/* Outputs - Right Side */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-medium mb-4 text-center md:text-left">Outputs</h3>
            {outputs.map((output, index) => (
              <motion.div
                key={output.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md relative z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {output.icon}
                  <h4 className="font-medium">{output.title}</h4>
                </div>
                {output.content}
                <p className="text-sm mt-2 text-dark/70">{output.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* SVG for connection lines */}
        <svg 
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none" 
          style={{ zIndex: 1 }}
        >
          {inputs.map((input, index) => (
            <ConnectionLine 
              key={`connection-${index}`}
              startX="45%" 
              startY={`${25 + (index * 150)}px`}
              endX="55%" 
              endY={`${25 + (index * 150)}px`}
              index={index}
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default InputOutputSection;
