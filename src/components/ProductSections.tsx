import React from 'react';
export function ProductSections() {
  return <div className="bg-white">
      {/* Solid Wood Floors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Solid Wood Floors</h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-6">
                Solid Wood Flooring is a natural 100% wood product with each
                board coming from just one piece of solid wood which is cut down
                to the desired size. It creates a luxurious appeal to your home
                & is very strong & durable. The Solid Wood flooring has a longer
                life span than any other kind of flooring & is also available in
                various species of wood like Oak, Walnut, Maple, Cherry,
                Mahogany, Bamboo, etc.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>100% natural solid wood</li>
                <li>Long-lasting durability</li>
                <li>Available in multiple wood species</li>
                <li>Creates luxurious appeal</li>
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3" alt={`Solid wood floor example ${i}`} className="w-full h-full object-cover" />
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Engineered Wood Floors Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Engineered Wood Floors</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-12">
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-6">
                Engineered Wood Floors are the classic among floor-covering
                being both timeless and modern. Its material quality represents
                a natural and pleasant living experience. Expansion &
                contraction is bare minimum compared to solid wood flooring in
                high humidity climates thus make it a best choice.
              </p>
              <p className="text-gray-700 mb-6">
                We import some of the best wooden flooring from the European
                markets such as Belarus, Italy, Poland & Belgium.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Premium European quality</li>
                <li>Minimal expansion in humidity</li>
                <li>Perfect for modern interiors</li>
                <li>Wide range of finishes</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594940210012-a73ab1bc0c4b?ixlib=rb-4.0.3" alt="Engineered wood flooring showcase" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customized Wooden Flooring Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Customized Wooden Flooring
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-6">
                Our customized wooden flooring solutions allow you to create
                unique patterns and designs that perfectly match your interior
                vision. From intricate inlays to custom color treatments, we can
                help you achieve the exact look you desire.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Custom patterns and designs</li>
                <li>Unique color treatments</li>
                <li>Professional installation</li>
                <li>Personalized consultation</li>
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1617391258031-9828c06c8f28?ixlib=rb-4.0.3" alt="Custom flooring pattern" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1617391258031-9828c06c8f28?ixlib=rb-4.0.3" alt="Custom flooring finish" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Deck Flooring Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Deck Flooring</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-12">
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-6">
                Transform your outdoor space with our premium deck flooring
                solutions. Our deck flooring is specially treated to withstand
                various weather conditions while maintaining its beautiful
                appearance throughout the years.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Weather-resistant treatment</li>
                <li>Low maintenance</li>
                <li>Multiple design options</li>
                <li>Professional outdoor installation</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3" alt="Outdoor deck flooring" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}