import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function EliteHerringboneCollection() {
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

  // Technical specifications
  const specifications = [
    { name: "Material", value: "High-Density Fiberboard Core" },
    { name: "Thickness", value: "12mm" },
    { name: "Plank Size", value: "600x100mm Herringbone" },
    { name: "Pattern", value: "Classic Herringbone Layout" },
    { name: "Surface", value: "Embossed Wood Texture" },
    { name: "Wear Layer", value: "AC5 Commercial Grade" },
    { name: "Installation", value: "Click Lock System" },
    { name: "Warranty", value: "25 Years Residential" },
  ];

  // Key features
  const features = [
    {
      title: "Mountain Inspired",
      description: "Each design named after famous mountain peaks, bringing nature's grandeur indoors",
      icon: "🏔️"
    },
    {
      title: "AC5 Rating",
      description: "Commercial grade durability suitable for high-traffic areas and heavy use",
      icon: "💎"
    },
    {
      title: "Herringbone Pattern",
      description: "Classic herringbone layout creates timeless elegance and visual interest",
      icon: "📐"
    },
    {
      title: "Elite Quality",
      description: "Premium construction with superior wear resistance and authentic textures",
      icon: "⭐"
    }
  ];

  // Mountain series designs
  const mountainDesigns = [
    {
      name: "Mount Everest",
      description: "Majestic grey-brown tones inspired by the world's highest peak",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0699 (Color  328 )-Mount Everest.JPG",
      characteristics: ["Cool Grey Tones", "Natural Grain", "Premium Finish", "High Contrast"]
    },
    {
      name: "Mount Whitney",
      description: "Light oak with subtle grain patterns reflecting California's highest summit",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0703 (Color  NO37-3B Click )-Mount Whitney.JPG",
      characteristics: ["Light Oak", "Subtle Grain", "Clean Lines", "Modern Appeal"]
    },
    {
      name: "Mount Bianco",
      description: "Pure and elegant white oak inspired by the pristine Alpine peak",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0707 (Color 90004-6B)-Mount Bianco.JPG",
      characteristics: ["White Oak", "Pure Tones", "Alpine Fresh", "Minimalist Style"]
    },
    {
      name: "Mount Elbrus",
      description: "Rich brown oak with deep character inspired by Europe's highest mountain",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0712 (Color -19009 )Mount Elbrus.JPG",
      characteristics: ["Rich Brown", "Deep Character", "European Style", "Classic Beauty"]
    },
    {
      name: "Mount Logan",
      description: "Sophisticated grey oak reflecting Canada's majestic mountain ranges",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0722 (Color- 12911 )-Mount Logan.JPG",
      characteristics: ["Grey Oak", "Canadian Style", "Sophisticated Look", "Natural Beauty"]
    },
    {
      name: "Mount Fuji",
      description: "Serene and balanced tones inspired by Japan's iconic sacred mountain",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0827 (M018-4)-Mount Fuji.JPG",
      characteristics: ["Serene Tones", "Balanced Color", "Japanese Aesthetic", "Sacred Beauty"]
    },
    {
      name: "Mount Austen",
      description: "Warm oak tones with natural variations inspired by Antarctic peaks",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0833 (Color- 7707 )-Mount Austen.JPG",
      characteristics: ["Warm Oak", "Natural Variation", "Antarctic Inspiration", "Unique Character"]
    },
    {
      name: "Monte Rosa",
      description: "Elegant pink-tinged oak inspired by the Alpine rose-colored mountain",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0836 (color- 12332)-Monte Rosa.JPG",
      characteristics: ["Pink Tinge", "Alpine Rose", "Elegant Color", "Romantic Appeal"]
    },
    {
      name: "Mount Makalu",
      description: "Bold and dramatic oak patterns inspired by the Himalayan giant",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0840 ( COLOR - 12207 )Mount Makalu.JPG",
      characteristics: ["Bold Patterns", "Dramatic Style", "Himalayan Power", "Strong Character"]
    },
    {
      name: "Mount Blanc",
      description: "Pure white oak with subtle textures inspired by the white mountain",
      image: "/Laminate/Elite Herringbone Collection/Copy of MVR_0849 (Color M026-47-Mount Blanc.JPG",
      characteristics: ["Pure White", "Subtle Texture", "Alpine Pure", "Classic Elegance"]
    }
  ];

  // Installation benefits
  const installationBenefits = [
    "Pre-Cut Herringbone Planks",
    "Click-Lock Installation System", 
    "No Adhesive Required",
    "Professional Pattern Alignment",
    "Suitable for DIY Installation",
    "Floating Floor System"
  ];

  // Design advantages
  const designAdvantages = [
    "Creates Visual Movement",
    "Makes Rooms Appear Larger", 
    "Timeless Pattern Appeal",
    "Luxury Appearance",
    "Versatile Style Compatibility",
    "High-End Aesthetic"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Laminate/Elite Herringbone Collection/Copy of MVR_0699 (Color  328 )-Mount Everest.JPG" 
            alt="Elite Herringbone Collection"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elite Herringbone Collection
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Mountain-inspired herringbone patterns with premium AC5 commercial grade durability
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Peaks of Perfection</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                The Elite Herringbone Collection draws inspiration from the world's most magnificent 
                mountain peaks, translating their grandeur into stunning laminate flooring designs. 
                Each pattern in this premium collection is named after iconic mountains, bringing 
                the majesty of nature's highest points into your living space.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Featuring the timeless herringbone pattern in AC5 commercial grade quality, this 
                collection combines classic elegance with modern durability. The sophisticated 
                layout creates visual movement and interest while the mountain-inspired color 
                palette offers options ranging from pristine alpine whites to rich Himalayan browns.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Perfect for luxury residential projects and upscale commercial spaces where you 
                want to make a statement that's both timeless and contemporary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Series Designs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Mountain Series Designs</h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mountainDesigns.map((design, index) => (
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
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{design.name}</h3>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Elite Collection Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Design Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Herringbone Advantages</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{advantage}</span>
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
          <h2 className="text-3xl font-bold mb-6">Reach New Heights</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the majesty of mountain-inspired herringbone patterns with Elite Collection quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/laminate-flooring'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to Laminate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EliteHerringboneCollection;
