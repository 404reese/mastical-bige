import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/productData";

export function WallCladdingSoffit() {
  // Find the wall cladding product data
  const wallCladdingData = products.find(product => product.id === 'wall-cladding');

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
    { name: "Material", value: "Composite & Bamboo Fiber" },
    { name: "Thickness", value: "18mm to 25mm" },
    { name: "Width", value: "120mm to 180mm" },
    { name: "Length", value: "2400mm to 3600mm" },
    { name: "Weather Resistance", value: "UV Protected, Moisture Resistant" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Maintenance", value: "Low Maintenance, Easy Cleaning" },
    { name: "Warranty", value: "15-25 Years Structural Warranty" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What is wall cladding and soffit?",
      answer: "Wall cladding is an exterior or interior covering system that protects and enhances building facades. Soffit provides ventilation and aesthetic finishing for roof overhangs and eaves areas."
    },
    {
      question: "How long does wall cladding last?",
      answer: "With proper installation and maintenance, quality wall cladding can last 20-30 years or more. The lifespan depends on the material chosen, environmental conditions, and level of care."
    },
    {
      question: "Is wall cladding fire resistant?",
      answer: "Yes, our wall cladding products meet fire safety standards and feature fire-resistant properties, making them safe for both residential and commercial applications."
    },
    {
      question: "Can wall cladding be used indoors?",
      answer: "Absolutely! Our wall cladding solutions are versatile and suitable for both interior accent walls and exterior facades, providing design flexibility."
    },
    {
      question: "What maintenance is required for wall cladding?",
      answer: "Wall cladding requires minimal maintenance - periodic cleaning with mild detergent, inspection for damage, and occasional touch-ups to maintain appearance."
    }
  ];

  // Wall cladding main categories
  const wallCladdingMainCategories = [
    {
      name: "SYLVANIX CLADDING",
      description: "Premium composite cladding solutions with designer collections and signature series",
      image: "/Wall Clading/soarsignature+Obsidian.png",
      link: "/wall-cladding-soffit/sylvanix-cladding",
      collections: ["Designer Collection", "Soar Signature"]
    },
    // {
    //   name: "dassoCTECH Cladding",
    //   description: "Premium bamboo composite cladding with superior durability and natural aesthetics",
    //   image: "/Wall Clading/dassoCTECH Cladding/1567607951173044.png",
    //   link: "/wall-cladding-soffit/dassoCTECH-cladding",
    //   collections: ["Natural Bamboo", "Composite Series"]
    // },
    // {
    //   name: "dassoXTR Cladding",
    //   description: "High-performance bamboo composite cladding with excellent weather resistance",
    //   image: "/Wall Clading/dassoXTR Cladding/1582769044428157.png",
    //   link: "/wall-cladding-soffit/dassoXTR-cladding",
    //   collections: ["XTR Performance", "Weather Shield"]
    // },
    // {
    //   name: "dassoCTECH Soffit",
    //   description: "Premium bamboo composite soffit solutions for roof overhangs and eaves",
    //   image: "/Wall Clading/dassoCTECH Soffit/1567147241452338.png",
    //   link: "/wall-cladding-soffit/dassoCTECH-soffit",
    //   collections: ["Ventilated Soffit", "Solid Soffit"]
    // },
    // {
    //   name: "dassoXTR Soffit",
    //   description: "High-quality bamboo composite soffit with superior ventilation properties",
    //   image: "/Wall Clading/dassoXTR Soffit/1622077960185491.png",
    //   link: "/wall-cladding-soffit/dassoXTR-soffit",
    //   collections: ["Perforated Soffit", "Solid Panel"]
    // }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/wall-cladding.jpg" 
            alt="Premium Wall Cladding & Soffit"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Wall Cladding & Soffit
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Transform your building facades with premium cladding and soffit solutions
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Elevate Your Building Exterior</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our wall cladding and soffit solutions combine superior protection with stunning aesthetics, creating building 
                exteriors that stand the test of time. From residential homes to commercial buildings, we offer comprehensive 
                facade solutions that enhance both functionality and visual appeal.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With advanced composite materials and sustainable bamboo options, our cladding systems provide exceptional 
                weather resistance, thermal insulation, and architectural versatility while maintaining the natural beauty 
                that distinguishes premium building materials.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our soffit solutions ensure proper ventilation and seamless integration with your cladding system, providing 
                complete facade coverage that protects your building envelope while delivering outstanding curb appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Premium Wall Cladding & Soffit Categories</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {wallCladdingMainCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center cursor-pointer group"
                onClick={() => window.location.href = category.link}
              >
                <div className="h-40 rounded-lg overflow-hidden bg-gray-200 mb-3 group-hover:shadow-lg transition-shadow duration-300">
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

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Product Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/GLACIER WHITE/Designer+Collection+Glacier+White.png"
                  alt="SYLVANIX Designer Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-opal-web.jpg"
                  alt="SYLVANIX Soar Signature"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Cladding/20190926100942258.jpg"
                  alt="dassoCTECH Cladding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Cladding/20190926101509282.jpg"
                  alt="dassoXTR Cladding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Soffit/20190830144145104.jpg"
                  alt="dassoCTECH Soffit"
                  className="w-full h-full object-cover"
                />
              </div>
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
                <h3 className="text-lg font-semibold mb-2">Site Survey</h3>
                <p className="text-gray-600 text-sm">Comprehensive assessment of building facade and substrate preparation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Framework Installation</h3>
                <p className="text-gray-600 text-sm">Installation of structural support system and mounting framework</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cladding & Soffit</h3>
                <p className="text-gray-600 text-sm">Precise installation of cladding panels and soffit systems</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Control</h3>
                <p className="text-gray-600 text-sm">Final inspection, weatherproofing, and maintenance guidelines</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-6 text-gray-700">Our certified installers ensure proper installation for maximum durability and aesthetic appeal.</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Building Facade?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our premium wall cladding and soffit options and receive expert guidance for your building project.
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

export default WallCladdingSoffit;
           