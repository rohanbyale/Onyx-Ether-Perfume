import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#030610] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052FF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-white font-serif text-2xl tracking-[0.15em] uppercase leading-none italic">
                Onyx <span className="text-[#0052FF]">&</span> Ether
              </span>
              <span className="text-white/30 text-[7px] uppercase tracking-[0.6em] mt-2 font-black">
                Parfumerie Royale
              </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-[240px] font-light italic">
              "Creating olfactory poems that linger between the physical and the ephemeral."
            </p>
          </div>

          {/* NAVIGATION COLUMN */}
          <div className="space-y-6">
            <h4 className="text-[#0052FF] text-[10px] uppercase tracking-[0.4em] font-black">The House</h4>
            <ul className="space-y-4">
              {['The Trilogy', 'Maison', 'Our Craft', 'Bespoke Services'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-white/50 hover:text-white text-xs transition-colors duration-300 font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP COLUMN */}
          <div className="space-y-6">
            <h4 className="text-[#0052FF] text-[10px] uppercase tracking-[0.4em] font-black">Concierge</h4>
            <ul className="space-y-4">
              {['Shipping & Returns', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-white/50 hover:text-white text-xs transition-colors duration-300 font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER COLUMN */}
          <div className="space-y-6">
            <h4 className="text-[#0052FF] text-[10px] uppercase tracking-[0.4em] font-black">The Ledger</h4>
            <p className="text-white/40 text-[11px] font-light italic">Join our inner circle for early access to limited pressings.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-white/10 py-2 text-[10px] text-white focus:outline-none focus:border-[#0052FF] transition-all placeholder:text-white/20 uppercase tracking-widest"
              />
              <motion.button 
                whileHover={{ letterSpacing: "0.5em" }}
                className="text-left text-[#0052FF] text-[9px] font-black uppercase tracking-widest pt-2 transition-all"
              >
                Subscribe →
              </motion.button>
            </div>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            {['Instagram', 'Vimeo', 'Pinterest'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[9px] text-white/20 uppercase tracking-[0.3em] hover:text-[#0052FF] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/10 text-[8px] uppercase tracking-widest font-black">
              © 2026 Onyx & Ether Parfumerie. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;