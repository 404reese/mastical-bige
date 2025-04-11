import React from 'react';
export function HomeHero() {
  return <section className="relative h-screen w-full bg-[url('https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
      <h1 className="font-serif text-6xl md:text-8xl font-light text-[#e5e2e0] mb-8">
          Perfect wood floor
          <br />
          for perfect homes
        </h1>
        <div className="flex gap-4">
          <button className="bg-[#D4B88C] text-white px-6 py-2 rounded">
            Get your free sample
          </button>
          <button className="border border-white text-white px-6 py-2 rounded">
            Talk to an expert
          </button>
        </div>
      </div>
    </section>;
}