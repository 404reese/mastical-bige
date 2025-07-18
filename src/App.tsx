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
import SolidWoodFloors from './pages/SolidWoodFloors';
import { ParquetFlooring } from './pages/ParquetFlooring';
import EngineeredWoodFloors from './pages/EngineeredWoodFloors';
import ContactUs from './pages/ContactUs';
import EngineeredSlimChevron from './pages/EngineeredSlimChevron';
import EnggPlank from './pages/EnggPlank';
import ParquetTiles from './pages/ParquetTiles';
import Herringbone from './pages/Herringbone';
import Designer from './pages/Designer';
import Chevron from './pages/Chevron';
import EngineeredSlim from './pages/EngineeredSlim';
import EngineeredHerringbone from './pages/EngineeredHerringbone';
import { Workwalk } from './pages/Workwalk';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/solid-wood-floors" element={<SolidWoodFloors />} />
          <Route path="/products/engineered-wood-floors" element={<EngineeredWoodFloors />} />
          <Route path="/parquet-flooring" element={<ParquetFlooring />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/engineered-slim-chevron" element={<EngineeredSlimChevron />} />
          <Route path="/engg-plank" element={<EnggPlank />} />
          <Route path="/parquet-tiles" element={<ParquetTiles />} />
          <Route path="/herringbone" element={<Herringbone />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/chevron" element={<Chevron />} />
          <Route path="/engineered-slim" element={<EngineeredSlim />} />
          <Route path="/engineered-herringbone" element={<EngineeredHerringbone />} />
          <Route path="/workwalk" element={<Workwalk />} />
        </Routes>
      </div>
    </Router>;
}
