import { motion } from "framer-motion";

export function EnggPlank() {
  // Gallery images for Engg Plank
  const galleryImages = [
    { src: "/engg/engg-plank1.jpg", name: "Engg Plank 1" },
    { src: "/engg/engg-plank2.jpg", name: "Engg Plank 2" },
    { src: "/engg/engg-plank3.jpg", name: "Engg Plank 3" },
    { src: "/engg/engg-plank4.jpg", name: "Engg Plank 4" },
    { src: "/engg/engg-plank5.jpg", name: "Engg Plank 5" },
    { src: "/engg/engg-plank6.jpg", name: "Engg Plank 6" },
    { src: "/engg/engg-plank7.jpg", name: "Engg Plank 7" },
    { src: "/engg/engg-plank8.jpg", name: "Engg Plank 8" },
    { src: "/engg/engg-plank9.jpg", name: "Engg Plank 9" },
    { src: "/engg/engg-plank10.jpg", name: "Engg Plank 10" },
    { src: "/engg/engg-plank11.jpg", name: "Engg Plank 11" },
    { src: "/engg/engg-plank12.jpg", name: "Engg Plank 12" },
    { src: "/engg/engg-plank13.jpg", name: "Engg Plank 13" },
    { src: "/engg/engg-plank14.jpg", name: "Engg Plank 14" },
    { src: "/engg/engg-plank15.jpg", name: "Engg Plank 15" },
    { src: "/engg/engg-plank16.jpg", name: "Engg Plank 16" },
    { src: "/engg/engg-plank17.jpg", name: "Engg Plank 17" },
    { src: "/engg/engg-plank18.jpg", name: "Engg Plank 18" },
    { src: "/engg/engg-plank19.jpg", name: "Engg Plank 19" },
    { src: "/engg/engg-plank20.jpg", name: "Engg Plank 20" },
    { src: "/engg/engg-plank21.jpg", name: "Engg Plank 21" },
    { src: "/engg/engg-plank22.jpg", name: "Engg Plank 22" },
    { src: "/engg/engg-plank23.jpg", name: "Engg Plank 23" },
    { src: "/engg/engg-plank24.jpg", name: "Engg Plank 24" },
    { src: "/engg/engg-plank25.jpg", name: "Engg Plank 25" },
    { src: "/engg/engg-plank26.jpg", name: "Engg Plank 26" },
    { src: "/engg/engg-plank27.jpg", name: "Engg Plank 27" }
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
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-80 bg-gray-200 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {image.name}
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

export default EnggPlank;
