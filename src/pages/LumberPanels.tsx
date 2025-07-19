import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function LumberPanels() {
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
    { name: "Density", value: "0.7-0.9 g/cm³" },
    { name: "Installation", value: "Mechanical Fastening" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "20-25 Years Structural" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What are lumber panels used for?",
      answer: "Lumber panels are versatile building materials used for structural applications, furniture making, cabinetry, shelving, and architectural millwork. They provide the strength and workability of traditional lumber with enhanced sustainability."
    },
    {
      question: "How do bamboo lumber panels compare to traditional wood?",
      answer: "Bamboo lumber panels offer superior strength-to-weight ratio, better dimensional stability, and faster growth cycle compared to traditional hardwoods. They're also more resistant to moisture and insects."
    },
    {
      question: "Can lumber panels be used for outdoor applications?",
      answer: "Yes, our lumber panels are engineered for both indoor and outdoor use. They feature weather-resistant properties that make them suitable for exterior projects and high-moisture environments."
    },
    {
      question: "What tools are needed to work with lumber panels?",
      answer: "Lumber panels can be worked with standard woodworking tools including table saws, routers, drills, and sanders. They machine easily and accept fasteners, finishes, and adhesives well."
    },
    {
      question: "Are lumber panels environmentally friendly?",
      answer: "Yes, our bamboo lumber panels are made from rapidly renewable bamboo that grows 3-5 times faster than hardwood trees, making them a highly sustainable building material choice."
    }
  ];

  // Lumber panels main categories
  const lumberMainCategories = [
    {
      name: "dassoCTECH Lumber & Panel",
      description: "Premium bamboo lumber and panel solutions with superior structural properties",
      image: "/Lumber Panels/dassoCTECH Lumber & Panel/1582766898125843.jpeg",
      link: "/lumber-panels/dassoCTECH-lumber-panel",
      applications: ["Structural Lumber", "Furniture Grade", "Architectural Millwork", "Industrial Applications"]
    },
    {
      name: "dassoXTR Lumber & Panel",
      description: "High-performance bamboo lumber with enhanced durability for demanding applications",
      image: "/Lumber Panels/dassoXTR Lumber & Panel/1582767748123016.jpeg",
      link: "/lumber-panels/dassoXTR-lumber-panel",
      applications: ["Heavy-Duty Construction", "Marine Grade", "Extreme Weather", "Commercial Projects"]
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093824403.jpg" 
            alt="Premium Lumber Panels"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Lumber & Panels
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium bamboo lumber and panel solutions for structural and architectural applications
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Sustainable Strength for Every Project</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our lumber and panel systems represent the next generation of sustainable building materials, 
                combining the natural strength of bamboo with advanced manufacturing techniques to create 
                products that exceed traditional lumber in performance and environmental responsibility.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Whether you're building furniture, architectural millwork, or structural components, our 
                bamboo lumber and panels provide the versatility and reliability you need while supporting 
                sustainable construction practices that benefit both your project and the environment.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With superior dimensional stability, enhanced strength characteristics, and natural resistance 
                to moisture and insects, our lumber and panel products deliver consistent performance across 
                a wide range of applications and environmental conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Premium Lumber & Panel Categories</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {lumberMainCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => window.location.href = category.link}
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.applications.map((application, appIndex) => (
                        <span key={appIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                      Explore {category.name}
                    </button>
                  </div>
                </div>
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
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093824569.jpg"
                  alt="dassoCTECH Lumber Applications"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoXTR Lumber & Panel/20190926102641145.jpg"
                  alt="dassoXTR Panel Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093825905.jpg"
                  alt="Architectural Applications"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoXTR Lumber & Panel/20190926102648307.jpg"
                  alt="Structural Components"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766899199977.jpeg"
                  alt="Manufacturing Process"
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

      {/* Applications Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Application Areas</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Structural Lumber</h3>
                <p className="text-gray-600 text-sm">Beams, posts, and structural components for buildings</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🪑</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Furniture Making</h3>
                <p className="text-gray-600 text-sm">Tables, chairs, cabinets, and custom furniture pieces</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Architectural Millwork</h3>
                <p className="text-gray-600 text-sm">Custom millwork, trim, and architectural details</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Industrial Applications</h3>
                <p className="text-gray-600 text-sm">Marine construction, heavy-duty projects, and specialized uses</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-6 text-gray-700">Our lumber and panels provide sustainable alternatives for traditional wood applications.</p>
              <button 
                onClick={() => window.location.href = '/contact-us'} 
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Discuss Your Project Requirements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Build Sustainably with Premium Lumber & Panels</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our lumber and panel solutions and discover how sustainable materials can enhance your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
              View Technical Specifications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LumberPanels;
