import React from "react";
import { motion } from "framer-motion";
import { products } from "@/data/productData";

export function SPCPlank() {
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
    {
      name: "P2211",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0018.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2222",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0020.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2233",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0022.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2244",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0024.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2255",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0026.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2266",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0028.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2277",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0030.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2288",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0032.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2299",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0034.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P3311",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0036.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P3322",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0038.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P3333",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/Stupa Cat_ The Big E_SPC Flooring_page-0040.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/heros/Solid Wood FLoor.png" 
            alt="Solid Wood Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SPC Plank
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
                SPC Plank Flooring is made from a single piece of timber and is the most traditional type of wood flooring. 
                Each plank showcases the natural beauty of the wood species, with unique grain patterns and 
                color variations that add character to your space.
              </p>
            </div>
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

export default SPCPlank;
