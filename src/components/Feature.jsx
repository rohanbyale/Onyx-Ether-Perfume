import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HeroProductFeature = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  // Responsive Transforms
  const bottleScale = useTransform(smoothProgress, [0, 0.8], [0.85, 1.1]);
  const bottleRotate = useTransform(smoothProgress, [0, 1], [-5, 5]);
  
  // Parallax for text sections - reduced movement for better legibility
  const leftContentY = useTransform(smoothProgress, [0, 0.5], [20, -20]);
  const rightContentY = useTransform(smoothProgress, [0.1, 0.6], [30, -10]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  
  // Mobile-specific opacity logic
  const contentOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[250vh] bg-[#F9FAFB] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* 1. Large Animated Background Text - Adjusted size for mobile */}
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none select-none z-0"
        >
          <h2 className="text-[20vh] md:text-[35vh] lg:text-[25vw] font-serif font-black text-[#131936]/[0.04] leading-none uppercase">
            Signature • No. 1 • Signature • No. 1
          </h2>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 w-full h-full flex items-center">
          
          {/* FLOATING INGREDIENTS - Hidden on Mobile for clarity */}
          <motion.div 
            style={{ y: useTransform(smoothProgress, [0, 1], [0, -100]), opacity: 0.4 }}
            className="absolute left-[5%] top-[10%] w-24 h-24 lg:w-32 lg:h-40 hidden md:block grayscale brightness-110"
          >
            <div className="w-full h-full rounded-full border border-[#131936]/10 p-2 overflow-hidden">
                <img src="https://images.pexels.com/photos/35587280/pexels-photo-35587280.jpeg?cs=srgb&dl=pexels-2151389998-35587280.jpg&fm=jpg" alt="Botanical" className="w-full h-full object-cover rounded-full" />
            </div>
          </motion.div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center w-full gap-8">
            
            {/* LEFT CONTENT - Stacked on Mobile */}
            <motion.div 
              style={{ 
                y: {lg: leftContentY}, 
                opacity: contentOpacity 
              }}
              className="order-2 lg:order-1 lg:col-span-3 space-y-4 lg:space-y-6"
            >
              <div className="w-10 h-[1px] bg-[#0052FF]" />
              <div className="space-y-1">
                <span className="text-[#0052FF] uppercase tracking-[0.3em] text-[9px] font-black">The Accord</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#131936] leading-tight">Midnight <br className="hidden lg:block" /> Jasmine</h3>
              </div>
              <p className="text-xs md:text-sm text-[#131936]/70 leading-relaxed max-w-[280px] lg:max-w-[200px] font-light font-sans">
                A molecular deconstruction of white florals and rare amber resins.
              </p>
            </motion.div>

            {/* CENTER BOTTLE - Fixed size constraints for mobile */}
            <div className="order-1 lg:order-2 col-span-1 lg:col-span-6 flex flex-col items-center justify-center relative">
              <motion.div 
                style={{ scale: bottleScale, rotate: bottleRotate }}
                className="relative z-10 flex justify-center w-full"
              >
                <img 
                  src="https://i.pinimg.com/736x/33/72/8f/33728f3c1f364c7e76df5348e697df50.jpg" 
                  alt="Product Bottle"
                  className="w-[50%] sm:w-[40%] lg:w-[50%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                />
              </motion.div>
            </div>

            {/* RIGHT CONTENT - Stacked on Mobile */}
            <motion.div 
              style={{ 
                y: {lg: rightContentY}, 
                opacity: contentOpacity 
              }}
              className="order-3 lg:order-3 lg:col-span-3 lg:text-right space-y-4 lg:space-y-6"
            >
              <div className="flex lg:justify-end"><div className="w-10 h-[1px] bg-[#0052FF]" /></div>
              <div className="space-y-1">
                <span className="text-[#0052FF] uppercase tracking-[0.3em] text-[9px] font-black">The Vessel</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#131936] leading-tight">Hand <br className="hidden lg:block" /> Finished</h3>
              </div>
              <p className="text-xs md:text-sm text-[#131936]/70 leading-relaxed lg:ml-auto max-w-[280px] lg:max-w-[200px] font-light font-sans">
                Individually polished crystal and sealed with signature blue wax.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-[1px] h-12 bg-[#131936]/10 relative overflow-hidden">
                <motion.div 
                  style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                  className="w-full bg-[#0052FF] absolute top-0"
                />
            </div>
            <span className="text-[8px] uppercase tracking-[0.5em] text-[#131936]/50 font-bold">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroProductFeature;