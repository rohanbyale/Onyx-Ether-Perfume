import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CollectionHero = () => {
  const { scrollY } = useScroll();
  // Parallax effect for the background text
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full bg-[#030610] flex items-center justify-center overflow-hidden">
      
      {/* 1. LAYERED DEPTH: HUGE BACKGROUND TEXT */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <h2 className="text-[25vw] font-serif font-black text-white/[0.02] leading-none uppercase tracking-tighter">
          Maison
        </h2>
      </motion.div>

      {/* 2. THE CENTERPIECE: FLOATING BOTTLE ART */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] w-full max-w-[320px] md:max-w-[400px]"
        >
          {/* Subtle Sapphire Glow behind the bottle */}
          <div className="absolute inset-0 bg-[#0052FF]/20 blur-[120px] rounded-full scale-75 animate-pulse" />
          
          <div className="w-full h-full relative z-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" 
              alt="Main Collection" 
              className="w-full h-full object-cover brightness-75 scale-110 hover:scale-100 transition-transform duration-[3s] ease-out"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-transparent to-transparent opacity-90" />
          </div>

          {/* FLOAT LABELS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <p className="[writing-mode:vertical-lr] text-[8px] text-[#0052FF] uppercase tracking-[1em] font-black">
              Series 01 / Batch 2026
            </p>
          </motion.div>
        </motion.div>

        {/* 3. TYPOGRAPHY OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-9xl font-serif italic text-white text-center mix-blend-difference"
          >
            Onyx & Ether
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4"
          >
            <span className="text-[#0052FF] text-[10px] uppercase tracking-[1.5em] font-black">
              The Grand Collection
            </span>
          </motion.div>
        </div>
      </div>

      {/* 4. MOUSE INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#0052FF] to-transparent" />
        <span className="text-[8px] text-white/20 uppercase tracking-widest">Enter Archive</span>
      </motion.div>

    </section>
  );
};

export default CollectionHero;