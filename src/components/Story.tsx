import React from 'react';
export const Story = () => {
  return <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3" alt="Modern living room" className="w-full h-[400px] object-cover rounded-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-light">Our Story</h2>
            <p className="text-gray-600">
              For over two decades, The Big E has been crafting timeless pieces
              for modern homes. Artistry, quality, and a touch of luxury -
              that's the Merland design philosophy.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3" alt="Interior design" className="w-full h-48 object-cover rounded-lg" />
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3" alt="Interior design" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};