import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DestinationsDecking() {
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

  // Destinations products (sub-subcategories)
  const destinationsProducts = [
    {
      name: "Sandpoint",
      image: "/deck/SYLVANIX-DECKING/destinations-decking/sandpoint.jpg",
      description: "Inspired by the tropical bamboo forests of Bali",
    },
    {
      name: "Vantage",
      image: "/deck/SYLVANIX-DECKING/destinations-decking/vantage.jpg",
      description: "Capturing the essence of Greek island architecture",
    },
    {
      name: "Ponderay",
      image: "/deck/SYLVANIX-DECKING/destinations-decking/ponderay.jpg",
      description: "Drawing inspiration from Pacific Northwest forests",
    },
  ];

  // Technical specifications
  const specifications = [
    { name: "Thickness", value: "25mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.8 kg/m²" },
    { name: "Warranty", value: "15 Years Structural" },
    { name: "Finish", value: "Premium Textured" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Low Maintenance" },
  ];

  // FAQ items
  const faqs = [
    {
      question: "What makes Destinations Decking unique?",
      answer: "Each product in our Destinations collection is inspired by exotic locations around the world, bringing unique textures, colors, and patterns that reflect the natural beauty of these destinations.",
    },
    {
      question: "Are these products suitable for all climates?",
      answer: "Yes, despite their exotic inspirations, all Destinations Decking products are engineered to withstand various weather conditions while maintaining their distinctive appearance.",
    },
    {
      question: "How do I choose the right Destinations product?",
      answer: "Consider your outdoor space's style and the atmosphere you want to create. Each product offers a different aesthetic experience, from tropical warmth to Mediterranean elegance.",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/deck/SYLVANIX-DECKING/destinations-decking/ponderay.jpg"
            alt="Destinations Decking - Travel-inspired designs"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Destinations Decking
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Travel-inspired designs bringing exotic destinations to your outdoor space
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Journey Through Design
            </h2>

            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Destinations Decking transforms your outdoor space into a portal to
                the world's most beautiful locations. Each product in our collection
                captures the essence of exotic destinations, from the tropical bamboo
                forests of Bali to the sun-bleached shores of Santorini.
              </p>

              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our travel-inspired designs combine authentic textures, colors, and
                patterns with premium composite construction, delivering both aesthetic
                appeal and exceptional performance. Experience the world through your
                deck with our unique destination-themed collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Explore Our Destinations
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {destinationsProducts.map((product, index) => (
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
                  <p className="text-gray-600 mb-6 text-lg">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Destinations Gallery
          </h2>

          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {destinationsProducts.map((product, index) => (
                <div
                  key={index}
                  className="h-[500px] rounded-lg overflow-hidden bg-gray-200"
                >
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

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Technical Specifications
          </h2>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-gray-200">
            <div className="divide-y divide-gray-200">
              {specifications.map((spec, index) => (
                <div key={index} className="flex">
                  <div className="bg-gray-50 py-4 px-6 font-medium w-1/3">
                    {spec.name}
                  </div>
                  <div className="py-4 px-6 w-2/3">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bring the World to Your Deck
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the beauty of global destinations with our premium Destinations
            Decking collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/contact-us")}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Request Quote
            </button>
            <button
              onClick={() =>
                (window.location.href = "/deck-flooring/sylvanix-decking")
              }
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

export default DestinationsDecking;
