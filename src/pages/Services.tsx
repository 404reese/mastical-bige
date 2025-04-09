import { motion } from 'framer-motion';
import { Home, Paintbrush, Sofa, Lightbulb, Ruler, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-indigo-600" />,
      title: 'Interior Design',
      description: 'Complete interior design solutions for residential and commercial spaces.',
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-indigo-600" />,
      title: 'Color Consultation',
      description: 'Expert color schemes and palette selection for your space.',
    },
    {
      icon: <Sofa className="h-8 w-8 text-indigo-600" />,
      title: 'Furniture Selection',
      description: 'Curated furniture choices that match your style and budget.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions to enhance your space.',
    },
    {
      icon: <Ruler className="h-8 w-8 text-indigo-600" />,
      title: 'Space Planning',
      description: 'Optimal layout design for maximum functionality.',
    },
    {
      icon: <Camera className="h-8 w-8 text-indigo-600" />,
      title: '3D Visualization',
      description: 'Realistic 3D renderings of your future space.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure the best results for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting and requirements gathering' },
              { step: '02', title: 'Design', description: 'Concept development and design proposals' },
              { step: '03', title: 'Implementation', description: 'Executing the approved design plan' },
              { step: '04', title: 'Review', description: 'Final inspection and client feedback' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;