import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function EnchantPremiumCollection() {
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
    { name: "Material", value: "Premium High-Density Fiberboard Core" },
    { name: "Thickness", value: "10mm" },
    { name: "Plank Size", value: "1210x196mm" },
    { name: "Pattern", value: "Traditional Plank Layout" },
    { name: "Surface", value: "Premium Oak Texture" },
    { name: "Wear Layer", value: "AC4 Commercial Grade" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Warranty", value: "20 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Premium Oak",
      description: "Authentic oak wood grain patterns with sophisticated natural variations",
      icon: "🌳"
    },
    {
      title: "Rich Textures",
      description: "Deep embossed textures that replicate real hardwood feel and appearance",
      icon: "🎨"
    },
    {
      title: "Natural Grain",
      description: "High-definition printing captures every detail of genuine oak character",
      icon: "🔍"
    },
    {
      title: "Premium Finish",
      description: "Superior surface treatments ensure lasting beauty and performance",
      icon: "✨"
    }
  ];

  // Oak collection designs
  const oakDesigns = [
    {
      name: "Caramel Oak",
      description: "Warm caramel tones with rich oak grain and natural character marks",
      image: "/Laminate/Enchant Premium Collection/Copy of MVR_1337 ( Caramel Oak ).JPG",
      characteristics: ["Warm Caramel", "Rich Grain", "Natural Character", "Cozy Appeal"]
    },
    {
      name: "Choco Oak",
      description: "Deep chocolate brown oak with luxurious grain patterns and texture",
      image: "/Laminate/Enchant Premium Collection/Copy of MVR_1347 ( Choco Oak ).JPG",
      characteristics: ["Deep Chocolate", "Luxurious Grain", "Rich Texture", "Premium Appeal"]
    },
    {
      name: "Santis Oak",
      description: "Light natural oak with subtle grain variations and elegant appearance",
      image: "/Laminate/Enchant Premium Collection/Copy of MVR_1359 ( Santis Oak ).JPG",
      characteristics: ["Light Natural", "Subtle Variations", "Elegant Look", "Versatile Style"]
    },
    {
      name: "Premium Classic Oak",
      description: "Traditional oak design with timeless appeal and classic beauty",
      image: "/Laminate/Enchant Premium Collection/Copy of 3475.jpg",
      characteristics: ["Traditional Style", "Timeless Appeal", "Classic Beauty", "Heritage Look"]
    },
        {
      name: "Desert Oak",
      image: "/Laminate/Enchant Premium Collection/DESERT OAK.jpeg",
    },
    {
      name: "Forest Oak",
      image: "/Laminate/Enchant Premium Collection/FOREST OAK.jpeg",
    },
    {
      name: "Hazelnut",
      image: "/Laminate/Enchant Premium Collection/HEZELNUT.jpeg",
    },
    {
      name: "Oak Granit",
      image: "/Laminate/Enchant Premium Collection/OAK GRANIT.jpeg",
    },
    {
      name: "Silver Oak",
      image: "/Laminate/Enchant Premium Collection/SILVER OAK.jpeg",
    },
    {
      name: "Ashwood",
      image: "/Laminate/Enchant Premium Collection/ASHWOOD.jpeg",
    },
    {
      name: "Charcoal Oak",
      image: "/Laminate/Enchant Premium Collection/CHARCOAL OAK.jpeg",
    },
    {
      name: "Dove Grey",
      image: "/Laminate/Enchant Premium Collection/DOVE GREY.jpeg",
    },
    {
      name: "Expresso Walnut",
      image: "/Laminate/Enchant Premium Collection/EXPRESSO WALNUT.jpeg",
    },
    {
      name: "Fernch Oak",
      image: "/Laminate/Enchant Premium Collection/FRENCH OAK.jpeg",
    },
    {
      name: "Light Walnut",
      image: "/Laminate/Enchant Premium Collection/LIGHT WALNUT.jpeg",
    },
    {
      name: "Moonlight Oak",
      image: "/Laminate/Enchant Premium Collection/MOONLIGHT OAK.jpeg",
    },
    {
      name: "Natural Oak",
      image: "/Laminate/Enchant Premium Collection/NATURAL OAK.jpeg",
    },
    {
      name: "Newcastle Brown",
      image: "/Laminate/Enchant Premium Collection/NEWCASTLE BROWN.jpeg",
    },
    {
      name: "Sandstone Oak",
      image: "/Laminate/Enchant Premium Collection/SANDSTONE OAK.jpeg",
    },
    {
      name: "TEAK",
      image: "/Laminate/Enchant Premium Collection/TEAK.jpeg",
    },
  ];

  // Premium benefits
  const premiumBenefits = [
    "AC4 Commercial Grade Durability",
    "20-Year Residential Warranty",
    "Enhanced Stain Resistance",
    "Superior Color Stability",
    "Premium Click Lock System",
    "Professional Installation Ready"
  ];

  // Oak collection advantages
  const oakAdvantages = [
    "Authentic Wood Appearance",
    "Cost-Effective Alternative",
    "Easy Maintenance",
    "Scratch Resistant Surface",
    "Fade Resistant Colors",
    "Moisture Resistant Core"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Laminate/Enchant Premium Collection/Copy of MVR_1337 ( Caramel Oak ).JPG" 
            alt="Enchant Premium Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enchant Premium Collection
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium oak finishes with sophisticated grain textures and AC4 commercial durability
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Magic of Premium Oak</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Enchant Premium Collection captures the timeless beauty and sophisticated 
                character of premium oak hardwood in an advanced laminate format. Each design 
                in this collection showcases the natural elegance of oak grain patterns, from 
                warm caramel tones to rich chocolate browns, creating floors that enchant and 
                inspire.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Featuring AC4 commercial grade durability and advanced surface treatments, 
                this premium collection delivers the authentic look and feel of hardwood 
                with the practical benefits of modern laminate technology. The deep embossed 
                textures and high-definition printing create remarkably realistic wood 
                appearances that stand up to daily life.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Perfect for homeowners who appreciate the classic beauty of oak but want 
                the convenience, durability, and value that premium laminate flooring provides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oak Collection Designs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Premium Oak Designs</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {oakDesigns.map((design, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-52 rounded-lg overflow-hidden bg-gray-200 mb-4">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg">{design.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Premium Collection Features</h2>
          
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

      {/* Care Instructions */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Care & Maintenance</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🧹</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Daily Cleaning</h3>
                <p className="text-gray-600">Simple sweeping or vacuuming removes daily dirt and debris</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deep Cleaning</h3>
                <p className="text-gray-600">Damp mop with laminate cleaner for deeper cleaning</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Protection</h3>
                <p className="text-gray-600">Use furniture pads and entry mats to protect surface</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Applications Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Perfect Applications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Family Homes</h3>
                <p className="text-gray-600">Perfect for living rooms, dining areas, and bedrooms</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Commercial Spaces</h3>
                <p className="text-gray-600">AC4 rating suitable for moderate commercial traffic</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Rental Properties</h3>
                <p className="text-gray-600">Durable and attractive option for investment properties</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Premium Oak Beauty</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the enchanting beauty of premium oak laminate with superior performance and lasting value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/laminate-flooring'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to Laminate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EnchantPremiumCollection;