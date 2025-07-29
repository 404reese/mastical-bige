import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function EGOEnrichWPCDecktile() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Elite Collection products (sub-subcategories)
  const eliteProducts = [
    {
      name: "Dark Brown",
      image: "/deck/EGO Enrich-WPC Decktile/Dark-Brown.png"
    },
    {
      name: "Dark Grey",
      image: "/deck/EGO Enrich-WPC Decktile/Dark-Grey.png"
    },
    {
      name: "Redwood",
      image: "/deck/EGO Enrich-WPC Decktile/Redwood.png"
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Thickness", value: "25mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.8 kg/m²" },
    { name: "Warranty", value: "25 Years Structural" },
    { name: "Finish", value: "Embossed Wood Grain" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Soap & Water Cleaning" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/EGO Enrich-WPC Decktile/Decking-03.jpg" 
            alt="Elite Collection Deck Flooring"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elite WPC Collection
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Premium composite decking with superior durability and timeless aesthetics
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Pinnacle of Outdoor Flooring</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Elite Collection represents the finest in composite deck flooring technology. Each board is 
                engineered with advanced polymer composites and premium wood fibers, creating a surface that 
                delivers exceptional durability while maintaining the natural beauty of wood.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With a comprehensive warranty and superior resistance to fading, staining, and scratching, 
                the Elite Collection is the ultimate choice for homeowners who demand nothing but the best for 
                their outdoor living spaces.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our Elite Collection features deep embossed wood grain textures that provide authentic wood 
                appearance with enhanced slip resistance and comfort underfoot, making it perfect for all 
                weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Available Colors & Finishes</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {eliteProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-center">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Elite Collection Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty covering structural integrity, staining, and fading</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Superior Durability</h3>
              <p className="text-gray-600">Advanced polymer composite construction for maximum longevity</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Fade Resistant</h3>
              <p className="text-gray-600">UV protection maintains color vibrancy year after year</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Slip Resistant</h3>
              <p className="text-gray-600">Textured surface provides excellent grip in wet conditions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
              <p className="text-gray-600">Easy cleaning with soap and water, no staining or sealing required</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Made from recycled materials with sustainable manufacturing practices</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-gray-200">
            <div className="divide-y divide-gray-200">
              {specifications.map((spec, index) => (
                <div key={index} className="flex">
                  <div className="bg-gray-50 py-4 px-6 font-medium w-1/3">{spec.name}</div>
                  <div className="py-4 px-6 w-2/3">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Elite Collection Quality</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover why the Elite Collection is the preferred choice for premium outdoor living spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Request Quote
            </button>
            <button 
              onClick={() => window.location.href = '/deck-flooring'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to Deck Flooring
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EGOEnrichWPCDecktile;
