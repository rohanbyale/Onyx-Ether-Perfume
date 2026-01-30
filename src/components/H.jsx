import React from 'react';
import { motion } from 'framer-motion';

const CinematicHero = () => {
  // Letter-by-letter animation variants
  const word = "Ethereal Essence";
  const letterVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + (i * 0.05),
        duration: 0.8,
        ease: [0.2, 0, 0.2, 1],
      },
    }),
  };

  return (
    <section className="relative w-full h-screen bg-[#0C1519] overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Layer: Scale Entrance */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C1519]/20 to-[#0C1519] z-10" />
        {/* Subtle Ambient Fog/Video Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-40" />
      </motion.div>

      {/* 2. Floating Subject: Sin Wave Motion */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: [-15, 15],
          opacity: 1
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
          opacity: { duration: 1.5, delay: 0.5 }
        }}
        className="relative z-20 w-64 md:w-96 drop-shadow-[0_35px_50px_rgba(0,0,0,0.8)]"
      >
        <img 
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000" 
          alt="Signature Fragrance Bottle"
          className="w-full h-auto object-contain pointer-events-none"
        />
      </motion.div>

      {/* 3. Minimal Copy: Letter-by-Letter Reveal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        <h1 className="flex overflow-hidden">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="text-[#F5F0E9] font-serif italic text-5xl md:text-8xl tracking-tighter"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="mt-6 h-[1px] w-24 bg-[#CF9D7B]"
        />
      </div>

      {/* 4. Foreground: Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none z-40 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[#CF9D7B] uppercase text-[9px] tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#CF9D7B] to-transparent" />
      </motion.div>
    </section>
  );
};

export default CinematicHero;