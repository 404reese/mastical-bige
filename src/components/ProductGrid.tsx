import React from 'react';
const products = [{
  title: 'Solid Wood Floors',
  image: '/pr1.png'
}, {
  title: 'Engineered Wood Floors',
  image: '/pr2.png'
}, {
  title: 'Customized Wooden Flooring',
  image: '/pr3.png'
}, {
  title: 'Deck Flooring',
  image: '/pr4.png'
}, {
  title: 'Indoor and Outdoor Wall Cladding & Soffit',
  image: '/pr5.png'
}, {
  title: 'Lumbers & Panels',
  image: '/pr6.png'
}, {
  title: 'Laminate Wood Floors',
  image: '/pr7.png'
}, {
  title: 'SPC Wood Floors',
  image: '/pr8.png'
},

];
export function ProductGrid() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-8">Products offered by us:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(product => <div key={product.title} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg mb-2">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-medium">{product.title}</h3>
            </div>)}
        </div>
      </div>
    </section>;
}