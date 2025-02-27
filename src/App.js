import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Menu from './components/menu';

import './App.css';

function App() {

  return (
    <div class="min-h-screen flex flex-col">
      <main class="flex-grow pb-28">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="menu"><Menu /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
     
  </div>
  );
}

export default App;
