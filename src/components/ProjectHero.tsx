import React from 'react';

const ProjectHero = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-[#e5e2e0] mb-8">
            Fabulous wood floor
            <br />
            and fabulous homes
          </h1>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#C8A87D] text-[#e5e2e0] px-8 py-3 hover:bg-[#B69A70] transition-colors">
              Get your free sample
            </button>
            <button className="bg-[#e5e2e0] text-black px-8 py-3 hover:bg-gray-100 transition-colors">
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
