import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function DassoCTECHLumberPanel() {
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
    { name: "Material", value: "Premium Bamboo Composite" },
    { name: "Thickness", value: "25mm to 40mm" },
    { name: "Width", value: "200mm to 300mm" },
    { name: "Length", value: "2400mm to 4800mm" },
    { name: "Density", value: "0.8-0.9 g/cm³" },
    { name: "Moisture Content", value: "8-12%" },
    { name: "Tensile Strength", value: "40-60 MPa" },
    { name: "Warranty", value: "25 Years Structural" },
  ];

  // Key features
  const features = [
    {
      title: "Superior Strength",
      description: "Enhanced tensile and compressive strength exceeding traditional hardwoods",
      icon: "💪"
    },
    {
      title: "Dimensional Stability",
      description: "Minimal expansion and contraction with temperature and humidity changes",
      icon: "📏"
    },
    {
      title: "Workability",
      description: "Easy to machine, drill, cut, and finish with standard woodworking tools",
      icon: "🔨"
    },
    {
      title: "Sustainable Material",
      description: "Made from rapidly renewable bamboo with carbon-negative production",
      icon: "🌱"
    }
  ];

  // Applications
  const applications = [
    {
      category: "Structural Applications",
      uses: ["Load-bearing beams", "Posts and columns", "Joists and rafters", "Structural panels"],
      icon: "🏗️"
    },
    {
      category: "Furniture & Cabinetry",
      uses: ["Table tops", "Cabinet doors", "Shelving systems", "Furniture frames"],
      icon: "🪑"
    },
    {
      category: "Architectural Millwork",
      uses: ["Window frames", "Door frames", "Trim and molding", "Stair components"],
      icon: "🏛️"
    },
    {
      category: "Industrial Uses",
      uses: ["Shipping pallets", "Industrial shelving", "Machine bases", "Workshop benches"],
      icon: "⚙️"
    }
  ];

  // Processing advantages
  const processingAdvantages = [
    "Standard Woodworking Tools Compatible",
    "Excellent Screw and Nail Holding",
    "Superior Glue Bond Strength",
    "Smooth Sanding and Finishing",
    "Precise Machining Capabilities",
    "Stable Joinery Performance"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093824403.jpg" 
            alt="dassoCTECH Lumber & Panel"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            dassoCTECH Lumber & Panel
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Premium bamboo lumber and panel solutions with superior structural properties
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Engineering Excellence in Sustainable Materials</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                dassoCTECH Lumber & Panel represents the pinnacle of sustainable building materials, combining 
                advanced bamboo engineering with traditional lumber functionality. Our innovative manufacturing 
                process creates products that exceed conventional lumber in strength, stability, and environmental 
                performance.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Whether you're building furniture, creating architectural millwork, or constructing structural 
                components, dassoCTECH lumber and panels provide the reliability and performance you need while 
                supporting sustainable construction practices and reducing environmental impact.
              </p>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                With superior dimensional stability, enhanced workability, and natural resistance to moisture 
                and insects, our products deliver consistent performance that meets the demanding requirements 
                of professional builders, architects, and craftspeople.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Product Gallery</h2>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766898125843.jpeg"
                  alt="dassoCTECH Lumber Beams"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766899199977.jpeg"
                  alt="Panel Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093824569.jpg"
                  alt="Structural Applications"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093825905.jpg"
                  alt="Architectural Millwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/Lumber Panels/dassoCTECH Lumber & Panel/20191008093826712.jpg"
                  alt="Furniture Applications"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
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
          <h2 className="text-3xl font-bold mb-6">Build Better with dassoCTECH</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore dassoCTECH Lumber & Panel solutions and discover how sustainable materials can enhance your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact-us'} 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => window.location.href = '/lumber-panels'} 
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Back to Lumber Panels
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DassoCTECHLumberPanel;
