import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm'; // Import the new form component

export const Contact = () => {
  return <motion.section
    id="contact"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="relative py-28 text-white overflow-hidden bg-[#0b0f17]"
  >
    {/* layered luxury background */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,#1c2535_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,#1a2330_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f17]/60 to-[#0b0f17]" />
      <div className="absolute -inset-x-10 top-1/3 h-px bg-gradient-to-r from-transparent via-[#fed3b1]/10 to-transparent" />
      <div className="absolute -inset-x-10 bottom-20 h-px bg-gradient-to-r from-transparent via-[#fed3b1]/10 to-transparent" />
    </div>
    {/* <TextReveal>Change the way you live with The Big E.</TextReveal> */}
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <div className="inline-block relative">
          <span className="block text-sm tracking-[0.35em] text-[#fed3b1]/70 font-medium mb-3">THE BIG E RETAIL</span>
          <h2 className="text-4xl sm:text-5xl font-semibold font-inria leading-tight bg-gradient-to-b from-neutral-50 to-neutral-300/70 text-transparent bg-clip-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Connect With Excellence
          </h2>
          <div className="absolute -inset-2 rounded-xl border border-white/5" />
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center max-w-5xl mx-auto font-hanken mt-4 relative z-10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center group"
        >
          <h4 className="text-[15px] uppercase tracking-[0.2em] text-[#fed3b1]/80 font-medium mb-4">Email</h4>
          <li className="flex items-center justify-center text-neutral-400 group-hover:text-neutral-200 transition-colors">
            <Mail className="h-5 w-5 mr-2 text-[#fed3b1]/80 group-hover:text-[#fed3b1] transition-colors" />
            hello@thebigeretail.com
          </li>
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center group"
        >
          <h4 className="text-[15px] uppercase tracking-[0.2em] text-[#fed3b1]/80 font-medium mb-4">Phone</h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center text-neutral-400 group-hover:text-neutral-200 transition-colors">
              <Phone className="h-5 w-5 mr-2 text-[#fed3b1]/80 group-hover:text-[#fed3b1] transition-colors" />
              (+91) 89994 53635
            </li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center group"
        >
          <h4 className="text-[15px] uppercase tracking-[0.2em] text-[#fed3b1]/80 font-medium mb-4">Address</h4>
          <ul className="space-y-2">
            <a href="https://maps.app.goo.gl/YiX6oKkGbp1Ev2C29" target="_blank" rel="noopener noreferrer" className="group inline-block">
            <li className="flex items-center justify-center text-neutral-400 group-hover:text-neutral-200 transition-colors">
             
              33-34, Laxmi Woolen Mills,
Mahalaxmi (W), Mumbai, 400011
            </li></a>
          </ul>
        </motion.div>
            {/* <a href="#" aria-label="Facebook" className="group/icon relative">
              <span className="absolute -inset-2 rounded-full bg-[#fed3b1]/0 group-hover/icon:bg-[#fed3b1]/10 transition" />
              <Facebook className="h-6 w-6 text-neutral-400 group-hover/icon:text-[#fed3b1] transition" />
            </a>
            <a href="#" aria-label="Twitter" className="group/icon relative">
              <span className="absolute -inset-2 rounded-full bg-[#fed3b1]/0 group-hover/icon:bg-[#fed3b1]/10 transition" />
              <Twitter className="h-6 w-6 text-neutral-400 group-hover/icon:text-[#fed3b1] transition" />
            </a>
            <a href="#" aria-label="Instagram" className="group/icon relative">
              <span className="absolute -inset-2 rounded-full bg-[#fed3b1]/0 group-hover/icon:bg-[#fed3b1]/10 transition" />
              <Instagram className="h-6 w-6 text-neutral-400 group-hover/icon:text-[#fed3b1] transition" />
            </a> */}
          
      </div>

      {/* Add the Contact Form */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto mt-14"
      >
        <div className="rounded-2xl bg-[#101823]/95 px-8 py-12 border border-white/5 shadow-lg shadow-black/40">
          <h3 className="text-3xl font-semibold text-center mb-8 font-inria tracking-wide text-[#fed3b1]">
            Send Us A Message
          </h3>
          <ContactForm />
        </div>
      </motion.div>
      
      {/* <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <h4 className="text-[13px] uppercase tracking-[0.28em] text-[#fed3b1]/90 font-medium mb-6">SOCIAL</h4>
        <div className="max-w-3xl mx-auto">
          <a href="https://maps.app.goo.gl/YiX6oKkGbp1Ev2C29" target="_blank" rel="noopener noreferrer" className="group inline-block">
            <div className="flex items-start justify-center text-[15px] leading-relaxed text-white group-hover:text-neutral-100 transition-colors duration-300 bg-[#101823]/50 rounded-lg p-6 border border-white/10 hover:border-[#fed3b1]/30">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#fed3b1] group-hover:text-[#fed3b1] transition-colors flex-shrink-0" />
              <span className="text-left">
                <span className="text-[#fed3b1] font-semibold text-lg block mb-1">THE BIG E RETAIL</span>
                <span className="text-neutral-200 block">33-34, Laxmi Woolen Mills, Shakti Mill Lane,</span>
                <span className="text-neutral-200 block">Mahalaxmi (W), Mumbai, Maharashtra 400011</span>
              </span>
            </div>
          </a>
        </div>
      </motion.div> */}

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-14 relative z-10"
      >
        <div className="mx-auto w-full max-w-md h-px mb-6 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-[11px] tracking-wider text-neutral-400">&copy; {new Date().getFullYear()} THE BIG E RETAIL. All rights reserved.</p>
        <p className='mt-2 text-[11px] tracking-wide text-neutral-400'>Website crafted by <a className='text-[#fed3b1] hover:brightness-110 transition font-medium' href="https://mastical.com" target="_blank" rel="noopener noreferrer">MASTICAL</a></p>
      </motion.div>
    </motion.div>
  </motion.section>;
};
