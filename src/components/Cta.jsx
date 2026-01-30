import React from 'react';
import { motion } from 'framer-motion';

const FinalInvitation = () => {
  return (
    // Changed to sapphire/bone theme: #F9FAFB and #131936
    <section className="relative h-[60vh] bg-[#F9FAFB] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative z-10 text-center space-y-12 px-6">
        
        {/* The Minimal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <motion.div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-8 h-[1px] bg-[#0052FF]/30" />
            <motion.span 
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              whileInView={{ letterSpacing: "0.8em", opacity: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-[#0052FF] uppercase text-[10px] font-black block"
            >
              The Invitation
            </motion.span>
            <div className="w-8 h-[1px] bg-[#0052FF]/30" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-[#131936] italic leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Your signature scent is the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#131936] to-[#0052FF]/50">only memory that never fades.</span>
          </h2>
        </motion.div>

        {/* The Prestige Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="group relative px-16 py-6 bg-[#131936] text-[#F9FAFB] overflow-hidden transition-all duration-500 shadow-2xl"
          >
            {/* Liquid Fill Effect on Hover */}
            <motion.div 
              variants={{
                hover: { top: 0 }
              }}
              initial={{ top: "100%" }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="absolute inset-0 bg-[#0052FF] z-0"
            />
            
            <span className="relative z-10 uppercase tracking-[0.6em] text-[11px] font-black group-hover:text-white transition-colors duration-300">
              Begin Your Journey
            </span>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
          </motion.button>
        </motion.div>

        {/* Footer Brand Mark */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ delay: 1.2, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center"
        >
          <h3 className="font-serif italic text-5xl md:text-7xl tracking-tighter text-[#131936] select-none">
            Signature No.1
          </h3>
        </motion.div>
      </div>

      {/* Sapphire Ambient Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#0052FF]/10 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[#0052FF]/5 blur-[100px] rounded-full pointer-events-none"
      />
    </section>
  );
};

export default FinalInvitation;