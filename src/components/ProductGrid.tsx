import React from 'react';
import { motion } from 'framer-motion';

const products = [{
  title: 'Solid Wood Floors',
  image: '/pr1.png'
}, {
  title: 'Engineered Wood Floors',
  image: '/pr2.png'
}, {
  title: 'Customized Wooden Flooring',
  image: '/pr3.png'
}, {
  title: 'Deck Flooring',
  image: '/pr4.png'
}, {
  title: 'Indoor and Outdoor Wall Cladding & Soffit',
  image: '/pr5.png'
}, {
  title: 'Lumbers & Panels',
  image: '/pr6.png'
}, {
  title: 'Laminate Wood Floors',
  image: '/pr7.png'
}, {
  title: 'SPC Wood Floors',
  image: '/pr8.png'
}];

export function ProductGrid() {
  return <motion.section 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="py-16 bg-white"
  >
      <div className="container mx-auto">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl mb-8"
        >
          Products offered by us:
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={product.title} 
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-2">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-medium">{product.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>;
}