import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeritageSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Refined Parallax: Opposite directions create a "lens" depth effect
  const imageMove = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textMove = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgTextMove = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div className="bg-[#0A0F1E] py-32 relative overflow-hidden">
      
      {/* 1. ARCHIVAL BACKGROUND TEXT */}
      <motion.div 
        style={{ x: bgTextMove }}
        className="absolute top-10 left-0 opacity-[0.03] select-none pointer-events-none"
      >
        <h2 className="text-[25rem] font-serif text-[#F9FAFB] leading-none uppercase font-black">
          Heritage
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
        
        {/* LEFT: Video & Image Composition */}
        <div className="lg:col-span-6 relative h-[600px] md:h-[750px]">
          
          {/* Main Archival VIDEO with Reveal Mask */}
          <motion.div 
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-4/5 h-full rounded-sm overflow-hidden border border-white/5 shadow-2xl bg-black"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-[2000ms]"
            >
              <source 
                src="https://www.pexels.com/download/video/8447696/" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Floating Detail Image (Sapphire Tinted) */}
          <motion.div 
            style={{ y: imageMove }}
            className="absolute -bottom-12 -right-6 lg:-right-12 w-3/5 h-[350px] border-[12px] border-[#0A0F1E] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden z-20"
          >
            <img 
              src="https://www.youwish.nl/wp-content/uploads/2025/12/Hoe-maak-je-geurolie-van-etherische-olie.jpg" 
              alt="Ingredients" 
              className="w-full h-full object-cover brightness-90 mix-blend-luminosity hover:mix-blend-normal transition-all"
            />
            <div className="absolute inset-0 bg-[#0052FF]/10 pointer-events-none" />
          </motion.div>

          {/* Sapphire Badge */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/2 -left-4 lg:-left-12 bg-[#0052FF] p-8 md:p-10 max-w-[240px] z-30 shadow-xl"
          >
            <p className="text-[#F9FAFB] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-loose">
              "A scent is a story told in whispers, captured in sapphire."
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Detailed Content */}
        <motion.div 
          style={{ y: textMove }}
          className="lg:col-span-6 space-y-12"
        >
          <header className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#0052FF]" />
              <span className="text-[#0052FF] uppercase tracking-[0.8em] text-[10px] font-black block">Est. 1924</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif text-[#F9FAFB] leading-[1] tracking-tighter italic">
              The Art of <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9FAFB] to-[#0052FF]/50">Scent Alchemy</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-y border-white/10">
            <div className="space-y-3">
              <h4 className="text-[#0052FF] font-black uppercase tracking-widest text-xs">Pure Sourcing</h4>
              <p className="text-[#F9FAFB]/60 text-sm leading-relaxed font-sans">Hand-picked jasmine from the valleys of Grasse, harvested only at the first lunar crest.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#0052FF] font-black uppercase tracking-widest text-xs">Legacy Aging</h4>
              <p className="text-[#F9FAFB]/60 text-sm leading-relaxed font-sans">Batches are matured in temperature-locked vaults for 180 days to reach peak molecular soul.</p>
            </div>
          </div>

          <p className="text-[#F9FAFB] text-xl md:text-2xl font-light leading-relaxed italic font-serif">
            "We capture the ephemeral moments of the <span className="text-[#0052FF] not-italic font-bold underline underline-offset-8">Blue Hour</span>—where the world is suspended between day and dream."
          </p>

          <div className="pt-8">
            <motion.button
              whileHover={{ x: 20 }}
              className="flex items-center gap-6 text-[#F9FAFB] group overflow-hidden"
            >
              <span className="uppercase tracking-[0.4em] text-[10px] font-black">Archive Discovery</span>
              <div className="relative">
                <div className="w-16 h-[1px] bg-[#F9FAFB]/30" />
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute top-0 left-0 h-[1px] bg-[#0052FF]"
                />
              </div>
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Aesthetic Accents */}
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />
    </div>
  );
};

export default HeritageSection;