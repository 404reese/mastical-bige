import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SPCHerringbone() {
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
    { name: "Thickness", value: "5mm to 6mm" },
    { name: "Plank Size", value: "600x100mm to 900x150mm" },
    { name: "Pattern", value: "Classic Herringbone Layout" },
    { name: "Wear Layer", value: "0.5mm to 0.7mm" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Water Resistance", value: "100% Waterproof" },
    { name: "Warranty", value: "25 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Classic Pattern",
      description: "Timeless herringbone design that adds sophistication and visual interest to any space",
      icon: "📐"
    },
    {
      title: "Designer Appeal",
      description: "Premium pattern creates high-end architectural appearance with modern performance",
      icon: "✨"
    },
    {
      title: "Visual Expansion",
      description: "Herringbone pattern creates illusion of larger space and adds dynamic movement",
      icon: "🔄"
    },
    {
      title: "Architectural Grade",
      description: "Professional-quality flooring suitable for luxury residential and commercial projects",
      icon: "🏗️"
    }
  ];

  // Design variations
  const herringboneDesigns = [
    {
      name: "Traditional Oak Herringbone",
      description: "Classic oak wood grain in traditional herringbone pattern",
      image: "/SPC/SPC Herringbone/3395-H1111.jpg",
      characteristics: ["Natural Oak Grain", "Traditional Pattern", "Warm Tones", "Classic Appeal"]
    },
    {
      name: "Modern Grey Herringbone",
      description: "Contemporary grey tones with sophisticated herringbone layout",
      image: "/SPC/SPC Herringbone/3405-H1144.jpg",
      characteristics: ["Contemporary Grey", "Modern Style", "Clean Lines", "Sophisticated Finish"]
    },
    {
      name: "Rich Brown Herringbone",
      description: "Deep brown wood tones in elegant herringbone configuration",
      image: "/SPC/SPC Herringbone/3417-H1133.jpg",
      characteristics: ["Rich Brown Tone", "Deep Color", "Luxury Appeal", "Premium Quality"]
    },
    {
      name: "Light Timber Herringbone",
      description: "Light wood tones with natural grain in herringbone pattern",
      image: "/SPC/SPC Herringbone/3428-H1166.jpg",
      characteristics: ["Light Timber", "Natural Grain", "Bright Appeal", "Versatile Design"]
    },
    {
      name: "Smoky Oak Herringbone",
      description: "Smoky oak finish with distinctive herringbone arrangement",
      image: "/SPC/SPC Herringbone/3440-H1155.jpg",
      characteristics: ["Smoky Finish", "Oak Texture", "Distinctive Look", "Character Rich"]
    },
    {
      name: "Honey Oak Herringbone",
      description: "Warm honey oak tones in classic herringbone design",
      image: "/SPC/SPC Herringbone/3455-H1122.jpg",
      characteristics: ["Honey Tones", "Warm Appeal", "Natural Beauty", "Timeless Design"]
    }
  ];

  // Installation benefits
  const installationBenefits = [
    "Pre-Cut Herringbone Planks",
    "Click-Lock Installation System",
    "No Special Tools Required",
    "Faster Installation Than Traditional",
    "Professional Pattern Alignment",
    "Minimal Waste Generation"
  ];

  // Design advantages
  const designAdvantages = [
    "Creates Visual Interest",
    "Makes Rooms Appear Larger",
    "Adds Luxury Appeal",
    "Timeless Design Pattern",
    "Versatile Style Compatibility",
    "High-End Appearance"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/SPC/SPC Herringbone/3405-H1144.png" 
            alt="SPC Herringbone Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SPC Herringbone Flooring
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Classic herringbone patterns combining traditional design with modern technology
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Timeless Elegance Meets Modern Performance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                SPC Herringbone flooring brings the timeless sophistication of the classic herringbone pattern 
                to modern spaces with all the benefits of advanced stone plastic composite technology. This 
                distinctive pattern has graced prestigious buildings and luxury homes for centuries, and now 
                it's available with waterproof performance and easy installation.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The herringbone pattern creates visual movement and interest while making rooms appear larger 
                and more dynamic. Our SPC Herringbone collection features authentic wood grain textures with 
                the durability and waterproof performance that traditional hardwood herringbone cannot match.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Perfect for luxury residential projects, boutique commercial spaces, and anywhere you want to 
                create a statement floor that combines classical beauty with contemporary practicality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Variations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Herringbone Design Collection</h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {herringboneDesigns.map((design, index) => (
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
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{design.name}</h3>
                  <p className="text-gray-600 mb-4">{design.description}</p>
                  
                  <div className="space-y-2">
                    {design.characteristics.map((characteristic, charIndex) => (
                      <div key={charIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        {characteristic}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Herringbone Features & Benefits</h2>
          
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
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Herringbone Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Herringbone/3395-H1111.png"
                  alt="Traditional Oak Herringbone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Herringbone/3405-H1144.png"
                  alt="Modern Grey Herringbone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Herringbone/3428-H1166.png"
                  alt="Light Timber Herringbone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Herringbone/3440-H1155.png"
                  alt="Smoky Oak Herringbone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/SPC/SPC Herringbone/3455-H1122.png"
                  alt="Honey Oak Herringbone"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Design Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Design Advantages</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Installation Benefits</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Perfect Applications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Homes</h3>
                <p className="text-gray-600">Perfect for living rooms, dining areas, and master suites</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Boutique Commercial</h3>
                <p className="text-gray-600">Ideal for upscale retail, restaurants, and offices</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Statement Spaces</h3>
                <p className="text-gray-600">Feature walls, entryways, and architectural highlights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Create Timeless Elegance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our SPC Herringbone collection and bring classic sophistication to your space.
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

export default SPCHerringbone;
