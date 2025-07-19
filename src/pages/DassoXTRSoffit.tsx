import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DassoXTRSoffit() {
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
    { name: "Material", value: "High-Performance Bamboo Composite" },
    { name: "Thickness", value: "15mm to 20mm" },
    { name: "Width", value: "100mm to 150mm" },
    { name: "Length", value: "2400mm to 3600mm" },
    { name: "Ventilation", value: "Perforated & Solid Panel Options" },
    { name: "Installation", value: "Hidden Clip Fastening" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "20 Years Performance" },
  ];

  // Soffit configurations
  const soffitConfigurations = [
    {
      name: "Perforated Soffit",
      description: "High-performance ventilated panels with optimal airflow design",
      image: "/Wall Clading/dassoXTR Soffit/1622077960185491.png",
      features: ["Maximum Ventilation", "Weather Protection", "Insect Barrier", "Thermal Control"]
    },
    {
      name: "Solid Panel",
      description: "Non-ventilated panels for complete weather barrier and clean aesthetics",
      image: "/Wall Clading/dassoXTR Soffit/20190903155731202.jpg",
      features: ["Complete Weather Seal", "Sound Insulation", "Thermal Barrier", "Minimal Maintenance"]
    }
  ];

  // Key features
  const features = [
    {
      title: "XTR Durability",
      description: "Enhanced performance characteristics for extreme weather conditions and long-term stability",
      icon: "🛡️"
    },
    {
      title: "Superior Ventilation",
      description: "Advanced perforation patterns ensure optimal airflow while maintaining structural integrity",
      icon: "🌬️"
    },
    {
      title: "Weather Resistance",
      description: "Exceptional resistance to moisture, UV rays, and temperature variations",
      icon: "☀️"
    },
    {
      title: "Easy Installation",
      description: "Streamlined installation process with precision-engineered hidden fastening system",
      icon: "⚙️"
    }
  ];

  // Performance advantages
  const performanceAdvantages = [
    "Enhanced Weather Resistance",
    "Superior Ventilation Control",
    "UV Fade Protection",
    "Moisture Barrier Technology",
    "Pest and Insect Resistant",
    "Thermal Insulation Properties"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/dassoXTR Soffit/1622078064140683.jpeg" 
            alt="dassoXTR Soffit"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            dassoXTR Soffit
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            High-quality bamboo composite soffit with superior ventilation properties
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Advanced Soffit Solutions for Superior Performance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                dassoXTR Soffit delivers exceptional performance for roof overhangs and eave applications with 
                enhanced bamboo composite technology. Our XTR (Extreme) series provides superior ventilation 
                control, weather resistance, and long-term durability for demanding building envelope requirements.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Engineered with advanced perforation patterns and weather-resistant coatings, dassoXTR Soffit 
                ensures optimal building performance while maintaining the natural beauty and sustainability 
                benefits of bamboo composite materials.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Available in both perforated and solid configurations, our soffit systems provide architects 
                with the flexibility to meet specific ventilation requirements while ensuring comprehensive 
                weather protection and aesthetic integration with building facades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soffit Configurations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">XTR Soffit Configurations</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {soffitConfigurations.map((config, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={config.image} 
                    alt={config.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{config.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{config.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {config.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
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
          <h2 className="text-3xl font-bold mb-12 text-center">XTR Performance Features</h2>
          
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
          <h2 className="text-3xl font-bold mb-10 text-center">Product Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Soffit/1622077960185491.png"
                  alt="dassoXTR Perforated Soffit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Soffit/1622078064140683.jpeg"
                  alt="dassoXTR Soffit Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Soffit/1622078212349502.jpeg"
                  alt="dassoXTR Soffit Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Soffit/20190903155731202.jpg"
                  alt="dassoXTR Solid Soffit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Soffit/20191010130936240.jpg"
                  alt="dassoXTR Soffit Application"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Performance Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Performance Advantages</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
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

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose dassoXTR Soffit?</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
                <p className="text-gray-600">Made from sustainable bamboo with minimal environmental impact</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Performance</h3>
                <p className="text-gray-600">XTR technology provides superior durability and weather resistance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
                <p className="text-gray-600">Minimal upkeep requirements with long-lasting performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Optimize Your Building's Performance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore dassoXTR Soffit solutions and ensure optimal ventilation and protection for your building envelope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/wall-cladding-soffit'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to All Cladding
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DassoXTRSoffit;
