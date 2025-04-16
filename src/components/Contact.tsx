import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { TextReveal } from "@/components/magicui/text-reveal2";
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm'; // Import the new form component

export const Contact = () => {
  return <motion.section 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="py-24 bg-gray-50"
  >
    <TextReveal>Change the way you live with The Big E.</TextReveal>
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
        className="text-center text-2xl font-bold italic mb-8"
      >
        THE BIG E RETAIL
      </motion.div>
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-center text-4xl font-semibold mb-2 font-inria'
      >
        Connect with Us
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto font-hanken mt-8">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-lg font-semibold mb-4">Email Address</h4>
          <li className="flex items-center justify-center text-gray-400">
            <Mail className="h-5 w-5 mr-2" />
            hello@thebigeretail.com
          </li>
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-lg font-semibold mb-4">Phone Number</h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center text-gray-400">
              <Phone className="h-5 w-5 mr-2" />
              (+91) 89994 53635
            </li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Add the Contact Form */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }} // Adjust delay if needed
        viewport={{ once: true }}
        className="max-w-xl mx-auto mt-12" // Added margin-top and max-width
      >
        <h3 className="text-2xl font-semibold text-center mb-6">Send us a Message</h3>
        <ContactForm />
      </motion.div>
      
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }} // Incremented delay
        viewport={{ once: true }}
        className="text-center mt-12" // Increased margin-top
      >
        <h4 className="text-lg font-semibold mb-2">Address</h4>
        <ul className="space-y-2">
          <a href="https://maps.app.goo.gl/YiX6oKkGbp1Ev2C29" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <li className="flex items-center justify-center text-gray-400">
              <MapPin className="h-5 w-5 mr-2" />
              The Big E Retail, 33-34, Laxmi Woolen Mills, Shakti Mill Lane, Mahalaxmi (w), Mumbai, Maharashtra 400011
            </li>
          </a>
        </ul>
      </motion.div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }} // Incremented delay
        viewport={{ once: true }}
        className="text-center text-gray-400 mt-12"
      >
        <p>&copy; {new Date().getFullYear()} THE BIG E RETAIL. All rights reserved.</p>
        <p className='mt-1 text-sm'>Website developed by <a className='hover:underline' href="https://mastical.com">MASTICAL</a></p>
      </motion.div>
    </motion.div>
  </motion.section>;
};
