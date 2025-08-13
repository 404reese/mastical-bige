import { motion } from "framer-motion";

export function EnggPlank() {
  // Gallery images for Engg Plank
  const galleryImages = [
    { src: "/engg/engg-plank1.jpg", name: "Ash Grey" },
    { src: "/engg/engg-plank2.jpg", name: "Burma Teak" },
    { src: "/engg/engg-plank3.jpg", name: "Oak Barn Dark Grey" },
    { src: "/engg/engg-plank4.jpg", name: "Oak Barn Coffee Grey" },
    { src: "/engg/engg-plank5.jpg", name: "Oak Barn Blown" },
    { src: "/engg/engg-plank6.jpg", name: "Oak Barn Grey" },
    { src: "/engg/engg-plank7.jpg", name: "Oak Barn Caramel" },
    { src: "/engg/engg-plank8.jpg", name: "Oak Natural" },
    { src: "/engg/engg-plank9.jpg", name: "Oak Castle Grey" },
    { src: "/engg/engg-plank10.jpg", name: "Oak Tabacco" },
    { src: "/engg/engg-plank11.jpg", name: "Oak Retro White" },
    { src: "/engg/engg-plank12.jpg", name: "Merbac" },
    { src: "/engg/engg-plank13.jpg", name: "Wooden American Walnut" },
    { src: "/engg/engg-plank14.jpg", name: "Burma Teak" },
    { src: "/engg/engg-plank15.jpg", name: "Dark Chocolate" },
    { src: "/engg/engg-plank16.jpg", name: "Kayakuku" },
    { src: "/engg/engg-plank17.jpg", name: "Oak Life Carbonized" },
    { src: "/engg/engg-plank18.jpg", name: "Oak Filed" },
    { src: "/engg/engg-plank19.jpg", name: "Oak Caramel" },
    { src: "/engg/engg-plank20.jpg", name: "Oak Wheat" },
    { src: "/engg/engg-plank21.jpg", name: "American Walnut" },
    { src: "/engg/engg-plank22.jpg", name: "Oak Snow White" },
    { src: "/engg/engg-plank23.jpg", name: "Ash Dark Carbonized" },
    { src: "/engg/engg-plank24.jpg", name: "Ash Light Carbonized" },
    { src: "/engg/engg-plank25.jpg", name: "Ash Coffee" },
    { src: "/engg/engg-plank26.jpg", name: "Ash B1" },
    { src: "/engg/engg-plank27.jpg", name: "Ash Light Clean" },
    // { src: "/engg/slim/slim1.webp", name: "Engg Slim 1" },
    // { src: "/engg/slim/slim2.png", name: "Engg Slim 2" },
    // { src: "/engg/slim/slim3.jpg", name: "Engg Slim 3" },
    // { src: "/engg/slim/slim4.jpg", name: "Engg Slim 4" },
    // { src: "/engg/slim/slim5.jpg", name: "Engg Slim 5" },
    // { src: "/engg/slim/slim6.jpg", name: "Engg Slim 6" },
    // { src: "/engg/slim/slim7.jpg", name: "Engg Slim 7" },
    // { src: "/engg/slim/slim8.jpg", name: "Engg Slim 8" },
    // { src: "/engg/slim/slim9.jpg", name: "Engg Slim 9" },
    // { src: "/engg/slim/slim10.jpg", name: "Engg Slim 10" },
    // { src: "/engg/slim/slim11.jpg", name: "Engg Slim 11" },
    // { src: "/engg/slim/slim12.jpg", name: "Engg Slim 12" },
    // { src: "/engg/slim/slim13.jpg", name: "Engg Slim 13" },
    // { src: "/engg/slim/slim14.jpg", name: "Engg Slim 14" },
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
