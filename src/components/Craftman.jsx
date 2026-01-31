import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CraftsmanshipStory = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring for that "weighted" luxury feel
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25 });

  // 1. YOUR ORIGINAL CLIP PATH (Kept exactly as requested)
  const clipPath = useTransform(
    smoothProgress,
    [0, 0.45],
    ["inset(20% 30% 20% 30%)", "inset(0% 0% 0% 0%)"]
  );

  // 2. STAGGERED FILTER: Shifted to a deeper sapphire-tinted grayscale
  const filter = useTransform(
    smoothProgress,
    [0.3, 0.6],
    ["grayscale(100%) brightness(0.4) blur(4px)", "grayscale(0%) brightness(0.7) blur(0px)"]
  );

  // 3. PARALLAX logic (Kept original logic)
  const titleY = useTransform(smoothProgress, [0, 1], [150, -150]);
  const descY = useTransform(smoothProgress, [0, 1], [250, -250]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1.2, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-[#0A0F1E]" // Refined to deep midnight
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Video Layer */}
        <motion.div 
          style={{ clipPath, filter }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <motion.div style={{ scale: bgScale }} className="w-full h-full">
            <video 
              autoPlay loop muted playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </motion.div>
          {/* Sapphire Overlay Wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/80 via-transparent to-[#0A0F1E]" />
        </motion.div>

        {/* Content Overlay */}
        <div className="container mx-auto px-8 md:px-16 grid grid-cols-12 relative z-10 w-full items-center">
          
          {/* Heading with Motion */}
          <motion.div 
            style={{ y: titleY }}
            className="col-span-12 lg:col-span-7 space-y-8"
          >
            <div className="flex items-center gap-6">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 60 }}
                 className="h-[1px] bg-[#0052FF]" 
               />
               <span className="text-[#0052FF] uppercase tracking-[0.8em] text-[10px] font-black">
                 The Process
               </span>
            </div>
            
            <h2 className="text-7xl md:text-[10rem] font-serif text-[#F9FAFB] leading-[0.8] italic tracking-tighter">
              Aged with <br /> 
              <span className="pl-12 md:pl-24 text-transparent bg-clip-text bg-gradient-to-r from-[#F9FAFB] to-[#0052FF]/40">
                Patience.
              </span>
            </h2>
          </motion.div>

          {/* Description Box - Enhanced with Glassmorphism */}
          <motion.div 
            style={{ y: descY }}
            className="col-span-12 lg:col-start-9 lg:col-span-4 mt-12 lg:mt-64"
          >
            <div className="relative group">
              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-[#0052FF]/50" />
              
              <div className="bg-[#F9FAFB]/5 backdrop-blur-2xl p-10 border border-white/10 shadow-2xl">
                <p className="text-[#F9FAFB] text-sm md:text-base font-sans font-light leading-relaxed tracking-wide opacity-80">
                  Our oils are macerated for <span className="text-[#0052FF] font-bold">180 days</span> in temperature-controlled oak barrels. 
                  This traditional distillation ensures every molecule finds its soul before it ever meets the crystal.
                </p>
                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#0052FF] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Side Rotating Badge - Whitish & Refined */}
        <div className="absolute right-12 bottom-12 z-20 pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-28 h-28 md:w-36 md:h-36"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="text-[6px] uppercase tracking-[4px] fill-[#F9FAFB] font-bold opacity-30">
                  <textPath xlinkHref="#circlePath">
                    Handmade in Small Batches • Artisanal Scent Design •
                  </textPath>
                </text>
              </svg>
            </motion.div>
        </div>

      </div>
    </section>
  );
};


export default CraftsmanshipStory;

