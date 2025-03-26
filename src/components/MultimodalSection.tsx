
"use client";

import React, { forwardRef, useRef } from "react";
import { Headphones, FileText, Video, Image, MedicalCross, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function MultimodalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  
  // Input modalities
  const audioInputRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLDivElement>(null);
  const videoInputRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLDivElement>(null);
  
  // Output modalities
  const medicationOutputRef = useRef<HTMLDivElement>(null);
  const audioOutputRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Multimodal Intelligence</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our advanced AI can process multiple types of inputs and generate specialized outputs
          for comprehensive medical assistance.
        </p>
      </div>
      
      <div
        className="relative mx-auto flex h-[500px] w-full max-w-5xl items-center justify-center overflow-hidden rounded-lg p-10"
        ref={containerRef}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Circle ref={centerRef} className="size-24 bg-dark breathing-animation">
            <span className="text-white font-medium">AI Core</span>
          </Circle>
        </div>

        {/* Input Modalities */}
        <div className="absolute left-16 top-1/4 transform -translate-y-1/2">
          <Circle ref={audioInputRef} className="size-16">
            <Headphones className="text-dark" size={28} />
            <span className="absolute -bottom-8 text-sm font-medium">Audio Input</span>
          </Circle>
        </div>
        
        <div className="absolute left-24 bottom-1/4 transform translate-y-1/2">
          <Circle ref={textInputRef} className="size-16">
            <FileText className="text-dark" size={28} />
            <span className="absolute -bottom-8 text-sm font-medium">Text Input</span>
          </Circle>
        </div>
        
        <div className="absolute right-16 top-1/4 transform -translate-y-1/2">
          <Circle ref={videoInputRef} className="size-16">
            <Video className="text-dark" size={28} />
            <span className="absolute -bottom-8 text-sm font-medium">Video Input</span>
          </Circle>
        </div>
        
        <div className="absolute right-24 bottom-1/4 transform translate-y-1/2">
          <Circle ref={imageInputRef} className="size-16">
            <Image className="text-dark" size={28} />
            <span className="absolute -bottom-8 text-sm font-medium">Image Input</span>
          </Circle>
        </div>

        {/* Output Modalities */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/4">
          <Circle ref={medicationOutputRef} className="size-16">
            <MedicalCross className="text-dark" size={28} />
            <span className="absolute -bottom-8 text-sm font-medium">Medication Referrals</span>
          </Circle>
        </div>
        
        <div className="absolute bottom-20 left-1/2 transform translate-x-1/4">
          <Circle ref={audioOutputRef} className="size-16">
            <Mic className="text-dark" size={28} />
            <span className="absolute -bottom-8 text-sm font-medium">Audio Output</span>
          </Circle>
        </div>

        {/* Animated Beams - Inputs to Center */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={audioInputRef}
          toRef={centerRef}
          curvature={-50}
          gradientStartColor="#8b5cf6"
          gradientStopColor="#3b82f6"
        />
        
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={textInputRef}
          toRef={centerRef}
          curvature={50}
          gradientStartColor="#8b5cf6" 
          gradientStopColor="#3b82f6"
        />
        
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={videoInputRef}
          toRef={centerRef}
          curvature={-50}
          gradientStartColor="#8b5cf6"
          gradientStopColor="#3b82f6"
        />
        
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={imageInputRef}
          toRef={centerRef}
          curvature={50}
          gradientStartColor="#8b5cf6"
          gradientStopColor="#3b82f6"
        />

        {/* Animated Beams - Center to Outputs */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={medicationOutputRef}
          curvature={30}
          reverse={true}
          gradientStartColor="#f97316"
          gradientStopColor="#d946ef"
        />
        
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={audioOutputRef}
          curvature={30}
          reverse={true}
          gradientStartColor="#f97316"
          gradientStopColor="#d946ef"
        />
      </div>
    </section>
  );
}
