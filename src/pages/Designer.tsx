import { motion } from "framer-motion";

export function Designer() {
  // Gallery images for Designer with names
  const galleryImages = [
    { image: "/engg/designer/designer1.jpg", name: "Walnut Flower Marble" },
    { image: "/engg/designer/designer2.jpg", name: "Walnut Flower Plain" },
    { image: "/engg/designer/designer3.jpg", name: "Oak Braid" },
    { image: "/engg/designer/designer4.jpg", name: "Walnut Leaf" },
    { image: "/engg/designer/designer5.jpg", name: "Oak Fishscal" },
    { image: "/engg/designer/designer6.jpg", name: "Oak Lotus" },
    { image: "/engg/designer/designer7.jpg", name: "Walnut Arrow Brass" },
    { image: "/engg/designer/designer8.jpg", name: "Walnut Flower Brass" }
  ];

  return (
    <div className="">
      {/* Header Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/engg/engg5.jpg" 
            alt="Designer"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Designer
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Premium designer patterns with engineered wood excellence
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
                className="text-center"
              >
                <div className="h-80 rounded-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Designer;
