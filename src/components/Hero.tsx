import React from 'react';
export const Hero = () => {
  return <section className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <div className="flex justify-center mb-4">
          <img className='h-32 w-auto' src="logo.png" alt="" />
          </div>
         
          <h1 className="font-serif text-6xl md:text-8xl font-light text-[#e5e2e0] mb-8">
            Furniture, decor,
            <br />
            and beyond
          </h1>
          <button className="text-[#e5e2e0] border border-[#e5e2e0] px-8 py-3 hover:bg-[#e5e2e0] hover:text-black transition-colors">
            START EXPLORING
          </button>
        </div>
      </div>
    </section>;
};
