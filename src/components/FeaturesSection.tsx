import { motion } from 'framer-motion';
import { Users, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: 'Expert Team',
    description: 'Our experienced professionals bring your vision to life.',
  },
  {
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality.',
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: 'Quality Guaranteed',
    description: 'We stand behind our work with solid guarantees.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative h-[500px]">
            <img
              src="/hero.jpg"
              alt="Hero image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right column - Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-inria text-right">Our Story</h2>
            <p className="text-gray-600 mb-8 font-hanken text-justify text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab illum, laboriosam doloremque repellendus quasi eaque odit eius, minima quo vel praesentium quisquam! Quae, explicabo!
            </p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <img
                src="/b2.png"
                alt="Additional feature image"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
