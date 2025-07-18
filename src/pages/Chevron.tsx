import { motion } from "framer-motion";

export function Chevron() {
  // Gallery images for Chevron
  const galleryImages = [
    "/engg/slim/chevron1.jpg",
    "/engg/chevron/chevron2.jpg",
    "/engg/chevron/chevron3.jpg",
    "/engg/chevron/chevron4.jpg",
    "/engg/chevron/chevron5.jpg",
    "/engg/chevron/chevron6.jpg",
    "/engg/chevron/chevron7.jpg"
  ];

  return (
    <div className="">
      {/* Header Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/engg/engg6.jpg" 
            alt="Chevron"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Chevron
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Sophisticated chevron pattern with engineered wood performance
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-80 rounded-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Chevron ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chevron;
