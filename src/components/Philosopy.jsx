import React from 'react';
import { motion } from 'framer-motion';

const PhilosophyGrid = () => {
  const cards = [
    {
      title: "Molecular Precision",
      tag: "Process 01",
      desc: "Every note is a data point, captured at the peak of its chemical resonance.",
      span: "md:col-span-2 md:row-span-1",
      img: "https://t4.ftcdn.net/jpg/08/55/93/17/240_F_855931705_JZkh2t2Ex2GbCbelxfGKSyHPb5Y2zReU.jpg"
    },
    {
      title: "Silent Luxury",
      tag: "Ethos 02",
      desc: "True elegance doesn't shout; it lingers in the archive of the mind.",
      span: "md:col-span-1 md:row-span-2",
      img: "https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Digital Scent",
      tag: "Future 03",
      desc: "Bridging the gap between the physical pulse and the digital memory.",
      span: "md:col-span-1 md:row-span-1",
      img: "https://media.istockphoto.com/id/2148769570/photo/female-hands-holding-a-bottle-of-perfume-in-natural-morning-light.jpg?s=612x612&w=0&k=20&c=pneG75JUpT6ni_k_9GVBgE6B1JyFFixCuDqca8tNUSY="
    },
    {
      title: "Oud Extraction",
      tag: "Rare 04",
      desc: "Sourcing from protected reserves to document the rarest olfactory logs.",
      span: "md:col-span-1 md:row-span-1",
      img: "https://t4.ftcdn.net/jpg/09/26/11/25/240_F_926112581_WBy75xFz8WMxXZrAIzTyfgN6g24rTv7C.jpg"
    }
  ];

  return (
    <section className="bg-[#030610] py-32 px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header section with technical line */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-[#0052FF] text-[9px] font-black uppercase tracking-[1em]">The Core Protocol</span>
            <h2 className="text-5xl font-serif text-white italic">Foundational <span className="text-white/20 not-italic font-light">Values</span></h2>
          </div>
          <p className="max-w-xs text-white/30 text-[10px] uppercase tracking-widest leading-loose font-mono">
             [ ARCHIVE DATA LOSS: 0.0% ] <br />
             [ INTEGRITY: VERIFIED ]
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden bg-white/[0.03] border border-white/5 rounded-sm p-8 min-h-[350px] flex flex-col justify-end ${card.span}`}
            >
              {/* Background Image with Hover Reveal */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover grayscale brightness-[0.2] group-hover:brightness-50 group-hover:scale-105 transition-all duration-[1s] ease-out"
                />
                {/* Sapphire Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-[#030610]/80 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <span className="text-[#0052FF] text-[8px] font-black uppercase tracking-[0.5em]">{card.tag}</span>
                <h3 className="text-2xl text-white font-serif italic">{card.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {card.desc}
                </p>
              </div>

              {/* Decorative Corner Trace */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-[#0052FF] transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyGrid;