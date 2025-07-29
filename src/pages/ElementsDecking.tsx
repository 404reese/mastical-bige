import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ElementsDecking() {
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

  // Elements products (sub-subcategories)
  const elementsProducts = [
    {
      name: "Brazilian Walnut",
      image: "/deck/SYLVANIX-DECKING/elements-decking/brazilian-walnut.jpg",
      description: "Rich, grounding colors that connect with the natural earth"
    },
    {
      name: "Coastal Mist",
      image: "/deck/SYLVANIX-DECKING/elements-decking/coastal-mist.jpg",
      description: "Inspired by smooth river stones and flowing water"
    },
    {
      name: "Harbor Grey",
      image: "/deck/SYLVANIX-DECKING/elements-decking/harbor-grey.png",
      description: "Capturing the essence of woodland floors and natural debris"
    },
    {
      name: "Spanish Cedar",
      image: "/deck/SYLVANIX-DECKING/elements-decking/spanish-cedar.jpg",
      description: "Rich, dark tones inspired by exotic Brazilian hardwoods"
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Thickness", value: "25mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.6 kg/m²" },
    { name: "Warranty", value: "15 Years Structural" },
    { name: "Finish", value: "Natural Textured" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Eco-Friendly & Low Maintenance" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What makes Elements Decking environmentally friendly?",
      answer: "Elements Decking is made from recycled materials and uses sustainable manufacturing processes. The natural-inspired designs also blend seamlessly with outdoor environments, reducing visual impact."
    },
    {
      question: "How do Elements products blend with natural surroundings?",
      answer: "Each Elements product is designed to complement natural outdoor environments, with colors and textures that harmonize with landscapes, gardens, and existing outdoor features."
    },
    {
      question: "Are Elements products suitable for eco-conscious consumers?",
      answer: "Absolutely. Elements Decking combines environmental responsibility with natural aesthetics, making it perfect for eco-conscious homeowners who want sustainable outdoor solutions."
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck-hero.jpg" 
            alt="Elements Decking - Nature-inspired designs"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Elements Decking
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Nature-inspired designs that blend seamlessly with outdoor environments
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Connected to Nature</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Elements Decking brings the tranquil beauty of nature directly to your outdoor space. Our collection 
                draws inspiration from the fundamental elements of the natural world – earth, water, and forest – 
                creating designs that feel organic and harmonious with their surroundings.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Each product in the Elements collection features natural aesthetics that complement existing landscapes 
                while providing the durability and low maintenance benefits of premium composite construction. Create 
                an outdoor space that feels like a natural extension of the environment around it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Natural Elements Collection</h2>
          
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {elementsProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Elements Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {elementsProducts.map((product, index) => (
                <div key={index} className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why Choose Elements Decking?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-green-600 text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Made from recycled materials with sustainable manufacturing</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-green-600 text-3xl mb-4">🍃</div>
              <h3 className="text-xl font-semibold mb-3">Natural Aesthetics</h3>
              <p className="text-gray-600">Designs that blend seamlessly with outdoor environments</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-green-600 text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3">Durable Construction</h3>
              <p className="text-gray-600">Long-lasting performance with minimal maintenance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
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
      </section>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect with Nature</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create an outdoor space that harmonizes with the natural world through Elements Decking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Request Quote
            </button>
            <button 
              onClick={() => window.location.href = '/deck-flooring/sylvanix-decking'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to SYLVANIX-DECKING
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ElementsDecking;
