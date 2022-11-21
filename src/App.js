
import './styles/styles.css';
import ContactUs from './component/contact';
import Footer from './component/footer';
import Index from './component';
import Test from './component/resources';
import Web2 from './component/greenhomeliving';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './component/nav'
import { useEffect } from 'react';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route  exact path='/' element={<Index />}/>
        <Route  exact path='/resources' element={<Test />}/>
        <Route  exact path='/GreenHomeLiving' element={<Web2 />}/>
      </Routes>
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
