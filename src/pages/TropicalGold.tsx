import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function TropicalGold() {
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

  // Product details
  const productDetails = {
    name: "Tropical Gold",
    collection: "Elite Essential",
    description: "Warm golden tones with natural wood grain finish that brings tropical warmth to your outdoor space",
    colorCode: "#D4A574",
    features: [
      "15-Year Structural Warranty",
      "Natural Wood Grain Texture",
      "Weather Resistant Finish",
      "UV Protection",
      "Slip-Resistant Surface",
      "Eco-Friendly Materials"
    ]
  };

  // Technical specifications
  const specifications = [
    { name: "Product Name", value: "Tropical Gold" },
    { name: "Collection", value: "Elite Essential" },
    { name: "Color", value: "Warm Golden Brown" },
    { name: "Thickness", value: "23mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.5 kg/m²" },
    { name: "Warranty", value: "15 Years Structural" },
    { name: "Finish", value: "Wood Grain Texture" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Maintenance", value: "Simple Soap & Water" },
    { name: "Slip Rating", value: "R10 (Wet & Dry)" },
  ];

  // Application areas
  const applications = [
    { name: "Tropical Themed Decks", description: "Perfect for creating warm, inviting outdoor spaces" },
    { name: "Pool Decks", description: "Slip-resistant surface ideal for poolside areas" },
    { name: "Garden Decks", description: "Complements natural landscaping beautifully" },
    { name: "Entertainment Areas", description: "Creates welcoming atmosphere for outdoor gatherings" },
    { name: "Spa Decks", description: "Relaxing golden tones for wellness areas" },
    { name: "Resort Style Patios", description: "Brings vacation vibes to your backyard" },
  ];

  // Color inspiration
  const colorInspiration = [
    { name: "Sunset Vibes", description: "Captures the warm glow of golden hour sunsets" },
    { name: "Natural Honey", description: "Mimics the rich color of natural honey" },
    { name: "Tropical Warmth", description: "Evokes the feeling of tropical destinations" },
    { name: "Autumn Leaves", description: "Reflects the golden tones of fall foliage" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/elite-essential/tropical-gold.jpg" 
            alt="Tropical Gold Deck Flooring"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tropical Gold
          </h1>
          <p className="text-xl text-white max-w-2xl mb-2">
            Elite Essential Composite Decking
          </p>
          <div className="flex items-center gap-2 text-white">
            <div 
              className="w-6 h-6 rounded-full border-2 border-white" 
              style={{ backgroundColor: productDetails.colorCode }}
            ></div>
            <span>Warm Golden Brown Finish</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Tropical Warmth & Natural Beauty</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Tropical Gold brings the warmth of golden sunsets and tropical destinations to your outdoor 
                  living space. This beautiful composite decking combines warm golden tones with authentic 
                  wood grain textures to create an inviting atmosphere that feels both luxurious and natural.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Part of our Elite Essential collection, Tropical Gold offers exceptional value without 
                  compromising on quality. The weather-resistant finish and UV protection ensure your deck 
                  maintains its beautiful golden appearance for years to come.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 text-amber-800">Key Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {productDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-amber-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/deck/elite-essential/tropical-gold.jpg" 
                  alt="Tropical Gold Close-up"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Inspiration Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-amber-800">Color Inspiration</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {colorInspiration.map((inspiration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-amber-800">{inspiration.name}</h3>
                <p className="text-gray-600">{inspiration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Tropical Gold Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-essential/tropical-gold.jpg"
                  alt="Tropical Gold deck installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-essential/tropical-gold.jpg"
                  alt="Tropical Gold texture detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-essential/tropical-gold.jpg"
                  alt="Tropical Gold outdoor application"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Perfect Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-amber-800">{app.name}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Compatibility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Design & Color Compatibility</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-800">Complementary Colors</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600"></div>
                      <span>Deep Green Landscaping</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-900"></div>
                      <span>Rich Brown Accents</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-800"></div>
                      <span>Terracotta Features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-600"></div>
                      <span>Warm Orange Accents</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-800">Design Styles</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Tropical & Resort Style</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Mediterranean</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Rustic & Natural</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Traditional Warmth</span>
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
                  <div className="bg-amber-50 py-4 px-6 font-medium w-1/3 text-amber-800">{spec.name}</div>
                  <div className="py-4 px-6 w-2/3">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Care Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Maintenance & Care</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-amber-800">15-Year Warranty</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Structural integrity coverage</li>
                  <li>• Weather resistance guarantee</li>
                  <li>• UV protection assurance</li>
                  <li>• Manufacturing defect coverage</li>
                  <li>• Color stability protection</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-amber-800">Simple Care Instructions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clean with soap and water</li>
                  <li>• Remove debris regularly</li>
                  <li>• Gentle power washing when needed</li>
                  <li>• No staining or sealing required</li>
                  <li>• Avoid abrasive cleaners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bring Tropical Warmth to Your Outdoor Space</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and professional installation of Tropical Gold decking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Get Quote Now
            </button>
            <button 
              onClick={() => window.location.href = '/deck-flooring/elite-essential'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-600 transition"
            >
              Back to Elite Essential
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TropicalGold;
