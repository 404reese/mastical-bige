import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function EgoEnrichPlankDecking() {
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

  // EGO Enrich Plank Decking applications
  const egoApplications = [
    { name: "Chocolate End Profile", image: "/deck/EGO Enrich Plank/Chocolate End Profile.jpg" },
    { name: "Chocolate", image: "/deck/EGO Enrich Plank/Chocolate.jpg" },
    { name: "IPE End Profile", image: "/deck/EGO Enrich Plank/IPE End Profile.jpg" },
    { name: "IPE", image: "/deck/EGO Enrich Plank/IPE.jpg" },
    { name: "Silver Grey End Profile", image: "/deck/EGO Enrich Plank/Silver Grey End Profile.jpg" },
    { name: "Silver Grey", image: "/deck/EGO Enrich Plank/Silver Grey.jpg" },
    { name: "Teak End Profile", image: "/deck/EGO Enrich Plank/Teak End Profile.jpg" },
    { name: "Teak", image: "/deck/EGO Enrich Plank/Teak.jpg" },
  ];

  // HLH-002D Series Images
  const hlhSeries = [
    // CC Series
    { name: "HLH-002D (CC)", image: "/deck/EGO Enrich Plank/HLH-002D（CC）.jpg" },
    { name: "HLH-002D (CC) - View 2", image: "/deck/EGO Enrich Plank/HLH-002D（CC）2.jpg" },
    { name: "HLH-002D (CC) - View 3", image: "/deck/EGO Enrich Plank/HLH-002D（CC）3.jpg" },
    { name: "HLH-002D (CC) - View 4", image: "/deck/EGO Enrich Plank/HLH-002D（CC）4.jpg" },
    // IPE Series
    { name: "HLH-002D (IPE)", image: "/deck/EGO Enrich Plank/HLH-002D（IPE）.jpg" },
    { name: "HLH-002D (IPE) - View 2", image: "/deck/EGO Enrich Plank/HLH-002D（IPE）2.jpg" },
    { name: "HLH-002D (IPE) - View 3", image: "/deck/EGO Enrich Plank/HLH-002D（IPE）3.jpg" },
    { name: "HLH-002D (IPE) - View 4", image: "/deck/EGO Enrich Plank/HLH-002D（IPE）4.jpg" },
    // SI Series
    { name: "HLH-002D (SI)", image: "/deck/EGO Enrich Plank/HLH-002D（SI）.jpg" },
    { name: "HLH-002D (SI) - View 2", image: "/deck/EGO Enrich Plank/HLH-002D（SI）2.jpg" },
    { name: "HLH-002D (SI) - View 3", image: "/deck/EGO Enrich Plank/HLH-002D（SI）3.jpg" },
    { name: "HLH-002D (SI) - View 4", image: "/deck/EGO Enrich Plank/HLH-002D（SI）4.jpg" },
    // TK Series
    { name: "HLH-002D (TK)", image: "/deck/EGO Enrich Plank/HLH-002D（TK）.jpg" },
    { name: "HLH-002D (TK) - View 2", image: "/deck/EGO Enrich Plank/HLH-002D（TK）2.jpg" },
    { name: "HLH-002D (TK) - View 3", image: "/deck/EGO Enrich Plank/HLH-002D（TK）3.jpg" },
    { name: "HLH-002D (TK) - View 4", image: "/deck/EGO Enrich Plank/HLH-002D（TK）4.jpg" },
  ];

  // Available colors/finishes
  const availableFinishes = [
    { name: "Teak", image: "/deck/EGO Enrich Plank Decking/teak.jpg" },
    { name: "Chocolate", image: "/deck/EGO Enrich Plank Decking/Chocolate.jpg" },
    { name: "Silver Grey", image: "/deck/EGO Enrich Plank Decking/silver-grey.jpg" },
  ];

  // Technical specifications
  const specifications = [
    { name: "Material", value: "Enriched Composite Plank" },
    { name: "Thickness", value: "20mm to 25mm" },
    { name: "Width", value: "140mm to 180mm" },
    { name: "Length", value: "2400mm to 4000mm" },
    { name: "Surface Finish", value: "Textured Anti-Slip" },
    { name: "Installation", value: "Clip System & Screw Fix" },
    { name: "Maintenance", value: "Ultra Low Maintenance" },
    { name: "Warranty", value: "15-20 Years Structural Warranty" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What is EGO Enrich Plank Decking?",
      answer: "EGO Enrich Plank Decking is a premium composite decking system designed for versatile applications. It combines advanced materials with innovative design to create durable, beautiful, and low-maintenance outdoor and indoor flooring solutions."
    },
    {
      question: "Can EGO Enrich Plank be used in wet environments?",
      answer: "Yes, EGO Enrich Plank is specifically designed for wet environments including bathrooms, pool areas, and marine applications. It features waterproof construction and anti-slip surfaces for safety."
    },
    {
      question: "How does EGO Enrich Plank compare to traditional wood decking?",
      answer: "EGO Enrich Plank offers superior durability, weather resistance, and requires minimal maintenance compared to traditional wood. It won't rot, warp, or require regular staining or sealing."
    },
    {
      question: "What installation methods are available?",
      answer: "EGO Enrich Plank can be installed using clip systems for easy installation or screw-fix methods for permanent applications. The versatile design allows for various installation configurations."
    },
    {
      question: "Is EGO Enrich Plank suitable for commercial applications?",
      answer: "Absolutely! EGO Enrich Plank is ideal for commercial applications including hotels, restaurants, offices, and public spaces due to its durability, safety features, and low maintenance requirements."
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/EGO Enrich Plank Decking/teak.jpg" 
            alt="EGO Enrich Plank Decking"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            EGO Enrich Plank Decking
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Versatile composite decking solutions for every application
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Revolutionizing Outdoor & Indoor Spaces</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                EGO Enrich Plank Decking represents the next generation of composite decking technology. 
                Engineered for versatility, it seamlessly adapts to countless applications from residential 
                balconies to commercial facades, from pool sides to ship decks.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                What sets EGO Enrich Plank apart is its exceptional versatility and performance across 
                diverse environments. Whether you're creating a luxury bathroom floor, a restaurant terrace, 
                or a yacht deck, EGO Enrich Plank delivers consistent quality and aesthetic appeal.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With advanced anti-slip technology, superior weather resistance, and minimal maintenance 
                requirements, EGO Enrich Plank transforms any space into a beautiful, functional area 
                that maintains its appearance for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Available Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {egoApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-48 rounded-lg overflow-hidden bg-gray-200 mb-4 shadow-md hover:shadow-lg transition-shadow">
                  <img src={application.image} alt={application.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-sm md:text-base">{application.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* HLH-002D Series Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">HLH-002D Series Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {hlhSeries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-48 rounded-lg overflow-hidden bg-gray-200 mb-4 shadow-md hover:shadow-lg transition-shadow">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-sm md:text-base">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">EGO Enrich Plank Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {egoSubcategories.slice(0, 6).map((subcategory, index) => (
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Versatile Applications</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Waterproof Performance</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Anti-Slip Surface</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Easy Installation</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Ultra Low Maintenance</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Durable Construction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-4 border-b border-gray-300 pb-2">{spec.name}</h3>
                <p className="text-gray-600 leading-relaxed">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Space with EGO Enrich Plank</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the versatility and performance of EGO Enrich Plank Decking for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Request Quote
            </button>
            <button 
              onClick={() => window.location.href = '/deck-flooring'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to Deck Flooring
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EgoEnrichPlankDecking;
