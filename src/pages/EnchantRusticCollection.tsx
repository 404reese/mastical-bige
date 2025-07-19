import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function EnchantRusticCollection() {
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
    { name: "Material", value: "High-Density Fiberboard Core" },
    { name: "Thickness", value: "10mm" },
    { name: "Plank Size", value: "1210x196mm" },
    { name: "Pattern", value: "Rustic Plank Layout" },
    { name: "Surface", value: "Weathered Wood Texture" },
    { name: "Wear Layer", value: "AC4 Commercial Grade" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Warranty", value: "20 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Forest Inspired",
      description: "Authentic designs inspired by the world's most magnificent forest environments",
      icon: "🌲"
    },
    {
      title: "Weathered Look",
      description: "Naturally weathered appearance with authentic aging and character marks",
      icon: "🌿"
    },
    {
      title: "Rustic Charm",
      description: "Traditional rustic appeal perfect for country and farmhouse styles",
      icon: "🏚️"
    },
    {
      title: "Natural Texture",
      description: "Deep embossed textures replicate real reclaimed wood surfaces",
      icon: "🌳"
    }
  ];

  // Forest collection designs
  const forestDesigns = [
    {
      name: "Amazon Forest",
      description: "Rich, diverse tones inspired by the world's largest tropical rainforest",
      image: "/Laminate/Enchant Rustic Collection/Copy of Amazon Forest.jpg",
      characteristics: ["Tropical Rich", "Diverse Tones", "Rainforest Deep", "Natural Complexity"]
    },
    {
      name: "Black Forest",
      description: "Deep, dark wood tones inspired by Germany's legendary dense woodland",
      image: "/Laminate/Enchant Rustic Collection/Copy of Black Forest.jpg",
      characteristics: ["Deep Dark", "Germanic Style", "Dense Woodland", "Legendary Appeal"]
    },
    {
      name: "Mau Forest",
      description: "Unique African hardwood characteristics with distinctive grain patterns",
      image: "/Laminate/Enchant Rustic Collection/Copy of mau Forest.jpg",
      characteristics: ["African Heritage", "Unique Hardwood", "Distinctive Grain", "Cultural Richness"]
    },
    {
      name: "Moimbo Forest",
      description: "Exotic tropical wood patterns with natural weathering and character",
      image: "/Laminate/Enchant Rustic Collection/Copy of Moimbo Forest.jpg",
      characteristics: ["Exotic Tropical", "Natural Weathering", "Character Rich", "Unique Patterns"]
    }
  ];

  // Rustic benefits
  const rusticBenefits = [
    "Authentic Weathered Appearance",
    "Reclaimed Wood Look",
    "Character-Rich Textures",
    "Farmhouse Style Perfect",
    "Low Maintenance Beauty",
    "Scratch Hiding Texture"
  ];

  // Forest collection advantages
  const forestAdvantages = [
    "Global Forest Inspiration",
    "Diverse Style Options",
    "Natural Aging Effects",
    "Authentic Wood Character",
    "Timeless Rustic Appeal",
    "Country Home Perfect"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Laminate/Enchant Rustic Collection/Copy of Amazon Forest.jpg" 
            alt="Enchant Rustic Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enchant Rustic Collection
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Forest-inspired rustic designs with authentic weathered appearance and natural charm
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tales of Ancient Forests</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Enchant Rustic Collection tells the stories of the world's most iconic 
                forests, bringing their natural character and timeless beauty into your home. 
                Each design captures the authentic weathered appearance and rustic charm of 
                reclaimed wood from legendary forest environments around the globe.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                From the dense tropical richness of the Amazon to the mysterious depths of 
                Germany's Black Forest, this collection offers diverse styling options that 
                celebrate the natural aging and character development that only time can create. 
                The authentic weathered textures and natural grain variations make each plank 
                a unique piece of forest history.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Perfect for country homes, farmhouse styles, and anyone seeking the warmth 
                and character of rustic wood with the practical benefits of modern laminate 
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forest Collection Designs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Forest Series Designs</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {forestDesigns.map((design, index) => (
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
                  
                  <div className="grid grid-cols-2 gap-2">
                    {design.characteristics.map((characteristic, charIndex) => (
                      <div key={charIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Rustic Collection Features</h2>
          
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
          <h2 className="text-3xl font-bold mb-10 text-center">Rustic Collection Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Enchant Rustic Collection/Copy of Amazon Forest.jpg"
                  alt="Amazon Forest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Enchant Rustic Collection/Copy of Black Forest.jpg"
                  alt="Black Forest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Enchant Rustic Collection/Copy of mau Forest.jpg"
                  alt="Mau Forest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Laminate/Enchant Rustic Collection/Copy of Moimbo Forest.jpg"
                  alt="Moimbo Forest"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Rustic Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Rustic Style Benefits</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rusticBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forest Collection Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Forest Collection Advantages</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forestAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
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

      {/* Style Inspiration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Style Inspiration</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Farmhouse Style</h3>
                <p className="text-gray-600">Perfect for modern farmhouse and country home aesthetics</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🪵</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Rustic Cabin</h3>
                <p className="text-gray-600">Ideal for cabin retreats and rustic vacation homes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brown-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Country Cottage</h3>
                <p className="text-gray-600">Beautiful for cottage styles and vintage-inspired interiors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Perfect Applications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Family Rooms</h3>
                <p className="text-gray-600">Creates warm, welcoming spaces for family gatherings</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Dining Areas</h3>
                <p className="text-gray-600">Perfect backdrop for rustic dining and entertaining</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brown-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🛏️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Bedrooms</h3>
                <p className="text-gray-600">Creates cozy, comfortable sleeping environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Embrace Rustic Charm</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the natural beauty and timeless appeal of forest-inspired rustic laminate flooring.
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

export default EnchantRusticCollection;
