import React from 'react';
import { Nav } from '../components/Nav';
import { HomeHero } from '../components/HomeHero';
import { ProductGrid } from '../components/ProductGrid';
import {Sample} from '../components/Sample';
import { Contact } from '../components/Contact';
export default function App() {
  return <main className="min-h-screen w-full">
      <Nav />
      <HomeHero />
      <ProductGrid />
      <Sample />
      <Contact />
    </main>;
}
