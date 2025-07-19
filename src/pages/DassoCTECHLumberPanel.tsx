import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DassoCTECHLumberPanel() {
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
    { name: "Thickness", value: "25mm to 40mm" },
    { name: "Width", value: "200mm to 300mm" },
    { name: "Length", value: "2400mm to 4800mm" },
    { name: "Density", value: "0.8-0.9 g/cm³" },
    { name: "Moisture Content", value: "8-12%" },
    { name: "Tensile Strength", value: "40-60 MPa" },
    { name: "Warranty", value: "25 Years Structural" },
  ];

  // Key features
  const features = [
    {
      title: "Superior Strength",
      description: "Enhanced tensile and compressive strength exceeding traditional hardwoods",
      icon: "💪"
    },
    {
      title: "Dimensional Stability",
      description: "Minimal expansion and contraction with temperature and humidity changes",
      icon: "📏"
    },
    {
      title: "Workability",
      description: "Easy to machine, drill, cut, and finish with standard woodworking tools",
      icon: "🔨"
    },
    {
      title: "Sustainable Material",
      description: "Made from rapidly renewable bamboo with carbon-negative production",
      icon: "🌱"
    }
  ];

  // Applications
  const applications = [
    {
      category: "Structural Applications",
      uses: ["Load-bearing beams", "Posts and columns", "Joists and rafters", "Structural panels"],
      icon: "🏗️"
    },
    {
      category: "Furniture & Cabinetry",
      uses: ["Table tops", "Cabinet doors", "Shelving systems", "Furniture frames"],
      icon: "🪑"
    },
    {
      category: "Architectural Millwork",
      uses: ["Window frames", "Door frames", "Trim and molding", "Stair components"],
      icon: "🏛️"
    },
    {
      category: "Industrial Uses",
      uses: ["Shipping pallets", "Industrial shelving", "Machine bases", "Workshop benches"],
      icon: "⚙️"
    }
  ];

  // Processing advantages
  const processingAdvantages = [
    "Standard Woodworking Tools Compatible",
    "Excellent Screw and Nail Holding",
    "Superior Glue Bond Strength",
    "Smooth Sanding and Finishing",
    "Precise Machining Capabilities",
    "Stable Joinery Performance"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093824403.jpg" 
            alt="dassoCTECH Lumber & Panel"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            dassoCTECH Lumber & Panel
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium bamboo lumber and panel solutions with superior structural properties
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Engineering Excellence in Sustainable Materials</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                dassoCTECH Lumber & Panel represents the pinnacle of sustainable building materials, combining 
                advanced bamboo engineering with traditional lumber functionality. Our innovative manufacturing 
                process creates products that exceed conventional lumber in strength, stability, and environmental 
                performance.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Whether you're building furniture, creating architectural millwork, or constructing structural 
                components, dassoCTECH lumber and panels provide the reliability and performance you need while 
                supporting sustainable construction practices and reducing environmental impact.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With superior dimensional stability, enhanced workability, and natural resistance to moisture 
                and insects, our products deliver consistent performance that meets the demanding requirements 
                of professional builders, architects, and craftspeople.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
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
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766898125843.jpeg"
                  alt="dassoCTECH Lumber Beams"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766899199977.jpeg"
                  alt="Panel Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093824569.jpg"
                  alt="Structural Applications"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093825905.jpg"
                  alt="Architectural Millwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093826712.jpg"
                  alt="Furniture Applications"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {use}
                    </div>
                  ))}
                </div>
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

      {/* Processing Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Processing Advantages</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processingAdvantages.map((advantage, index) => (
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

      {/* Sustainability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Sustainability Advantages</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapidly Renewable</h3>
                <p className="text-gray-600">Bamboo grows 3-5 times faster than hardwood trees, reaching maturity in 3-5 years</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Carbon Negative</h3>
                <p className="text-gray-600">Bamboo absorbs more CO2 than trees and our production process sequesters carbon</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Zero Waste</h3>
                <p className="text-gray-600">Our manufacturing process utilizes 100% of the bamboo with zero waste production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Build Better with dassoCTECH</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore dassoCTECH Lumber & Panel solutions and discover how sustainable materials can enhance your next project.
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

export default DassoCTECHLumberPanel;
