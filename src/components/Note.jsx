import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pyramidData = [
  {
    id: "SPECIMEN_01",
    level: "Top",
    timing: "0 — 15M",
    notes: ["Bergamot", "Pink Pepper", "Neroli"],
    structure: "C10H16O",
    intensity: 85,
    desc: "Immediate olfactory trigger. Volatile citrus molecules designed for instant impact.",
    color: "#CF9D7B",
  },
  {
    id: "SPECIMEN_02",
    level: "Heart",
    timing: "15M — 4H",
    notes: ["Jasmine", "Rose", "Black Tea"],
    structure: "C15H24",
    intensity: 60,
    desc: "The core aromatic stabilizer. Sustains the narrative after the initial evaporation.",
    color: "#F5F0E9",
  },
  {
    id: "SPECIMEN_03",
    level: "Base",
    timing: "4H — 12H+",
    notes: ["Oud", "Amber", "Musk"],
    structure: "C20H32O",
    intensity: 40,
    desc: "Dense molecular weight. Anchors the fragrance to the skin through resinous fixatives.",
    color: "#64503C",
  }
];

const FragranceDashboard = () => {
  const [active, setActive] = useState(0);

  // Animation Variants for the "Slot Machine" effect
  const slideUp = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <section className="relative w-full h-[85vh] bg-[#030610] flex items-center justify-center overflow-hidden border-y border-white/5 font-sans">
      
      {/* BACKGROUND GRID DECOR */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4 px-6 h-[60vh]">
        
        {/* LEFT: INTERACTIVE SELECTOR */}
        <div className="md:col-span-1 flex md:flex-col justify-center items-center gap-12 border-r border-white/5">
          {pyramidData.map((item, i) => (
            <button 
              key={i}
              onClick={() => setActive(i)}
              className="relative group flex items-center justify-center"
            >
              {/* Radial Progress Ring */}
              <svg className="absolute w-12 h-12 -rotate-90">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-white/5" />
                <motion.circle 
                  cx="24" cy="24" r="20" stroke={item.color} strokeWidth="1.5" fill="transparent"
                  strokeDasharray="125.6"
                  animate={{ strokeDashoffset: active === i ? 125.6 - (125.6 * item.intensity) / 100 : 125.6 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </svg>
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-500 ${active === i ? 'scale-150' : 'opacity-30'}`}
                style={{ backgroundColor: item.color }}
              />
            </button>
          ))}
        </div>

        {/* RIGHT: MAIN DISPLAY ENGINE */}
        <div className="md:col-span-11 flex flex-col md:flex-row gap-8 pl-8">
          
          {/* COLUMN 1: THE TITLE & NOTES */}
          <div className="flex-1 flex flex-col justify-between py-4 overflow-hidden">
            <div className="space-y-2">
              <p className="text-[#0052FF] font-mono text-[10px] tracking-[0.6em] uppercase">Phase_Release</p>
              <div className="h-24 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.h3 
                    key={active}
                    variants={slideUp}
                    initial="initial" animate="animate" exit="exit"
                    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    className="text-white text-7xl md:text-8xl font-serif italic absolute inset-0"
                  >
                    {pyramidData[active].level}
                  </motion.h3>
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-white/20 font-mono text-[9px] tracking-widest uppercase italic">Dominant_Chemical_Markers</p>
              <div className="flex flex-wrap gap-2">
                <AnimatePresence mode="popLayout">
                  {pyramidData[active].notes.map((note, idx) => (
                    <motion.span
                      key={`${active}-${note}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="px-4 py-2 border border-white/10 bg-white/5 text-white text-[10px] uppercase tracking-widest font-medium"
                    >
                      {note}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* COLUMN 2: TECHNICAL SPECS */}
          <div className="w-full md:w-80 border-l border-white/5 pl-8 flex flex-col justify-between py-4">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between font-mono text-[10px] text-white/30">
                  <span>MOLECULAR_WEIGHT</span>
                  <span className="text-[#0052FF]">STABLE</span>
                </div>
                <div className="h-20 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={active}
                      variants={slideUp}
                      initial="initial" animate="animate" exit="exit"
                      className="text-white/50 text-xs leading-relaxed absolute inset-0 uppercase tracking-tighter"
                    >
                      {pyramidData[active].desc}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* DATA STRIPS */}
              <div className="space-y-4 pt-8">
                {[
                  { label: "INDEX", val: pyramidData[active].id },
                  { label: "STRUCTURE", val: pyramidData[active].structure },
                  { label: "TIMING", val: pyramidData[active].timing }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white/20 font-mono text-[9px]">{stat.label}</span>
                    <motion.span 
                      key={active + stat.val}
                      initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }}
                      className="text-white font-mono text-[10px]"
                    >
                      {stat.val}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>

            {/* INTENSITY BAR */}
            <div className="space-y-3">
              <div className="flex justify-between font-mono text-[9px]">
                <span className="text-white/40">INTENSITY_INDEX</span>
                <span className="text-white">{pyramidData[active].intensity}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#0052FF]"
                  initial={{ width: 0 }}
                  animate={{ width: `${pyramidData[active].intensity}%` }}
                  transition={{ duration: 1, ease: "circOut" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER DECOR */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center opacity-20 pointer-events-none">
        <span className="font-mono text-[8px] tracking-[1em] uppercase">Biometric_Scanning_Active</span>
        <div className="flex gap-2">
           {[...Array(4)].map((_, i) => (
             <motion.div 
               key={i} animate={{ opacity: [0, 1, 0] }} 
               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
               className="w-1 h-1 bg-white rounded-full" 
             />
           ))}
        </div>
      </div>
    </section>
  );
};

export default FragranceDashboard;