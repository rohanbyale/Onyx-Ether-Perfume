import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const ElitePerfumeHero = () => {
  const { scrollY } = useScroll();
  
  const bottleY = useTransform(scrollY, [0, 500], [0, -80]);
  const textY = useTransform(scrollY, [0, 500], [0, 40]);
  const bgImageY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden bg-[#131936] text-[#F9FAFB] font-serif transition-colors duration-700">
      
      <motion.div 
        style={{ y: bgImageY, translateZ: 0 }}
        className="absolute inset-0 opacity-15 grayscale will-change-transform"
      >
        <img 
          src="https://images.unsplash.com/photo-1502736842968-bcaab72d0700?auto=format&fit=crop&q=80&w=2000" 
          alt="Silk Texture" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001D51]/90 via-[#131936]/95 to-[#131936]" />
      </motion.div>

      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#001960] rounded-full blur-[80px] md:blur-[180px] opacity-20 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#05308C] rounded-full blur-[70px] md:blur-[160px] opacity-15 mix-blend-screen pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        
        <motion.div 
          style={{ y: textY, translateZ: 0 }}
          className="w-full lg:w-5/12 space-y-10 py-20 will-change-transform"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-[1px] bg-[#05308C]"
            />
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#F9FAFB] tracking-[0.6em] text-xs uppercase font-sans font-black"
            >
              Maison de Sapphire
            </motion.p>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl xl:text-9xl font-light leading-[0.85] tracking-tighter"
          >
            ONYX & <br />
            <span className="italic font-extralight text-[#F9FAFB] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              ETHER
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-sm text-gray-200 font-serif italic leading-loose text-sm opacity-90"
          >
            A scent that lingers between the stars. Notes of Imperial Black Oud 
            entwined with Electric Blue smoke and the silk of Sapphire air.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="flex items-center gap-10"
          >
            <Link to="/collection" className="group relative px-10 py-5 overflow-hidden border border-[#F9FAFB]/20 text-[#F9FAFB] transition-colors duration-500 font-sans font-bold shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase transition-colors duration-500 group-hover:text-[#030610]">
                Shop the Essence
              </span>
              <div className="absolute inset-0 bg-[#F9FAFB] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/40 transition-colors duration-500" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative w-full lg:w-7/12 flex justify-center items-center h-[500px] md:h-[700px]">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="absolute top-0 md:top-10 right-0 md:right-10 w-40 md:w-56 h-56 md:h-72 overflow-hidden rounded-t-full border border-white/10 z-0"
          >
            <img 
              src="https://i.pinimg.com/736x/39/a7/12/39a712f1cb5cf2c0baf12576479b17dd.jpg" 
              alt="Ingredient" 
              className="h-full w-full object-cover grayscale brightness-50"
            />
          </motion.div>

          <motion.div 
            style={{ y: bottleY, translateZ: 0 }}
            className="relative z-20 will-change-transform"
          >
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ 
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -inset-10 md:-inset-20 border border-dashed border-[#001960]/30 rounded-full"
            />
            
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              src="https://i.pinimg.com/736x/41/43/26/41432672aa0bc930d0bfe810518f3af2.jpg" 
              alt="Luxury Bottle"
              className="w-full max-w-[280px] md:max-w-[400px] drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)] rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 md:bottom-20 left-0 p-6 md:p-8 border-l border-[#F9FAFB]/30 backdrop-blur-md bg-[#131936]/40 z-30"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#05308C] font-sans font-black">Vintage 2026</p>
            <p className="text-xl md:text-2xl font-light italic text-[#F9FAFB]">Limited Release</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElitePerfumeHero;
