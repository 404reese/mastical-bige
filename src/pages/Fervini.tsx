import { motion } from "framer-motion";

export function Fervini() {
  
  // Wood Species data
  const woodSpecies = [
    { src: "/engg/engg-plank1.jpg", name: "Ash Grey" },
    
  ];

  

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/slim-chev.webp" 
            alt="SoEngineered Slim Chevron"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineered Fervini
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Discover the beauty and durability of our Engineered Fervini flooring, crafted with the finest hardwoods and advanced engineering techniques.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Ultimate in Performance and Style</h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-4 text-gray-700">
                Engineered Fervini flooring combines the best of both worlds: the stunning beauty of exotic hardwoods and the exceptional durability of high-performance engineering. Each plank is crafted with a premium hardwood veneer atop a highly stable and moisture-resistant core, delivering unmatched performance in high-traffic areas.
              </p>
              
              <p className="mb-4 text-gray-700">
                Our Engineered Fervini flooring is designed to provide long-lasting beauty and peace of mind. The advanced engineering process ensures a product that's both stable and resistant to shrinkage, while the UV-cured polyurethane finish provides lasting protection against daily wear. The result is a floor that's both visually stunning and engineered to last.
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

export default Fervini;
