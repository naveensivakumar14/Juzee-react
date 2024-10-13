
import Hero from './components/Hero';
import Bestseller from './components/Bestseller';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';  // Assuming you have a Navbar component with Link elements

function App() {
  return (
    <>

      {/* Sections wrapped with Element for smooth scroll */}
      <Navbar/>
      <div id="home"><Hero/></div>
      <div id="bestseller"><Bestseller/></div>
      <About/>
      <div id="products"><Catalog /></div>
      <div id="contact"> <Contact /></div>

      <Footer />
    </>
  );
}

export default App;
