import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Collections } from './components/Collections';
import { Contact } from './components/Contact';
import Projects from './pages/Projects';
import Products from './pages/Products';
import Homeowners from './pages/Homeowners';
import {HeroScroll} from './components/HeroScroll';
import {Social} from './components/Social';

const Home = () => <>
    <Hero />
    <HeroScroll />
    <Collections />
    <Story />
    < Social />
    <Contact />
  </>;
export function App() {
  return <Router>
      <div className="w-full min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/homeowners" element={<Homeowners />} />
          <Route path="/contact" element={<Contact />} /> {/* Added contact route */}
        </Routes>
      </div>
    </Router>;
}
