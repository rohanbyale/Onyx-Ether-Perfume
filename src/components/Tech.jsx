import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const collection = [
  { id: "OX-001", name: "Midnight Suede", vol: "88%", notes: "Saffron / Leather / Smoke", family: "Woody", status: "Stable", thermal: "24°C" },
  { id: "OX-002", name: "Azure Salt", vol: "92%", notes: "Ozone / Driftwood / Myrrh", family: "Fresh", status: "Aging", thermal: "18°C" },
  { id: "OX-003", name: "Ghost Orchid", vol: "85%", notes: "Petal / White Musk / Ice", family: "Floral", status: "Stable", thermal: "21°C" },
  { id: "OX-004", name: "Burnt Amber", vol: "90%", notes: "Resin / Bourbon / Cedar", family: "Oriental", status: "Mature", thermal: "26°C" },
  { id: "OX-005", name: "Neon Neroli", vol: "89%", notes: "Citrus / Bergamot / Glass", family: "Limited", status: "Rare", thermal: "20°C" },
];

const TechnicalRegistry = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scanX = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);

  return (
    <section ref={containerRef} className="bg-[#030610] py-32 relative border-t border-white/5 overflow-hidden font-sans">
      
      {/* 1. HUD OVERLAY - REAL TIME DATA */}
      <div className="sticky top-0 z-50 bg-[#030610]/90 backdrop-blur-xl border-b border-[#0052FF]/20 px-8 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[7px] text-[#0052FF] font-black uppercase tracking-tighter">System Clock</span>
              <span className="text-[10px] text-white font-mono">{time}</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[7px] text-[#0052FF] font-black uppercase tracking-tighter">Database Status</span>
              <span className="text-[10px] text-white font-mono uppercase tracking-widest">Encrypted // Secure</span>
            </div>
          </div>
          <div className="hidden md:flex gap-12 text-right">
            <div>
              <span className="text-[7px] text-white/30 uppercase block font-bold tracking-widest">Protocol</span>
              <span className="text-[9px] text-white font-mono italic">Maison_Ether_v4.2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-24">
        {/* 2. SECTION TITLE WITH SCANNING EFFECT */}
        <div className="relative mb-32 inline-block">
          <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-none">
            Technical <span className="text-white/20">Registry</span>
          </h2>
          <motion.div 
            style={{ x: scanX }}
            className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent skew-x-12 pointer-events-none"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* 3. DENSE SIDEBAR SPECS */}
          <div className="lg:w-1/3 space-y-16 sticky top-40 h-fit">
            <div className="space-y-6">
              <span className="text-[#0052FF] text-[10px] font-black uppercase tracking-[0.6em]">Metadata Parameters</span>
              <p className="text-white/40 text-xs leading-relaxed font-light">
                Molecular integrity verified via chromatography. Ambient storage maintained at 18.5°C constant. 
              </p>
            </div>

            {/* Spec Table */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
              {['Pressure: 1.2 ATM', 'Vapor: 0.04%', 'CO2 Level: Stable', 'pH: 5.4 Neutral'].map((spec) => (
                <div key={spec} className="border border-white/5 bg-white/[0.02] p-3">
                  <span className="text-[8px] text-white/20 uppercase font-mono tracking-tighter block mb-1">Sensor_Log</span>
                  <span className="text-[9px] text-white font-mono tracking-tighter">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. THE MASTER LIST */}
          <div className="lg:w-2/3 divide-y divide-white/5">
            {collection.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group py-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden transition-colors hover:bg-white/[0.01]"
              >
                {/* ID & Thermal Data */}
                <div className="flex flex-col gap-2 w-24">
                  <span className="text-[#0052FF] font-mono text-[9px] font-black">{item.id}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/30 font-mono text-[8px]">{item.thermal}</span>
                  </div>
                </div>

                {/* Main Identity */}
                <div className="flex-1">
                  <h3 className="text-white text-3xl font-serif italic group-hover:text-[#0052FF] transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-[8px] text-white/20 uppercase tracking-[0.4em] font-black">{item.family}</span>
                    <span className="text-[8px] text-[#0052FF] uppercase tracking-[0.4em] font-black">{item.status}</span>
                  </div>
                </div>

                {/* Molecular Profile */}
                <div className="flex flex-col text-right">
                  <span className="text-[8px] text-white/20 uppercase font-black tracking-widest mb-1">Molecular Signature</span>
                  <span className="text-[10px] text-white/60 font-mono italic max-w-[200px] leading-tight">
                    {item.notes}
                  </span>
                </div>

                {/* Percentage Gauge */}
                <div className="flex items-center gap-6 pl-8">
                   <div className="relative w-12 h-12 flex items-center justify-center border border-white/5 rounded-full">
                      <span className="text-[10px] text-white font-mono">{item.vol}</span>
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/5" />
                        <motion.circle 
                          cx="24" cy="24" r="23" fill="none" stroke="currentColor" strokeWidth="1" 
                          strokeDasharray="145" strokeDashoffset={145 - (145 * parseInt(item.vol)) / 100}
                          className="text-[#0052FF]"
                        />
                      </svg>
                   </div>
                </div>

                {/* Row Scanning Beam */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0052FF] group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#0052FF]" />
              </motion.div>
            ))}

            {/* SYSTEM BOOTING INDICATOR (Replaced fake entries) */}
            <div className="py-20 flex flex-col items-center justify-center border-t border-white/5 gap-4">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 16, 4] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                    className="w-[2px] bg-[#0052FF]"
                  />
                ))}
              </div>
              <span className="text-[8px] text-white/20 uppercase tracking-[1em] font-black">Scanning for further entries...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalRegistry;