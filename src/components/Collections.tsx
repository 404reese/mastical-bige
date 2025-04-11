import React from 'react';


export const Collections = () => {
  const collections = [{
    title: 'RUSTIC',
    description: 'Our most characterful grade, filled with rich grains, charming knots and natural colour variations.',
    image: './a1.png'
  }, {
    title: 'CLASSIC',
    description: 'The perfect balance between modern sophistication and rustic charm. A true classic.',
    image: './a2.png'
  }, {
    title: 'PRISTINE',
    description: 'Our cleanest grade with a smaller number of knots and minimal sapwood for a contemporary edge.',
    image: '/a3.png'
  },
  {
    title: 'HERITAGE',
    description: 'A handcrafted surface texture and bevelled edges emulate a naturally aged wood floor.',
    image: './a4.png'
  },
  {
    title: 'NATURAL',
    description: 'A mix of light and dark tones creates a natural appearance that works well with interior designs.',
    image: './a5.png'
  },
  {
    title: 'VINTAGE',
    description: 'This grade features a subtle surface texture and a mix of light and dark tones for a classic look.',
    image: './a6.jpg'
  }];
  return <section className="py-24 bg-gray-900 text-[#e5e2e0]">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-serif text-center mb-16">
          Our Collections
        </h2>
        <div className="relative overflow-hidden w-full h-full">
    </div>
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
