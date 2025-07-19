import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DassoXTRLumberPanel() {
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
    { name: "Thickness", value: "25mm to 40mm" },
    { name: "Width", value: "200mm to 300mm" },
    { name: "Length", value: "2400mm to 4800mm" },
    { name: "Density", value: "0.9-1.0 g/cm³" },
    { name: "Moisture Content", value: "6-10%" },
    { name: "Tensile Strength", value: "60-80 MPa" },
    { name: "Warranty", value: "20 Years Performance" },
  ];

  // XTR Performance features
  const xtrFeatures = [
    {
      title: "Extreme Durability",
      description: "Enhanced performance characteristics for the most demanding applications and environments",
      icon: "🛡️"
    },
    {
      title: "Superior Strength",
      description: "Higher density and strength properties exceeding traditional lumber and standard bamboo products",
      icon: "💪"
    },
    {
      title: "Weather Resistance",
      description: "Exceptional resistance to moisture, UV radiation, and temperature extremes",
      icon: "🌡️"
    },
    {
      title: "Precision Engineering",
      description: "Manufactured to exact tolerances for demanding structural and architectural applications",
      icon: "⚙️"
    }
  ];

  // Heavy-duty applications
  const heavyDutyApplications = [
    {
      category: "Marine Construction",
      uses: ["Dock structures", "Boat building", "Marine pilings", "Waterfront construction"],
      icon: "⚓"
    },
    {
      category: "Industrial Structures",
      uses: ["Heavy machinery bases", "Industrial flooring", "Warehouse structures", "Equipment supports"],
      icon: "🏭"
    },
    {
      category: "Extreme Weather Projects",
      uses: ["Hurricane-resistant construction", "Cold climate applications", "High-humidity environments", "Outdoor structures"],
      icon: "🌪️"
    },
    {
      category: "Commercial Construction",
      uses: ["High-rise buildings", "Commercial flooring systems", "Load-bearing structures", "Architectural beams"],
      icon: "🏢"
    }
  ];

  // Performance advantages
  const performanceAdvantages = [
    "Enhanced Load-Bearing Capacity",
    "Superior Moisture Resistance",
    "Extreme Weather Durability",
    "High-Precision Machining",
    "Structural Grade Performance",
    "Long-Term Stability"
  ];

  // Comparison benefits
  const comparisonBenefits = [
    {
      aspect: "Strength vs Weight",
      benefit: "40% stronger than oak with 20% less weight",
      icon: "⚖️"
    },
    {
      aspect: "Moisture Resistance",
      benefit: "Superior to traditional lumber in wet conditions",
      icon: "💧"
    },
    {
      aspect: "Dimensional Stability",
      benefit: "3x more stable than hardwood lumber",
      icon: "📐"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Lumber Panels/dassoXTR Lumber & Panel/20190926102641145.jpg" 
            alt="dassoXTR Lumber & Panel"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            dassoXTR Lumber & Panel
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            High-performance bamboo lumber with enhanced durability for demanding applications
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Extreme Performance for Extreme Applications</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                dassoXTR Lumber & Panel takes bamboo composite technology to new heights with enhanced 
                performance characteristics designed for the most demanding structural and architectural 
                applications. Our XTR (Extreme) series delivers superior strength, durability, and 
                weather resistance for projects that require exceptional performance.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Engineered for heavy-duty construction, marine environments, and extreme weather conditions, 
                dassoXTR lumber and panels provide reliability and performance that exceeds traditional 
                materials while maintaining the environmental benefits of sustainable bamboo production.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Whether you're building in challenging environments, constructing high-load structures, 
                or creating architectural elements that demand precision and durability, dassoXTR delivers 
                the performance you need with the sustainability you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* XTR Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">XTR Performance Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {xtrFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Product Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoXTR Lumber & Panel/1582767748123016.jpeg"
                  alt="dassoXTR Lumber Beams"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoXTR Lumber & Panel/1582767754125488.png"
                  alt="XTR Panel Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoXTR Lumber & Panel/20190926102648307.jpg"
                  alt="Structural Applications"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoXTR Lumber & Panel/20190926102650955.jpg"
                  alt="Heavy-Duty Construction"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Heavy-Duty Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Heavy-Duty Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {heavyDutyApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{app.icon}</span>
                  <h3 className="text-xl font-bold">{app.category}</h3>
                </div>
                <div className="space-y-2">
                  {app.uses.map((use, useIndex) => (
                    <div key={useIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {use}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Performance Advantages</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {comparisonBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.aspect}</h3>
                <p className="text-gray-600">{benefit.benefit}</p>
              </motion.div>
            ))}
          </div>

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
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
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

      {/* Why Choose XTR */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose dassoXTR?</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Extreme Performance</h3>
                <p className="text-gray-600">Enhanced properties for demanding applications and challenging environments</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Grade</h3>
                <p className="text-gray-600">Engineered to meet the highest standards for commercial and industrial use</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Excellence</h3>
                <p className="text-gray-600">Superior performance without compromising environmental responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Extreme Performance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore dassoXTR Lumber & Panel solutions and discover how extreme performance meets sustainable excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/lumber-panels'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to Lumber Panels
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DassoXTRLumberPanel;
