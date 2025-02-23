import logo from './logo.svg';
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

import './App.css';

function App() {

  return (
    <div>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <Footer />
  </div>
  );
}

export default App;
