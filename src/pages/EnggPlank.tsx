import { motion } from "framer-motion";

export function EnggPlank() {
  
  // Wood Species data
  const woodSpecies = [
    { src: "/engg/engg-plank1.jpg", name: "Ash Grey" },
    { src: "/engg/engg-plank2.jpg", name: "Burma Teak" },
    { src: "/engg/engg-plank3.jpg", name: "Oak Barn Dark Grey" },
    { src: "/engg/engg-plank4.jpg", name: "Oak Barn Coffee Grey" },
    { src: "/engg/engg-plank5.jpg", name: "Oak Barn Blown" },
    { src: "/engg/engg-plank6.jpg", name: "Oak Barn Grey" },
    { src: "/engg/engg-plank7.jpg", name: "Oak Barn Caramel" },
    { src: "/engg/engg-plank8.jpg", name: "Oak Natural" },
    { src: "/engg/engg-plank9.jpg", name: "Oak Castle Grey" },
    { src: "/engg/engg-plank10.jpg", name: "Oak Tabacco" },
    { src: "/engg/engg-plank11.jpg", name: "Oak Retro White" },
    { src: "/engg/engg-plank12.jpg", name: "Merbac" },
    { src: "/engg/engg-plank13.jpg", name: "Wooden American Walnut" },
    { src: "/engg/engg-plank14.jpg", name: "Burma Teak" },
    { src: "/engg/engg-plank15.jpg", name: "Dark Chocolate" },
    { src: "/engg/engg-plank16.jpg", name: "Kayakuku" },
    { src: "/engg/engg-plank17.jpg", name: "Oak Life Carbonized" },
    { src: "/engg/engg-plank18.jpg", name: "Oak Filed" },
    { src: "/engg/engg-plank19.jpg", name: "Oak Caramel" },
    { src: "/engg/engg-plank20.jpg", name: "Oak Wheat" },
    { src: "/engg/engg-plank21.jpg", name: "American Walnut" },
    { src: "/engg/engg-plank22.jpg", name: "Oak Snow White" },
    { src: "/engg/engg-plank23.jpg", name: "Ash Dark Carbonized" },
    { src: "/engg/engg-plank24.jpg", name: "Ash Light Carbonized" },
    { src: "/engg/engg-plank25.jpg", name: "Ash Coffee" },
    { src: "/engg/engg-plank26.jpg", name: "Ash B1" },
    { src: "/engg/engg-plank27.jpg", name: "Ash Light Clean" },
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
            Engineered Plank
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Classic plank design with engineered wood durability
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
                Engineered Plank wood flooring represents the ultimate expression of timeless elegance and modern engineering. Each plank is meticulously crafted with a premium hardwood veneer atop a stable multi-layer plywood core, delivering the authentic beauty of solid wood with enhanced dimensional stability.
              </p>
              
              <p className="mb-4 text-gray-700">
                Our Engineered Plank flooring is designed to evoke the classic, clean lines of traditional hardwood flooring, with a durable and long-lasting construction that's perfect for high-traffic areas. The click-lock installation system ensures a seamless fit, while the UV-cured polyurethane finish provides lasting protection against daily wear.
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

export default EnggPlank;
