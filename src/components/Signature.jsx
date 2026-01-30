import React from 'react';
import { motion } from 'framer-motion';

const scents = [
  {
    name: "Royal Sapphire",
    family: "Woody Oriental",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    tag: "The Crown Jewel"
  },
  {
    name: "Midnight Oud",
    family: "Smoky Spice",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    tag: "Mysterious & Deep"
  },
  {
    name: "Magnetic Blue",
    family: "Amber Floral",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    tag: "Electric Attraction"
  },
  {
    name: "Electric Pulse",
    family: "Musk & Suede",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    tag: "Modern Vibrancy"
  }
];

const SignatureScents = () => {
  return (
    <section className="relative min-h-screen bg-[#0A0F1E] py-24 flex flex-col justify-center items-center overflow-hidden">
      
      {/* 1. STATIC BACKGROUND HEADER */}
      <div className="absolute top-20 left-0 w-full flex justify-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[18vw] font-serif text-[#F9FAFB] whitespace-nowrap leading-none uppercase font-black italic">
          Signatures
        </h2>
      </div>

      {/* 2. AMBIENT SAPPHIRE LIGHTING */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0052FF]/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#0052FF] uppercase tracking-[0.8em] text-[10px] font-black">
            The Olfactory Wardrobe
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-[#F9FAFB] italic">
            Pick your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9FAFB] to-[#0052FF]">Essence.</span>
          </h2>
        </div>

        {/* 3. STABLE GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scents.map((scent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative flex flex-col items-center bg-white/[0.02] border border-white/5 p-8 backdrop-blur-sm rounded-sm transition-all duration-500"
            >
              {/* Family Label */}
              <p className="text-[#0052FF] uppercase tracking-[0.4em] text-[9px] mb-2 font-black">
                {scent.family}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-serif text-[#F9FAFB] mb-8 text-center group-hover:italic transition-all">
                {scent.name}
              </h3>

              {/* Bottle Visual with 3D Hover */}
              <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  src={scent.img}
                  alt={scent.name}
                  
                  className="w-full h-full object-cover transition-all duration-700 rounded-sm"
                />
                
                {/* Overlay Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A0F1E]/80 backdrop-blur-md p-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[#F9FAFB] text-[8px] uppercase tracking-widest text-center italic">
                    {scent.tag}
                  </p>
                </div>
              </div>

              {/* Interaction Link */}
              <motion.button
                whileHover={{ letterSpacing: "0.5em" }}
                className="text-[#F9FAFB]/40 uppercase text-[9px] tracking-[0.3em] font-black border-b border-transparent hover:border-[#0052FF] hover:text-[#0052FF] pb-2 transition-all duration-300"
              >
                Explore Scent
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Brand Accent */}
      <div className="absolute left-10 bottom-10 hidden lg:block">
        <span className="text-[#F9FAFB]/10 text-[10px] uppercase tracking-[1em] [writing-mode:vertical-lr] font-black">
          Signature Collection No. 1
        </span>
      </div>
    </section>
  );
};

export default SignatureScents;