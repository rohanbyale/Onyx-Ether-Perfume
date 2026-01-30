import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#030610] flex items-center pt-32 pb-20 px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0052FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#0052FF]/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, size: '50px 50px', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* LEFT COLUMN: Technical Info */}
          <div className="space-y-12">
            <header className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <span className="text-[#0052FF] text-[9px] font-black uppercase tracking-[1em]">Protocol 09: Contact</span>
                <div className="h-px w-12 bg-white/20" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-7xl md:text-8xl font-serif text-white italic leading-tight"
              >
                Open the <br />
                <span className="not-italic font-light text-white/30">Channel</span>
              </motion.h1>
            </header>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8 border-l border-white/10 pl-8"
            >
              <div>
                <p className="text-[#0052FF] text-[8px] uppercase tracking-[0.5em] mb-2 font-bold">Global Coordinates</p>
                <p className="text-white/60 font-mono text-xs">48.8566° N, 2.3522° E — PARIS, FR</p>
              </div>
              
              <div>
                <p className="text-[#0052FF] text-[8px] uppercase tracking-[0.5em] mb-2 font-bold">Inquiries</p>
                <p className="text-white text-lg font-serif italic">concierge@visualarchive.com</p>
              </div>

              <div className="pt-8">
                <div className="flex gap-8">
                  {['INSTAGRAM', 'LINKEDIN', 'TWITTER'].map((social) => (
                    <a key={social} href="#" className="text-white/20 hover:text-[#0052FF] text-[9px] font-black tracking-widest transition-colors duration-500">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Interactive Terminal (Form) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/[0.02] border border-white/10 p-10 md:p-16 backdrop-blur-xl rounded-sm relative group"
          >
            {/* Form Scanner Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0052FF]/20 animate-scan pointer-events-none" />
            
            <form className="space-y-10">
              <div className="relative group/input">
                <label className="text-[8px] text-white/40 uppercase tracking-[0.4em] absolute -top-6 left-0">Inquiry Subject</label>
                <input 
                  type="text" 
                  placeholder="The Essence of Matter"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white font-serif italic placeholder:text-white/10 focus:outline-none focus:border-[#0052FF] transition-colors"
                />
              </div>

              <div className="relative group/input">
                <label className="text-[8px] text-white/40 uppercase tracking-[0.4em] absolute -top-6 left-0">Digital Identity</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white font-serif italic placeholder:text-white/10 focus:outline-none focus:border-[#0052FF] transition-colors"
                />
              </div>

              <div className="relative group/input">
                <label className="text-[8px] text-white/40 uppercase tracking-[0.4em] absolute -top-6 left-0">Message Archive</label>
                <textarea 
                  rows="4"
                  placeholder="Describe the nature of your inquiry..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white font-serif italic placeholder:text-white/10 focus:outline-none focus:border-[#0052FF] transition-colors resize-none"
                />
              </div>

              <button className="w-full relative py-6 border border-[#0052FF]/50 group overflow-hidden">
                <div className="absolute inset-0 bg-[#0052FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-white text-[10px] font-black uppercase tracking-[0.8em]">Transmit Data</span>
              </button>
            </form>

            {/* Technical Detail */}
            <div className="absolute bottom-4 right-8 opacity-10">
              <span className="text-[7px] font-mono text-white tracking-[1em]">ENCRYPTION ACTIVE: VA-RSA-4096</span>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;