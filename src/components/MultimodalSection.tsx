
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mic, FileText, Video, Image, FileOutput, Cross, Headphones } from 'lucide-react';
import { AnimatedBeam } from './ui/AnimatedBeam';

const ModalityCircle = ({ 
  icon: Icon, 
  label, 
  className = "" 
}: { 
  icon: React.ElementType; 
  label: string; 
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="h-12 w-12 rounded-full bg-cream-light flex items-center justify-center shadow-md">
        <Icon className="h-6 w-6 text-dark" />
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
};

const MultimodalSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerCircleRef = useRef<HTMLDivElement>(null);
  
  // Input modality refs
  const audioInputRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLDivElement>(null);
  const videoInputRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLDivElement>(null);
  
  // Output modality refs
  const diagnosisOutputRef = useRef<HTMLDivElement>(null);
  const medicationOutputRef = useRef<HTMLDivElement>(null);
  const audioOutputRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.8, 1]);
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      ref={containerRef} 
      className="relative py-20 md:py-32 min-h-screen flex flex-col items-center justify-center bg-cream-light/50 my-12 rounded-lg shadow-md overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-medium text-center mb-16"
        >
          Powerful Multimodal Intelligence
        </motion.h2>
        
        <div className="relative h-[500px] md:h-[600px] w-full">
          {/* Center AI Circle */}
          <motion.div
            ref={centerCircleRef}
            style={{ scale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center breathing-animation shadow-lg">
              {/* Removed the AI text here */}
            </div>
          </motion.div>
          
          {/* Input Modalities */}
          <motion.div
            style={{ opacity }}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 md:gap-16"
          >
            <div ref={audioInputRef}>
              <ModalityCircle icon={Mic} label="Voice Consultation" />
            </div>
            <div ref={textInputRef}>
              <ModalityCircle icon={FileText} label="Medical Records" />
            </div>
            <div ref={videoInputRef}>
              <ModalityCircle icon={Video} label="Intraoperative Video" />
            </div>
            <div ref={imageInputRef}>
              <ModalityCircle icon={Image} label="MRI/CT/Ultrasound" />
            </div>
          </motion.div>
          
          {/* Output Modalities */}
          <motion.div
            style={{ opacity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 md:gap-16"
          >
            <div ref={diagnosisOutputRef}>
              <ModalityCircle icon={Cross} label="Diagnosis" />
            </div>
            <div ref={medicationOutputRef}>
              <ModalityCircle icon={FileOutput} label="Treatment Plan" />
            </div>
            <div ref={audioOutputRef}>
              <ModalityCircle icon={Headphones} label="Audio Feedback" />
            </div>
          </motion.div>
          
          {/* Animated Beams */}
          {isVisible && (
            <>
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={audioInputRef}
                toRef={centerCircleRef}
                curvature={50}
                gradientStartColor="#9b87f5"
                gradientStopColor="#6E59A5"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={textInputRef}
                toRef={centerCircleRef}
                curvature={30}
                delay={0.3}
                gradientStartColor="#D946EF"
                gradientStopColor="#8B5CF6"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={videoInputRef}
                toRef={centerCircleRef}
                curvature={10}
                delay={0.6}
                gradientStartColor="#0EA5E9"
                gradientStopColor="#33C3F0"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={imageInputRef}
                toRef={centerCircleRef}
                curvature={-20}
                delay={0.9}
                gradientStartColor="#F97316"
                gradientStopColor="#D946EF"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerCircleRef}
                toRef={diagnosisOutputRef}
                curvature={50}
                reverse={true}
                delay={0.4}
                gradientStartColor="#9b87f5"
                gradientStopColor="#6E59A5"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerCircleRef}
                toRef={medicationOutputRef}
                curvature={20}
                reverse={true}
                delay={0.7}
                gradientStartColor="#0EA5E9"
                gradientStopColor="#33C3F0"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerCircleRef}
                toRef={audioOutputRef}
                curvature={-10}
                reverse={true}
                delay={1}
                gradientStartColor="#F97316"
                gradientStopColor="#D946EF"
              />
            </>
          )}
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto mt-16 text-lg"
        >
          Our intelligent medical assistant processes and understands multiple types of data
          to provide comprehensive healthcare solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default MultimodalSection;
