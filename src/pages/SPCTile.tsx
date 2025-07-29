import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SPCTile() {
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

  // Technical specifications
  const specifications = [
    { name: "Material", value: "Stone Plastic Composite Core" },
    { name: "Thickness", value: "4mm to 6mm" },
    { name: "Size", value: "300x300mm to 600x600mm" },
    { name: "Wear Layer", value: "0.3mm to 0.7mm" },
    { name: "Surface Finish", value: "Stone & Ceramic Texture" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Water Resistance", value: "100% Waterproof" },
    { name: "Warranty", value: "25 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Authentic Stone Look",
      description: "Realistic stone and ceramic textures with natural variations and depth",
      icon: "🪨"
    },
    {
      title: "Slip Resistant",
      description: "Textured surface provides excellent slip resistance for wet areas",
      icon: "🛡️"
    },
    {
      title: "Easy Maintenance",
      description: "Non-porous surface resists stains and requires minimal upkeep",
      icon: "✨"
    },
    {
      title: "Commercial Grade",
      description: "Heavy-duty construction suitable for high-traffic commercial applications",
      icon: "🏢"
    }
  ];

  // Design collections
  const tileCollections = [
    {
      name: "Natural Stone Series",
      description: "Realistic stone textures with authentic mineral patterns",
      image: "/SPC/SPC Tile/3178_T4411.jpg",
      characteristics: ["Natural Stone Texture", "Realistic Patterns", "Earth Tones", "Authentic Look"]
    },
    {
      name: "Modern Ceramic Collection",
      description: "Contemporary ceramic-inspired designs for modern spaces",
      image: "/SPC/SPC Tile/3192_T4444.jpg",
      characteristics: ["Ceramic Appearance", "Clean Lines", "Modern Style", "Versatile Design"]
    },
    {
      name: "Marble-Look Series",
      description: "Luxurious marble patterns with elegant veining",
      image: "/SPC/SPC Tile/3204_T4422i.jpg",
      characteristics: ["Marble Veining", "Luxury Appeal", "Premium Quality", "Sophisticated Finish"]
    },
    {
      name: "Travertine Collection",
      description: "Classic travertine patterns with natural fossil markings",
      image: "/SPC/SPC Tile/T4433.jpg",
      characteristics: ["Travertine Texture", "Natural Fossils", "Classic Appeal", "Timeless Design"]
    }
  ];

  // Applications
  const applications = [
    "Bathrooms & Wet Areas",
    "Kitchens & Backsplashes",
    "Entryways & Foyers",
    "Commercial Restrooms",
    "Retail Spaces",
    "Healthcare Facilities"
  ];

  // Benefits
  const benefits = [
    "100% Waterproof Construction",
    "Stain and Chemical Resistant",
    "Easy to Clean and Maintain",
    "Slip Resistant Surface",
    "Grout-Free Installation",
    "Temperature Stable"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/SPC/SPC Tile/3192_T4444.jpg" 
            alt="SPC Tile Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SPC Tile Flooring
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Stone and ceramic-look tiles with authentic textures and easy maintenance
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Luxury Stone & Ceramic Aesthetics</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                SPC Tile flooring brings the timeless beauty of natural stone and ceramic to your space with 
                the advanced performance of stone plastic composite technology. Our authentic textures and 
                realistic patterns create stunning floors that rival natural materials while offering superior 
                durability and waterproof performance.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Perfect for bathrooms, kitchens, and high-moisture areas, SPC Tile provides the elegant 
                appearance of stone or ceramic without the maintenance challenges, grout issues, or water 
                damage concerns of traditional tile installations.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With easy click-lock installation and slip-resistant surfaces, SPC Tile is ideal for both 
                residential and commercial applications where beauty, safety, and performance are essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tile Collections Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tile Collections</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {tileCollections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{collection.name}</h3>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">SPC Tile Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Tile/3178_T4411.jpg"
                  alt="Natural Stone SPC Tile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Tile/3192_T4444.jpg"
                  alt="Modern Ceramic SPC Tile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Tile/3204_T4422i.jpg"
                  alt="Marble-Look SPC Tile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Tile/T4433.jpg"
                  alt="Travertine SPC Tile"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Performance Benefits</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

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

      {/* Applications Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Ideal Applications</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md"
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Comparison Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose SPC Tile Over Traditional Tile?</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🚫</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">No Grout Required</h3>
                <p className="text-gray-600">Eliminate grout maintenance, staining, and mold issues</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Installation</h3>
                <p className="text-gray-600">Click-lock system installs faster than traditional tile</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact Resistant</h3>
                <p className="text-gray-600">Flexible core prevents cracking and chipping</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover the Beauty of SPC Tile</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our SPC Tile collection and find the perfect stone-look flooring for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/spc-flooring'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to SPC Flooring
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SPCTile;
