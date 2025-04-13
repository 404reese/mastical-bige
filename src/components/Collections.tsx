import React from 'react';
import { motion } from 'framer-motion';

export const Collections = () => {
  const collections = [{
    title: 'RUSTIC',
    description: 'Our most characterful grade, filled with rich grains, charming knots and natural colour variations.',
    image: './a1.png'
  }, {
    title: 'CLASSIC',
    description: 'The perfect balance between modern sophistication and rustic charm. A true classic.',
    image: './a2.png'
  }, {
    title: 'PRISTINE',
    description: 'Our cleanest grade with a smaller number of knots and minimal sapwood for a contemporary edge.',
    image: '/a3.png'
  },
  {
    title: 'HERITAGE',
    description: 'A handcrafted surface texture and bevelled edges emulate a naturally aged wood floor.',
    image: './a4.png'
  },
  {
    title: 'NATURAL',
    description: 'A mix of light and dark tones creates a natural appearance that works well with interior designs.',
    image: './a5.png'
  },
  {
    title: 'VINTAGE',
    description: 'This grade features a subtle surface texture and a mix of light and dark tones for a classic look.',
    image: './a6.jpg'
  }];
  return <motion.section 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    className="py-24 bg-gray-900 text-[#e5e2e0]"
  >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-serif text-center mb-16"
        >
          Our Collections
        </motion.h2>
        <div className="relative overflow-hidden w-full h-full">
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={collection.title} 
              className="group relative overflow-hidden"
            >
              <img src={collection.image} alt={collection.title} className="w-full h-[400px] object-cover" />
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8"
              >
                <h3 className="text-2xl font-light mb-2">{collection.title}</h3>
                <p className="text-gray-300">{collection.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>;
};
