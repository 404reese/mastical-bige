import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DassoXTRCladding() {
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
    { name: "Thickness", value: "20mm to 23mm" },
    { name: "Width", value: "140mm to 160mm" },
    { name: "Length", value: "2900mm to 3600mm" },
    { name: "Surface Finish", value: "Weather Shield Coating" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "20 Years Performance" },
  ];

  // Key features
  const features = [
    {
      title: "XTR Performance",
      description: "Enhanced durability with superior weather resistance for extreme conditions",
      icon: "🛡️"
    },
    {
      title: "Weather Shield",
      description: "Advanced coating technology provides maximum protection against elements",
      icon: "☔"
    },
    {
      title: "Thermal Stability",
      description: "Excellent dimensional stability across wide temperature ranges",
      icon: "🌡️"
    },
    {
      title: "Easy Installation",
      description: "Streamlined installation process with precision-engineered components",
      icon: "🔧"
    }
  ];

  // Performance benefits
  const benefits = [
    "Extreme Weather Resistance",
    "UV Fade Protection",
    "Moisture Barrier Technology",
    "Thermal Insulation Properties",
    "Sound Dampening Qualities",
    "Pest Resistant Material"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/dassoXTR Cladding/20190926101509282.jpg" 
            alt="dassoXTR Cladding"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            dassoXTR Cladding
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            High-performance bamboo composite cladding with excellent weather resistance
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Extreme Performance, Natural Beauty</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                dassoXTR Cladding takes bamboo composite technology to the next level with enhanced performance 
                characteristics designed for challenging environments. Our XTR (Extreme) series combines the 
                sustainability of bamboo with advanced engineering for superior weather resistance.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Engineered for demanding applications, dassoXTR provides exceptional durability while maintaining 
                the natural aesthetics that make bamboo such an attractive building material. The enhanced weather 
                shield coating ensures long-lasting performance in all climatic conditions.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Whether facing coastal salt spray, extreme temperature variations, or high UV exposure, dassoXTR 
                Cladding delivers consistent performance and appearance retention that exceeds conventional materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
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
                  src="/Wall Clading/dassoXTR Cladding/1582769044428157.png"
                  alt="dassoXTR Cladding Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Cladding/1582769044620887.png"
                  alt="dassoXTR Cladding Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Cladding/1582769113158907.png"
                  alt="dassoXTR Cladding System"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Cladding/1582769160505823.jpeg"
                  alt="dassoXTR Cladding Facade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Cladding/20190926101519190.jpg"
                  alt="dassoXTR Cladding Commercial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/dassoXTR Cladding/20190926101520718.jpg"
                  alt="dassoXTR Cladding Residential"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Performance Benefits</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
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

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose dassoXTR?</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Choice</h3>
                <p className="text-gray-600">Made from rapidly renewable bamboo, carbon negative production</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Superior Performance</h3>
                <p className="text-gray-600">Outperforms traditional materials in durability and weather resistance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
                <p className="text-gray-600">Lower lifecycle costs with minimal maintenance requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience XTR Performance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore dassoXTR Cladding and discover the ultimate in bamboo composite performance.
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

export default DassoXTRCladding;
