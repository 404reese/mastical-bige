import { motion } from "framer-motion";

export function Herringbone() {
  
  // Wood Species data
  const woodSpecies = [
    { image: "/engg/herringbone/herringbone1.jpeg", name: "Classic Herringbone Oak" },
    { image: "/engg/herringbone/herringbone2.jpeg", name: "Rocky Reef" },
    { image: "/engg/herringbone/herringbone3.jpeg", name: "Oak Summer" },
    { image: "/engg/herringbone/herringbone4.jpeg", name: "Natural Oak Herringbone" },
    { image: "/engg/herringbone/herringbone5.jpeg", name: "Chevron Pattern" },
    { image: "/engg/herringbone/herringbone6.jpeg", name: "Wide Plank Herringbone" },
    { image: "/engg/herringbone/herringbone7.jpeg", name: "Vanilla" },
    { image: "/engg/enggh/enggh1.png", name: "Premium Herringbone Style" },
    { image: "/engg/enggh/enggh2.png", name: "Contemporary Herringbone" },
    { image: "/engg/enggh/enggh3.jpg", name: "Oak Stain Walnut Scapolite" },
    { image: "/engg/enggh/enggh4.jpg", name: "Oak Pyrite" },
    { image: "/engg/enggh/enggh5.jpg", name: "Walnut Axinite" },
    { image: "/engg/enggh/enggh6.jpg", name: "Teak Aragonite" },
  ];

  

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/engg/engg4.jpg" 
            alt="Herringbone"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Herringbone
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Classic herringbone pattern with engineered wood stability
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Epitome of Natural Elegance</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-4 text-gray-700">
                Engineered Herringbone wood flooring represents the perfect marriage of timeless elegance and modern engineering. Each plank is meticulously crafted with a premium hardwood veneer atop a stable multi-layer plywood core, delivering the authentic beauty of solid wood with enhanced dimensional stability.
              </p>
              
              <p className="mb-4 text-gray-700">
                The classic herringbone pattern is created by cutting the wood planks at precise angles and then fitting them together to create a continuous, flowing zigzag design. This creates an optical illusion that makes rooms appear larger while adding sophisticated visual movement to your space.
              </p>
              
              <p className="mb-4 text-gray-700">
                With its premium engineered wood construction, our Engineered Herringbone flooring is durable and long-lasting, making it an excellent choice for high-traffic areas. The click-lock installation system ensures a seamless fit, while the UV-cured polyurethane finish provides lasting protection against daily wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      

      {/* Wood Species Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Collection</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {woodSpecies.map((species, index) => (
              <div key={index} className="text-center">
                <div className="h-52 rounded-lg overflow-hidden bg-gray-200 mb-4">
                  <img src={species.src} alt={species.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-lg">{species.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to explore our premium solid wood flooring options and get a personalized consultation.
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

export default Herringbone;
