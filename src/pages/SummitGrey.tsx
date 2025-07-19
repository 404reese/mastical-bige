import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SummitGrey() {
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

  // Product details
  const productDetails = {
    name: "Summit Grey",
    collection: "Elite Collection",
    description: "Premium grey composite with sophisticated finish and superior durability",
    colorCode: "#8B9DC3",
    features: [
      "25-Year Comprehensive Warranty",
      "Superior Fade Resistance",
      "Stain & Scratch Resistant",
      "Slip-Resistant Surface",
      "Low Maintenance",
      "Eco-Friendly Composition"
    ]
  };

  // Technical specifications
  const specifications = [
    { name: "Product Name", value: "Summit Grey" },
    { name: "Collection", value: "Elite Collection" },
    { name: "Color", value: "Premium Grey" },
    { name: "Thickness", value: "25mm" },
    { name: "Width", value: "140mm" },
    { name: "Length", value: "3660mm" },
    { name: "Weight", value: "2.8 kg/m²" },
    { name: "Warranty", value: "25 Years Structural" },
    { name: "Finish", value: "Embossed Wood Grain" },
    { name: "Installation", value: "Hidden Fastening System" },
    { name: "Maintenance", value: "Soap & Water Cleaning" },
    { name: "Slip Rating", value: "R11 (Wet & Dry)" },
  ];

  // Application areas
  const applications = [
    { name: "Residential Decks", description: "Perfect for home outdoor living spaces" },
    { name: "Pool Areas", description: "Slip-resistant surface ideal for wet environments" },
    { name: "Balconies", description: "Elegant solution for apartment and condo balconies" },
    { name: "Terraces", description: "Sophisticated finish for rooftop and garden terraces" },
    { name: "Patios", description: "Durable surface for outdoor dining and entertainment" },
    { name: "Walkways", description: "Safe and attractive pathway solution" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/deck/elite-collection/summit-grey.jpg" 
            alt="Summit Grey Deck Flooring"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Summit Grey
          </h1>
          <p className="text-xl text-white max-w-2xl mb-2">
            Elite Collection Premium Composite Decking
          </p>
          <div className="flex items-center gap-2 text-white">
            <div 
              className="w-6 h-6 rounded-full border-2 border-white" 
              style={{ backgroundColor: productDetails.colorCode }}
            ></div>
            <span>Premium Grey Finish</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Premium Grey Elegance</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Summit Grey represents the pinnacle of composite deck flooring technology. This sophisticated 
                  grey finish combines contemporary aesthetics with unmatched durability, making it the perfect 
                  choice for modern outdoor spaces.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The embossed wood grain texture provides authentic wood appearance while delivering superior 
                  slip resistance and comfort. Protected by our comprehensive 25-year warranty, Summit Grey 
                  ensures decades of beautiful, low-maintenance outdoor living.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Key Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {productDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <img 
                  src="/deck/elite-collection/summit-grey.jpg" 
                  alt="Summit Grey Close-up"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Summit Grey Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-collection/summit-grey.jpg"
                  alt="Summit Grey deck installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-collection/summit-grey.jpg"
                  alt="Summit Grey texture detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/deck/elite-collection/summit-grey.jpg"
                  alt="Summit Grey outdoor application"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Perfect Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-3">{app.name}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Matching Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Color & Design Compatibility</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Complementary Colors</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-300"></div>
                      <span>Crisp White Railings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                      <span>Charcoal Accents</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600"></div>
                      <span>Navy Blue Features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-700"></div>
                      <span>Natural Green Landscaping</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Design Styles</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Contemporary Modern</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Transitional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Industrial Chic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Minimalist</span>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Warranty & Care Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Warranty & Care</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">25-Year Warranty</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Structural integrity coverage</li>
                  <li>• Fade resistance guarantee</li>
                  <li>• Stain resistance protection</li>
                  <li>• Manufacturing defect coverage</li>
                  <li>• Professional installation support</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Care Instructions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular cleaning with soap and water</li>
                  <li>• Remove debris and standing water</li>
                  <li>• Periodic power washing if needed</li>
                  <li>• No staining or sealing required</li>
                  <li>• Avoid harsh chemicals or abrasives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Install Summit Grey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and professional installation of Summit Grey decking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Quote Now
            </button>
            <button 
              onClick={() => window.location.href = '/deck-flooring/elite-collection'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to Elite Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SummitGrey;
