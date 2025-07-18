import { motion } from "framer-motion";

export function EnggPlank() {
  // Gallery images for Engg Plank
  const galleryImages = [
    "/engg/engg-plank1.jpg",
    "/engg/engg-plank2.jpg",
    "/engg/engg-plank3.jpg",
    "/engg/engg-plank4.jpg",
    "/engg/engg-plank5.jpg",
    "/engg/engg-plank6.jpg",
    "/engg/engg-plank7.jpg",
    "/engg/engg-plank8.jpg",
    "/engg/engg-plank9.jpg",
    "/engg/engg-plank10.jpg",
    "/engg/engg-plank11.jpg",
    "/engg/engg-plank12.jpg",
    "/engg/engg-plank13.jpg",
    "/engg/engg-plank14.jpg",
    "/engg/engg-plank15.jpg",
    "/engg/engg-plank16.jpg",
    "/engg/engg-plank17.jpg",
    "/engg/engg-plank18.jpg",
    "/engg/engg-plank19.jpg",
    "/engg/engg-plank20.jpg",
    "/engg/engg-plank21.jpg",
    "/engg/engg-plank22.jpg",
    "/engg/engg-plank23.jpg",
    "/engg/engg-plank24.jpg",
    "/engg/engg-plank25.jpg",
    "/engg/engg-plank26.jpg",
    "/engg/engg-plank27.jpg"
  ];

  return (
    <div className="">
      {/* Header Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/engg/engg2.jpg" 
            alt="Engg Plank"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engg Plank
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Classic plank design with engineered wood durability
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
                  alt={`Engg Plank ${index + 1}`}
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

export default EnggPlank;
