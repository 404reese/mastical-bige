import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/productData";

export function DeckFlooring() {
  // Find the deck flooring product data
  const deckFlooringData = products.find(product => product.id === 'deck-flooring');

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
    { name: "Material", value: "Composite & Natural Wood" },
    { name: "Thickness", value: "25mm to 38mm" },
    { name: "Width", value: "140mm to 200mm" },
    { name: "Length", value: "2400mm to 5400mm" },
    { name: "Weather Resistance", value: "UV Protected, Moisture Resistant" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Low Maintenance, Easy Cleaning" },
    { name: "Warranty", value: "15-25 Years Structural Warranty" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What is deck flooring?",
      answer: "Deck flooring is specially designed flooring for outdoor spaces like patios, balconies, and decks. It's engineered to withstand weather conditions while providing a beautiful, durable surface for outdoor living."
    },
    {
      question: "How long does deck flooring last?",
      answer: "With proper installation and maintenance, quality deck flooring can last 15-25 years or more. The lifespan depends on the material chosen, environmental conditions, and level of care."
    },
    {
      question: "Is deck flooring slip-resistant?",
      answer: "Yes, our deck flooring products feature textured surfaces that provide excellent slip resistance, making them safe for wet conditions and outdoor use."
    },
    {
      question: "Can deck flooring be installed in all weather conditions?",
      answer: "Our deck flooring is designed for year-round outdoor use and can withstand various weather conditions including rain, UV exposure, and temperature fluctuations."
    },
    {
      question: "What maintenance is required for deck flooring?",
      answer: "Deck flooring requires minimal maintenance - regular cleaning with soap and water, periodic inspection for damage, and occasional deep cleaning to maintain appearance."
    }
  ];

  // Deck flooring main categories
  const deckMainCategories = [
    {
      name: "SYLVANIX-DECKING",
      description: "Premium composite decking solutions with multiple collection options",
      image: "/deck/SYLVANIX-DECKING/destinations-decking/ponderay.jpg",
      link: "/deck-flooring/sylvanix-decking",
      collections: ["Elite Collection", "Elite Essential", "Skyline Series", "Destinations Decking", "Elements Decking"]
    },
    {
      name: "EGO Enrich Plank Decking",
      description: "Versatile composite decking for diverse indoor and outdoor applications",
      image: "/deck/EGO Enrich Plank Decking/Outdoor-Wall-Cladding.jpg",
      link: "/deck-flooring/ego-enrich-plank-decking",
      collections: ["Balcony Decking", "Pool Side", "Terraces", "Marine Grade", "Wall Cladding"]
    },
    {
      name: "EGO Enrich-WPC Decktile",
      description: "Versatile composite decking for diverse indoor and outdoor applications",
      image: "/deck/EGO Enrich-WPC Decktile/Decking-03.jpg",
      link: "/deck-flooring/ego-enrich-wpc-decktile",
      collections: ["Dark Brown", "Dark Grey", "Decking03", "Redwood"]
    },
    {
      name: "dassoCTECH Decking",
      description: "Premium bamboo composite decking with superior durability and aesthetics",
      image: "/deck/dassoCTECH Decking/dassoCTECH Decking (2).png",
      link: "/deck-flooring/dassoCTECH",
      collections: [""]
    },
    {
      name: "dassoXTR DECKING",
      description: "High-quality bamboo composite decking with excellent performance",
      image: "/deck/dassoXTR DECKING/dassoXTR DECKING (3).png",
      link: "/deck-flooring/dassoXTR",
      collections: [""]
    }
  ];

  // Legacy subcategories (keeping for backward compatibility)
  const deckCategories = [
    {
      name: "Elite Collection",
      description: "Premium composite decking with superior durability and aesthetics",
      image: "/deck/elite-collection/summit-grey.jpg",
      link: "/deck-flooring/elite-collection",
      features: ["Warranty", "Fade Resistant", "Stain Resistant", "Scratch Resistant"]
    },
    {
      name: "Elite Essential",
      description: "High-quality composite decking with excellent performance",
      image: "/deck/elite-essential/tropical-gold.jpg",
      link: "/deck-flooring/elite-essential",
      features: ["15-Year Warranty", "Weather Resistant", "Low Maintenance", "Eco-Friendly"]
    },
    {
      name: "Skyline Series",
      description: "Contemporary designs with modern architectural appeal",
      image: "/deck/skyline/teak-traditional.jpg",
      link: "/deck-flooring/skyline",
      features: ["Modern Design", "Premium Finish", "Architectural Grade", "UV Protected"]
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck.jpg" 
            alt="Premium Deck Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Deck Flooring
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Transform your outdoor space with premium deck flooring solutions
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Elevate Your Outdoor Living</h2>
            
            <div className="prose prose-lg mx-auto">
              {deckFlooringData?.descriptionParagraphs.map((paragraph: string, index: number) => (
                <p key={index} className="mb-6 text-gray-700 text-lg leading-relaxed">{paragraph}</p>
              ))}
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our deck flooring solutions combine aesthetic appeal with practical functionality, creating stunning outdoor spaces 
                that enhance your home's value and your quality of life. From intimate balconies to expansive decks, we offer 
                the perfect flooring solution for every outdoor project.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With advanced composite materials and traditional wood options, our deck flooring provides superior durability, 
                weather resistance, and low maintenance requirements while delivering the natural beauty you desire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Premium Deck Flooring Categories</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {deckMainCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center cursor-pointer group"
                onClick={() => window.location.href = category.link}
              >
                <div className="h-60 rounded-lg overflow-hidden bg-gray-200 mb-3 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-gray-600 transition-colors duration-300">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Individual Collections</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deckCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => window.location.href = category.link}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
                      Explore {category.name}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-collection/sand-dune.jpg"
                  alt="Elite Collection deck flooring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-essential/harvest-brown.jpg"
                  alt="Elite Essential deck flooring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/skyline/graphite-traditional.jpg"
                  alt="Skyline series deck flooring"
                  className="w-full h-full object-cover"
                />
              </div>
              {deckFlooringData?.images.map((image: { src: string; alt: string }, index: number) => (
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

      {/* Technical Specifications */}
      {/* <section className="py-16 bg-white">
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
      </section> */}

      {/* Installation Process */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Professional Installation Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Site Assessment</h3>
                <p className="text-gray-600 text-sm">Evaluation of outdoor space and substrate preparation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Framework Setup</h3>
                <p className="text-gray-600 text-sm">Installation of structural framework and support systems</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deck Installation</h3>
                <p className="text-gray-600 text-sm">Precise installation of deck boards with hidden fastening</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Finishing Touches</h3>
                <p className="text-gray-600 text-sm">Final inspection, cleaning, and maintenance guidance</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-6 text-gray-700">Our certified installers ensure proper installation for maximum durability and performance.</p>
              <button 
                onClick={() => window.location.href = '/contact-us'} 
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Schedule Installation Consultation
              </button>
            </div>
          </div>
        </div>
      </section> */}

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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our premium deck flooring options and receive expert guidance for your outdoor project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default DeckFlooring;