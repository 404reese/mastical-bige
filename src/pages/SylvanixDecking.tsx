import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SylvanixDecking() {
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

  // SYLVANIX-DECKING subcategories
  const sylvanixSubcategories = [
    {
      name: "Elite Collection",
      description: "Premium composite decking with superior durability and timeless aesthetics",
      image: "/deck/SYLVANIX-DECKING/elite-collection/mesa-brown.jpg",
      features: ["Warranty", "Fade Resistant", "Stain Resistant", "Scratch Resistant"],
      colors: ["Summit Grey", "Sand Dune", "Mesa Brown"]
    },
    {
      name: "Elite Essential",
      description: "High-quality composite decking with excellent performance and value",
      image: "/deck/SYLVANIX-DECKING/elite-essential/tropical-gold.jpg",
      features: ["15-Year Warranty", "Weather Resistant", "Low Maintenance", "Eco-Friendly"],
      colors: ["Tropical Gold", "Ocean Blue", "Forest Green"]
    },
    {
      name: "Skyline Series",
      description: "Contemporary designs with modern architectural appeal and premium finish",
      image: "/deck/SYLVANIX-DECKING/skyline/teak-traditional.jpg",
      features: ["Modern Design", "Premium Finish", "Architectural Grade", "UV Protected"],
      colors: ["Teak Traditional", "Urban Grey", "Coastal White"]
    },
    {
      name: "Destinations Decking",
      description: "Travel-inspired designs bringing exotic destinations to your outdoor space",
      image: "/deck/SYLVANIX-DECKING/destinations-decking/ponderay.jpg",
      features: ["Exotic Designs", "Premium Materials", "Weather Resistant", "Unique Patterns"],
      colors: ["Bali Bamboo", "Santorini Stone", "Maldives Blue"]
    },
    {
      name: "Elements Decking",
      description: "Nature-inspired designs that blend seamlessly with outdoor environments",
      image: "/deck-hero.jpg",
      features: ["Natural Aesthetics", "Eco-Friendly", "Durable Construction", "Low Maintenance"],
      colors: ["Earth Tone", "River Rock", "Forest Floor"]
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Material", value: "Premium Composite & Natural Wood" },
    { name: "Thickness", value: "25mm to 32mm" },
    { name: "Width", value: "140mm to 200mm" },
    { name: "Length", value: "3660mm to 5400mm" },
    { name: "Weather Resistance", value: "UV Protected, Moisture Resistant" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Low Maintenance, Soap & Water Cleaning" },
    { name: "Warranty", value: "15-25 Years Structural Warranty" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What makes SYLVANIX-DECKING special?",
      answer: "SYLVANIX-DECKING combines premium materials with innovative technology to create composite decking that offers superior durability, fade resistance, and low maintenance while maintaining the natural beauty of wood."
    },
    {
      question: "How do I choose between the different SYLVANIX collections?",
      answer: "Elite Collection offers the highest performance with warranty, Elite Essential provides excellent value with 15-year warranty, Skyline Series focuses on modern aesthetics, while Destinations and Elements offer unique design themes."
    },
    {
      question: "Is SYLVANIX-DECKING environmentally friendly?",
      answer: "Yes, our SYLVANIX-DECKING is made from recycled materials and sustainable manufacturing processes, making it an eco-friendly choice for outdoor spaces."
    },
    {
      question: "What maintenance is required for SYLVANIX-DECKING?",
      answer: "SYLVANIX-DECKING requires minimal maintenance - regular cleaning with soap and water, periodic inspection, and occasional deep cleaning to maintain optimal appearance."
    },
    {
      question: "Can SYLVANIX-DECKING be installed in all climates?",
      answer: "Yes, SYLVANIX-DECKING is engineered to withstand various weather conditions including extreme temperatures, UV exposure, moisture, and seasonal changes."
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/SYLVANIX-DECKING/destinations-decking/ponderay.jpg" 
            alt="SYLVANIX-DECKING Premium Composite Decking"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            SYLVANIX-DECKING
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium composite decking solutions for exceptional outdoor living
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Future of Outdoor Decking</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                SYLVANIX-DECKING represents the pinnacle of composite decking technology, combining the natural beauty 
                of wood with advanced polymer composite materials. Each product in our SYLVANIX range is engineered to 
                deliver exceptional performance, stunning aesthetics, and long-lasting durability.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our comprehensive collection includes five distinct product lines, each designed to meet specific 
                outdoor living needs while maintaining our commitment to quality, sustainability, and innovation. 
                From premium Elite Collection to themed Destinations and Elements series, SYLVANIX-DECKING offers 
                the perfect solution for every outdoor space.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With advanced UV protection, superior stain resistance, and minimal maintenance requirements, 
                SYLVANIX-DECKING transforms outdoor spaces into beautiful, functional areas that maintain their 
                appearance year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Collections Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">SYLVANIX-DECKING Collections</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sylvanixSubcategories.map((subcategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center cursor-pointer group"
                onClick={() => {
                  const pageMap: { [key: string]: string } = {
                    "Elite Collection": "/deck-flooring/elite-collection",
                    "Elite Essential": "/deck-flooring/elite-essential",
                    "Skyline Series": "/deck-flooring/skyline",
                    "Destinations Decking": "/deck-flooring/destinations-decking",
                    "Elements Decking": "/deck-flooring/elements-decking"
                  };
                  window.location.href = pageMap[subcategory.name];
                }}
              >
                <div className="h-40 rounded-lg overflow-hidden bg-gray-200 mb-3 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-gray-600 transition-colors duration-300">{subcategory.name}</h3>
                <p className="text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">SYLVANIX-DECKING Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {sylvanixSubcategories.map((subcategory, index) => (
                <div key={index} className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={subcategory.image}
                    alt={subcategory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why Choose SYLVANIX-DECKING?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Superior Durability</h3>
              <p className="text-gray-600">Advanced composite construction provides exceptional strength and longevity</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Fade Resistant</h3>
              <p className="text-gray-600">UV protection maintains vibrant colors and prevents weathering</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
              <p className="text-gray-600">Simple cleaning with soap and water, no staining or sealing required</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Made from recycled materials with sustainable manufacturing practices</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Slip Resistant</h3>
              <p className="text-gray-600">Textured surface provides excellent grip in wet conditions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Versatile Design</h3>
              <p className="text-gray-600">Multiple collections and colors to suit any architectural style</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Technical Specifications</h2>
          
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
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience SYLVANIX-DECKING Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover why SYLVANIX-DECKING is the preferred choice for premium outdoor living spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Request Quote
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
}


export default SylvanixDecking;
       