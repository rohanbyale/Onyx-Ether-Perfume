import React from 'react';

const scents = [
  {
    name: "Royal Sapphire",
    family: "Woody Oriental",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    tag: "The Crown Jewel"
  },
  {
    name: "Midnight Oud",
    family: "Smoky Spice",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    tag: "Mysterious & Deep"
  },
  {
    name: "Magnetic Blue",
    family: "Amber Floral",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    tag: "Electric Attraction"
  },
  {
    name: "Electric Pulse",
    family: "Musk & Suede",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    tag: "Modern Vibrancy"
  }
];

const SignatureScents = () => {
  return (
    <section className="relative min-h-screen bg-[#0A0F1E] py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Static Background Text */}
      <div className="absolute top-20 left-0 w-full flex justify-center opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[22vw] md:text-[18vw] font-serif text-[#F9FAFB] whitespace-nowrap leading-none uppercase font-black italic">
          Signatures
        </h2>
      </div>

      {/* Static Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#0052FF]/10 blur-[60px] md:blur-[150px] rounded-full pointer-events-none"
        style={{ transform: 'translate3d(-50%, -50%, 0)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <span className="text-[#0052FF] uppercase tracking-[0.5em] md:tracking-[0.8em] text-[9px] md:text-[10px] font-black block">
            The Olfactory Wardrobe
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-[#F9FAFB] italic leading-tight">
            Pick your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9FAFB] to-[#0052FF]">Essence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {scents.map((scent, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center bg-white/[0.03] border border-white/5 p-6 md:p-8 backdrop-blur-sm rounded-sm transition-colors duration-500"
            >
              <p className="text-[#0052FF] uppercase tracking-[0.3em] text-[8px] md:text-[9px] mb-2 font-black">
                {scent.family}
              </p>

              <h3 className="text-xl md:text-2xl font-serif text-[#F9FAFB] mb-6 md:mb-8 text-center group-hover:italic transition-all duration-300">
                {scent.name}
              </h3>

              <div className="relative w-full aspect-[4/5] mb-6 md:mb-8 overflow-hidden rounded-sm bg-[#030610]">
                <img
                  src={scent.img}
                  alt={scent.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0F1E]/90 backdrop-blur-md p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <p className="text-[#F9FAFB] text-[8px] uppercase tracking-widest text-center italic">
                    {scent.tag}
                  </p>
                </div>
              </div>

              <button
                className="text-[#F9FAFB]/50 uppercase text-[9px] tracking-[0.2em] font-black border-b border-white/10 hover:border-[#0052FF] hover:text-[#0052FF] pb-1 transition-all duration-300 active:scale-95"
              >
                Explore Scent
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-6 bottom-10 hidden xl:block">
        <span className="text-[#F9FAFB]/5 text-[9px] uppercase tracking-[1em] [writing-mode:vertical-lr] font-black">
          Signature Collection No. 1
        </span>
      </div>
    </section>
  );
};

export default SignatureScents;
