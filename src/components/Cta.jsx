import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

const FinalInvitation = () => {
  return (
    <section className="relative h-[60vh] bg-[#F9FAFB] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative z-10 text-center space-y-12 px-6 w-full">
        
        {/* The Minimal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <motion.div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-8 h-[1px] bg-[#0052FF]/30" />
            <motion.span 
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              whileInView={{ letterSpacing: "0.8em", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.1 }}
              className="text-[#0052FF] uppercase text-[10px] font-black block"
            >
              The Invitation
            </motion.span>
            <div className="w-8 h-[1px] bg-[#0052FF]/30" />
          </motion.div>
          
          <h2 className="text-3xl md:text-6xl font-serif text-[#131936] italic leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Your signature scent is the <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#131936] to-[#0052FF]/50">only memory that never fades.</span>
          </h2>
        </motion.div>

        {/* The Prestige Button - Faster Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }} // Reduced delay from 0.8 to 0.4
          className="flex justify-center"
        >
          {/* Wrapped in Link for /collection redirect */}
          <Link to="/collection" className="block w-full max-w-[280px] md:max-w-max">
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="group relative w-full px-8 md:px-16 py-5 md:py-6 bg-[#131936] text-[#F9FAFB] overflow-hidden transition-all duration-500 shadow-2xl"
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
              
              <span className="relative z-10 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[11px] font-black group-hover:text-white transition-colors duration-300">
                Begin Your Journey
              </span>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer Brand Mark */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center"
        >
          <h3 className="font-serif italic text-4xl md:text-7xl tracking-tighter text-[#131936] select-none">
            Signature No.1
          </h3>
        </motion.div>
      </div>

      {/* Sapphire Ambient Glows - Optimized for mobile performance */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-24 -right-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0052FF]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#0052FF]/5 blur-[70px] md:blur-[100px] rounded-full pointer-events-none"
      />
    </section>
  );
};

export default FinalInvitation;
