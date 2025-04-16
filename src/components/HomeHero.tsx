import React from 'react';
import { motion } from 'framer-motion';


export function HomeHero() {
  return (
    <section className="relative h-screen w-full bg-[url('https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        
        {/* Animated heading */}
        <motion.h1
          className="font-serif text-6xl md:text-8xl font-light text-[#e5e2e0] mb-8"
          initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and y-axis position 50px lower
          animate={{ opacity: 1, y: 0 }}    // Animate to full opacity and original position
          transition={{ duration: 1, ease: 'easeOut' }}  // Duration and easing for the animation
        >
          Perfect wood floor
          <br />
          for perfect homes
        </motion.h1>

        {/* Animated buttons container */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and y-axis position 50px lower
          animate={{ opacity: 1, y: 0 }}    // Animate to full opacity and original position
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}  // Slight delay to stagger the animation
        >
          {/* Animated button */}
          <motion.button
          onClick={() => {
            document.getElementById('sample')?.scrollIntoView({ behavior: 'smooth' });
          }}
            className="bg-[#D4B88C] text-white px-6 py-2 rounded"
            initial={{ opacity: 0, scale: 0.8 }}  // Start with opacity 0 and small scale
            animate={{ opacity: 1, scale: 1 }}    // Animate to full opacity and normal scale
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Get your free sample
          </motion.button>

          {/* Animated button */}
          <motion.button
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
            className="border border-white text-white px-6 py-2 rounded"
            initial={{ opacity: 0, scale: 0.8 }}  // Start with opacity 0 and small scale
            animate={{ opacity: 1, scale: 1 }}    // Animate to full opacity and normal scale
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Talk to an expert
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
