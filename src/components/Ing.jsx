import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const ingredients = [
  {
    name: "Midnight Rose",
    note: "THE HEART",
    details: { family: "Floral", extraction: "CO2", purity: "99.2%", origin: "Grasse, FR" },
    description: "Hand-picked at the precise moment of blooming under a full moon. A velvet, dark floral profile with metallic undertones.",
    image: "https://images.unsplash.com/photo-1502736842968-bcaab72d0700?auto=format&fit=crop&q=80&w=2000",
  },
  {
    name: "Smoked Oud",
    note: "THE BASE",
    details: { family: "Woody", extraction: "Steam", purity: "94.5%", origin: "Assam, IN" },
    description: "Rare resinous wood, aged for decades to achieve a haunting depth and ancient resonance. Smoked over vetiver roots.",
    image: "https://i.pinimg.com/1200x/1b/2c/1d/1b2c1d3c03390a3966375c5c36b2774b.jpg",
  },
  {
    name: "White Musk",
    note: "THE SILLAGE",
    details: { family: "Animalic", extraction: "Molecular", purity: "100%", origin: "Lab-Born" },
    description: "A clean, ethereal trail that lingers like a whisper in a cold room. A synthetic masterpiece of molecular purity.",
    image: "https://t3.ftcdn.net/jpg/16/28/79/06/240_F_1628790676_WlDklNmdtk74Lr8rXND4HVqrLfxdfGUR.jpg",
  }
];

const IngredientSection = ({ ingredient, index }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacityBackground = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  return (
    <div 
      ref={containerRef} 
      style={{ zIndex: index + 1 }}
      className="relative h-screen w-full sticky top-0 overflow-hidden bg-[#030610]"
    >
      <motion.div 
        style={{ scale: scaleBackground, opacity: opacityBackground }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={ingredient.image} 
          alt={ingredient.name} 
          className="w-full h-full object-cover grayscale-[0.2] brightness-[0.4] md:brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-transparent to-[#030610]/70" />
      </motion.div>

      <div className="relative z-10 h-full w-full flex flex-col justify-end p-6 sm:p-10 md:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-[#0052FF] font-mono text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] uppercase block mb-3 md:mb-4"
            >
              Component_Archive_0{index + 1}
            </motion.span>
            <h2 className="text-white text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] font-serif italic leading-[0.9] mb-6 md:mb-8">
              {ingredient.name}
            </h2>
            <p className="text-white/60 text-base md:text-xl font-light max-w-xl leading-relaxed">
              {ingredient.description}
            </p>
          </div>

          <div className="lg:col-span-5 border-l border-white/10 pl-6 md:pl-8 pb-2">
            <div className="space-y-4 md:space-y-6">
              <h4 className="text-white/30 font-mono text-[8px] md:text-[9px] tracking-widest uppercase">Technical_Analysis</h4>
              <div className="grid grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8">
                {Object.entries(ingredient.details).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1 border-b border-white/5 pb-2">
                    <span className="text-white/20 text-[7px] md:text-[8px] font-mono uppercase">{key}</span>
                    <span className="text-white text-[10px] md:text-xs font-mono tracking-wider truncate">{value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                      className="w-1 h-1 bg-[#0052FF] rounded-full"
                    />
                  ))}
                </div>
                <span className="text-[#0052FF] font-mono text-[8px] md:text-[9px] uppercase tracking-tighter">Scanning_Signature...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 hidden sm:block">
        <span className="text-white/10 font-mono text-[8px] md:text-[9px] uppercase tracking-[1em] md:tracking-[1.5em] [writing-mode:vertical-lr] rotate-180">
          {ingredient.note}
        </span>
      </div>
    </div>
  );
};

const IngredientsExperience = () => {
  return (
    <section className="bg-[#030610] selection:bg-[#0052FF] selection:text-white">
      {/* INTRO SCREEN */}
      <div className="h-screen sticky top-0 flex flex-col items-center justify-center text-center px-6 z-0 bg-[#030610]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4 md:space-y-6"
        >
          <span className="text-[#0052FF] font-mono text-[9px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] uppercase block">The Scent Engine</span>
          <h1 className="text-white text-5xl sm:text-7xl md:text-9xl font-serif italic">Deconstructed</h1>
          <div className="h-12 md:h-20 w-px bg-gradient-to-b from-[#0052FF] to-transparent mx-auto mt-6 md:mt-10" />
        </motion.div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="relative">
        {ingredients.map((ing, idx) => (
          <IngredientSection 
            key={idx} 
            ingredient={ing} 
            index={idx} 
          />
        ))}

        {/* FINAL FOOTER WITH REFINED VIDEO VISIBILITY */}
        <div 
          style={{ zIndex: ingredients.length + 1 }}
          className="relative h-screen sticky top-0 flex items-center justify-center overflow-hidden bg-[#030610] shadow-[0_-50px_100px_rgba(0,0,0,1)] px-6"
        >
          {/* VIDEO BACKGROUND - ENHANCED VISIBILITY */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70 grayscale-[0.3] brightness-75 transition-all duration-1000"
            >
              <source 
                src="https://www.pexels.com/download/video/4154241/" 
                type="video/mp4" 
              />
            </video>
            {/* Subtle Gradient Overlay to maintain text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030610]/80 via-[#030610]/20 to-[#030610]/80" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-center space-y-6 md:space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-[0.6em] md:tracking-[1em]"
            >
              Analysis_Complete
            </motion.p>
            
            <Link to="/contact" className="inline-block">
              <motion.button 
                whileHover={{ scale: 1.05, letterSpacing: "0.3em", backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-12 py-3 border border-white/20 text-white text-[10px] md:text-xs font-mono tracking-widest transition-all duration-700 uppercase rounded-sm bg-black/40 backdrop-blur-md"
              >
                Order Archive
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsExperience;
