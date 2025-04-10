import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-2xl font-bold italic mb-8">
        THE BIG E RETAIL
        </div>
        <div className='text-center text-4xl font-semibold mb-2 font-inria'>
          Connect with Us
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto font-hanken mt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Email Address</h4>
            <li className="flex items-center justify-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                hello@thebigeretail.com
              </li>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Phone Number</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                (+91) 89994 53635
              </li>
            </ul>
          </div>
          <div className="text-center">
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
          </div>
        </div>
        <div>
        <div className="text-center mt-8">
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                The Big E Retail, 33-34, Laxmi Woolen Mills, Shakti Mill Lane, Mahalaxmi (w), Mumbai, Maharashtra 400011
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-12">
          <p>&copy; {new Date().getFullYear()} THE BIG E RETAIL. All rights reserved.</p>
          <p className='mt-1 text-sm'>Website developed by <a className='hover:underline' href="https://mastical.com">MASTICAL</a></p>
        </div>
      </div>
    </section>;
};