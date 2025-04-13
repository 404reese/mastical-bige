import React from 'react';
import { motion } from "framer-motion";
import { BoxReveal } from "@/components/magicui/box-reveal";
export const ProjectHero = () => {
  return <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="prodvid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <div className="flex justify-center mb-4">
            <motion.img
              className='h-32 w-auto'
              src="logo.png"
              alt=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            />
          </div>
          <div className="flex justify-center">
            <BoxReveal boxColor={"#e5e2e0"} duration={0.5} delay={0.2}>
              <p className="font-serif text-6xl md:text-8xl font-light">
              EXPERIENCE THE
              </p>
            </BoxReveal>
          </div>
          <div className="flex justify-center">
            <BoxReveal boxColor={"#e5e2e0"} duration={0.5} delay={0.4}>
              <p className="font-serif text-6xl md:text-8xl font-light">
              LUXURY TOUCH
              </p>
            </BoxReveal>
          </div>
          {/* <h1 className="font-serif text-6xl md:text-8xl font-light text-[#e5e2e0] mb-8">
            FLOORS THAT
            
            <br />
            FEEL GOOD
          </h1> */}
          <motion.button
            className="text-[#e5e2e0] border border-[#e5e2e0] px-8 py-3 hover:bg-[#e5e2e0] hover:text-black transition-colors mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            TALK TO AN EXPERT
          </motion.button>
        </div>
      </div>
    </section>;
};


export default ProjectHero;
