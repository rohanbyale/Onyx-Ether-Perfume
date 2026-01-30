import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const testimonials = [
  {
    quote: "A fragrance that doesn't just trail; it commands. It's the armor I wear to every board meeting.",
    author: "Elena Rossi",
    title: "Creative Director",
    align: "left",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Rarely do you find a scent that captures the exact moment the sun hits the Mediterranean.",
    author: "Julian Vane",
    title: "Photographer",
    align: "right",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600"
  },
  {
    quote: "The Oud is haunting. It lingers in the room long after you’ve gone, like a beautiful memory.",
    author: "Sophia Chen",
    title: "Violinist",
    align: "left",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
  }
];

const QuoteCard = ({ item, index }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: false });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Luxury Parallax Effects
  const imgY = useTransform(smoothProgress, [0, 1], [-80, 80]);
  const textY = useTransform(smoothProgress, [0, 1], [40, -40]);
  const quoteOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef} 
      className={`relative mb-80 flex w-full flex-col md:flex-row items-center justify-between gap-12 md:gap-24 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
      {/* 1. Image with Reveal Overlay */}
      <div className="relative w-full md:w-5/12 aspect-[4/5] overflow-hidden group">
        <motion.div 
          style={{ y: imgY }}
          className="w-full h-[120%] absolute -top-[10%]"
        >
          <img 
            src={item.image} 
            alt={item.author} 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out" 
          />
        </motion.div>
        {/* Border Frame */}
        <div className="absolute inset-4 border border-white/10 pointer-events-none" />
      </div>

      {/* 2. Content Area with Masked Text Reveal */}
      <motion.div
        style={{ y: textY, opacity: quoteOpacity }}
        className={`relative w-full md:w-6/12 ${item.align === 'right' ? 'text-right' : 'text-left'}`}
      >
        <span className="absolute -top-24 -left-12 text-[20rem] font-serif text-[#CF9D7B]/5 pointer-events-none hidden lg:block">
          “
        </span>
        
        <div className="overflow-hidden mb-8">
          <motion.p 
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-serif text-[#F5F0E9] italic leading-tight tracking-tight"
          >
            {item.quote}
          </motion.p>
        </div>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4"
        >
          <div className={`flex items-center gap-4 ${item.align === 'right' ? 'justify-end' : ''}`}>
             <div className="w-12 h-[1px] bg-[#CF9D7B]" />
             <cite className="not-italic text-[#CF9D7B] uppercase tracking-[0.6em] text-[10px] font-bold">
                {item.author}
             </cite>
          </div>
          <p className="text-[#D9CBC2]/30 text-[9px] uppercase tracking-[0.4em]">
            — {item.title}
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

const ScentStories = () => {
  return (
    <section className="relative bg-[#0C1519] py-40 px-6 md:px-20 overflow-hidden">
      
      {/* Background Graphic: Slow Rotating Seal */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 top-1/4 w-[800px] h-[800px] border border-[#CF9D7B]/5 rounded-full pointer-events-none flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] border border-[#CF9D7B]/5 rounded-full" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <header className="mb-48 md:ml-12">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#CF9D7B] uppercase tracking-[1em] text-[10px] font-black block mb-6"
          >
            Voices of Distillation
          </motion.span>
          <h2 className="text-7xl md:text-[10rem] font-serif text-[#F5F0E9] italic leading-[0.8] tracking-tighter opacity-20">
            Scent <br /> 
            <span className="pl-20 md:pl-40">Stories</span>
          </h2>
        </header>

        <div className="flex flex-col space-y-40">
          {testimonials.map((item, idx) => (
            <QuoteCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScentStories;