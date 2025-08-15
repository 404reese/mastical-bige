import React from 'react';
import { motion } from 'framer-motion';

export function Sample() {
  const videoSources = [
    "/videos/video1.mp4",
    "/videos/video4.mp4"
  ];

  return <motion.section 
    id="sample"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="py-16 bg-#fff"
  >
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <h2 className="text-3xl mb-8">Need samples?</h2>
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8"
        >
          <motion.button 
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#D4B88C] text-#fff px-6 py-2 rounded">
            Yes I want !
          </motion.button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoSources.map((src, idx) => (
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
              viewport={{ once: true }}
              key={src}
              className="aspect-[9/16] rounded-lg overflow-hidden bg-black flex items-center justify-center"
            >
              <video
                src={src}
                controls
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>;
}