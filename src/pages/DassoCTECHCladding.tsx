import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DassoCTECHCladding() {
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
    { name: "Thickness", value: "20mm to 25mm" },
    { name: "Width", value: "140mm to 160mm" },
    { name: "Length", value: "2900mm to 3600mm" },
    { name: "Surface Finish", value: "Natural Grain Texture" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "25 Years Structural" },
  ];

  // Key features
  const features = [
    {
      title: "Sustainable Bamboo",
      description: "Made from rapidly renewable bamboo fiber, environmentally responsible choice",
      icon: "🌱"
    },
    {
      title: "Superior Durability",
      description: "Engineered for exceptional strength and longevity in all weather conditions",
      icon: "💪"
    },
    {
      title: "Natural Aesthetics",
      description: "Beautiful natural wood grain appearance with consistent color and texture",
      icon: "🎨"
    },
    {
      title: "Low Maintenance",
      description: "Requires minimal upkeep while maintaining premium appearance over time",
      icon: "⚡"
    }
  ];

  // Applications
  const applications = [
    "Exterior Building Facades",
    "Commercial Buildings",
    "Residential Homes",
    "Architectural Features",
    "Interior Accent Walls",
    "Weather Barriers"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/dassoCTECH Cladding/20190926100942258.jpg" 
            alt="dassoCTECH Cladding"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            dassoCTECH Cladding
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium bamboo composite cladding with superior durability and natural aesthetics
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Sustainable Innovation in Cladding Technology</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                dassoCTECH Cladding represents a breakthrough in sustainable building materials, combining the natural 
                beauty of bamboo with advanced composite technology. Our bamboo composite cladding offers superior 
                performance characteristics while maintaining environmental responsibility.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Engineered for both residential and commercial applications, dassoCTECH Cladding provides exceptional 
                durability, weather resistance, and thermal performance, making it the ideal choice for modern 
                architectural projects that demand both beauty and sustainability.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With its unique manufacturing process and premium bamboo fiber composition, dassoCTECH delivers 
                consistent quality, natural aesthetics, and long-lasting performance that exceeds traditional 
                building materials.
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
                  src="/Wall Clading/dassoCTECH Cladding/1567607951173044.png"
                  alt="dassoCTECH Cladding Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Cladding/1567607955174803.png"
                  alt="dassoCTECH Cladding Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Cladding/1567607959182280.png"
                  alt="dassoCTECH Cladding Facade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Cladding/20190926100925125.jpg"
                  alt="dassoCTECH Cladding Application"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Cladding/20190926100942414.jpg"
                  alt="dassoCTECH Cladding Commercial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoCTECH Cladding/20190926100942908.jpg"
                  alt="dassoCTECH Cladding Residential"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
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

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Applications</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Installation Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Surface Preparation</h3>
                <p className="text-gray-600 text-sm">Preparation of substrate and installation framework</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Framework Installation</h3>
                <p className="text-gray-600 text-sm">Mounting of support structure and fastening system</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Panel Installation</h3>
                <p className="text-gray-600 text-sm">Precise installation of cladding panels with hidden fasteners</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold text-gray-900">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Final Inspection</h3>
                <p className="text-gray-600 text-sm">Quality control and finishing touches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Sustainable Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore dassoCTECH Cladding and receive expert guidance for your sustainable building project.
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

export default DassoCTECHCladding;
