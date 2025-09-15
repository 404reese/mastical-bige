import React from "react";
import { motion } from "framer-motion";
import { products } from "@/data/productData";

export function SolidWoodFloors() {
  // Find the solid wood product data
  const solidWoodData = products.find(product => product.id === 'solid-wood');

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

  // Additional technical specifications
  const specifications = [
    { name: "Thickness", value: "18mm" },
    { name: "Width", value: "120mm - 125mm (varies by wood species)" },
    { name: "Length", value: "400mm - 1200mm" },
    { name: "Material", value: "100% natural solid wood" },
    { name: "Durability", value: "Durable and long-lasting" },
    { name: "Appearance", value: "Warm and inviting with natural color and grain variations" },
    { name: "Finish Options", value: "UV Oil, Hardwax Oil, Lacquered" },
    { name: "Suitable for", value: "Living rooms, Bedrooms, Dining areas, Offices" },
    { name: "Maintenance", value: "Regular cleaning, Periodic refinishing" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "How long does solid wood flooring last?",
      answer: "With proper care and maintenance, solid wood flooring can last for generations, often 30-100 years or more. Its longevity is one of the main advantages over other flooring types."
    },
    {
      question: "Can solid wood floors be refinished?",
      answer: "Yes, one of the primary benefits of solid wood floors is that they can be sanded and refinished multiple times throughout their lifespan, allowing you to repair damage or change the color as your style preferences evolve."
    },
    {
      question: "Are solid wood floors suitable for kitchens?",
      answer: "While solid wood can be used in kitchens, special precautions need to be taken due to potential moisture exposure. Proper sealing and prompt cleanup of spills are essential. Some homeowners prefer engineered wood in kitchens for its better moisture stability."
    },
    {
      question: "How do I maintain solid wood flooring?",
      answer: "Regular maintenance includes sweeping or vacuuming to remove dirt and debris, cleaning with a wood floor cleaner, and avoiding excessive water exposure. Periodic reapplication of finish may be necessary depending on wear and tear."
    },
    {
      question: "What wood species work best for flooring?",
      answer: "Popular choices include oak (known for durability and beautiful grain), walnut (rich, dark color), maple (light color and smooth grain), and cherry (reddish tones that deepen with age). The best choice depends on your aesthetic preferences and lifestyle needs."
    }
  ];

  // Wood Species data
  const woodSpecies = [
    { name: "OAK NATURAL", image: "/products/swfp1.png" },
    { name: "OAK EUROPEAN GREY", image: "/products/swfp2.png" },
    { name: "OAK CARAMEL", image: "/products/swfp3.png" },
    { name: "OAK ANTIQUE", image: "/products/swfp4.png" },
    { name: "OAK ALMOND", image: "/products/swfp5.png" },
    { name: "MERBAU", image: "/products/swfp6.png" },
    { name: "KAYA KUKU", image: "/products/swfp7.png" },
    { name: "BURMA TEAK", image: "/products/swfp8.png" },
    { name: "BALI TEAK", image: "/products/swfp9.png" },
    { name: "ASIAN WALNUT", image: "/products/swfp10.png" },
    { name: "AMERICAN WALNUT", image: "/products/swfp11.png" },
    { name: "AFRICAN TEAK", image: "/products/swfp12.png" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/solidwoodfloors.jpg" 
            alt="Solid Wood Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solid Wood Floors
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Timeless beauty and exceptional durability for your premium spaces
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Epitome of Natural Elegance</h2>
            
            <div className="prose prose-lg mx-auto">
              {solidWoodData?.descriptionParagraphs.map((paragraph: string, index: number) => (
                <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
              ))}
              
              <p className="mb-4 text-gray-700">
                Solid wood flooring is made from a single piece of timber and is the most traditional type of wood flooring. 
                Each plank showcases the natural beauty of the wood species, with unique grain patterns and 
                color variations that add character to your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solidWoodData?.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="text-xl font-semibold mb-2">{feature}</div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Increases Property Value</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Can Be Refinished Multiple Times</div>
            </motion.div>
          
          </div>
        </div>
      </section>

      {/* Wood Species Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Collection</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {woodSpecies.map((species, index) => (
              <div key={index} className="text-center">
                <div className="h-52 rounded-lg overflow-hidden bg-gray-200 mb-4">
                  <img src={species.image} alt={species.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-lg">{species.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-4 border-b border-gray-300 pb-2">{spec.name}</h3>
                <p className="text-gray-600 leading-relaxed">{spec.value}</p>
              </motion.div>
            ))}
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our premium solid wood flooring options and get a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.location.href = '/contact-us'} className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Request a Quote
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolidWoodFloors;
