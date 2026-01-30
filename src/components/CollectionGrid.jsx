import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: "OX-01",
    name: "Midnight Suede",
    price: "$240",
    intensity: "8/10",
    img: "https://i.pinimg.com/736x/49/85/ef/4985ef4a9b3e9e0cd23910bf625d66f2.jpg",
    offset: "0px"
  },
  {
    id: "OX-02",
    name: "Azure Salt",
    price: "$210",
    intensity: "6/10",
    img: "https://i.pinimg.com/736x/d8/2c/81/d82c8187929bf5d08af932fb04a46346.jpg",
    offset: "60px"
  },
  {
    id: "OX-03",
    name: "Ghost Orchid",
    price: "$280",
    intensity: "4/10",
    img: "https://i.pinimg.com/736x/0a/d8/1c/0ad81c058b2137a966af9a6a9d054021.jpg",
    offset: "20px"
  },
  {
    id: "OX-04",
    name: "Burnt Amber",
    price: "$260",
    intensity: "9/10",
    img: "https://i.pinimg.com/1200x/52/ab/df/52abdfefbc5f1c465e85b291be61a468.jpg",
    offset: "80px"
  },
  {
    id: "OX-05",
    name: "Neon Neroli",
    price: "$225",
    intensity: "7/10",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    offset: "0px"
  },
  {
    id: "OX-06",
    name: "Velvet Moss",
    price: "$230",
    intensity: "5/10",
    img: "https://i.pinimg.com/1200x/6f/38/b9/6f38b9344e3e1d74ea3427b2365c4860.jpg",
    offset: "40px"
  }
];

const ProductGrid = () => {
  return (
    <section className="bg-[#030610] py-48 px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#0052FF]/5 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-40 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-[#0052FF]" />
            <span className="text-[#0052FF] text-[10px] uppercase tracking-[1.2em] font-black">Archive Series</span>
            <div className="h-px w-12 bg-[#0052FF]" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif text-white italic tracking-tight">
            The <span className="text-white/20 not-italic font-light">Visual</span> Edit
          </h2>
        </div>

        {/* 3-Column Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {products.map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ item, index }) => {
  return (
    <motion.div 
      style={{ marginTop: item.offset }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative group"
    >
      {/* Frame - Removed all grayscale/dark filters */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#070b1d] rounded-sm border border-white/[0.05] transition-all duration-700 group-hover:border-[#0052FF]/40 shadow-2xl">
        <motion.img 
          src={item.img} 
          alt={item.name}
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
        />

        {/* Minimalist Overlay - subtle for readability only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030610]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="absolute top-4 right-4">
          <span className="text-white text-[10px] font-mono bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
            {item.price}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="mt-8 flex justify-between items-start px-1">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-[#0052FF] text-[9px] font-black tracking-widest uppercase">{item.id}</span>
            <div className="h-px w-4 bg-white/10" />
            <span className="text-white/30 text-[8px] font-black tracking-widest uppercase">Int. {item.intensity}</span>
          </div>
          <h3 className="text-white text-2xl font-serif italic tracking-wide group-hover:text-[#0052FF] transition-colors duration-500">
            {item.name}
          </h3>
        </div>
        
        <button className="flex flex-col items-end group/btn">
          <span className="text-white/40 text-[9px] uppercase tracking-widest font-black group-hover/btn:text-white transition-colors">
            View
          </span>
          <div className="h-[1px] w-4 bg-[#0052FF] mt-1 group-hover/btn:w-full transition-all duration-500" />
        </button>
      </div>

      {/* Background Ghost Index */}
      <span className="absolute -left-8 -top-8 text-white/[0.03] text-8xl font-serif italic pointer-events-none select-none group-hover:text-[#0052FF]/5 transition-colors duration-700">
        0{index + 1}
      </span>
    </motion.div>
  );
};

export default ProductGrid;