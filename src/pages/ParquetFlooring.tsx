import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { products } from "../data/productData";

export function ParquetFlooring() {
  // Find the parquet wood product data (assuming it exists, otherwise use a placeholder)
  const parquetData = products.find(product => product.id === 'parquet') || {
    descriptionParagraphs: [
      "Parquet flooring is a timeless and elegant choice that brings geometric artistry to your floors. Crafted from individual wood blocks arranged in distinctive patterns, parquet creates visual interest and sophisticated charm in any space.",
      "Each parquet floor tells a unique story through its intricate design, from classic herringbone and chevron to elaborate basketweave and Versailles patterns. This flooring style has adorned the finest homes and palaces throughout history."
    ],
    features: [
      "Geometric Patterns",
      "Artistic Appeal",
      "Timeless Elegance",
      "Durable Construction",
      "Design Flexibility",
      "Adds Character"
    ],
    images: [
      { src: "/parquet/parp-1.png", alt: "Parquet flooring in herringbone pattern" },
      { src: "/parquet/parp-2.png", alt: "Parquet flooring in chevron pattern" }
    ]
  };

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

  // Additional technical specifications
  const specifications = [
    { name: "Thickness", value: "14mm to 22mm" },
    { name: "Block Size", value: "Varies by pattern (typically 8cm to 12cm)" },
    { name: "Patterns", value: "Herringbone, Chevron, Basketweave, Versailles, Ladder" },
    { name: "Finish Options", value: "UV Oil, Hardwax Oil, Lacquered" },
    { name: "Installation", value: "Glue-down, Floating (some patterns)" },
    { name: "Suitable for", value: "Living rooms, Dining areas, Hallways, Home offices" },
    { name: "Maintenance", value: "Regular cleaning, Periodic refinishing" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What is parquet flooring?",
      answer: "Parquet flooring consists of wood blocks or strips arranged in geometric patterns. The most common patterns include herringbone, chevron, basketweave, and Versailles. It's known for its decorative appearance and has been used in fine buildings for centuries."
    },
    {
      question: "How durable is parquet flooring?",
      answer: "When properly installed and maintained, parquet flooring is highly durable and can last for decades. The durability depends on the wood species used, the quality of installation, and regular maintenance."
    },
    {
      question: "Can parquet flooring be refinished?",
      answer: "Yes, most parquet flooring can be sanded and refinished multiple times over its lifetime. The number of possible refinishes depends on the thickness of the wood blocks and the depth of sanding required."
    },
    {
      question: "Is parquet flooring suitable for underfloor heating?",
      answer: "Many parquet floors are compatible with underfloor heating systems, but it's important to check the specific product and installation requirements. Engineered parquet typically performs better with underfloor heating than solid wood parquet."
    },
    {
      question: "What's the difference between herringbone and chevron patterns?",
      answer: "While both patterns create a zigzag effect, herringbone pieces are rectangular and laid at a 90-degree angle to each other, creating a broken zigzag. Chevron pieces are cut at an angle so the ends form a perfect point where they meet, creating a continuous zigzag."
    }
  ];

  // Pattern types with images
  const patternTypes = [
    { name: "American Walnut Bristol Natural", image: "/parquet/American Walnut Bristol Natural 01.jpeg" },
    { name: "Barletta Oak", image: "/parquet/BARLETTA OAK.jpeg" },
    { name: "Chantilly Oak", image: "/parquet/chantilly oak.jpg" },
    { name: "Chestnut Walnut", image: "/parquet/chesntnut walnut.jpg" },
    { name: "Chocolate Oak", image: "/parquet/chocolate oak.jpg" },
    { name: "Dusk Grey Oak", image: "/parquet/dusk grey aok.jpg" },
    { name: "Earl Grey Oak", image: "/parquet/earl grey oak.jpg" },
    { name: "Ginger Oak", image: "/parquet/ginger oak.jpg" },
    { name: "La Roce Oak", image: "/parquet/LA ROCE OAK.jpeg" },
    { name: "Marmo Light", image: "/parquet/marmo light.jpg" },
    { name: "Oak Buckingham Zafari", image: "/parquet/Oak Buckingham Zafari.jpeg" },
    { name: "Oak Champagne", image: "/parquet/oak champani.jpg" },
    { name: "Oak Natural", image: "/parquet/oak natural.jpg" },
    { name: "Oak Versailles Dior", image: "/parquet/Oak Versailles Dior 02.jpeg" },
    { name: "Oak Versailles Natural", image: "/parquet/oak versailles natural.jpg" },
    { name: "Oak Windsor Brown Grey", image: "/parquet/Oak Windsor Brown Grey01.jpeg" },
    { name: "Rosso Vino Walnut", image: "/parquet/rosso wino walnut.jpg" },
    { name: "Teak Pescara", image: "/parquet/TEAK PESCARA.jpeg" },
    { name: "Tribeca Walnut", image: "/parquet/TRIBECA WALNUT.jpeg" },
    { name: "Versailles Caramel", image: "/parquet/versailles caramel.jpg" },
    { name: "Walnut Arizzio", image: "/parquet/WALNUT ARIZZIO.jpeg" },
    { name: "Walnut Bloom", image: "/parquet/walnut bloom.jpg" },
    { name: "Walnut Trieste", image: "/parquet/WALNUT TRIESTE.jpeg" },
    { image: "/engg/designer/designer1.jpg", name: "Walnut Flower Marble" },
    { image: "/engg/designer/designer2.jpg", name: "Walnut Flower Plain" },
    { image: "/engg/designer/designer3.jpg", name: "Oak Braid" },
    { image: "/engg/designer/designer4.jpg", name: "Walnut Leaf" },
    { image: "/engg/designer/designer5.jpg", name: "Oak Fishscal" },
    { image: "/engg/designer/designer6.jpg", name: "Oak Lotus" },
    { image: "/engg/designer/designer7.jpg", name: "Walnut Arrow Brass" },
    { image: "/engg/designer/designer8.jpg", name: "Walnut Flower Brass" }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/heros/PARQUET FLOOR.png" 
            alt="Parquet Wood Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Parquet Wooden Floors
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Intricate patterns and artistic designs for sophisticated interiors
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Artistic Craftsmanship for Your Floors</h2>
            
            <div className="prose prose-lg mx-auto">
              {parquetData?.descriptionParagraphs.map((paragraph: string, index: number) => (
                <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
              ))}
              
              <p className="mb-4 text-gray-700">
                Parquet flooring transforms your floors into works of art, combining the warmth and natural beauty 
                of wood with geometric precision. These patterns add visual interest and a sense of luxury 
                that can elevate any interior design scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/parquet/parp-3.png"
                  alt="Parquet floor in living room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/parquet/parp-4.png"
                  alt="Parquet floor detail"
                  className="w-full h-full object-cover"
                />
              </div>
              {parquetData?.images.map((image: { src: string; alt: string }, index: number) => (
                <div key={index} className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.alt}
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {parquetData?.features.map((feature, index) => (
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Historical Appeal</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-xl font-semibold mb-2">Increases Property Value</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pattern Types Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Available Pattern Types</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {patternTypes.map((pattern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-52 rounded-lg overflow-hidden bg-gray-200 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={pattern.image} 
                    alt={pattern.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{pattern.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
          
          <div className="max-w-3xl mx-auto overflow-hidden rounded-lg border border-gray-200">
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

      {/* Installation Process */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Installation Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
                <p className="text-gray-600">Pattern selection, room measurements, and layout planning.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
                <p className="text-gray-600">Precision cutting and placement of wood blocks in the desired pattern.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-flex mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Finishing</h3>
                <p className="text-gray-600">Sanding, staining if desired, and application of protective finish.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-6">Our skilled craftsmen specialize in intricate parquet patterns, ensuring flawless execution.</p>
              <button
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
                onClick={() => window.location.href = '/contact-us'}
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section> */}

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
          <h2 className="text-3xl font-bold mb-6">Elevate Your Interior with Parquet Flooring</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discover our exquisite parquet flooring options and receive expert guidance on the perfect pattern for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.location.href = '/contact-us'} className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Request a Quote
            </button>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default ParquetFlooring;
