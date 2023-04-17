
import './styles/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUs from './component/contact';
import Footer from './component/footer';
import Index from './component';
import Web2 from './component/greenhomeliving';
import PeriodTracker from './component/PeriodTracker';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './component/nav'
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route  exact path='/' element={<Index />}/>
        <Route  exact path='/GreenHomeLiving' element={<Web2/>}/>
        <Route exact path='/PeriodTracker' element={<PeriodTracker />} />
      </Routes>
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
