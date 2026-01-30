import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ArchitecturePage = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle Parallax
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const liquidY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section 
      ref={containerRef} 
      className="bg-[#030610] min-h-[80vh] py-24 px-8 relative flex items-center overflow-hidden"
    >
      {/* 1. ANIMATED BLUE FLUID BACKGROUND (Scaled down) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
            x: [-50, 50, -50]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] bg-[#0052FF]/15 blur-[100px] rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* 2. COMPACT IMAGE FRAME (LEFT) */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div 
              style={{ rotateZ: imageRotate }}
              className="relative aspect-[4/5] w-full max-w-sm mx-auto group"
            >
              <div className="absolute inset-0 bg-[#0052FF]/10 blur-2xl group-hover:bg-[#0052FF]/30 transition-colors duration-1000" />

              <motion.div className="relative z-10 w-full h-full overflow-hidden rounded-md border border-white/5 shadow-xl">
                <motion.img 
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                />
                <motion.div 
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                />
              </motion.div>

              {/* Decorative Circle */}
              <motion.div 
                style={{ y: liquidY }}
                className="absolute -top-8 -left-8 text-[#0052FF] opacity-10 hidden lg:block"
              >
                <svg width="80" height="80" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* 3. REFINED TEXT CONTENT (RIGHT) */}
          <div className="w-full lg:w-7/12 space-y-12">
            <header className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <span className="h-[1px] w-8 bg-[#0052FF]" />
                <span className="text-[#0052FF] text-[9px] uppercase tracking-[1em] font-black">Edit 04</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-serif text-white italic leading-[1]">
                Fluid <span className="text-white/10 not-italic font-thin tracking-tight">Dynamics</span>
              </h2>
            </header>

            {/* Note Stack (More Compact Spacing) */}
            <div className="space-y-8">
              {[
                { level: "Top", notes: "Saffron & Thyme", p: "15%" },
                { level: "Heart", notes: "Midnight Jasmine", p: "35%" },
                { level: "Base", notes: "Leather & Suede", p: "50%" }
              ].map((item, idx) => (
                <div key={item.level} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[#0052FF] text-[8px] font-mono tracking-widest uppercase">{item.level}</span>
                    <span className="text-white/20 font-mono text-[10px] italic">{item.p}</span>
                  </div>
                  <p className="text-xl md:text-2xl text-white font-serif italic mb-3">{item.notes}</p>
                  
                  <div className="h-[1px] w-full bg-white/5 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.p }}
                      transition={{ duration: 1.5, ease: "circOut", delay: idx * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-[#0052FF] shadow-[0_0_10px_rgba(0,82,255,0.6)]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* SMALLER CTA */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group px-10 py-4 overflow-hidden rounded-full border border-white/10"
            >
              <div className="absolute inset-0 bg-[#0052FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 text-white text-[9px] uppercase tracking-[0.4em] font-black">
                Explore Formula
              </span>
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitecturePage;