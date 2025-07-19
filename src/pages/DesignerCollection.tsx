import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DesignerCollection() {
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

  // Designer Collection color options
  const colorOptions = [
    {
      name: "Chocolate",
      description: "Rich, warm brown tones that add sophistication and depth",
      image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/CHOCOLATE/Designer-chocolateD-removebg-preview.jpg",
      characteristics: ["Warm Tone", "Rich Texture", "Elegant Finish", "Versatile Application"]
    },
    {
      name: "Glacier White",
      description: "Clean, contemporary white finish for modern architectural designs",
      image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/GLACIER WHITE/Designer+Collection+Glacier+White.png",
      characteristics: ["Pure White", "Modern Appeal", "Light Reflective", "Timeless Design"]
    },
    {
      name: "Harvest Brown",
      description: "Natural earth tones that complement traditional and rustic designs",
      image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/HARVEST BROWN/",
      characteristics: ["Earth Tone", "Natural Look", "Warm Appeal", "Traditional Style"]
    },
    {
      name: "Lake Grey",
      description: "Sophisticated grey tones perfect for contemporary architecture",
      image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/LAKE GREY/",
      characteristics: ["Contemporary Grey", "Neutral Tone", "Modern Aesthetic", "Architectural Grade"]
    },
    {
      name: "Summit Grey",
      description: "Premium grey finish with subtle texture for upscale applications",
      image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/SUMMIT GREY/",
      characteristics: ["Premium Grey", "Subtle Texture", "Upscale Finish", "Professional Grade"]
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Material", value: "High-Grade Composite" },
    { name: "Thickness", value: "18mm to 25mm" },
    { name: "Width", value: "150mm to 180mm" },
    { name: "Length", value: "3000mm to 3600mm" },
    { name: "Surface Finish", value: "Designer Textured" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "25 Years Structural" },
  ];

  // Key features
  const features = [
    {
      title: "Premium Design",
      description: "Sophisticated color palette developed by professional designers for architectural excellence",
      icon: "🎨"
    },
    {
      title: "Superior Durability",
      description: "Advanced composite technology ensures long-lasting performance in all weather conditions",
      icon: "💪"
    },
    {
      title: "Easy Maintenance",
      description: "Low maintenance requirements with stain and fade resistance for lasting beauty",
      icon: "✨"
    },
    {
      title: "Versatile Application",
      description: "Suitable for both residential and commercial projects with flexible design options",
      icon: "🏗️"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/CHOCOLATE/Designer-chocolateD-removebg-preview.jpg" 
            alt="Designer Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Designer Collection
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium designer cladding with sophisticated color options
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Sophisticated Design Meets Premium Performance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Designer Collection represents the pinnacle of architectural cladding design, featuring 
                carefully curated color options that complement any building style. Each finish has been 
                developed in collaboration with leading architects and designers to ensure exceptional 
                aesthetic appeal and long-term performance.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With five distinct color options ranging from warm earth tones to contemporary greys and 
                pure whites, the Designer Collection provides architects with the creative freedom to 
                realize their vision while ensuring superior durability and weather resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Color Options</h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {colorOptions.map((color, index) => (
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
                    src={color.image} 
                    alt={color.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{color.name}</h3>
                  <p className="text-gray-600 mb-4">{color.description}</p>
                  
                  <div className="space-y-2">
                    {color.characteristics.map((characteristic, charIndex) => (
                      <div key={charIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Collection Features</h2>
          
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
          <h2 className="text-3xl font-bold mb-10 text-center">Designer Collection Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/GLACIER WHITE/Designer+Collection+Glacier+White.png"
                  alt="Glacier White Application"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/CHOCOLATE/Designer-chocolateD-removebg-preview.jpg"
                  alt="Chocolate Finish Detail"
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Applications</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Commercial Buildings</h3>
                <p className="text-gray-600">Perfect for office buildings, retail spaces, and corporate facilities</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Homes</h3>
                <p className="text-gray-600">Ideal for upscale residential projects and architectural accents</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Institutional</h3>
                <p className="text-gray-600">Suitable for hotels, schools, and public buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Designer Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore the Designer Collection and create stunning architectural facades with premium finishes.
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

export default DesignerCollection;
