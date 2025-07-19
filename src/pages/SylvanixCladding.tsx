import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SylvanixCladding() {
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

  // SYLVANIX Cladding collections
  const sylvanixCollections = [
    {
      name: "Designer Collection",
      description: "Premium designer cladding with sophisticated color options",
      image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/CHOCOLATE/Designer-chocolateD-removebg-preview.jpg",
      link: "/wall-cladding-soffit/sylvanix-cladding/designer-collection",
      colors: ["Chocolate", "Glacier White", "Harvest Brown", "Lake Grey", "Summit Grey"],
      features: ["Premium Finish", "Weather Resistant", "UV Protected", "Low Maintenance"]
    },
    {
      name: "Soar Signature",
      description: "Signature series with unique textures and premium aesthetics",
      image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-opal-web.jpg",
      link: "/wall-cladding-soffit/sylvanix-cladding/soar-signature",
      colors: ["Brown Jasper", "Obsidian", "Opal", "Tiger Eye"],
      features: ["Signature Design", "Natural Texture", "Premium Quality", "Architectural Grade"]
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Material", value: "High-Grade Composite" },
    { name: "Thickness", value: "18mm to 25mm" },
    { name: "Width", value: "150mm to 180mm" },
    { name: "Length", value: "3000mm to 3600mm" },
    { name: "Surface Finish", value: "Textured Anti-Slip" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "25 Years Structural" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/IMG_1348.jpg" 
            alt="SYLVANIX Cladding"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SYLVANIX CLADDING
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium composite cladding solutions with designer aesthetics
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Exceptional Design Meets Superior Performance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                SYLVANIX Cladding represents the pinnacle of composite cladding technology, combining innovative materials 
                with sophisticated design aesthetics. Our collections offer architects and designers the freedom to create 
                stunning building facades that stand the test of time.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With two distinct collection lines - Designer Collection and Soar Signature - SYLVANIX provides 
                comprehensive solutions for both residential and commercial applications, ensuring superior performance 
                in all weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">SYLVANIX Collections</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {sylvanixCollections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => window.location.href = collection.link}
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{collection.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{collection.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {collection.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {collection.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                      Explore {collection.name}
                    </button>
                  </div>
                </div>
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
                  src="/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/GLACIER WHITE/Designer+Collection+Glacier+White.png"
                  alt="Designer Collection - Glacier White"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/CHOCOLATE/Designer-chocolateD-removebg-preview.jpg"
                  alt="Designer Collection - Chocolate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-opal-web.jpg"
                  alt="Soar Signature - Opal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-tiger-eye-web.jpg"
                  alt="Soar Signature - Tiger Eye"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/Soar-Brown+Jasper.jpg"
                  alt="Soar Signature - Brown Jasper"
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
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Commercial Buildings</h3>
                <p className="text-gray-600">Perfect for office buildings, retail spaces, and commercial facades</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Residential Homes</h3>
                <p className="text-gray-600">Ideal for modern homes, renovations, and architectural accents</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-flex mb-4">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Building?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore SYLVANIX Cladding options and receive expert guidance for your project.
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

export default SylvanixCladding;
