import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function TeakTraditional() {
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
    name: "Teak Traditional",
    collection: "Skyline Series",
    description: "Classic teak appearance with traditional wood grain texture and modern composite durability",
    colorCode: "#8B4513",
    features: [
      "12-Year Structural Warranty",
      "Traditional Wood Grain Texture",
      "Modern Composite Durability",
      "Architectural Grade Quality",
      "UV Protection",
      "Slip-Resistant Surface"
    ]
  };

  // Technical specifications
  const specifications = [
    { name: "Product Name", value: "Teak Traditional" },
    { name: "Collection", value: "Skyline Series" },
    { name: "Color", value: "Classic Teak Brown" },
    { name: "Finish", value: "Traditional Wood Grain" },
    { name: "Thickness", value: "20mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.3 kg/m²" },
    { name: "Warranty", value: "12 Years Structural" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Minimal Upkeep Required" },
    { name: "Slip Rating", value: "R10 (Wet & Dry)" },
  ];

  // Application areas
  const applications = [
    { name: "Traditional Decks", description: "Perfect for classic and traditional home styles" },
    { name: "Marine Applications", description: "Ideal for boat docks and waterfront properties" },
    { name: "Resort Decking", description: "Creates authentic luxury resort atmosphere" },
    { name: "Historic Properties", description: "Complements heritage and period architecture" },
    { name: "Garden Pavilions", description: "Elegant solution for outdoor garden structures" },
    { name: "Luxury Patios", description: "Sophisticated surface for high-end outdoor living" },
  ];

  // Traditional teak characteristics
  const teakCharacteristics = [
    { name: "Natural Grain Pattern", description: "Authentic wood grain texture that mimics real teak" },
    { name: "Rich Color Depth", description: "Deep, warm brown tones with natural variation" },
    { name: "Classic Appeal", description: "Timeless aesthetic that never goes out of style" },
    { name: "Heritage Look", description: "Evokes the luxury of traditional teak decking" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/skyline/teak-traditional.jpg" 
            alt="Teak Traditional Deck Flooring"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Teak Traditional
          </h1>
          <p className="text-xl text-white max-w-2xl mb-2">
            Skyline Series Architectural Grade Decking
          </p>
          <div className="flex items-center gap-2 text-white">
            <div 
              className="w-6 h-6 rounded-full border-2 border-white" 
              style={{ backgroundColor: productDetails.colorCode }}
            ></div>
            <span>Classic Teak Brown Finish</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Classic Teak Elegance</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Teak Traditional captures the timeless beauty of classic teak decking while delivering 
                  the advanced performance of modern composite materials. This stunning finish combines 
                  the rich, warm tones of natural teak with the durability and low maintenance of 
                  engineered composite construction.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Part of our premium Skyline Series, Teak Traditional features architectural-grade 
                  quality with traditional wood grain texture that provides both authentic appearance 
                  and enhanced slip resistance. The sophisticated finish is perfect for luxury outdoor 
                  spaces that demand both style and substance.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="font-semibold mb-3 text-amber-800">Key Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {productDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-amber-700">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/deck/skyline/teak-traditional.jpg" 
                  alt="Teak Traditional Close-up"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teak Characteristics Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-amber-800">Traditional Teak Characteristics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teakCharacteristics.map((char, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-amber-800">{char.name}</h3>
                <p className="text-gray-600">{char.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Teak Traditional Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/skyline/teak-traditional.jpg"
                  alt="Teak Traditional deck installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/skyline/teak-traditional.jpg"
                  alt="Teak Traditional texture detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/skyline/teak-traditional.jpg"
                  alt="Teak Traditional outdoor application"
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

      {/* Style Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Traditional vs. Architectural Finish</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img src="/deck/skyline/teak-traditional.jpg" alt="Teak Traditional" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-800">Traditional Finish</h3>
                    <p className="text-sm text-gray-600">Current Selection</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deep wood grain texture</li>
                  <li>• Enhanced slip resistance</li>
                  <li>• Classic appearance</li>
                  <li>• Traditional feel underfoot</li>
                  <li>• Suitable for all weather</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img src="/deck/skyline/teak-architectural.jpg" alt="Teak Architectural" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Architectural Finish</h3>
                    <p className="text-sm text-gray-600">Alternative Option</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Smooth, refined surface</li>
                  <li>• Contemporary appearance</li>
                  <li>• Sleek modern feel</li>
                  <li>• Easy to clean</li>
                  <li>• Minimal texture</li>
                </ul>
                <button 
                  onClick={() => window.location.href = '/deck-flooring/skyline/teak-architectural'} 
                  className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                >
                  View Architectural Finish
                </button>
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

      {/* Maintenance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Maintenance & Care</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-amber-800">12-Year Warranty</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Structural integrity protection</li>
                  <li>• Weather resistance coverage</li>
                  <li>• UV protection guarantee</li>
                  <li>• Manufacturing defect coverage</li>
                  <li>• Professional installation support</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-amber-800">Easy Care Instructions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular cleaning with soap and water</li>
                  <li>• Remove leaves and debris</li>
                  <li>• Gentle pressure washing when needed</li>
                  <li>• No staining or sealing required</li>
                  <li>• Avoid harsh chemicals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Classic Teak Elegance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and professional installation of Teak Traditional decking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-amber-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Get Quote Now
            </button>
            <button 
              onClick={() => window.location.href = '/deck-flooring/skyline'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-800 transition"
            >
              Back to Skyline Series
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeakTraditional;
