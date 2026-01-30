import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  return (
    <section className="min-h-screen bg-[#fcfcfc] pt-32 pb-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* LEFT: THE INQUIRY FORM */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="text-[#0052FF] font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">Concierge</span>
            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-tight">
              Begin the <br /> Conversation
            </h1>
          </motion.div>

          <form className="space-y-10 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative border-b border-black/10 focus-within:border-[#0052FF] transition-colors pb-2">
                <label className="block font-mono text-[8px] uppercase tracking-widest text-black/40 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Elias Vance"
                  className="w-full bg-transparent border-none outline-none font-serif italic text-lg placeholder:text-black/10"
                />
              </div>
              <div className="relative border-b border-black/10 focus-within:border-[#0052FF] transition-colors pb-2">
                <label className="block font-mono text-[8px] uppercase tracking-widest text-black/40 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="vance@archive.com"
                  className="w-full bg-transparent border-none outline-none font-serif italic text-lg placeholder:text-black/10"
                />
              </div>
            </div>

            <div className="relative border-b border-black/10 focus-within:border-[#0052FF] transition-colors pb-2">
              <label className="block font-mono text-[8px] uppercase tracking-widest text-black/40 mb-2">Inquiry Type</label>
              <select className="w-full bg-transparent border-none outline-none font-serif italic text-lg appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Bespoke Formulation</option>
                <option>Press & Media</option>
                <option>Wholesale Partnerships</option>
              </select>
            </div>

            <div className="relative border-b border-black/10 focus-within:border-[#0052FF] transition-colors pb-2">
              <label className="block font-mono text-[8px] uppercase tracking-widest text-black/40 mb-2">Message</label>
              <textarea 
                rows="4"
                placeholder="How may we assist you?"
                className="w-full bg-transparent border-none outline-none font-serif italic text-lg placeholder:text-black/10 resize-none"
              />
            </div>

            <button className="group relative w-full md:w-auto px-12 py-5 overflow-hidden border border-black transition-all duration-500 hover:text-white">
              <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.3em]">Send Message</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </form>
        </div>

        {/* RIGHT: ATMOSPHERE & DETAILS */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-32 bg-[#F2F0EB] p-10 md:p-14 border border-black/5"
          >
            {/* Visual Header */}
            <div className="aspect-[4/5] bg-black/5 mb-10 overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1636929116093-e6c42a3ccc3c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="Maison" 
                 className="w-full h-full object-cover grayscale opacity-80" 
               />
               <div className="absolute inset-0 bg-[#0052FF]/5 mix-blend-overlay" />
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-black/30 mb-4 border-b border-black/5 pb-2">Headquarters</h4>
                <p className="font-serif italic text-xl">Bahnhofstrasse 42, 8001<br />Zürich, Switzerland</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">Direct</h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest">+41 44 211 40 00</p>
                </div>
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">Email</h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest underline underline-offset-4">maison@oe.ch</p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-black/30 mb-4">Studio Hours</h4>
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-tighter opacity-60">
                  <span>Mon — Fri</span>
                  <span>10:00 — 19:00</span>
                </div>
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-tighter opacity-60 mt-2">
                  <span>Saturday</span>
                  <span>11:00 — 17:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Footer Meta */}
      <div className="mt-20 border-t border-black/5 pt-8 max-w-7xl mx-auto flex justify-between items-center font-mono text-[8px] uppercase tracking-[0.5em] text-black/20">
        <span>EST. 2026</span>
        <span>ARCHIVE_CONTACT_V1.0</span>
        <div className="flex gap-4">
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;