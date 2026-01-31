import React from 'react';
import { motion } from 'framer-motion';

const LuxuryShowcase = () => {
  return (
    <section className="relative min-h-screen bg-[#030610] text-[#F9FAFB] overflow-hidden flex items-center py-12 lg:py-20 selection:bg-[#0052FF]">
      
      {/* 1. ANIMATED BACKGROUND AMBIANCE - Optimized for Mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-[#0052FF]/10 blur-[80px] lg:blur-[120px] rounded-full animate-pulse will-change-[opacity]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-[#0052FF]/10 blur-[80px] lg:blur-[120px] rounded-full animate-pulse will-change-[opacity]" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: THE ARCHIVE */}
        <div className="order-2 lg:order-1 lg:col-span-3 space-y-10">
          <motion.div 
            whileHover={{ y: -10 }}
            style={{ translateZ: 0 }}
            className="group cursor-pointer bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all duration-500 hover:border-[#0052FF]/50 will-change-transform"
          >
            <div className="aspect-square overflow-hidden rounded-xl mb-6 bg-[#030610]">
              <img 
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=500" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform" 
                alt="Archive Essence"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[#0052FF] uppercase tracking-[0.3em] text-[10px] font-black">Archive No. 04</span>
              <p className="text-white/60 text-xs leading-relaxed font-light">
                A cold-pressed distillation of midnight jasmine and smoked agarwood.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6 pt-6">
            <h2 className="text-4xl md:text-6xl font-serif italic leading-[1.1]">
              The <span className="text-[#0052FF] not-italic font-bold">Onyx</span> <br /> Legacy.
            </h2>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#F9FAFB", color: "#030610" }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-auto bg-[#0052FF] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-[0_20px_40px_rgba(0,82,255,0.2)]"
            >
              Explore Collection
            </motion.button>
          </div>
        </div>

        {/* CENTER COLUMN: THE HERO BOTTLE */}
        <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ translateZ: 0 }}
            className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-md aspect-[4/5] will-change-[transform,opacity]"
          >
            {/* Inner Glow - Performance Optimized */}
            <div className="absolute inset-0 bg-[#0052FF]/15 blur-[60px] md:blur-[80px] rounded-full scale-75 animate-pulse" />
            
            <div className="w-full h-full border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative z-10 group bg-[#030610]">
              <img 
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-1000 group-hover:scale-105 will-change-[transform,filter]"
                alt="Signature Scent"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10 space-y-1">
                <p className="text-white/40 text-[9px] uppercase tracking-widest">Flagship Scent</p>
                <p className="text-white text-2xl font-serif italic">L’Heure Bleue</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: NEW ARRIVALS */}
        <div className="order-3 lg:order-3 lg:col-span-3 space-y-10">
          <div className="space-y-2 lg:text-right">
            <span className="text-[#0052FF] uppercase tracking-[0.4em] text-[10px] font-black">Status: Available</span>
            <h3 className="text-2xl font-serif italic text-white">The Lunar Series</h3>
          </div>

          <motion.div 
            whileHover={{ y: -10 }}
            style={{ translateZ: 0 }}
            className="group cursor-pointer bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all duration-500 hover:border-[#0052FF]/50 will-change-transform"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-xl relative mb-6 bg-[#030610]">
              <img 
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=500" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 will-change-[transform,filter]" 
                alt="Lunar Collection"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0052FF]/10 mix-blend-overlay" />
            </div>
            <button className="flex items-center gap-4 text-white/40 group-hover:text-white transition-all w-full justify-between lg:justify-end">
              <span className="uppercase tracking-[0.3em] text-[9px] font-bold">Secure the Set</span>
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#0052FF] transition-all" />
            </button>
          </motion.div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-10 bottom-10 hidden xl:block">
          <p className="[writing-mode:vertical-lr] text-white/10 tracking-[1.5em] uppercase text-[9px] font-black italic">
            Sapphire & Bone Rituals
          </p>
      </div>
    </section>
  );
};

export default LuxuryShowcase;
