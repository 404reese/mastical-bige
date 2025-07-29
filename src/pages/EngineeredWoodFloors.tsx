import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { products } from "@/data/productData";

export function EngineeredWoodFloors() {
  // Find the engineered wood product data
  const engineeredWoodData = products.find(product => product.id === 'engineered-wood');

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
    { name: "Thickness", value: "14mm to 20mm" },
    { name: "Width", value: "90mm to 260mm" },
    { name: "Length", value: "1200mm to 2400mm" },
    { name: "Finish Options", value: "UV Oil, Hardwax Oil, Lacquered, Brushed" },
    { name: "Installation", value: "Click-Lock, Glue-down, Floating" },
    { name: "Suitable for", value: "All rooms including kitchens and basements" },
    { name: "Maintenance", value: "Regular cleaning, Occasional refinishing" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What is engineered wood flooring?",
      answer: "Engineered wood flooring consists of multiple layers of wood with a hardwood veneer on top. The cross-grain construction provides superior stability and resistance to moisture compared to solid wood."
    },
    {
      question: "How does engineered wood compare to solid wood?",
      answer: "Engineered wood is more stable and less prone to expansion and contraction than solid wood. It can be installed in areas with higher moisture levels and over concrete subfloors. It's also typically more cost-effective while still providing the beauty of real wood."
    },
    {
      question: "Can engineered wood floors be refinished?",
      answer: "Yes, most engineered wood floors can be refinished 1-3 times depending on the thickness of the wear layer. Thicker wear layers allow for more refinishing cycles."
    },
    {
      question: "Is engineered wood suitable for underfloor heating?",
      answer: "Yes, engineered wood flooring is excellent for underfloor heating systems due to its stable construction. The multiple layers resist warping and movement better than solid wood when exposed to heat."
    },
    {
      question: "How long does engineered wood flooring last?",
      answer: "With proper care and maintenance, engineered wood flooring can last 20-80 years depending on the quality of the product and the thickness of the wear layer. Higher quality engineered floors with thicker wear layers last longer."
    }
  ];

  // Wood Species data for engineered floors
  const woodSpecies = [
    { name: "Engineered Slim Chevron", image: "/engg/engg1.jpg", link: "/engineered-slim-chevron" },
    { name: "Engg Plank", image: "/engg/engg2.jpg", link: "/engg-plank" },
    // { name: "Parquet Tiles", image: "/engg/engg3.jpg", link: "/parquet-tiles" },
    { name: "Herringbone", image: "/engg/engg4.jpg", link: "/herringbone" },
    { name: "Designer", image: "/engg/engg5.jpg", link: "/designer" },
    { name: "Chevron", image: "/engg/engg6.jpg", link: "/chevron" },
    { name: "Engineered Slim", image: "/engg/engg7.jpg", link: "/engineered-slim" },
    { name: "Engineered Herringbone", image: "/engg/engg8.png", link: "/engineered-herringbone" },
    // { name: "Woodwalk", image: "/engg/engg8.png", link: "/woodwalk" },
    
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/engwf.avif" 
            alt="Engineered Wood Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineered Wood Floors
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Superior stability and versatility for modern living spaces
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Advanced Engineering Meets Natural Beauty</h2>
            
            <div className="prose prose-lg mx-auto">
              {engineeredWoodData?.descriptionParagraphs.map((paragraph: string, index: number) => (
                <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
              ))}
              
              <p className="mb-4 text-gray-700">
                Engineered wood flooring combines the authentic beauty of hardwood with innovative construction technology. 
                Each plank features multiple layers of wood arranged in a cross-grain pattern, topped with a genuine hardwood veneer. 
                This construction method provides exceptional stability and makes it suitable for installation in areas where solid wood might not be ideal.
              </p>
              
              <p className="mb-4 text-gray-700">
                The multi-layer construction of engineered flooring makes it less susceptible to moisture and temperature fluctuations, 
                allowing for installation over concrete subfloors and in below-grade applications. It offers the warmth and character 
                of real wood while providing enhanced performance and versatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {engineeredWoodData?.features.map((feature, index) => (
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
              <div className="text-xl font-semibold mb-2">Superior Stability</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Moisture Resistant</div>
            </motion.div>
          
          </div>
        </div>
      </section>

      {/* Wood Species Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Available Wood Species</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {woodSpecies.map((species, index) => (
              <div
                key={index}
                className="text-center cursor-pointer group"
                onClick={() => window.location.href = species.link}
              >
                <div className="h-52 rounded-lg overflow-hidden bg-gray-200 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={species.image} 
                    alt={species.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="font-semibold text-lg group-hover:text-gray-600 transition-colors duration-300">{species.name}</h3>
              </div>
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
          <h2 className="text-3xl font-bold mb-6">Experience the Best of Both Worlds</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our premium engineered wood flooring that combines natural beauty with modern performance.
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

export default EngineeredWoodFloors;
           