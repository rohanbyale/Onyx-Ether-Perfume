import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const PerfumeStory = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001
  });

  // === CINEMATIC CAMERA EFFECTS ===
  const blurValue = useTransform(smoothProgress, 
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], 
    ["blur(0px)", "blur(8px)", "blur(0px)", "blur(12px)", "blur(0px)", "blur(6px)", "blur(0px)", "blur(0px)"]
  );
  const mainScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);
  const vignette = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.4, 0.2]);

  // === BACKGROUND LAYERS (6 Scenes) ===
  const bg1Opacity = useTransform(smoothProgress, [0, 0.12, 0.2], [0.6, 0.8, 0]);
  const bg2Opacity = useTransform(smoothProgress, [0.15, 0.25, 0.35], [0, 0.7, 0]);
  const bg3Opacity = useTransform(smoothProgress, [0.3, 0.42, 0.52], [0, 0.8, 0]);
  const bg4Opacity = useTransform(smoothProgress, [0.48, 0.6, 0.7], [0, 0.75, 0]);
  const bg5Opacity = useTransform(smoothProgress, [0.65, 0.78, 0.88], [0, 0.85, 0]);
  const bg6Opacity = useTransform(smoothProgress, [0.82, 0.95], [0, 1]);

  // === FLOATING PARTICLES (Depth Layers) ===
  const particle1Y = useTransform(smoothProgress, [0, 1], ["-15vh", "125vh"]);
  const particle1Rotate = useTransform(smoothProgress, [0, 1], [0, 420]);
  const particle1Opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 0.4, 0.3, 0]);
  
  const particle2Y = useTransform(smoothProgress, [0, 1], ["90vh", "-60vh"]);
  const particle2Rotate = useTransform(smoothProgress, [0, 1], [30, -270]);
  const particle2Opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.2, 0.35, 0.25, 0]);

  const particle3X = useTransform(smoothProgress, [0, 1], ["-20vw", "120vw"]);
  const particle3Y = useTransform(smoothProgress, [0, 1], ["50vh", "30vh"]);
  const particle3Opacity = useTransform(smoothProgress, [0, 0.4, 0.9, 1], [0.15, 0.3, 0.2, 0]);

  // === NARRATIVE SCENES (7 Chapters) ===
  
  // Chapter 1: The Opening
  const scene1Opacity = useTransform(smoothProgress, [0, 0.08, 0.16], [0, 1, 0]);
  const scene1Scale = useTransform(smoothProgress, [0, 0.08, 0.16], [0.95, 1, 1.05]);
  const scene1Y = useTransform(smoothProgress, [0, 0.16], [0, -50]);

  // Chapter 2: The Journey Begins
  const scene2Opacity = useTransform(smoothProgress, [0.14, 0.22, 0.32], [0, 1, 0]);
  const scene2Y = useTransform(smoothProgress, [0.14, 0.22, 0.32], [80, 0, -80]);
  const scene2Scale = useTransform(smoothProgress, [0.14, 0.22, 0.32], [0.9, 1, 0.9]);

  // Chapter 3: The Ingredients
  const scene3Opacity = useTransform(smoothProgress, [0.28, 0.38, 0.48], [0, 1, 0]);
  const scene3X = useTransform(smoothProgress, [0.28, 0.38, 0.48], [-100, 0, 100]);

  // Chapter 4: The Craft
  const scene4Opacity = useTransform(smoothProgress, [0.44, 0.55, 0.65], [0, 1, 0]);
  const scene4Y = useTransform(smoothProgress, [0.44, 0.55, 0.65], [60, 0, -60]);
  const scene4Rotate = useTransform(smoothProgress, [0.44, 0.55, 0.65], [-2, 0, 2]);

  // Chapter 5: The Notes Revealed
  const scene5Opacity = useTransform(smoothProgress, [0.6, 0.7, 0.8], [0, 1, 0]);
  const scene5Scale = useTransform(smoothProgress, [0.6, 0.7, 0.8], [0.85, 1, 1.1]);

  // Chapter 6: The Bottle
  const scene6Opacity = useTransform(smoothProgress, [0.75, 0.84, 0.91], [0, 1, 0]);
  const scene6X = useTransform(smoothProgress, [0.75, 0.84, 0.91], [150, 0, -100]);

  // Chapter 7: The Grand Finale
  const scene7Opacity = useTransform(smoothProgress, [0.88, 0.94], [0, 1]);
  const scene7Scale = useTransform(smoothProgress, [0.88, 0.98], [0.8, 1]);
  const scene7Y = useTransform(smoothProgress, [0.88, 1], [30, 0]);

  // === UI ELEMENTS ===
  const scrollIndicator = useTransform(smoothProgress, [0, 0.05], [1, 0]);
  const progressBar = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const sideNav = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#0A0A0A]" style={{ height: '900vh' }}>
      
      {/* VIEWPORT STAGE */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* CAMERA LENS SYSTEM */}
        <motion.div 
          style={{ filter: blurValue, scale: mainScale }} 
          className="absolute inset-0 w-full h-full"
        >
          
          {/* === BACKGROUND ENVIRONMENTS === */}
          
          {/* BG 1: Garden at Dawn */}
          <motion.div style={{ opacity: bg1Opacity }} className="absolute inset-0">
            <img 
              src="https://plus.unsplash.com/premium_photo-1676748933022-e1183e997436?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="w-full h-full object-cover" 
              alt="Garden" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
          </motion.div>

          {/* BG 2: Field of Flowers */}
          <motion.div style={{ opacity: bg2Opacity }} className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400" 
              className="w-full h-full object-cover brightness-90" 
              alt="Flowers" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
          </motion.div>

          {/* BG 3: Spices & Botanicals */}
          <motion.div style={{ opacity: bg3Opacity }} className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1506902726285-b5c8e5dff7f8?q=80&w=2400" 
              className="w-full h-full object-cover sepia-[0.15]" 
              alt="Ingredients" 
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          {/* BG 4: Laboratory/Workshop */}
          <motion.div style={{ opacity: bg4Opacity }} className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=2400" 
              className="w-full h-full object-cover brightness-75 grayscale-[0.3]" 
              alt="Workshop" 
            />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black/70" />
          </motion.div>

          {/* BG 5: Essence Extraction */}
          <motion.div style={{ opacity: bg5Opacity }} className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=2400" 
              className="w-full h-full object-cover brightness-80" 
              alt="Essence" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70" />
          </motion.div>

          {/* BG 6: The Bottle */}
          <motion.div style={{ opacity: bg6Opacity }} className="absolute inset-0">
            <img 
              src="https://i.pinimg.com/1200x/b2/19/d1/b219d18e7b3ffd2e1a8bdf03ccfe0adf.jpg" 
              className="w-full h-full object-cover" 
              alt="Perfume Bottle" 
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Vignette Overlay */}
          <motion.div 
            style={{ opacity: vignette }}
            className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black pointer-events-none"
          />

        </motion.div>

        {/* === FLOATING PARTICLES (Z-Space Elements) === */}
        <motion.div 
          style={{ y: particle1Y, rotate: particle1Rotate, opacity: particle1Opacity }}
          className="absolute top-0 right-[12%] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 z-10 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=60&w=400" 
            className="w-full h-full object-cover rounded-full blur-[3px] opacity-60"
            alt="Petal"
          />
        </motion.div>

        <motion.div 
          style={{ y: particle2Y, rotate: particle2Rotate, opacity: particle2Opacity }}
          className="absolute bottom-0 left-[8%] w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 z-10 pointer-events-none"
        >
          <img 
            src="https://i.pinimg.com/736x/9f/e0/fb/9fe0fb7a7418f7a9c14fdcf7d369d6fb.jpg" 
            className="w-full h-full object-cover rounded-full blur-[5px] opacity-50"
            alt="Flower"
          />
        </motion.div>

        <motion.div 
          style={{ x: particle3X, y: particle3Y, opacity: particle3Opacity }}
          className="absolute w-24 h-24 sm:w-32 sm:h-32 z-10 pointer-events-none"
        >
          <div className="w-full h-full bg-blue-400/20 rounded-full blur-[40px]" />
        </motion.div>

        {/* === NARRATIVE CONTENT LAYERS === */}

        {/* CHAPTER 1: WELCOME */}
        <motion.div 
          style={{ opacity: scene1Opacity, scale: scene1Scale, y: scene1Y }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <span className="text-blue-600 tracking-[0.3em] text-[8px] sm:text-[9px] uppercase mb-6 sm:mb-8 block font-light">
              Est. 2020 • Handcrafted Excellence
            </span>
            <h1 className="text-white/95 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[12rem] tracking-tight leading-[0.9] mb-4 sm:mb-6">
              Essence<br />
              <span className="italic text-blue-400/90">of Time</span>
            </h1>
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mx-auto mb-4 sm:mb-6" />
            <p className="text-white/50 text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase font-light max-w-md px-4">
              Where ancient perfumery meets modern artistry
            </p>
          </motion.div>
        </motion.div>

        {/* CHAPTER 2: THE JOURNEY */}
        <motion.div 
          style={{ opacity: scene2Opacity, y: scene2Y, scale: scene2Scale }} 
          className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 z-20"
        >
          <div className="max-w-5xl">
            <span className="text-blue-300/80 tracking-[0.4em] text-[8px] uppercase mb-4 sm:mb-6 block">Chapter One</span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-6 sm:mb-8 leading-tight">
              Every fragrance begins with a{' '}
              <span className="italic text-blue-500">journey.</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
              We travel to remote valleys and hidden gardens, seeking rare botanicals that have perfumed the earth for centuries. 
              From the rose fields of Grasse to the oud forests of Southeast Asia, each ingredient carries a story.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
              {[
                { num: '14', label: 'Countries' },
                { num: '200+', label: 'Rare Ingredients' },
                { num: '∞', label: 'Possibilities' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-blue-900 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">{stat.num}</div>
                  <div className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CHAPTER 3: THE INGREDIENTS */}
        <motion.div 
          style={{ opacity: scene3Opacity, x: scene3X }} 
          className="absolute inset-0 flex items-center justify-center md:justify-end px-6 sm:px-8 md:px-12 lg:px-20 z-20"
        >
          <div className="max-w-2xl text-center md:text-right">
            <span className="text-blue-400/80 tracking-[0.4em] text-[8px] uppercase mb-4 sm:mb-6 block">Chapter Two</span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 leading-tight">
              Nature's <br />
              <span className="italic text-blue-600">treasure chest.</span>
            </h2>
            <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
              {[
                { name: 'Bulgarian Rose', desc: 'The queen of flowers, harvested at dawn' },
                { name: 'Oud Cambodi', desc: 'Aged resin, dark and mysterious' },
                { name: 'Bergamot', desc: 'Citrus sunshine from Calabria' },
                { name: 'Vanilla Bourbon', desc: 'Sweet warmth from Madagascar' },
                { name: 'Iris Root', desc: 'Powdery elegance from Florence' }
              ].map((ingredient, i) => (
                <div key={i} className="border-t border-white/10 pt-3 sm:pt-4">
                  <h4 className="text-blue-300 text-base sm:text-lg md:text-xl font-serif mb-1">{ingredient.name}</h4>
                  <p className="text-white/50 text-xs sm:text-sm font-light">{ingredient.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CHAPTER 4: THE CRAFT */}
        <motion.div 
          style={{ opacity: scene4Opacity, y: scene4Y, rotate: scene4Rotate }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20"
        >
          <span className="text-blue-400/80 tracking-[0.4em] text-[8px] uppercase mb-6 sm:mb-8 block">Chapter Three</span>
          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-4 sm:mb-6 leading-tight max-w-4xl">
            The art of{' '}
            <span className="italic text-blue-300">composition.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-12 font-light px-4">
            Our master perfumer blends each essence by hand, following techniques passed down through generations. 
            Hundreds of attempts. Thousands of adjustments. Until perfection emerges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-4xl w-full px-4">
            {[
              { step: '01', title: 'Extraction', desc: 'Cold-pressed & steam-distilled' },
              { step: '02', title: 'Blending', desc: 'Harmonizing notes in layers' },
              { step: '03', title: 'Maturation', desc: 'Aged minimum 6 months' }
            ].map((process) => (
              <div key={process.step} className="relative">
                <div className="text-blue-400/30 font-serif text-5xl sm:text-6xl lg:text-7xl mb-3 sm:mb-4">{process.step}</div>
                <h4 className="text-white text-lg sm:text-xl mb-2 tracking-wide">{process.title}</h4>
                <p className="text-white/50 text-xs sm:text-sm font-light">{process.desc}</p>
                <div className="hidden sm:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-blue-400/40 to-transparent" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CHAPTER 5: THE PYRAMID */}
        <motion.div 
          style={{ opacity: scene5Opacity, scale: scene5Scale }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20"
        >
          <span className="text-blue-400/80 tracking-[0.4em] text-[8px] uppercase mb-6 sm:mb-8 block">Chapter Four</span>
          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-10 sm:mb-16 leading-tight">
            A symphony in{' '}
            <span className="italic text-blue-300">three acts.</span>
          </h2>
          <div className="relative max-w-5xl w-full">
            {/* Perfume Pyramid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
              {[
                { 
                  note: 'Top Notes', 
                  time: 'First 15 minutes',
                  ingredients: ['Bergamot', 'Lemon', 'Pink Pepper'],
                  desc: 'The sparkling introduction'
                },
                { 
                  note: 'Heart Notes', 
                  time: '2-4 hours',
                  ingredients: ['Rose Absolute', 'Jasmine', 'Iris'],
                  desc: 'The soul of the fragrance'
                },
                { 
                  note: 'Base Notes', 
                  time: '6+ hours',
                  ingredients: ['Oud', 'Sandalwood', 'Vanilla'],
                  desc: 'The lasting memory'
                }
              ].map((layer, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8 hover:border-blue-400/40 transition-all duration-500">
                    <span className="text-blue-400 text-[10px] tracking-[0.3em] uppercase mb-4 block">{layer.note}</span>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-400/40 blur-md" />
                    </div>
                    <div className="space-y-2 sm:space-y-3 mb-4">
                      {layer.ingredients.map((ing) => (
                        <div key={ing} className="text-white/70 text-xs sm:text-sm font-light">{ing}</div>
                      ))}
                    </div>
                    <div className="h-[1px] bg-white/10 my-4" />
                    <p className="text-white/50 text-xs italic">{layer.desc}</p>
                    <p className="text-blue-400/60 text-[9px] tracking-widest uppercase mt-3">{layer.time}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CHAPTER 6: THE VESSEL */}
        <motion.div 
          style={{ opacity: scene6Opacity, x: scene6X }} 
          className="absolute inset-0 flex items-center justify-center md:justify-start px-6 sm:px-8 md:px-12 lg:px-20 z-20"
        >
          <div className="max-w-xl text-center md:text-left">
            <span className="text-blue-400/80 tracking-[0.4em] text-[8px] uppercase mb-4 sm:mb-6 block">Chapter Five</span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight">
              The bottle: a{' '}
              <span className="italic text-blue-300">work of art.</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 font-light">
              Hand-blown crystal. Weighted base. Gold-leafed cap. Every bottle is numbered and signed by the artisan who created it.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {[
                'Hand-blown Bohemian crystal',
                'Refillable & sustainable design',
                'UV-protected amber glass',
                'Individually numbered edition',
                'Presented in silk-lined case'
              ].map((feature, i) => (
                <div key={i} className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                  <span className="text-white/70 text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CHAPTER 7: GRAND FINALE */}
        <motion.div 
          style={{ opacity: scene7Opacity, scale: scene7Scale, y: scene7Y }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 sm:px-6"
        >
          <div className="relative">
            {/* Glowing Aura */}
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-radial from-blue-400/40 via-blue-600/20 to-transparent blur-[80px] sm:blur-[120px]"
            />
            
            {/* Brand Name */}
            <motion.h1 
              className="text-white font-serif text-[25vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] tracking-tighter leading-none relative z-10 mb-6 sm:mb-8"
              style={{
                textShadow: '0 0 60px rgba(59, 130, 246, 0.3)'
              }}
            >
              <span className="italic">Onyx & Ether </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="h-[1px] w-48 sm:w-64 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mx-auto" />
            <p className="text-blue-400 text-[10px] sm:text-[11px] tracking-[1em] sm:tracking-[1.5em] uppercase font-light">
              Haute Parfumerie
            </p>
            <p className="text-white/50 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed px-4">
              Limited edition. Individually crafted. Available exclusively at our boutique.
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 sm:mt-12 px-8 sm:px-12 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-blue-400/40 text-white tracking-[0.3em] text-[10px] sm:text-xs uppercase hover:bg-blue-400/10 transition-all duration-300 rounded-sm"
          >
            Discover Collection
          </motion.button>

          {/* Footer Info */}
          <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12 text-white/30 text-[8px] sm:text-[9px] tracking-[0.3em] uppercase px-4">
            <span>Paris • London • Tokyo</span>
            <span className="hidden sm:inline">•</span>
            <span>By Appointment</span>
          </div>
        </motion.div>

        {/* === LUXURY UI OVERLAYS === */}
        
        {/* Film Grain Texture */}
        <div 
          className="absolute inset-0 pointer-events-none z-40 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'3.5\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />
        
        {/* Side Navigation Progress */}
        <motion.div 
          style={{ opacity: sideNav }}
          className="hidden md:flex absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 lg:gap-8 z-50"
        >
          <span className="rotate-90 text-blue-400/80 text-[8px] tracking-[0.8em] uppercase origin-center font-light whitespace-nowrap">
            Scroll Story
          </span>
          <div className="w-[1px] h-40 sm:h-48 lg:h-56 bg-white/10 relative overflow-hidden">
            <motion.div 
              style={{ height: progressBar }}
              className="w-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 absolute top-0"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-3">
            {[1, 2, 3, 4, 5, 6, 7].map((chapter) => (
              <motion.div
                key={chapter}
                className="w-1.5 h-1.5 rounded-full bg-white/20"
                animate={{
                  backgroundColor: scrollYProgress.get() >= (chapter - 1) / 7 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.2)'
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator (appears at start) */}
        <motion.div 
          style={{ opacity: scrollIndicator }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 z-50"
        >
          <span className="text-white/40 text-[8px] sm:text-[9px] tracking-[0.4em] uppercase">Begin Journey</span>
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-blue-400/60 via-blue-400/30 to-transparent" 
          />
        </motion.div>

        {/* Top Brand Mark (subtle) */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 0.3, 0.3, 1]) }}
          className="absolute top-6 sm:top-8 md:top-12 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="text-white/60 font-serif text-base sm:text-lg tracking-[0.3em] uppercase">Aura</div>
        </motion.div>

      </div>
    </div>
  );
};

export default PerfumeStory;