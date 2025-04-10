import React from 'react';
import { Nav } from '../components/Nav';
import { ProdHero } from '../components/ProdHero';
import { ProductGrid } from '../components/ProductGrid';
import { ProductSections } from '../components/ProductSections';
import { Contact } from '../components/Contact';
export default function App() {
  return <main className="min-h-screen w-full">
      <Nav />
      <ProdHero />
      <ProductGrid />
      <ProductSections />
      <Contact />
    </main>;
}
