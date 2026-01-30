import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const moods = [
  {
    id: 'bold',
    label: 'Bold',
    desc: 'Command the room with power.',
    match: 'Midnight Oud',
    img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200',
    accent: '#001960'
  },
  {
    id: 'calm',
    label: 'Calm',
    desc: 'Serenity in a bottle.',
    match: 'Royal Sapphire',
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200',
    accent: '#001D51'
  },
  {
    id: 'seductive',
    label: 'Seductive',
    desc: 'An irresistible magnetic trail.',
    match: 'Brass Velvet',
    img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200',
    accent: '#131936'
  },
  {
    id: 'fresh',
    label: 'Fresh',
    desc: 'The energy of a new dawn.',
    match: 'Golden Hour',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200',
    accent: '#05308C'
  }
]

export default function ScentFinder() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="relative bg-[#0D1121] text-[#F5F0E9] font-serif overflow-hidden">
      
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: selected
            ? `radial-gradient(600px at 50% 40%, ${selected.accent}55, transparent 70%)`
            : `radial-gradient(600px at 50% 40%, #05308C44, transparent 70%)`
        }}
        transition={{ duration: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <AnimatePresence>

          {/* ================= GALLERY ================= */}
          {!selected && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <header className="text-center mb-16">
                <p className="text-[#05308C] tracking-[0.6em] text-xs font-sans font-bold">
                  ONYX & ETHER
                </p>
                <h2 className="text-5xl md:text-8xl italic mt-6">
                  Define your <span className="text-[#05308C]">Aura</span>
                </h2>
              </header>

              {/* MOBILE SLIDER */}
              <div className="md:hidden relative h-[460px]">
                <Swiper
                  modules={[Autoplay, Pagination, FreeMode]}
                  slidesPerView="auto"
                  spaceBetween={24}
                  loop
                  freeMode={{ enabled: true, momentum: false }}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false
                  }}
                  speed={6000}
                  pagination={{ clickable: true }}
                  className="h-full"
                >
                  {moods.map(mood => (
                    <SwiperSlide key={mood.id} className="w-[280px]">
                      <div
                        onClick={() => setSelected(mood)}
                        className="relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer"
                      >
                        <img
                          src={mood.img}
                          className="w-full h-full object-cover"
                          alt={mood.label}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
                        <h3 className="absolute bottom-8 w-full text-center text-3xl italic">
                          {mood.label}
                        </h3>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* DESKTOP GRID */}
              <div className="hidden md:grid grid-cols-4 gap-8">
                {moods.map(mood => (
                  <motion.div
                    key={mood.id}
                    onClick={() => setSelected(mood)}
                    whileHover={{ y: -10 }}
                    className="relative h-[520px] rounded-3xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={mood.img}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition"
                      alt={mood.label}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
                    <h3 className="absolute bottom-10 left-10 text-3xl italic">
                      {mood.label}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= DETAILS ================= */}
          {selected && (
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="h-[420px] md:h-[700px] rounded-[3rem] overflow-hidden">
                <img
                  src={selected.img}
                  className="w-full h-full object-cover"
                  alt={selected.label}
                />
              </div>

              <div>
                <button
                  onClick={() => setSelected(null)}
                  className="mb-8 text-[#05308C] tracking-widest text-xs"
                >
                  ← BACK
                </button>

                <h2 className="text-6xl md:text-8xl italic leading-none">
                  {selected.match.split(' ')[0]}
                  <span className="block text-[#05308C]">
                    {selected.match.split(' ')[1]}
                  </span>
                </h2>

                <p className="mt-6 text-white/70 max-w-md">
                  {selected.desc}
                </p>

                <div className="mt-10 flex gap-4">
                  <button className="px-10 py-4 bg-[#05308C] uppercase tracking-widest text-xs">
                    Reserve Sample
                  </button>
                  <button className="px-10 py-4 border border-white/20 uppercase tracking-widest text-xs">
                    Composition
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  )
}
