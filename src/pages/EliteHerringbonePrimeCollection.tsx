import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function EliteHerringbonePrimeCollection() {
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
    { name: "Thickness", value: "12mm" },
    { name: "Plank Size", value: "600x100mm Herringbone" },
    { name: "Pattern", value: "Prime Herringbone Layout" },
    { name: "Surface", value: "Ultra-Realistic Cave Texture" },
    { name: "Wear Layer", value: "AC5 Prime Commercial Grade" },
    { name: "Installation", value: "Premium Click Lock System" },
    { name: "Warranty", value: "30 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Cave Inspired",
      description: "Unique designs inspired by the world's most magnificent underground caves",
      icon: "🕳️"
    },
    {
      title: "Prime Quality",
      description: "Superior AC5 prime grade with enhanced durability and performance",
      icon: "👑"
    },
    {
      title: "Ultra-Realistic",
      description: "Advanced printing technology creates incredibly realistic natural textures",
      icon: "🎯"
    },
    {
      title: "Exclusive Designs",
      description: "Limited edition patterns not available in standard collections",
      icon: "💎"
    }
  ];

  // Cave series designs
  const caveDesigns = [
    {
      name: "Dark Star Cave",
      description: "Deep, mysterious tones inspired by the world's deepest cave systems",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of dark star cave revise 3.png",
      characteristics: ["Deep Mystery", "Dark Elegance", "Dramatic Appeal", "Sophisticated Finish"]
    },
    {
      name: "Devils Cave",
      description: "Bold and dramatic patterns reflecting the power of underground formations",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of devils cave.png",
      characteristics: ["Bold Patterns", "Dramatic Style", "Underground Power", "Strong Character"]
    },
    {
      name: "Krubera Cave",
      description: "Intricate textures inspired by the world's deepest known cave",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of krubera cave.png",
      characteristics: ["Intricate Texture", "Deepest Known", "Complex Patterns", "World Record"]
    },
    {
      name: "Orda Cave",
      description: "Crystal-clear inspiration from the underwater cave renowned for its purity",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of orda cave revise 3.png",
      characteristics: ["Crystal Clear", "Underwater Beauty", "Pure Tones", "Pristine Quality"]
    },
    {
      name: "Samaesen Hole",
      description: "Unique vertical formations inspired by extraordinary cave architecture",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of samaesen hole.png",
      characteristics: ["Vertical Forms", "Unique Architecture", "Extraordinary Design", "Sculptural Appeal"]
    },
    {
      name: "The Shaft",
      description: "Linear patterns inspired by vertical cave passages and natural shafts",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of the shaft revise 2.png",
      characteristics: ["Linear Patterns", "Vertical Passage", "Natural Shafts", "Geometric Beauty"]
    },
    {
      name: "Wind Cave",
      description: "Flowing patterns inspired by the cave known for its unique wind phenomena",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of wind cave revise 2.png",
      characteristics: ["Flowing Patterns", "Wind Phenomena", "Unique Movement", "Natural Flow"]
    },
    {
      name: "Silmanite",
      description: "Mineral-inspired textures reflecting rare underground crystal formations",
      image: "/Laminate/Elite Herringbone Prime Collection/3025_slimanite.tif",
      characteristics: ["Mineral Inspired", "Crystal Formation", "Rare Beauty", "Geological Wonder"]
    }
  ];

  // Prime benefits
  const primeBenefits = [
    "30-Year Extended Warranty",
    "Enhanced Surface Protection",
    "Superior Color Stability", 
    "Advanced Moisture Resistance",
    "Premium Click Lock System",
    "Professional Grade Performance"
  ];

  // Cave collection advantages
  const caveAdvantages = [
    "Unique Natural Inspiration",
    "Limited Edition Designs",
    "Ultra-Realistic Textures",
    "Conversation Starter Appeal",
    "Artistic Floor Statements",
    "Exclusive Pattern Library"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Laminate/Elite Herringbone Prime Collection/Copy of orda cave revise 3.png" 
            alt="Elite Herringbone Prime Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elite Herringbone Prime Collection
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Cave-inspired herringbone patterns with premium prime quality and 30-year warranty
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Underground Artistry</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Elite Herringbone Prime Collection ventures into the mysterious world beneath 
                our feet, drawing inspiration from the planet's most spectacular cave systems. 
                Each design captures the raw beauty and intricate formations found in these 
                underground masterpieces, translating geological artistry into stunning floor patterns.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                This premium prime collection represents the pinnacle of laminate flooring 
                technology, featuring enhanced AC5 prime grade durability, ultra-realistic 
                textures, and a comprehensive 30-year warranty. The cave-inspired designs 
                offer unique patterns that serve as conversation starters while maintaining 
                the timeless appeal of herringbone layout.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Perfect for discerning homeowners and architects seeking truly distinctive 
                flooring that combines natural inspiration with cutting-edge performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cave Series Designs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cave Series Designs</h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caveDesigns.map((design, index) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center">Prime Collection Features</h2>
          
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
          <h2 className="text-3xl font-bold mb-10 text-center">Prime Collection Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Elite Herringbone Prime Collection/Copy of dark star cave revise 3.png"
                  alt="Dark Star Cave"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Elite Herringbone Prime Collection/Copy of orda cave revise 3.png"
                  alt="Orda Cave"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Elite Herringbone Prime Collection/Copy of krubera cave.png"
                  alt="Krubera Cave"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Elite Herringbone Prime Collection/Copy of wind cave revise 2.png"
                  alt="Wind Cave"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Elite Herringbone Prime Collection/flooring0222 .jpg"
                  alt="Prime Collection Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Prime Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Prime Quality Benefits</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primeBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cave Collection Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Cave Collection Advantages</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caveAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{advantage}</span>
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
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Properties</h3>
                <p className="text-gray-600">Exclusive homes requiring unique and sophisticated flooring</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design Studios</h3>
                <p className="text-gray-600">Creative spaces where flooring becomes part of the artistic vision</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Commercial</h3>
                <p className="text-gray-600">Upscale commercial spaces requiring distinctive character</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Underground Beauty</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the mysterious beauty of cave-inspired herringbone patterns with Prime Collection quality.
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

export default EliteHerringbonePrimeCollection;
