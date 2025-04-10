import React from 'react';
export const Collections = () => {
  const collections = [{
    title: 'Timeless Staples',
    description: 'Minimalist furniture to last you a lifetime',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3'
  }, {
    title: 'Functional Furniture',
    description: 'Multi-functional pieces to maximize small spaces',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3'
  }, {
    title: 'Home Accents',
    description: 'Beautiful details to liven up your space',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3'
  }];
  return <section className="py-24 bg-gray-900 text-[#e5e2e0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16">
          Studio Collections
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map(collection => <div key={collection.title} className="group relative overflow-hidden">
              <img src={collection.image} alt={collection.title} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-light mb-2">{collection.title}</h3>
                <p className="text-gray-300">{collection.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
