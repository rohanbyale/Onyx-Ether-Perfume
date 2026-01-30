import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    
    // Prevent background scrolling when menu is open
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenu]);

  const navLinks = [
    { name: 'The Trilogy', path: '/' },
    { name: 'Maison', path: '/collection' },
    { name: 'Our Craft', path: '/about' },
  ];

  const activeLink = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      isScrolled 
        ? "bg-[#030610]/90 backdrop-blur-xl border-b border-white/5 py-4" 
        : "bg-transparent py-8"
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between items-center">
        
        {/* BRAND LOGO */}
        <Link to="/" className="relative z-[110] group" onClick={() => setMobileMenu(false)}>
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 135 }}
              className={`w-9 h-9 border ${isScrolled || mobileMenu ? 'border-[#0052FF]' : 'border-black/20'} rotate-45 flex items-center justify-center group-hover:bg-[#0052FF] group-hover:border-[#0052FF] transition-all duration-500`}
            >
              <span className={`text-[10px] -rotate-45 font-black uppercase tracking-tighter transition-colors ${isScrolled || mobileMenu ? 'text-white' : 'text-black group-hover:text-white'}`}>
                OE
              </span>
            </motion.div>
            
            <div className={`flex flex-col border-l pl-4 transition-colors ${isScrolled || mobileMenu ? 'border-white/10' : 'border-black/10'}`}>
              <h1 className={`font-serif text-lg md:text-xl tracking-[0.12em] uppercase leading-none transition-colors ${isScrolled || mobileMenu ? 'text-white' : 'text-black'}`}>
                Onyx <span className="text-[#0052FF]">&</span> Ether
              </h1>
              <span className={`text-[7px] uppercase tracking-[0.5em] mt-1.5 font-bold transition-colors ${isScrolled || mobileMenu ? 'text-white/30' : 'text-black/30'}`}>
                Parfumerie Royale
              </span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="relative py-2 text-[10px] uppercase tracking-[0.3em] font-bold group"
                >
                  <span className={`transition-all duration-500 ${
                    activeLink(link.path) 
                      ? 'text-[#0052FF]' 
                      : `${isScrolled ? 'text-white/50 group-hover:text-white' : 'text-black/50 group-hover:text-black'}`
                  }`}>
                    {link.name}
                  </span>
                  <AnimatePresence>
                    {activeLink(link.path) && (
                      <motion.div 
                        layoutId="navDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0052FF]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>
          
          <Link 
            to="/contact" 
            className="px-6 py-2.5 text-[9px] uppercase tracking-widest font-black border transition-all duration-500 bg-[#FF3B30] border-[#FF3B30] text-white hover:bg-transparent hover:text-[#FF3B30]"
          >
            Inquiry
          </Link>
        </div>

        {/* MOBILE BURGER TRIGGER */}
        <button 
          className="lg:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none" 
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <motion.span 
            animate={{ rotate: mobileMenu ? 45 : 0, y: mobileMenu ? 4 : 0, width: mobileMenu ? "100%" : "60%" }}
            className={`h-[1.5px] ${isScrolled || mobileMenu ? 'bg-white' : 'bg-black'} transition-colors`}
          />
          <motion.span 
            animate={{ scaleX: mobileMenu ? 0 : 1, opacity: mobileMenu ? 0 : 1 }}
            className="w-full h-[1.5px] bg-[#0052FF]"
          />
          <motion.span 
            animate={{ rotate: mobileMenu ? -45 : 0, y: mobileMenu ? -4 : 0, width: mobileMenu ? "100%" : "40%" }}
            className={`h-[1.5px] ${isScrolled || mobileMenu ? 'bg-white' : 'bg-black'} transition-colors`}
          />
        </button>

        {/* MOBILE FULL-SCREEN MENU */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-[#030610] text-white z-[105] flex flex-col pt-32 px-8"
            >
              {/* Subtle Background Texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

              <div className="flex flex-col gap-8 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setMobileMenu(false)}
                      className="inline-block"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-[#0052FF] font-mono text-xs font-bold">0{i+1}</span>
                        <span className={`text-4xl md:text-5xl font-serif italic tracking-tighter ${activeLink(link.path) ? 'text-[#0052FF]' : 'text-white'}`}>
                          {link.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="pt-6"
                >
                  <Link 
                    to="/contact" 
                    onClick={() => setMobileMenu(false)}
                    className="inline-block bg-[#FF3B30] text-white px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-black w-full text-center sm:w-auto"
                  >
                    Start Inquiry
                  </Link>
                </motion.div>
              </div>

              {/* Footer info in Mobile Menu */}
              <div className="mt-auto mb-10 grid grid-cols-1 gap-10 border-t border-white/5 pt-10 relative z-10">
                <div className="flex flex-col gap-4">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/30">Liaison</span>
                  <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
                    <a href="#" className="hover:text-[#0052FF]">Instagram</a>
                    <a href="#" className="hover:text-[#0052FF]">Archive</a>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/30">Maison</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                 Mumbai
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;