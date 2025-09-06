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
import { Woodwalk } from './pages/woodwalk.tsx';
import DeckFlooring from './pages/DeckFlooring';
import SylvanixDecking from './pages/SylvanixDecking';
import EgoEnrichPlankDecking from './pages/EgoEnrichPlankDecking';
import EliteCollection from './pages/EliteCollection';
import EliteEssential from './pages/EliteEssential';
import SkylineSeries from './pages/SkylineSeries';
import SummitGrey from './pages/SummitGrey';
import TropicalGold from './pages/TropicalGold';
import TeakTraditional from './pages/TeakTraditional';
import DestinationsDecking from './pages/DestinationsDecking';
import ElementsDecking from './pages/ElementsDecking';
import EGOEnrichWPCDecktile from './pages/EGOEnrichWPCDecktile';
import DassoCTECHDecking from './pages/dassoCTECHDecking';
import DassoXTR from './pages/dassoXTR';
import WallCladdingSoffit from './pages/WallCladdingSoffit';
import SylvanixCladding from './pages/SylvanixCladding';
import DassoCTECHCladding from './pages/DassoCTECHCladding';
import DassoXTRCladding from './pages/DassoXTRCladding';
import DassoCTECHSoffit from './pages/DassoCTECHSoffit';
import DassoXTRSoffit from './pages/DassoXTRSoffit';
import DesignerCollection from './pages/DesignerCollection';
import SoarSignature from './pages/SoarSignature';
import LumberPanels from './pages/LumberPanels';
import DassoCTECHLumberPanel from './pages/DassoCTECHLumberPanel';
import DassoXTRLumberPanel from './pages/DassoXTRLumberPanel';
import SPCFlooring from './pages/SPCFlooring';
import SPCPlank from './pages/SPCPlank';
import SPCTile from './pages/SPCTile';
import SPCHerringbone from './pages/SPCHerringbone';
import LaminateFlooring from './pages/LaminateFlooring';
import EliteHerringboneCollection from './pages/EliteHerringboneCollection';
import EliteHerringbonePrimeCollection from './pages/EliteHerringbonePrimeCollection';
import EnchantPremiumCollection from './pages/EnchantPremiumCollection';
import EnchantRusticCollection from './pages/EnchantRusticCollection';
import Fervini from './pages/Fervini';
import Hywood from './pages/Hywood.tsx';

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
          <Route path="/woodwalk" element={<Woodwalk />} />
          <Route path="/deck-flooring" element={<DeckFlooring />} />
          <Route path="/deck-flooring/sylvanix-decking" element={<SylvanixDecking />} />
          <Route path="/deck-flooring/ego-enrich-plank-decking" element={<EgoEnrichPlankDecking />} />
          <Route path="/deck-flooring/elite-collection" element={<EliteCollection />} />
          <Route path="/deck-flooring/elite-essential" element={<EliteEssential />} />
          <Route path="/deck-flooring/skyline" element={<SkylineSeries />} />
          <Route path="/deck-flooring/destinations-decking" element={<DestinationsDecking />} />
          <Route path="/deck-flooring/elements-decking" element={<ElementsDecking />} />
          <Route path="/deck-flooring/elite-collection/summit-grey" element={<SummitGrey />} />
          <Route path="/deck-flooring/elite-essential/tropical-gold" element={<TropicalGold />} />
          <Route path="/deck-flooring/skyline/teak-traditional" element={<TeakTraditional />} />
          <Route path="/deck-flooring/ego-enrich-wpc-decktile" element={<EGOEnrichWPCDecktile />} />
          <Route path="/deck-flooring/dassoCTECH" element={<DassoCTECHDecking />} />
          <Route path="/deck-flooring/dassoXTR" element={<DassoXTR />} />
          <Route path="/wall-cladding-soffit" element={<WallCladdingSoffit />} />
          <Route path="/wall-cladding-soffit/sylvanix-cladding" element={<SylvanixCladding />} />
          <Route path="/wall-cladding-soffit/dassoCTECH-cladding" element={<DassoCTECHCladding />} />
          <Route path="/wall-cladding-soffit/dassoXTR-cladding" element={<DassoXTRCladding />} />
          <Route path="/wall-cladding-soffit/dassoCTECH-soffit" element={<DassoCTECHSoffit />} />
          <Route path="/wall-cladding-soffit/dassoXTR-soffit" element={<DassoXTRSoffit />} />
          <Route path="/wall-cladding-soffit/sylvanix-cladding/designer-collection" element={<DesignerCollection />} />
          <Route path="/wall-cladding-soffit/sylvanix-cladding/soar-signature" element={<SoarSignature />} />
          
          {/* Lumber Panels Routes */}
          <Route path="/lumber-panels" element={<LumberPanels />} />
          <Route path="/lumber-panels/dassoCTECH-lumber-panel" element={<DassoCTECHLumberPanel />} />
          <Route path="/lumber-panels/dassoXTR-lumber-panel" element={<DassoXTRLumberPanel />} />
          
          {/* SPC Flooring Routes */}
          <Route path="/spc-flooring" element={<SPCFlooring />} />
          <Route path="/spc-flooring/spc-plank" element={<SPCPlank />} />
          <Route path="/spc-flooring/spc-tile" element={<SPCTile />} />
          <Route path="/spc-flooring/spc-herringbone" element={<SPCHerringbone />} />
          
          {/* Laminate Flooring Routes */}
          <Route path="/laminate-flooring" element={<LaminateFlooring />} />
          <Route path="/laminate-flooring/elite-herringbone-collection" element={<EliteHerringboneCollection />} />
          <Route path="/laminate-flooring/elite-herringbone-prime-collection" element={<EliteHerringbonePrimeCollection />} />
          <Route path="/laminate-flooring/enchant-premium-collection" element={<EnchantPremiumCollection />} />
          <Route path="/laminate-flooring/enchant-rustic-collection" element={<EnchantRusticCollection />} />
          
          {/* Additional Routes */}
          <Route path="/hywood" element={<Hywood />} />
          <Route path="/fervini" element={<Fervini />} />
        </Routes>
      </div>
    </Router>;
}
