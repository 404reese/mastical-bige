import React from 'react';


export const Story = () => {
  return <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <img src="/office2.png" alt="Modern living room" className="w-full h-[400px] object-cover rounded-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">Our Story</h2>
            <p className="text-gray-600">
              For over two decades, The Big E has been crafting timeless pieces
              for modern homes. Artistry, quality, and a touch of luxury -
              that's the Merland design philosophy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, itaque animi. Similique.l Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quod voluptatem? Rerum, ipsa sequi? Dolorum quia assumenda in optio vel labore blanditiis sed error quibusdam.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src="/office1.png" alt="Interior design" className="w-full h-48 object-cover rounded-lg" />
              <img src="/office3.png" alt="Interior design" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
     
    </section>;
};