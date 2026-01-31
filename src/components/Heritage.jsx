import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HeritageSection = () => {
  const containerRef = useRef(null);
  
  // Scoped scroll tracking for better performance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smoothed transforms using springs to prevent "jitter" on mobile
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const imageMove = useTransform(smoothProgress, [0, 1], [40, -100]);
  const textMove = useTransform(smoothProgress, [0, 1], [30, -30]);
  const bgTextMove = useTransform(smoothProgress, [0, 1], ["5%", "-10%"]);

  return (
    <div 
      ref={containerRef}
      className="bg-[#0A0F1E] py-24 md:py-40 relative overflow-hidden"
    >
      
      {/* 1. ARCHIVAL BACKGROUND TEXT - Hardware Accelerated */}
      <motion.div 
        style={{ x: bgTextMove }}
        className="absolute top-10 left-0 opacity-[0.02] md:opacity-[0.03] select-none pointer-events-none will-change-transform"
      >
        <h2 className="text-[15rem] md:text-[25rem] font-serif text-[#F9FAFB] leading-none uppercase font-black">
          Heritage
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* LEFT: Video & Image Composition */}
        <div className="lg:col-span-6 relative h-[500px] md:h-[750px]">
          
          {/* Main Archival VIDEO */}
          <motion.div 
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-[85%] h-full rounded-sm overflow-hidden border border-white/5 shadow-2xl bg-black"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-[2000ms] will-change-filter"
            >
              {/* Reliable Direct Video Link */}
              <source 
                src="https://www.pexels.com/download/video/8447696/" 
                type="video/mp4" 
              />
            </video>
          </motion.div>

          {/* Floating Detail Image */}
          <motion.div 
            style={{ y: imageMove }}
            className="absolute -bottom-8 -right-2 md:-bottom-12 md:-right-12 w-3/5 h-[280px] md:h-[350px] border-[8px] md:border-[12px] border-[#0A0F1E] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden z-20 will-change-transform"
          >
            <img 
              src="https://www.youwish.nl/wp-content/uploads/2025/12/Hoe-maak-je-geurolie-van-etherische-olie.jpg" 
              alt="Ingredients" 
              className="w-full h-full object-cover brightness-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#0052FF]/10 pointer-events-none" />
          </motion.div>

          {/* Sapphire Badge - Optimized for Mobile Padding */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-1/2 -left-2 md:-left-12 bg-[#0052FF] p-6 md:p-10 max-w-[180px] md:max-w-[240px] z-30 shadow-xl"
          >
            <p className="text-[#F9FAFB] text-[9px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] leading-loose">
              "A scent is a story told in whispers, captured in sapphire."
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Detailed Content */}
        <motion.div 
          style={{ y: textMove }}
          className="lg:col-span-6 space-y-8 md:space-y-12 will-change-transform"
        >
          <header className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#0052FF]" />
              <span className="text-[#0052FF] uppercase tracking-[0.6em] md:tracking-[0.8em] text-[9px] md:text-[10px] font-black block">Est. 1924</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif text-[#F9FAFB] leading-[1.1] md:leading-[1] tracking-tighter italic">
              The Art of <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9FAFB] to-[#0052FF]/50">Scent Alchemy</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 py-8 md:py-10 border-y border-white/10">
            <div className="space-y-3">
              <h4 className="text-[#0052FF] font-black uppercase tracking-widest text-[10px] md:text-xs">Pure Sourcing</h4>
              <p className="text-[#F9FAFB]/60 text-sm leading-relaxed">Hand-picked jasmine from the valleys of Grasse, harvested only at the first lunar crest.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#0052FF] font-black uppercase tracking-widest text-[10px] md:text-xs">Legacy Aging</h4>
              <p className="text-[#F9FAFB]/60 text-sm leading-relaxed">Batches are matured in temperature-locked vaults for 180 days to reach peak molecular soul.</p>
            </div>
          </div>

          <p className="text-[#F9FAFB] text-lg md:text-2xl font-light leading-relaxed italic font-serif">
            "We capture the ephemeral moments of the <span className="text-[#0052FF] not-italic font-bold underline underline-offset-8">Blue Hour</span>—where the world is suspended between day and dream."
          </p>

          <div className="pt-4 md:pt-8">
            <motion.button
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-6 text-[#F9FAFB] group"
            >
              <span className="uppercase tracking-[0.4em] text-[10px] font-black">Archive Discovery</span>
              <div className="relative w-12 md:w-16 h-[1px] bg-[#F9FAFB]/30 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  className="absolute inset-0 h-full bg-[#0052FF]"
                />
              </div>
            </motion.button>
          </div>
        </motion.div>

      </div>

      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />
    </div>
  );
};

export default HeritageSection;

