import { motion } from "framer-motion";

export function SoarSignature() {
  // Additional technical specifications
  const specifications = [
    { name: "Material", value: "Signature Grade Composite" },
    { name: "Thickness", value: "20mm to 25mm" },
    { name: "Width", value: "150mm to 180mm" },
    { name: "Length", value: "3000mm to 3600mm" },
    { name: "Surface Finish", value: "Signature Textured" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "25 Years Structural" },
    { name: "Maintenance", value: "Ultra Low Maintenance" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What makes the Soar Signature collection unique?",
      answer: "The Soar Signature series represents the ultimate in architectural cladding design, featuring exclusive patterns and textures inspired by natural materials. Each finish creates distinctive architectural statements while maintaining exceptional performance characteristics."
    },
    {
      question: "How durable is the Soar Signature cladding?",
      answer: "With enhanced material composition and a 25-year structural warranty, the Soar Signature collection is built to deliver superior performance and longevity for the most demanding architectural applications."
    },
    {
      question: "Can Soar Signature be used in premium commercial applications?",
      answer: "Absolutely! The Soar Signature collection is ideal for luxury commercial buildings, architectural homes, cultural centers, museums, and landmark buildings where distinctive design is paramount."
    },
    {
      question: "What maintenance is required?",
      answer: "The Soar Signature collection requires ultra-low maintenance thanks to its premium material composition and advanced surface finish. Regular cleaning maintains its distinctive appearance for decades."
    },
    {
      question: "How is the Soar Signature installed?",
      answer: "Installation uses a hidden clip system that provides a clean, seamless appearance while ensuring secure attachment. Professional installation is recommended for optimal results with these premium finishes."
    }
  ];

  // Soar Signature finishes
  const signatureFinishes = [
    { name: "Brown Jasper", image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/jasper.jpg" },
    { name: "Obsidian", image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/obsidian.jpg" },
    { name: "Opal", image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/soar-cladding-opal-web.jpg" },
    { name: "Tiger Eye", image: "/Wall Clading/SYLVANIX CLADDING/SOAR SIGNATURE/tiger eye.jpg" },
  ];

  // Product features
  const features = [
    "Unique Textures",
    "Signature Design", 
    "Premium Quality",
    "Architectural Grade",
    "Natural Inspiration",
    "Distinctive Patterns",
    "Professional Grade",
    "Exclusive Finishes"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/cladding.jpg" 
            alt="Soar Signature Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Soar Signature
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Signature series with unique textures and premium aesthetics for distinctive architectural statements
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Distinctive Design, Signature Performance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-4 text-gray-700">
                The Soar Signature series represents the ultimate in architectural cladding design, featuring 
                exclusive patterns and textures inspired by natural materials. Each finish in this premium 
                collection has been carefully developed to create distinctive architectural statements while 
                maintaining exceptional performance characteristics.
              </p>
              
              <p className="mb-4 text-gray-700">
                With four unique color options - Brown Jasper, Obsidian, Opal, and Tiger Eye - the Soar 
                Signature collection provides architects with sophisticated design tools to create memorable 
                building facades that stand out from conventional materials.
              </p>
              
              <p className="mb-4 text-gray-700">
                The signature texture patterns and enhanced material composition ensure that these premium 
                finishes deliver both visual impact and long-term durability for the most demanding 
                architectural applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="text-xl font-semibold mb-2">{feature}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Finishes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Signature Finish Collection</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {signatureFinishes.map((finish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-64 md:h-72 rounded-lg overflow-hidden bg-gray-200 mb-4 shadow-md hover:shadow-lg transition-shadow">
                  <img src={finish.image} alt={finish.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">{finish.name}</h3>
              </motion.div>
            ))}
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
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
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
          <h2 className="text-3xl font-bold mb-6">Create Your Signature Statement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore the Soar Signature collection and create distinctive architectural facades that soar above the ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Request a Quote
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

export default SoarSignature;
