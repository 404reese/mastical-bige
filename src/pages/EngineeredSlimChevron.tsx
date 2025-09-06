import { motion } from "framer-motion";

export function EngineeredSlimChevron() {
  // Technical specifications data
  const specifications = [
    {
      name: "Thickness",
      value: "15mm (5/8 inch)"
    },
    {
      name: "Width", 
      value: "90mm (3.5 inches)"
    },
    {
      name: "Length",
      value: "600mm (23.6 inches)"
    },
    {
      name: "Wear Layer",
      value: "4mm hardwood veneer"
    },
    {
      name: "Core Material",
      value: "Multi-layer plywood"
    },
    {
      name: "Installation",
      value: "Click-lock system"
    },
    {
      name: "Finish",
      value: "UV-cured polyurethane"
    },
    {
      name: "Grade",
      value: "Premium select grade"
    },
    {
      name: "Moisture Content",
      value: "6-8%"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is engineered chevron flooring?",
      answer: "Engineered chevron flooring features a distinctive V-shaped zigzag pattern created by cutting planks at precise angles. It combines the beauty of natural wood with enhanced stability from multi-layer construction."
    },
    {
      question: "How does chevron differ from herringbone?",
      answer: "Chevron planks are cut at angles to create continuous zigzag lines, while herringbone uses rectangular planks arranged in a broken zigzag pattern. Chevron creates a more fluid, uninterrupted visual flow."
    },
    {
      question: "Is engineered chevron suitable for kitchens and bathrooms?",
      answer: "While more stable than solid wood, engineered wood should be protected from excessive moisture. It can work in kitchens with proper sealing, but we recommend luxury vinyl for high-moisture areas like bathrooms."
    },
    {
      question: "How difficult is chevron installation?",
      answer: "Chevron installation requires precision and experience due to the angled cuts and pattern alignment. We strongly recommend professional installation to ensure the pattern flows correctly and joints are tight."
    },
    {
      question: "Can chevron flooring be refinished?",
      answer: "Yes, with a 4mm wear layer, this engineered chevron can typically be sanded and refinished 2-3 times over its lifetime, allowing you to refresh the appearance and extend its lifespan."
    }
  ];

  // Wood Species data
  const woodSpecies = [
    {
      src: "/engg/engg1.jpg",
      name: "Oak Polar Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron.jpg",
      name: "Natural Walnut Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron2.jpg",
      name: "Honey Maple Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron3.jpg",
      name: "Rustic Hickory Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron4.jpg",
      name: "Charcoal Ash Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron5.jpg",
      name: "Vintage Pine Chevron"
    },
    {
      src: "/engg/engineered-slim-chevron6.jpg",
      name: "Ebony Birch Chevron"
    }
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
            Engineered Slim Chevron
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Elegant chevron pattern with premium engineered wood construction
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
                Engineered Chevron wood flooring represents the perfect marriage of timeless elegance and modern engineering. Each plank is meticulously crafted with a premium hardwood veneer atop a stable multi-layer plywood core, delivering the authentic beauty of solid wood with enhanced dimensional stability.
              </p>
              
              <p className="mb-4 text-gray-700">
                The chevron pattern is created by cutting the wood planks at precise angles and then fitting them together to create a continuous, flowing zigzag design. This creates an optical illusion that makes rooms appear larger while adding sophisticated visual movement to your space.
              </p>
              
              <p className="mb-4 text-gray-700">
                With its premium engineered wood construction, our Engineered Chevron flooring is durable and long-lasting, making it an excellent choice for high-traffic areas. The click-lock installation system ensures a seamless fit, while the UV-cured polyurethane finish provides lasting protection against daily wear.
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

export default EngineeredSlimChevron;
