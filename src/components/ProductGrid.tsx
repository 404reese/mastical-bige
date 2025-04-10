import React from 'react';
const products = [{
  title: 'Solid Wood Floors',
  image: 'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  title: 'Engineered Wood Floors',
  image: 'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  title: 'Customized Wooden Flooring',
  image: 'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  title: 'Deck Flooring',
  image: 'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}];
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