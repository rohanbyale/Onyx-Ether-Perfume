import React from 'react';
import { motion } from 'framer-motion';

const SocialNexus = () => {
  const socialLinks = [
    { 
      id: '01', 
      platform: 'INSTAGRAM', 
      handle: '@visual_archive', 
      url: 'https://instagram.com', 
      meta: 'Visual Feed',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: '02', 
      platform: 'TWITTER / X', 
      handle: '@archive_sys', 
      url: 'https://twitter.com', 
      meta: 'Quick Updates',
      img: 'https://images.moneycontrol.com/static-mcnews/2023/07/Collage-Maker-24-Jul-2023-03-05-PM-4262.jpg?impolicy=website&width=1600&height=900' 
    },
    { 
      id: '03', 
      platform: 'LINKEDIN', 
      handle: 'Visual Archive Studio', 
      url: 'https://linkedin.com', 
      meta: 'B2B Inquiry',
      img: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: '04', 
      platform: 'VIMEO', 
      handle: 'VA_Motion', 
      url: 'https://vimeo.com', 
      meta: 'Film Archive',
      img: 'https://img.freepik.com/premium-vector/vimeo-vector-social-media-icon_459124-535.jpg?semt=ais_hybrid&w=740&q=80'
    },
  ];

  return (
    <section className="bg-[#030610] min-h-screen py-32 px-8 relative overflow-hidden flex flex-col justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* TOP INTERFACE BAR */}
        <div className="flex justify-between items-center mb-16 border-b border-white/5 pb-8">
          <div className="space-y-1">
            <span className="text-[#0052FF] text-[8px] font-black uppercase tracking-[1em]">External Channels</span>
            <h2 className="text-4xl font-serif text-white italic">The <span className="text-white/20 not-italic font-light">Nexus</span></h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-white/20 text-[7px] font-mono uppercase tracking-[0.5em]">System Status: Connected</p>
            <p className="text-white/20 text-[7px] font-mono uppercase tracking-[0.5em]">Encryption: Active</p>
          </div>
        </div>

        {/* LINK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex items-center bg-white/[0.02] border border-white/5 hover:border-[#0052FF]/50 p-6 transition-all duration-500 overflow-hidden"
            >
              {/* Image Preview (Visible on Hover) */}
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 grayscale">
                <img src={link.img} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Number/ID Decor */}
              <div className="mr-8">
                <span className="text-white/10 font-mono text-xl group-hover:text-[#0052FF] transition-colors">{link.id}</span>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-1 relative z-10">
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-serif italic text-xl group-hover:translate-x-2 transition-transform duration-500">{link.platform}</h3>
                  <div className="h-px w-0 group-hover:w-8 bg-[#0052FF] transition-all duration-500" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white/30 text-[10px] tracking-widest uppercase">{link.handle}</span>
                    <span className="text-[#0052FF] text-[7px] font-black tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-opacity mt-2">{link.meta}</span>
                </div>
              </div>

              {/* Interactive Arrow */}
              <div className="relative z-10 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

              {/* Background Scanline Effect */}
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#0052FF] w-0 group-hover:w-full transition-all duration-700" />
            </motion.a>
          ))}
        </div>

        {/* FOOTER METRICS */}
        <div className="mt-16 flex flex-wrap justify-between items-center gap-8 border-t border-white/5 pt-8">
          <div className="flex gap-12">
            <div>
              <p className="text-white/20 text-[8px] uppercase tracking-widest mb-1">Global Reach</p>
              <p className="text-white font-serif italic">142 Countries</p>
            </div>
            <div>
              <p className="text-white/20 text-[8px] uppercase tracking-widest mb-1">Response Time</p>
              <p className="text-white font-serif italic">{'<'} 12 Hours</p>
            </div>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white/20 hover:text-white text-[8px] uppercase tracking-[0.5em] transition-colors"
          >
            Back to Apex ↑
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialNexus;