import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import MenuCatering from './components/MenuCatering';
import MenuVippa from './components/MenuVippa';
import { useState } from 'react';

import './App.css';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="bg-[#F5E9E2] flex flex-col">
      <main className="pb-20">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="menu"><MenuCatering setIsExpanded={setIsExpanded} setShowContent={setShowContent} /></section>
        <section id="menu-vippa"><MenuVippa /></section>
        <section id="contact"><Contact /></section>
        <Footer isExpanded={isExpanded} setIsExpanded={setIsExpanded} showContent={showContent} setShowContent={setShowContent}/>
      </main>
    </div>
  );
}

export default App;
