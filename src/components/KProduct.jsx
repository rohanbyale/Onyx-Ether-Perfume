import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const productData = {
  name: "MONOLITH_01",
  tagline: "The Singular Olfactive Event",
  price: "$240",
  specs: [
    { label: "Longevity", value: "12H+", detail: "Fractional Distillation" },
    { label: "Concentration", value: "28%", detail: "Extrait de Parfum" },
    { label: "Sillage", value: "Significant", detail: "Heavy Molecular Weight" },
    { label: "Origin", value: "Zurich", detail: "Synthetic Synthesis" }
  ],
  phases: [
    { id: "01", title: "Activation", note: "Silver Incense", desc: "The immediate crystalline opening." },
    { id: "02", title: "Evolution", note: "Midnight Rose", desc: "The velvet floral narrative core." },
    { id: "03", title: "Permanence", note: "Smoked Oud", desc: "The resinous signature that lingers." }
  ]
};

const KineticProductPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth Animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#030610] text-white font-sans selection:bg-[#0052FF]">
      
      {/* 1. THE PINNED CENTERPIECE (The Bottle/Product) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-20">
        <motion.div 
          style={{ rotate, scale }}
          className="relative w-72 h-[450px] md:w-96 md:h-[600px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl flex items-center justify-center group"
        >
          {/* Internal Label Simulation */}
          <div className="text-center">
            <h2 className="text-white font-serif italic text-4xl mb-2">{productData.name}</h2>
            <p className="text-[#0052FF] font-mono text-[10px] tracking-[0.5em] uppercase">Limited_Batch_001</p>
          </div>

          {/* Glowing Aura */}
          <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute inset-0 bg-[#0052FF]/10 blur-[80px] -z-10 rounded-full" 
          />
        </motion.div>

        {/* Floating Scanner UI Around Bottle */}
        <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center">
           <svg className="w-[80vw] h-[80vw] opacity-10" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 2" />
           </svg>
        </motion.div>
      </div>

      {/* 2. THE SCROLLING DATA CONTENT */}
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center z-30 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-[#0052FF] font-mono text-xs tracking-[1em] uppercase block mb-4">Now_Arriving</span>
          <h1 className="text-7xl md:text-[10vw] font-serif italic leading-none mb-8">{productData.tagline}</h1>
          <div className="flex gap-12 justify-center font-mono text-[10px] text-white/40 tracking-widest uppercase">
            <span>Volume: 100ml</span>
            <span>Ref: {productData.name}_SYNT</span>
          </div>
        </motion.div>
      </section>

      {/* TECHNICAL STATS SECTION */}
      <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-24 z-30">
        <div className="space-y-12">
          {productData.specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-l border-white/10 pl-8"
            >
              <p className="text-white/20 font-mono text-[10px] uppercase mb-1">{spec.label}</p>
              <h3 className="text-white text-3xl font-serif italic">{spec.value}</h3>
              <p className="text-[#0052FF] font-mono text-[9px] uppercase tracking-widest mt-2">{spec.detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:block" /> {/* Space for the sticky bottle */}
      </section>

      {/* OLFACTIVE PHASES SECTION */}
      <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-24 z-30">
        <div className="hidden md:block" /> {/* Space for the sticky bottle */}
        <div className="space-y-24 text-right">
          {productData.phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group"
            >
              <span className="text-[#0052FF] font-mono text-[40px] opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <h3 className="text-white text-5xl font-serif italic mb-4">{phase.title}</h3>
              <p className="text-white/40 text-sm max-w-sm ml-auto uppercase tracking-tighter leading-relaxed">
                <span className="text-white block mb-2 tracking-widest font-mono text-[10px]">{phase.note}</span>
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PURCHASE SECTION */}
      <section className="relative h-screen flex items-center justify-center z-30 bg-white text-black text-center px-6">
        <div className="space-y-12">
          <h2 className="text-6xl md:text-[12vw] font-serif italic leading-none tracking-tighter">Secure the<br />Archive.</h2>
          <div className="flex flex-col items-center gap-6">
            <p className="font-mono text-xl">{productData.price}</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-16 py-6 rounded-full font-mono text-xs uppercase tracking-[0.5em] font-bold"
            >
              Add to Collection
            </motion.button>
            <p className="text-black/30 font-mono text-[9px] uppercase tracking-widest">Global Shipping | Limited Batch of 100</p>
          </div>
        </div>
      </section>

      {/* Progress Bar UI */}
      <motion.div 
        style={{ scaleX: smoothProgress }}
        className="fixed bottom-0 left-0 right-0 h-1 bg-[#0052FF] origin-left z-50"
      />
      
      {/* Corner Metadata Decor */}
 
    </div>
  );
};

export default KineticProductPage;