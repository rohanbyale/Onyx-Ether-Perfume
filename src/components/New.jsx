import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ARRIVALS = [
  { id: 1, name: "Cyan Molecule", category: "Essence", price: "$180", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Deep Digital", category: "Archive", price: "$210", image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Lunar Dust", category: "Essence", price: "$165", image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Ether Preservation", category: "Series", price: "$240", image: "https://i.pinimg.com/736x/40/5d/1c/405d1ce8568c775dc6e1a5c2cee48324.jpg" },
];

const NewArrivals = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? ARRIVALS 
    : ARRIVALS.filter(item => item.category === filter);

  return (
    <section className="min-h-screen bg-[#030610] pt-32 pb-20 px-6 md:px-12">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#0052FF] font-mono text-xs tracking-[0.6em] uppercase block"
          >
            Latest Synthesis
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-white italic tracking-tighter"
          >
            New <span className="not-italic font-light">Arrivals</span>
          </motion.h1>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-8 pb-2">
          {['All', 'Essence', 'Archive', 'Series'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-300 relative ${
                filter === cat ? 'text-[#0052FF]' : 'text-white/40 hover:text-white'
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div layoutId="active" className="absolute -bottom-2 left-0 right-0 h-px bg-[#0052FF]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0f1d] rounded-sm border border-white/5">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700" // REMOVED grayscale
                />
                
                {/* INTERACTIVE OVERLAY */}
                <div className="absolute inset-0 flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-full py-3 bg-white text-[#030610] text-[9px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm hover:bg-[#0052FF] hover:text-white transition-colors">
                    Add to Archive
                  </button>
                </div>

                {/* TAG */}
                <div className="absolute top-0 left-0">
                  <div className="bg-[#0052FF] text-white text-[8px] font-black px-3 py-1.5 tracking-[0.2em] uppercase">
                    New
                  </div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[#0052FF] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
                      {item.category}
                    </p>
                    <h3 className="text-white text-xl font-serif italic tracking-tight group-hover:text-[#0052FF] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-white font-mono text-xs pt-1">{item.price}</span>
                </div>
                
                <div className="h-px w-full bg-white/10 overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#0052FF]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ARCHIVE LOG DECOR */}
      <div className="fixed bottom-12 right-12 pointer-events-none hidden lg:block">
        <div className="flex items-center gap-4 rotate-90 origin-right">
          <div className="w-12 h-px bg-white/20" />
          <span className="text-white/20 font-mono text-[9px] tracking-[1em] uppercase whitespace-nowrap">
            System_Update_v02
          </span>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;