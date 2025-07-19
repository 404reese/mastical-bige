import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SkylineSeries() {
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

  // Skyline products (sub-subcategories)
  const skylineProducts = [
    {
      name: "Teak Traditional",
      image: "/deck/SYLVANIX-DECKING/skyline/teak-traditional.jpg"
    },
    {
      name: "Teak Architectural",
      image: "/deck/SYLVANIX-DECKING/skyline/teak-architectural.jpg"
    },
    {
      name: "Graphite Traditional",
      image: "/deck/SYLVANIX-DECKING/skyline/graphite-traditional.jpg"
    },
    {
      name: "Graphite Architectural",
      image: "/deck/SYLVANIX-DECKING/skyline/graphite-architectural.jpg"
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Thickness", value: "20mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.3 kg/m²" },
    { name: "Warranty", value: "12 Years Structural" },
    { name: "Finish", value: "Architectural Grade" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Minimal Upkeep Required" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/SYLVANIX-DECKING/skyline/teak-traditional.jpg" 
            alt="Skyline Series Deck Flooring"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skyline Series
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Contemporary designs with modern architectural appeal
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Modern Design Meets Architectural Excellence</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Skyline Series represents the cutting edge of contemporary deck design. With clean lines, 
                sophisticated finishes, and architectural-grade quality, these boards are perfect for modern 
                homes and commercial spaces that demand both style and substance.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Featuring both traditional and architectural finish options, the Skyline Series offers design 
                flexibility while maintaining consistent quality and performance. The collection includes rich 
                teak tones and contemporary graphite colors to complement any architectural style.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Built with advanced composite technology, Skyline Series boards deliver exceptional durability 
                and weather resistance while requiring minimal maintenance, making them ideal for busy modern lifestyles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Available Colors & Finishes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skylineProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-center">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Skyline Series Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {skylineProducts.map((product, index) => (
                <div key={index} className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Skyline Series Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Architectural Grade</h3>
              <p className="text-gray-600">Premium quality suitable for commercial and residential applications</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-gray-600">Contemporary aesthetics that complement modern architectural styles</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Dual Finish Options</h3>
              <p className="text-gray-600">Choose between traditional and architectural finishes for each color</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Weather Resistant</h3>
              <p className="text-gray-600">Engineered to withstand harsh weather conditions and UV exposure</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
              <p className="text-gray-600">Minimal upkeep required with simple cleaning routines</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Easy Installation</h3>
              <p className="text-gray-600">Hidden fastening system for clean, professional results</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Color & Finish Comparison</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Teak Collection</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img src="/deck/skyline/teak-traditional.jpg" alt="Teak Traditional" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Traditional Finish</p>
                      <p className="text-sm text-gray-600">Classic wood grain texture</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img src="/deck/skyline/teak-architectural.jpg" alt="Teak Architectural" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Architectural Finish</p>
                      <p className="text-sm text-gray-600">Contemporary smooth texture</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Graphite Collection</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img src="/deck/skyline/graphite-traditional.jpg" alt="Graphite Traditional" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Traditional Finish</p>
                      <p className="text-sm text-gray-600">Wood grain with modern color</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img src="/deck/skyline/graphite-architectural.jpg" alt="Graphite Architectural" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Architectural Finish</p>
                      <p className="text-sm text-gray-600">Sleek contemporary surface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
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
          <h2 className="text-3xl font-bold mb-6">Experience Skyline Series Innovation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover contemporary deck design with the architectural-grade Skyline Series.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Request Quote
            </button>
            <button 
              onClick={() => window.location.href = '/deck-flooring/sylvanix-decking'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to SYLVANIX-DECKING
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkylineSeries;
