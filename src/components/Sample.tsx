import React from 'react';
const products = [{
  title: 'Solid Wood Floors',
  image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}, {
  title: 'Engineered Wood Floors',
  image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}, {
  title: 'Customized Wooden Flooring',
  image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}];
export function Sample() {
  return <section className="py-16 bg-#fff">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
        <h2 className="text-3xl mb-8">Need samples?</h2>
        </div>
        <div className="flex items-center justify-center mb-8">
        <button className="bg-[#D4B88C] text-#000 px-6 py-2 rounded">
            Yes I want !
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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