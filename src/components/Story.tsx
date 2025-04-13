import React from 'react';
import { motion } from 'framer-motion';

export const Story = () => {
  return <motion.section 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="py-24 bg-gray-50"
  >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img src="/office2.png" alt="Modern living room" className="w-full h-[400px] object-cover rounded-lg" />
          </motion.div>
          <div className="space-y-6">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-serif"
            >
              Our Story
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600"
            >
              For over two decades, The Big E has been crafting timeless pieces
              for modern homes. Artistry, quality, and a touch of luxury - 
              that's the Merland design philosophy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, itaque animi. Similique.l Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quod voluptatem? Rerum, ipsa sequi? Dolorum quia assumenda in optio vel labore blanditiis sed error quibusdam.
            </motion.p>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/office1.png" alt="Interior design" className="w-full h-48 object-cover rounded-lg" />
              <img src="/office3.png" alt="Interior design" className="w-full h-48 object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>;
};