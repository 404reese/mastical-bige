import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SoarSignature() {
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

  // Soar Signature color options
  const signatureColors = [
    {
      name: "Brown Jasper",
      description: "Rich brown tones with natural stone-like patterns and premium texture",
      image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/Soar-Brown+Jasper.jpg",
      characteristics: ["Natural Stone Pattern", "Rich Brown Tone", "Premium Texture", "Sophisticated Finish"]
    },
    {
      name: "Obsidian",
      description: "Deep, dramatic black finish with subtle texture for contemporary designs",
      image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/OBSIDIAN/",
      characteristics: ["Deep Black", "Contemporary Style", "Dramatic Appeal", "Modern Architecture"]
    },
    {
      name: "Opal",
      description: "Elegant light tones with subtle variations for timeless appeal",
      image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-opal-web.jpg",
      characteristics: ["Light Tones", "Subtle Variations", "Timeless Appeal", "Elegant Finish"]
    },
    {
      name: "Tiger Eye",
      description: "Warm golden-brown finish with distinctive grain patterns",
      image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-tiger-eye-web.jpg",
      characteristics: ["Golden Brown", "Distinctive Grain", "Warm Appeal", "Natural Beauty"]
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Material", value: "Signature Grade Composite" },
    { name: "Thickness", value: "20mm to 25mm" },
    { name: "Width", value: "150mm to 180mm" },
    { name: "Length", value: "3000mm to 3600mm" },
    { name: "Surface Finish", value: "Signature Textured" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "25 Years Structural" },
  ];

  // Signature features
  const signatureFeatures = [
    {
      title: "Unique Textures",
      description: "Exclusive texture patterns inspired by natural materials with premium finish quality",
      icon: "✨"
    },
    {
      title: "Signature Design",
      description: "Distinctive color palette and patterns that create architectural statement pieces",
      icon: "🎨"
    },
    {
      title: "Premium Quality",
      description: "Enhanced material composition for superior performance and longevity",
      icon: "🏆"
    },
    {
      title: "Architectural Grade",
      description: "Professional-grade materials suitable for high-end architectural applications",
      icon: "🏗️"
    }
  ];

  // Design advantages
  const designAdvantages = [
    "Exclusive Signature Patterns",
    "Natural Material Inspiration",
    "Premium Texture Quality",
    "Distinctive Color Palette",
    "Architectural Statement Design",
    "Professional Grade Finish"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/IMG_1348.jpg" 
            alt="Soar Signature Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Soar Signature
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Signature series with unique textures and premium aesthetics
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Distinctive Design, Signature Performance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Soar Signature series represents the ultimate in architectural cladding design, featuring 
                exclusive patterns and textures inspired by natural materials. Each finish in this premium 
                collection has been carefully developed to create distinctive architectural statements while 
                maintaining exceptional performance characteristics.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With four unique color options - Brown Jasper, Obsidian, Opal, and Tiger Eye - the Soar 
                Signature collection provides architects with sophisticated design tools to create memorable 
                building facades that stand out from conventional materials.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The signature texture patterns and enhanced material composition ensure that these premium 
                finishes deliver both visual impact and long-term durability for the most demanding 
                architectural applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Colors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Signature Color Collection</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {signatureColors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={color.image} 
                    alt={color.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{color.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{color.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold mb-3">Characteristics:</h4>
                    {color.characteristics.map((characteristic, charIndex) => (
                      <div key={charIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mr-2" style={{backgroundColor: '#D4AF37'}}></div>
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

      {/* Signature Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Signature Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {signatureFeatures.map((feature, index) => (
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
          <h2 className="text-3xl font-bold mb-10 text-center">Soar Signature Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-opal-web.jpg"
                  alt="Soar Signature Opal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-tiger-eye-web.jpg"
                  alt="Soar Signature Tiger Eye"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/Soar-Brown+Jasper.jpg"
                  alt="Soar Signature Brown Jasper"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/IMG_0125+-+Large.jpg"
                  alt="Soar Signature Installation"
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
                  <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor: '#D4AF37'}}></div>
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
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

      {/* Premium Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Premium Applications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Commercial</h3>
                <p className="text-gray-600">Premium office buildings, hotels, and upscale retail spaces</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Architectural Homes</h3>
                <p className="text-gray-600">Custom homes and architectural showcase projects</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Signature Projects</h3>
                <p className="text-gray-600">Cultural centers, museums, and landmark buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Create Your Signature Statement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore the Soar Signature collection and create distinctive architectural facades that soar above the ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/wall-cladding-soffit/sylvanix-cladding'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to SYLVANIX
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoarSignature;
