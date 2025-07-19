import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { products } from "@/data/productData";

export function CWF() {
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
    { name: "Thickness", value: "18mm to 22mm" },
    { name: "Width", value: "90mm to 190mm" },
    { name: "Length", value: "300mm to 2400mm" },
    { name: "Finish Options", value: "UV Oil, Hardwax Oil, Lacquered" },
    { name: "Installation", value: "Tongue and Groove, Click-Lock" },
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
            src="/swf1.png" 
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

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/swf1.png"
                  alt="Solid wood floor in living room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/swf2.png"
                  alt="Solid wood floor detail"
                  className="w-full h-full object-cover"
                />
              </div>
              {solidWoodData?.images.map((image: { src: string; alt: string }, index: number) => (
                <div key={index} className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.alt}
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
          <h2 className="text-3xl font-bold mb-10 text-center">Features & Benefits</h2>
          
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
          <h2 className="text-3xl font-bold mb-10 text-center">Available Wood Species</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {woodSpecies.map((species, index) => (
              <div key={index} className="text-center">
                <div className="h-40 rounded-lg overflow-hidden bg-gray-200 mb-3">
                  <img src={species.image} alt={species.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold">{species.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
          
          <div className="max-w-3xl mx-auto overflow-hidden rounded-lg border border-gray-200">
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

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Installation Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Preparation</h3>
                <p className="text-gray-600">Subfloor assessment, acclimation of wood, and moisture testing.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">Professional installation with precision cutting and secure fastening.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Finishing</h3>
                <p className="text-gray-600">Sanding, staining if desired, and application of protective finish.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-6">Our professional installation team ensures a flawless result that will last for decades.</p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
                Schedule a Consultation
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
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Request a Quote
            </button>
            <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
              View Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CWF;
