
import './styles/styles.css';
// import {gsap} from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from './component/hero'
import ContactUs from './component/contact';
import Footer from './component/footer';
import Web from './component/web'
import Graphics from './component/graphics';
import Arts from './component/arts'
import Animation from './component/animation'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/nav'
function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <Hero />
      <Web />
      <Graphics />
      <Animation />
      <Arts />
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
