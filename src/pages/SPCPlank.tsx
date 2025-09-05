import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SPCPlank() {
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
    { name: "Material", value: "Stone Plastic Composite Core" },
    { name: "Thickness", value: "4mm to 6mm" },
    { name: "Width", value: "180mm to 230mm" },
    { name: "Length", value: "1200mm to 1800mm" },
    { name: "Wear Layer", value: "0.3mm to 0.7mm" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Water Resistance", value: "100% Waterproof" },
    { name: "Warranty", value: "25 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Authentic Wood Look",
      description: "Realistic wood grain textures and natural color variations that rival genuine hardwood",
      icon: "🌳"
    },
    {
      title: "Waterproof Core",
      description: "100% waterproof SPC core prevents moisture damage and warping",
      icon: "💧"
    },
    {
      title: "Scratch Resistant",
      description: "Advanced wear layer protects against scratches, scuffs, and daily wear",
      icon: "🛡️"
    },
    {
      title: "Easy Installation",
      description: "Click-lock system enables fast and secure installation over most subfloors",
      icon: "🔧"
    }
  ];

  // Available designs
  const designOptions = [
    {
      name: "Classic Oak Series",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/3213_P2277.jpg",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "P2228",
      description: "Timeless oak patterns with natural grain detail",
      image: "/SPC/SPC Plank/P2288.png",
      characteristics: ["Natural Oak Grain", "Medium Brown Tone", "Classic Appeal", "Versatile Design"]
    },
    {
      name: "Modern Collection",
      description: "Contemporary wood looks for modern interior design",
      image: "/SPC/SPC Plank/3223_P2233.jpg",
      characteristics: ["Contemporary Style", "Clean Lines", "Modern Appeal", "Sophisticated Finish"]
    },
    {
      name: "Rustic Series",
      description: "Weathered and distressed wood appearances",
      image: "/SPC/SPC Plank/3225_P2288.jpg",
      characteristics: ["Rustic Character", "Distressed Look", "Vintage Appeal", "Unique Texture"]
    },
    {
      name: "Premium Collection",
      description: "High-end wood species recreations with premium detailing",
      image: "/SPC/SPC Plank/3251_P2222.jpg",
      characteristics: ["Premium Quality", "Rich Details", "Luxury Appeal", "Architectural Grade"]
    }
  ];

  // Applications
  const applications = [
    "Living Rooms & Family Rooms",
    "Kitchens & Dining Areas",
    "Bedrooms & Hallways",
    "Bathrooms & Laundry Rooms",
    "Basements & Below Grade",
    "Commercial Spaces"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/SPC/SPC Plank/3258_P3311.jpg" 
            alt="SPC Plank Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SPC Plank Flooring
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Realistic wood-look planks with superior durability and waterproof performance
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Beauty of Wood, The Performance of SPC</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                SPC Plank flooring delivers the authentic beauty of natural hardwood with the advanced performance 
                of stone plastic composite technology. Our realistic wood-grain textures and natural color variations 
                create stunning floors that are indistinguishable from genuine hardwood.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Unlike traditional hardwood, SPC Plank is 100% waterproof, making it perfect for kitchens, bathrooms, 
                basements, and any area where moisture is a concern. The rigid core construction provides exceptional 
                stability and resistance to dents, scratches, and heavy foot traffic.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With easy click-lock installation and minimal maintenance requirements, SPC Plank offers the perfect 
                solution for homeowners who want the look of hardwood without the limitations and ongoing maintenance 
                of natural wood flooring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Design Collections</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {designOptions.map((design, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{design.name}</h3>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
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

      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Beauty of SPC Plank</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our SPC Plank collection and discover the perfect wood-look flooring for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/spc-flooring'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to SPC Flooring
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SPCPlank;
