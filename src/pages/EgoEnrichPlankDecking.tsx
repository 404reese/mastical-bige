import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function EgoEnrichPlankDecking() {
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

  // EGO Enrich Plank Decking subcategories/applications
  const egoSubcategories = [
    {
      name: "Balcony Decking",
      description: "Perfect for residential and commercial balcony spaces",
      image: "/deck/EGO Enrich Plank Decking/Balcony.jpg",
      features: ["Weather Resistant", "Slip Resistant", "Easy Installation", "Low Maintenance"],
      applications: ["Residential Balconies", "Hotel Balconies", "Apartment Terraces"]
    },
    {
      name: "Bathroom Decking",
      description: "Moisture-resistant decking ideal for bathroom applications",
      image: "/deck/EGO Enrich Plank Decking/Bathroom.jpg",
      features: ["100% Waterproof", "Anti-Slip Surface", "Mold Resistant", "Easy to Clean"],
      applications: ["Spa Bathrooms", "Pool Bathrooms", "Luxury Bathrooms"]
    },
    {
      name: "Outdoor Steps",
      description: "Durable and safe decking for outdoor staircases",
      image: "/deck/EGO Enrich Plank Decking/Outdoor-Steps.jpg",
      features: ["High Durability", "Non-Slip Surface", "Weather Resistant", "Easy Installation"],
      applications: ["Garden Steps", "Patio Steps", "Commercial Entrances"]
    },
    {
      name: "Pool Side Decking",
      description: "Premium decking designed for pool areas and wet environments",
      image: "/deck/EGO Enrich Plank Decking/Pool-Side.jpg",
      features: ["Chlorine Resistant", "Non-Slip", "UV Protected", "Fast Drying"],
      applications: ["Swimming Pools", "Spa Areas", "Water Features"]
    },
    {
      name: "Terraces",
      description: "Elegant decking solutions for terraces and outdoor living spaces",
      image: "/deck/EGO Enrich Plank Decking/Terraces.jpg",
      features: ["Elegant Design", "Weather Resistant", "Fade Resistant", "Low Maintenance"],
      applications: ["Rooftop Terraces", "Garden Terraces", "Restaurant Terraces"]
    },
    {
      name: "Outdoor Wall Cladding",
      description: "Versatile cladding for exterior walls and architectural features",
      image: "/deck/EGO Enrich Plank Decking/Outdoor-Wall-Cladding.jpg",
      features: ["UV Resistant", "Insulation Properties", "Easy Installation", "Architectural Grade"],
      applications: ["Exterior Walls", "Feature Walls", "Commercial Buildings"]
    },
    {
      name: "Facade Applications",
      description: "Premium facade solutions for modern architectural designs",
      image: "/deck/EGO Enrich Plank Decking/FACADE.jpg",
      features: ["Architectural Grade", "Weather Resistant", "Modern Design", "Durable Finish"],
      applications: ["Building Facades", "Commercial Projects", "Residential Exteriors"]
    },
    {
      name: "Ship Deck",
      description: "Marine-grade decking for boats and maritime applications",
      image: "/deck/EGO Enrich Plank Decking/Ship-Deck.jpg",
      features: ["Marine Grade", "Salt Water Resistant", "Anti-Slip", "Durable Construction"],
      applications: ["Yachts", "Boats", "Marine Platforms"]
    },
    {
      name: "Outdoor Verandas",
      description: "Perfect for covered outdoor living spaces and verandas",
      image: "/deck/EGO Enrich Plank Decking/Outdoor-Varandas.jpg",
      features: ["Comfortable Underfoot", "Weather Resistant", "Aesthetic Appeal", "Easy Maintenance"],
      applications: ["Covered Patios", "Verandas", "Outdoor Living Rooms"]
    }
  ];

  // Available colors/finishes
  const availableFinishes = [
    { name: "Teak", image: "/deck/EGO Enrich Plank Decking/teak.jpg" },
    { name: "Chocolate", image: "/deck/EGO Enrich Plank Decking/Chocolate.jpg" },
    { name: "Silver Grey", image: "/deck/EGO Enrich Plank Decking/silver-grey.jpg" },
  ];

  // Technical specifications
  const specifications = [
    { name: "Material", value: "Enriched Composite Plank" },
    { name: "Thickness", value: "20mm to 25mm" },
    { name: "Width", value: "140mm to 180mm" },
    { name: "Length", value: "2400mm to 4000mm" },
    { name: "Surface Finish", value: "Textured Anti-Slip" },
    { name: "Installation", value: "Clip System & Screw Fix" },
    { name: "Maintenance", value: "Ultra Low Maintenance" },
    { name: "Warranty", value: "15-20 Years Structural Warranty" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What is EGO Enrich Plank Decking?",
      answer: "EGO Enrich Plank Decking is a premium composite decking system designed for versatile applications. It combines advanced materials with innovative design to create durable, beautiful, and low-maintenance outdoor and indoor flooring solutions."
    },
    {
      question: "Can EGO Enrich Plank be used in wet environments?",
      answer: "Yes, EGO Enrich Plank is specifically designed for wet environments including bathrooms, pool areas, and marine applications. It features waterproof construction and anti-slip surfaces for safety."
    },
    {
      question: "How does EGO Enrich Plank compare to traditional wood decking?",
      answer: "EGO Enrich Plank offers superior durability, weather resistance, and requires minimal maintenance compared to traditional wood. It won't rot, warp, or require regular staining or sealing."
    },
    {
      question: "What installation methods are available?",
      answer: "EGO Enrich Plank can be installed using clip systems for easy installation or screw-fix methods for permanent applications. The versatile design allows for various installation configurations."
    },
    {
      question: "Is EGO Enrich Plank suitable for commercial applications?",
      answer: "Absolutely! EGO Enrich Plank is ideal for commercial applications including hotels, restaurants, offices, and public spaces due to its durability, safety features, and low maintenance requirements."
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/EGO Enrich Plank Decking/teak.jpg" 
            alt="EGO Enrich Plank Decking"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            EGO Enrich Plank Decking
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Versatile composite decking solutions for every application
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Revolutionizing Outdoor & Indoor Spaces</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                EGO Enrich Plank Decking represents the next generation of composite decking technology. 
                Engineered for versatility, it seamlessly adapts to countless applications from residential 
                balconies to commercial facades, from pool sides to ship decks.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                What sets EGO Enrich Plank apart is its exceptional versatility and performance across 
                diverse environments. Whether you're creating a luxury bathroom floor, a restaurant terrace, 
                or a yacht deck, EGO Enrich Plank delivers consistent quality and aesthetic appeal.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With advanced anti-slip technology, superior weather resistance, and minimal maintenance 
                requirements, EGO Enrich Plank transforms any space into a beautiful, functional area 
                that maintains its appearance for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Versatile Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {egoSubcategories.map((subcategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{subcategory.name}</h3>
                  <p className="text-gray-600 mb-4">{subcategory.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {subcategory.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subcategory.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Finishes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Available Finishes</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {availableFinishes.map((finish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={finish.image} 
                    alt={finish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{finish.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">EGO Enrich Plank Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {egoSubcategories.slice(0, 6).map((subcategory, index) => (
                <div key={index} className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={subcategory.image}
                    alt={subcategory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why Choose EGO Enrich Plank?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Versatile Applications</h3>
              <p className="text-gray-600">Suitable for indoor and outdoor use in residential and commercial settings</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Waterproof Performance</h3>
              <p className="text-gray-600">100% waterproof construction perfect for wet environments</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Anti-Slip Surface</h3>
              <p className="text-gray-600">Textured surface provides excellent grip for safety in all conditions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Easy Installation</h3>
              <p className="text-gray-600">Flexible installation options including clip systems and screw-fix methods</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Ultra Low Maintenance</h3>
              <p className="text-gray-600">Requires minimal upkeep with simple cleaning and no staining or sealing</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Durable Construction</h3>
              <p className="text-gray-600">Long-lasting performance with 15-20 year structural warranty</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Technical Specifications</h2>
          
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
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Space with EGO Enrich Plank</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the versatility and performance of EGO Enrich Plank Decking for your next project.
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

export default EgoEnrichPlankDecking;
