import { motion } from "framer-motion";

export function DesignerCollection() {
  // Additional technical specifications
  const specifications = [
    { name: "Material", value: "High-Grade Composite" },
    { name: "Thickness", value: "18mm to 25mm" },
    { name: "Width", value: "150mm to 180mm" },
    { name: "Length", value: "3000mm to 3600mm" },
    { name: "Surface Finish", value: "Designer Textured" },
    { name: "Installation", value: "Hidden Clip System" },
    { name: "Fire Rating", value: "Class A Fire Resistant" },
    { name: "Warranty", value: "25 Years Structural" },
    { name: "Maintenance", value: "Ultra Low Maintenance" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What makes the Designer Collection unique?",
      answer: "The Designer Collection features carefully curated color options developed in collaboration with leading architects and designers. Each finish combines aesthetic excellence with superior durability and weather resistance."
    },
    {
      question: "How durable is the Designer Collection cladding?",
      answer: "With advanced composite technology and a 25-year structural warranty, the Designer Collection is built to withstand all weather conditions while maintaining its appearance for decades with minimal maintenance."
    },
    {
      question: "Can Designer Collection be used in commercial applications?",
      answer: "Absolutely! The Designer Collection is ideal for both residential and commercial projects, including office buildings, retail spaces, luxury homes, hotels, schools, and public buildings."
    },
    {
      question: "What maintenance is required?",
      answer: "The Designer Collection requires ultra-low maintenance thanks to its stain and fade resistance. Regular cleaning with mild soap and water is typically sufficient to maintain its appearance."
    },
    {
      question: "How is the Designer Collection installed?",
      answer: "Installation uses a hidden clip system that provides a clean, seamless appearance while ensuring secure attachment. Professional installation is recommended for optimal results."
    }
  ];

  // Designer Collection finishes
  const designerFinishes = [
    { name: "Chocolate", image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/Chocolate.jpg" },
    { name: "Glacier White", image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/Glacier White.png" },
    { name: "Harvest Brown", image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/Harvest Brown.png" },
    { name: "Lake Grey", image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/Lake Grey.png" },
    { name: "Summit Grey", image: "/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/Summit Grey.png" },
  ];

  // Product features
  const features = [
    "Premium Design",
    "Superior Durability", 
    "Weather Resistant",
    "Easy Maintenance",
    "Fire Resistant",
    "Versatile Application",
    "Professional Grade",
    "Architectural Excellence"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Wall Clading/SYLVANIX CLADDING/DESIGNER COLLECTION/Chocolate.jpg" 
            alt="Designer Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Designer Collection
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Premium designer cladding with sophisticated color options for architectural excellence
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Sophisticated Design Meets Premium Performance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-4 text-gray-700">
                The Designer Collection represents the pinnacle of architectural cladding design, featuring 
                carefully curated color options that complement any building style. Each finish has been 
                developed in collaboration with leading architects and designers to ensure exceptional 
                aesthetic appeal and long-term performance.
              </p>
              
              <p className="mb-4 text-gray-700">
                With five distinct color options ranging from warm earth tones to contemporary greys and 
                pure whites, the Designer Collection provides architects with the creative freedom to 
                realize their vision while ensuring superior durability and weather resistance.
              </p>
              
              <p className="mb-4 text-gray-700">
                Each Designer Collection finish combines advanced composite technology with sophisticated 
                design aesthetics, creating a premium cladding solution that maintains its beauty for decades 
                with minimal maintenance requirements.
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

      {/* Designer Finishes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Available Designer Finishes</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {designerFinishes.map((finish, index) => (
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
          <h2 className="text-3xl font-bold mb-6">Choose Designer Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore the Designer Collection and create stunning architectural facades with premium finishes.
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

export default DesignerCollection;
