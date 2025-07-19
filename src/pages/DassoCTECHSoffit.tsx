import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DassoCTECHSoffit() {
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
    { name: "Material", value: "Premium Bamboo Composite" },
    { name: "Thickness", value: "15mm to 20mm" },
    { name: "Width", value: "100mm to 150mm" },
    { name: "Length", value: "2400mm to 3600mm" },
    { name: "Ventilation", value: "Perforated & Solid Options" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "20 Years Performance" },
  ];

  // Soffit types
  const soffitTypes = [
    {
      name: "Ventilated Soffit",
      description: "Perforated panels for optimal airflow and moisture control",
      image: "/Wall Clading/dassoCTECH Soffit/20190830144145104.jpg",
      features: ["Continuous Ventilation", "Moisture Control", "Pest Protection", "Energy Efficiency"]
    },
    {
      name: "Solid Soffit",
      description: "Non-perforated panels for weather protection and clean aesthetics",
      image: "/Wall Clading/dassoCTECH Soffit/20190830144145127.jpg",
      features: ["Weather Barrier", "Clean Appearance", "Sound Dampening", "Thermal Insulation"]
    }
  ];

  // Key features
  const features = [
    {
      title: "Ventilation Excellence",
      description: "Engineered perforation patterns ensure optimal airflow while maintaining structural integrity",
      icon: "💨"
    },
    {
      title: "Moisture Management",
      description: "Advanced moisture resistance prevents rot, mold, and structural damage",
      icon: "💧"
    },
    {
      title: "Natural Aesthetics",
      description: "Beautiful bamboo grain appearance complements any architectural style",
      icon: "🎨"
    },
    {
      title: "Easy Maintenance",
      description: "Low maintenance requirements with exceptional durability and longevity",
      icon: "🔧"
    }
  ];

  // Installation benefits
  const installationBenefits = [
    "Hidden Fastening System",
    "Precise Fit and Finish",
    "Reduced Installation Time",
    "Professional Appearance",
    "Weather Sealed Joints",
    "Long-term Stability"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/dassoCTECH Soffit/20190830144145588.jpg" 
            alt="dassoCTECH Soffit"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            dassoCTECH Soffit
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium bamboo composite soffit solutions for roof overhangs and eaves
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Eave Protection with Natural Beauty</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                dassoCTECH Soffit provides the perfect finishing touch for your building's roof overhangs and eaves. 
                Our bamboo composite soffit systems combine essential ventilation functionality with the natural 
                beauty of bamboo, creating seamless integration with your building envelope.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Engineered for both residential and commercial applications, dassoCTECH Soffit offers superior 
                moisture management, ventilation control, and weather protection while maintaining the sustainable 
                characteristics that make bamboo an environmentally responsible choice.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Available in both ventilated and solid configurations, our soffit systems provide architects and 
                builders with the flexibility to meet specific project requirements while ensuring long-term 
                performance and aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soffit Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Soffit Solutions</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {soffitTypes.map((type, index) => (
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
                    src={type.image} 
                    alt={type.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{type.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
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
                  src="/Wall Clading/dassoCTECH Soffit/1567147241452338.png"
                  alt="dassoCTECH Soffit Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Soffit/1567607959182280.png"
                  alt="dassoCTECH Soffit Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Soffit/20190830144145104.jpg"
                  alt="Ventilated Soffit Application"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Soffit/20190830144145640.jpg"
                  alt="Solid Soffit Application"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
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

      {/* Installation Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Installation Advantages</h2>
          
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

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Applications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Residential Eaves</h3>
                <p className="text-gray-600">Perfect for home roof overhangs and covered porches</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Commercial Buildings</h3>
                <p className="text-gray-600">Ideal for office buildings and retail structures</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Institutional</h3>
                <p className="text-gray-600">Suitable for schools, hospitals, and public buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Complete Your Building Envelope</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore dassoCTECH Soffit solutions and ensure proper ventilation and protection for your building.
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

export default DassoCTECHSoffit;
