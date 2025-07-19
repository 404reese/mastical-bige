import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function EliteEssential() {
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

  // Elite Essential products (sub-subcategories)
  const essentialProducts = [
    {
      name: "Tropical Gold",
      image: "/deck/SYLVANIX-DECKING/elite-essential/tropical-gold.jpg"
    },
    {
      name: "Harvest Brown",
      image: "/deck/SYLVANIX-DECKING/elite-essential/harvest-brown.jpg"
    },
    {
      name: "Chocolate",
      image: "/deck/SYLVANIX-DECKING/elite-essential/chocolate.jpg"
    },
    {
      name: "Mesa Brown",
      image: "/deck/SYLVANIX-DECKING/elite-essential/mesa-brown.jpg"
    },
    {
      name: "Aspen Grey",
      image: "/deck/SYLVANIX-DECKING/elite-essential/aspen-grey.jpg"
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Thickness", value: "23mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.5 kg/m²" },
    { name: "Warranty", value: "15 Years Structural" },
    { name: "Finish", value: "Wood Grain Texture" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Maintenance", value: "Simple Soap & Water" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/SYLVANIX-DECKING/elite-essential/tropical-gold.jpg" 
            alt="Elite Essential Deck Flooring"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elite Essential
          </h1>
          <p className="text-xl text-white max-w-2xl">
            High-quality composite decking with excellent performance and value
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect Balance of Quality and Value</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Elite Essential collection offers the perfect combination of quality, durability, and affordability. 
                Engineered with premium composite materials, these boards provide exceptional performance while 
                maintaining an attractive price point for budget-conscious homeowners.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With a solid 15-year warranty and superior weather resistance, Elite Essential delivers long-lasting 
                beauty and functionality. The collection features authentic wood grain textures and rich color options 
                that complement any outdoor design aesthetic.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Made from recycled materials with sustainable manufacturing practices, Elite Essential is an 
                environmentally responsible choice that doesn't compromise on quality or appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Available Colors & Finishes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {essentialProducts.map((product, index) => (
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
                <div className="p-6">
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
          <h2 className="text-3xl font-bold mb-10 text-center">Elite Essential Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {essentialProducts.map((product, index) => (
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
          <h2 className="text-3xl font-bold mb-10 text-center">Elite Essential Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">15-Year Warranty</h3>
              <p className="text-gray-600">Solid warranty protection for structural integrity and performance</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Weather Resistant</h3>
              <p className="text-gray-600">Engineered to withstand harsh outdoor conditions year-round</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Easy Installation</h3>
              <p className="text-gray-600">Hidden clip system for quick and secure installation</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
              <p className="text-gray-600">Simple cleaning with soap and water, no staining required</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Made from recycled materials with sustainable practices</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Great Value</h3>
              <p className="text-gray-600">Premium quality at an affordable price point</p>
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
          <h2 className="text-3xl font-bold mb-6">Experience Elite Essential Quality</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the perfect balance of quality and value with our Elite Essential collection.
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

export default EliteEssential;
