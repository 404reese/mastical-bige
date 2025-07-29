import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function LaminateFlooring() {
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

  // Main laminate categories
  const laminateMainCategories = [
    {
      name: "Elite Herringbone Collection",
      description: "Premium herringbone laminate with mountain-inspired designs",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0699 (Color  328 )-Mount Everest.JPG",
      link: "/laminate-flooring/elite-herringbone-collection",
      features: ["Herringbone Pattern", "Premium Quality", "Mountain Series", "AC5 Rating"]
    },
    {
      name: "Elite Herringbone Prime Collection", 
      description: "Luxury herringbone collection with cave-inspired natural textures",
      image: "/Laminate/Elite Herringbone Prime Collection/Copy of dark star cave revise 3.png",
      link: "/laminate-flooring/elite-herringbone-prime-collection",
      features: ["Prime Quality", "Cave Series", "Natural Textures", "Luxury Finish"]
    },
    {
      name: "Enchant Premium Collection",
      description: "Premium oak finishes with sophisticated wood grain textures",
      image: "/Laminate/Enchant Premium Collection/Copy of MVR_1337 ( Caramel Oak ).JPG",
      link: "/laminate-flooring/enchant-premium-collection",
      features: ["Premium Oak", "Rich Textures", "Natural Grain", "High Durability"]
    },
    {
      name: "Enchant Rustic Collection",
      description: "Rustic forest-inspired designs with authentic weathered appearance",
      image: "/Laminate/Enchant Rustic Collection/Copy of Amazon Forest.jpg",
      link: "/laminate-flooring/enchant-rustic-collection",
      features: ["Rustic Finish", "Forest Series", "Weathered Look", "Authentic Texture"]
    }
  ];

  // Technical specifications
  const specifications = [
    { name: "Material", value: "High-Density Fiberboard Core" },
    { name: "Thickness", value: "8mm to 12mm" },
    { name: "Plank Size", value: "1210x196mm to 1380x193mm" },
    { name: "Surface", value: "Melamine Resin Overlay" },
    { name: "Wear Layer", value: "AC3 to AC5 Rating" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Moisture Resistance", value: "Water Resistant Surface" },
    { name: "Warranty", value: "15-25 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Superior Durability",
      description: "AC3 to AC5 wear ratings ensure long-lasting performance in high-traffic areas",
      icon: "💪"
    },
    {
      title: "Easy Installation",
      description: "Click-lock system allows for quick DIY installation without glue or nails",
      icon: "🔧"
    },
    {
      title: "Authentic Textures", 
      description: "Advanced printing technology creates realistic wood and stone appearances",
      icon: "🎨"
    },
    {
      title: "Budget Friendly",
      description: "Cost-effective flooring solution without compromising on style or quality",
      icon: "💰"
    }
  ];

  // Performance benefits
  const performanceBenefits = [
    "Scratch and Stain Resistant",
    "Fade Resistant Colors",
    "Easy Maintenance",
    "Suitable for Underfloor Heating",
    "Low VOC Emissions",
    "Hygienic Surface"
  ];

  // Applications
  const applications = [
    "Living Rooms & Bedrooms",
    "Kitchens & Dining Areas", 
    "Home Offices",
    "Commercial Spaces",
    "Retail Environments",
    "Educational Facilities"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Laminate/Elite Herringbone Collection/Copy of MVR_0699 (Color  328 )-Mount Everest.JPG" 
            alt="Laminate Flooring"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Laminate Flooring
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Affordable luxury with authentic wood and stone looks, engineered for modern living
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Modern Laminate Technology</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Our laminate flooring collection combines cutting-edge manufacturing technology with 
                stunning visual designs to deliver exceptional value and performance. From elegant 
                herringbone patterns to rustic forest textures, each collection offers unique 
                character while maintaining the practical benefits of laminate construction.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Featuring high-definition printing, embossed textures, and superior wear layers, 
                our laminate floors provide authentic wood and stone appearances at a fraction 
                of the cost. The click-lock installation system ensures easy DIY installation, 
                while advanced surface treatments offer excellent resistance to scratches, 
                stains, and daily wear.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Perfect for busy households, commercial spaces, and anywhere you need beautiful, 
                durable flooring that performs as well as it looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Laminate Collections</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {laminateMainCategories.map((category, index) => (
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
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      
      {/* Performance Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Performance Benefits</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Perfect Applications</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </motion.div>
              ))}
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

      

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover Affordable Luxury</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our laminate collections and find the perfect flooring solution for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/products'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LaminateFlooring;
