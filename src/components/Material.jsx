import React from 'react';
import { motion } from 'framer-motion';

const MaterialOrigins = () => {
  const visuals = [
    {
      label: "Origin 01",
      title: "Raw Leather",
      img: "https://t3.ftcdn.net/jpg/18/72/37/74/240_F_1872377499_WXIyuAX3XVDFvwv0QuDJ2RYQeVZhjFzq.jpg",
      span: "col-span-1"
    },
    {
      label: "Origin 02",
      title: "Mist & Resin",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      span: "col-span-2"
    }
  ];

  return (
    <section className="bg-[#030610] py-24 px-8 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/5 blur-[120px] rounded-full" />

      <div className="container mx-auto max-w-6xl">
        {/* Header - Subtle & Left Aligned */}
        <div className="mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="text-[#0052FF] text-[9px] uppercase tracking-[1em] font-black">Archive Context</span>
            <div className="h-px w-12 bg-white/10" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif text-white italic">
            Raw <span className="text-white/20 not-italic font-light">Provenance</span>
          </h2>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visuals.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`relative aspect-video md:aspect-auto md:h-[450px] group overflow-hidden rounded-sm ${item.span}`}
            >
              {/* Image with High Contrast */}
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              />

              {/* Minimalist Data Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[#0052FF] text-[8px] font-black uppercase tracking-[0.5em]">
                  {item.label}
                </span>
                <div>
                  <h3 className="text-2xl text-white font-serif italic mb-2">{item.title}</h3>
                  <div className="h-px w-0 group-hover:w-full bg-[#0052FF] transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Footer Label */}
        <div className="mt-12 flex justify-between items-center text-white/10 font-mono text-[7px] uppercase tracking-[0.6em]">
          <span>Site Analysis: 12.001 / B</span>
          <span>Atmospheric Archive © 2026</span>
          <span>Lat: 43.6620 N</span>
        </div>
      </div>
    </section>
  );
};

export default MaterialOrigins;