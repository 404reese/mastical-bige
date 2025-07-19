import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SPCFlooring() {
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
    { name: "Material", value: "Stone Plastic Composite (SPC)" },
    { name: "Thickness", value: "4mm to 6mm" },
    { name: "Width", value: "150mm to 230mm" },
    { name: "Length", value: "1200mm to 1800mm" },
    { name: "Wear Layer", value: "0.3mm to 0.7mm" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Water Resistance", value: "100% Waterproof" },
    { name: "Warranty", value: "15-25 Years Residential" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What is SPC flooring?",
      answer: "SPC (Stone Plastic Composite) flooring is a rigid core luxury vinyl plank that combines limestone powder with PVC to create an extremely durable, waterproof flooring solution perfect for any room in your home."
    },
    {
      question: "Is SPC flooring completely waterproof?",
      answer: "Yes, SPC flooring is 100% waterproof, making it ideal for kitchens, bathrooms, basements, and other moisture-prone areas where traditional hardwood cannot be installed."
    },
    {
      question: "How long does SPC flooring last?",
      answer: "With proper installation and care, quality SPC flooring can last 15-25 years or more in residential applications and 10-15 years in commercial settings."
    },
    {
      question: "Can SPC flooring be installed over existing floors?",
      answer: "Yes, SPC flooring can often be installed over existing hard surfaces like tile, concrete, or hardwood, making renovation projects faster and more cost-effective."
    },
    {
      question: "Is SPC flooring suitable for underfloor heating?",
      answer: "Yes, SPC flooring is compatible with radiant heating systems and provides excellent thermal conductivity for efficient heat transfer."
    }
  ];

  // SPC flooring main categories
  const spcMainCategories = [
    {
      name: "SPC Plank",
      description: "Realistic wood-look planks with superior durability and waterproof performance",
      image: "/SPC/SPC Plank/3213_P2277.jpg",
      link: "/spc-flooring/spc-plank",
      features: ["Wood-look Design", "Waterproof Core", "Click Lock Installation", "Scratch Resistant"]
    },
    {
      name: "SPC Tile",
      description: "Stone and ceramic-look tiles with authentic textures and easy maintenance",
      image: "/SPC/SPC Tile/3178_T4411.jpg",
      link: "/spc-flooring/spc-tile",
      features: ["Stone-look Design", "Easy Maintenance", "Slip Resistant", "Commercial Grade"]
    },
    {
      name: "SPC Herringbone",
      description: "Classic herringbone patterns combining traditional design with modern technology",
      image: "/SPC/SPC Herringbone/3395-H1111.jpg",
      link: "/spc-flooring/spc-herringbone",
      features: ["Classic Pattern", "Designer Appeal", "Premium Quality", "Architectural Grade"]
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/SPC/SPC Plank/3225_P2288.jpg" 
            alt="Premium SPC Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            SPC Flooring
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Stone Plastic Composite flooring - The perfect blend of beauty, durability, and waterproof performance
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Revolutionary Flooring Technology</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                SPC (Stone Plastic Composite) flooring represents the latest advancement in luxury vinyl technology, 
                combining the natural beauty of wood and stone with unmatched durability and 100% waterproof performance. 
                This innovative flooring solution is perfect for modern homes and commercial spaces.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our SPC collection features three distinct categories - Plank, Tile, and Herringbone - each designed 
                to deliver exceptional performance while maintaining authentic textures and realistic appearances that 
                rival natural materials.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With its rigid core construction and advanced wear layer technology, SPC flooring provides superior 
                resistance to scratches, dents, and moisture, making it the ideal choice for high-traffic areas, 
                kitchens, bathrooms, and commercial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">SPC Flooring Categories</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {spcMainCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => window.location.href = category.link}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                      Explore {category.name}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">SPC Flooring Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Plank/3223_P2233.jpg"
                  alt="SPC Plank Flooring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Tile/3192_T4444.jpg"
                  alt="SPC Tile Flooring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Herringbone/3405-H1144.jpg"
                  alt="SPC Herringbone Flooring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Plank/3258_P3311.jpg"
                  alt="SPC Premium Plank"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Herringbone/3428-H1166.jpg"
                  alt="SPC Designer Herringbone"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose SPC Flooring?</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Waterproof</h3>
                <p className="text-gray-600">Perfect for kitchens, bathrooms, basements, and any moisture-prone area</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ultra Durable</h3>
                <p className="text-gray-600">Rigid core construction resists dents, scratches, and heavy traffic</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Installation</h3>
                <p className="text-gray-600">Click-lock system allows for quick DIY or professional installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Installation Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Surface Preparation</h3>
                <p className="text-gray-600 text-sm">Clean and level the subfloor for optimal installation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Acclimation</h3>
                <p className="text-gray-600 text-sm">Allow flooring to acclimate to room temperature</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Click & Lock</h3>
                <p className="text-gray-600 text-sm">Install planks using the click-lock system</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Finishing</h3>
                <p className="text-gray-600 text-sm">Install trim and transitions for a professional finish</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-6 text-gray-700">Professional installation ensures optimal performance and warranty coverage.</p>
              <button 
                onClick={() => window.location.href = '/contact-us'} 
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Schedule Installation Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our premium SPC flooring options and discover the perfect solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
              View Sample Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SPCFlooring;
