
import './styles/styles.css';
import ContactUs from './component/contact';
import Footer from './component/footer';
import Index from './component';
import Test from './component/resources';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import{ Router, Route, Routes, useLocation} from 'react-router-dom'
import Nav from './component/nav'
import { useEffect } from 'react';
function App() {
  // const {pathname, hash, key} = useLocation()

  // useEffect(() => {if (hash === ''){
  //   window.scrollTo(0, 0 );
  // }
  // else{
  //   setTimeout(() =>{
  //     const id = hash.replace('#', '');
  //     const element = document.getElementById(id);
  //     if (element){
  //       element.scrollIntoView();
  //     }
  //   }, 0);
  // }
  // }, [pathname, hash, key]);
  return (
    // <Routes>
    //   <Nav />
    //   <Routes>
    //     <Route exact path='/' componet={Index} />
    //   </Routes>
    //   <ContactUs />
    //   <Footer />
    // </Routes> 
    <Router>
      <Nav />
      <Routes>
        <Route  exact path='/' element={<Index />}/>
        <Route  exact path='/resources' element={<Test />}/>
      </Routes>
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
