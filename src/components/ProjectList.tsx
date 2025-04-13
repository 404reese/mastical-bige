import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  images: string[];
  isDark: boolean;
}

const ProjectList = () => {
  const projects = [
    {
      title: 'Hospitality Project in Mumbai',
      subtitle: 'SPC Flooring - 35000 sqft',
      images: [
        '/p1.png',
        '/p2.png',
        '/p3.png',
        '/p4.png',
      ],
      isDark: false,
    },
    {
      title: 'Hospitality Project in Udaipur',
      subtitle: 'Engineered Flooring with Brass Inaly',
      images: [
        '/p5.png',
        '/p6.png',
      ],
      isDark: true,
    },
    {
        title: 'Hospitality Project in Mumbai',
        subtitle: 'Engineered Wooden Tile with Brass Inlay & 1mtr x 1mtr Wooden Tile',
        images: [
          '/p8.png',
          '/p9.png',
        ],
        isDark: false,
      },
      {
        title: 'Hospitality Project in Dehradun',
        subtitle: 'Engineered Wooden Tile',
        images: [
          '/p11.png',
          '/p12.png',
        ],
        isDark: true,
      },
      {
        title: 'Hospitality Project in Dehradun',
        subtitle: 'Engineered Chevron Walnut',
        images: [
          '/p13.png',
          '/p14.jpg',
        ],
        isDark: false,
      },
      {
        title: 'Hospitality Project at Mumbai',
        subtitle: 'Engineered Flooring',
        images: [
          '/p15.png',
          '/p16.png',
        ],
        isDark: true,
      },
      {
        title: 'Private Residence in Mumbai',
        subtitle: 'Engineered Flooring',
        images: [
          '/p17.png',
          '/p18.png',
          '/p19.png',
          '/p20.png',
        ],
        isDark: false,
      },
      {
        title: 'Private Residence in Mumbai',
        subtitle: 'Engineered Flooring',
        images: [
          '/p21.png',
          '/p22.png',
        ],
        isDark: true,
      },
      {
        title: 'Commercial Project in Mumbai',
        subtitle: 'Laminate Flooring',
        images: [
          '/p23.png',
          '/p24.png',
          '/p25.png',
          '/p26.png',
        ],
        isDark: false,
      }, {
        title: 'Deck for a Private Villa in Alibagh',
        subtitle: '2500 sqft of C tech Deck',
        images: [
          '/p33.png',
          '/p34.png',
        ],
        isDark: true,
      },
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      {projects.map((project, index) => (
        <motion.section
          key={index}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className={`py-24 ${
            project.isDark ? 'bg-gray-900 text-[#e5e2e0]' : 'bg-gray-50'
          }`}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-light text-center mb-4"
            >
              {project.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-center mb-16 text-gray-500"
            >
              {project.subtitle}
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, imgIndex) => (
                <motion.img
                  key={imgIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: imgIndex * 0.2 }}
                  viewport={{ once: true }}
                  src={image}
                  alt={`Project view ${imgIndex + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </motion.section>
      ))}
    </>
  );
};

export default ProjectList;
