import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const NexusHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  // 1. VIDEO TRANSFORMS: Full-screen to sophisticated frame
  const videoWidth = useTransform(smoothProgress, [0, 0.4], ["100vw", "80vw"]);
  const videoHeight = useTransform(smoothProgress, [0, 0.4], ["100vh", "55vh"]);
  const videoRadius = useTransform(smoothProgress, [0, 0.3], ["0px", "40px"]);
  const videoY = useTransform(smoothProgress, [0, 0.4], ["0%", "-15%"]);

  // 2. CONTENT REVEAL
  const contentOpacity = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.4, 0.6], [60, 0]);
  
  // 3. BRANDING ELEMENTS (Floating Notes)
  const leftNoteX = useTransform(smoothProgress, [0.4, 0.7], [-50, 0]);
  const rightNoteX = useTransform(smoothProgress, [0.4, 0.7], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#030610] w-full">
      
      {/* THE STICKY STAGE */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03]" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.03]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,82,255,0.05)_0%,transparent_80%)]" />
        </div>

        {/* 1. THE CINEMATIC VIDEO ENGINE */}
        <motion.div
          style={{
            width: videoWidth,
            height: videoHeight,
            borderRadius: videoRadius,
            y: videoY,
          }}
          className="relative z-20 flex items-center justify-center overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10"
        >
          {/* REMOVED: Dark overlay motion.div that was here */}
          
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110" // REMOVED: grayscale and contrast-125
          >
            <source src="/first.mp4" type="video/mp4" />
          </video>

          {/* Initial Logo Reveal */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]), scale: useTransform(smoothProgress, [0, 0.1], [1, 1.1]) }}
            className="absolute z-20 text-center"
          >
            <h2 className="text-white text-4xl md:text-7xl font-serif italic tracking-[0.2em] uppercase">onyx & Ether</h2>
            <p className="text-[#0052FF] font-mono text-[10px] tracking-[0.8em] mt-4 uppercase">Archive v.01</p>
          </motion.div>
        </motion.div>

        {/* 2. THE DOCKING CONTENT (Brand Manifesto) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute bottom-[12%] z-30 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Scent Profile Left */}
          <motion.div style={{ x: leftNoteX }} className="hidden lg:flex flex-col gap-2 items-start opacity-40">
            <span className="text-[10px] font-mono text-[#0052FF] tracking-tighter">BASE_NOTES</span>
            <div className="space-y-1">
              {['Sandalwood', 'Molecular Amber', 'Rain-Dust'].map((note) => (
                <p key={note} className="text-white text-[10px] uppercase tracking-widest font-light">{note}</p>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 text-center">
            <span className="text-[#0052FF] text-[10px] font-black uppercase tracking-[1.5em] block">Olfactory Identity</span>
            <h1 className="text-4xl md:text-7xl font-serif text-white italic leading-[1] max-w-2xl">
               Captured <span className="not-italic text-white/10 font-light">in the</span> <br /> 
               Deep <span className="not-italic">Digital</span> Blue
            </h1>
          </div>

          {/* Identity Detail Right */}
          <motion.div style={{ x: rightNoteX }} className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12">
             <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-widest max-w-[200px] text-center md:text-left">
                Redefining fragrance through the lens of molecular preservation.
             </p>
             <button className="group relative px-6 py-3 border border-white/10 text-white text-[9px] uppercase tracking-[0.4em] overflow-hidden">
                <div className="absolute inset-0 bg-[#0052FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-white">Explore Essence</span>
             </button>
          </motion.div>
        </motion.div>

        {/* 3. NAV MASK */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030610] to-transparent z-[100] pointer-events-none" />
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </section>
  );
};


export default NexusHero;
