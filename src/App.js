import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Menu from './components/menu';
import Offerings from './components/offerings';
import { useState } from 'react';

import './App.css';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    
    <div className="min-h-screen  bg-[#F5E9E2] flex flex-col">
      <main className="flex-grow pb-28">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="offerings"><Offerings /></section>
        <section id="menu"><Menu setIsExpanded={setIsExpanded} setShowContent={setShowContent} /></section>
        <section id="contact"><Contact /></section>
        <Footer isExpanded={isExpanded} setIsExpanded={setIsExpanded} showContent={showContent} setShowContent={setShowContent}/>
      </main>
     
  </div>
  );
}

export default App;
