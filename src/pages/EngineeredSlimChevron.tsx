import { motion } from "framer-motion";

export function EngineeredSlimChevron() {
  // Gallery images for Engineered Slim Chevron with names
  const galleryImages = [
    {
      src: "/engg/engg1.jpg",
      name: "Oak Polar Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron.jpg",
      name: "Natural Walnut Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron2.jpg",
      name: "Honey Maple Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron3.jpg",
      name: "Rustic Hickory Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron4.jpg",
      name: "Charcoal Ash Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron5.jpg",
      name: "Vintage Pine Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron6.jpg",
      name: "Ebony Birch Chevron"
    }
  ];

  return (
    <div className="">
      {/* Header Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/slim-chev.webp" 
            alt="Engineered Slim Chevron"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineered Slim Chevron
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Elegant chevron pattern with premium engineered wood construction
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-80 bg-gray-200 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EngineeredSlimChevron;
