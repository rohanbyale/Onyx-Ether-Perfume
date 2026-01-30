import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShopLocation = () => {
  const [hoveredStore, setHoveredStore] = useState(null);

  const stores = [
    { id: "ZH-01", city: "Mumbai", zone: "Asia", hours: "10:00—19:00", img: "https://images.unsplash.com/photo-1668228367815-55d3fabc0334?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "LDN-02", city: "London", zone: "Europe", hours: "09:00—18:30", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=800" },
    { id: "NYC-03", city: "New York", zone: "Americas", hours: "11:00—20:00", img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=80&w=800" },
    { id: "TYO-04", city: "Tokyo", zone: "Asia", hours: "11:00—21:00", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="relative bg-[#F2F0EB] text-[#1A1A1A] py-12 md:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* 1. TEXTURE & ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/[0.02]" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-lg">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#0052FF] font-mono text-[9px] tracking-[0.5em] uppercase block mb-3"
            >
              Physical Archives
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic tracking-tighter leading-none">
              The Boutiques
            </h2>
          </div>
          
          <button className="group relative font-mono text-[9px] uppercase tracking-widest px-6 py-3 overflow-hidden border border-black/10">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View All</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* COMPACT INTERACTIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5">
          {stores.map((store) => (
            <motion.div
              key={store.id}
              onMouseEnter={() => setHoveredStore(store.id)}
              onMouseLeave={() => setHoveredStore(null)}
              className="relative bg-[#F2F0EB] aspect-[4/5] md:aspect-[3/4] p-6 md:p-8 flex flex-col justify-between group overflow-hidden"
            >
              {/* Image Reveal */}
              <motion.div 
                className="absolute inset-0 z-0"
                animate={{ 
                  opacity: hoveredStore === store.id ? 1 : 0,
                  scale: hoveredStore === store.id ? 1.05 : 1
                }}
                transition={{ duration: 0.6 }}
              >
                <img src={store.img} alt={store.city} className="w-full h-full object-cover grayscale brightness-90" />
                <div className="absolute inset-0 bg-[#F2F0EB]/80 group-hover:bg-[#F2F0EB]/40 transition-colors duration-500" />
              </motion.div>

              {/* Meta Data */}
              <div className="relative z-10 flex justify-between items-start font-mono text-[8px] tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                <span>{store.id}</span>
                <span>{store.zone}</span>
              </div>

              {/* Title & Status */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif italic mb-3">
                  {store.city}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#0052FF]" />
                  <span className="font-mono text-[8px] uppercase tracking-widest opacity-50">
                    {store.hours}
                  </span>
                </div>
              </div>

              {/* Action Slide-up - Fixed "Cutting" Issue */}
              <div className="relative z-10 overflow-hidden h-[1.2em]">
                <motion.div
                  animate={{ y: hoveredStore === store.id ? "-1.2em" : "0" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                  className="flex flex-col text-[8px] font-mono uppercase tracking-[0.2em] leading-none"
                >
                  <span className="h-[1.2em] flex items-center opacity-30">Archive_Link</span>
                  <span className="h-[1.2em] flex items-center text-[#0052FF] font-bold">Directions →</span>
                </motion.div>
              </div>

              {/* Hover Accent Line */}
              <motion.div 
                className="absolute top-0 left-0 h-full w-[1px] bg-[#0052FF]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredStore === store.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* FOOTER META */}
        <div className="mt-8 pt-8 border-t border-black/5 flex flex-wrap justify-between items-center gap-4 font-mono text-[7px] uppercase tracking-[0.4em] opacity-30">
          <div className="flex gap-8">
            <span>© 2026 Archive®</span>
            <span className="hidden sm:block">Status: Connected</span>
          </div>
          <span>Ref_47.3769 // 8.5417</span>
        </div>
      </div>
    </section>
  );
};

export default ShopLocation;