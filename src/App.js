import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from "./DesktopComponents/Home";
import About from "./DesktopComponents/About";
import Services from "./DesktopComponents/Services";
import Events from "./DesktopComponents/Events";
import NavBar from "./DesktopComponents/NavBar";
import Contact from "./DesktopComponents/Contact";
import Footer from "./DesktopComponents/Footer";
import "./styles/AppRoutes.css"
import './App.css';
// import DesktopAppRoutes from './DesktopComponents/DesktopAppRoutes';
// import MobileAppRoutes from './MobileComponents/MobileAppRoutes';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    console.log(isMobile)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       {/* {isMobile ? <MobileAppRoutes /> : <DesktopAppRoutes />} */}
  //       <DesktopAppRoutes isMobile={isMobile}/>
  //     </BrowserRouter>
  //   </div>
  // );
  return (
    <div className="App">

    <div id="page-main-container">
      <BrowserRouter>
      <div id="nav-outer-container">
        {<NavBar isMobile={isMobile} />}
      </div>
      <div id="page-container">
        <Routes>
          <Route exact path="/"
            element={<Home isMobile={isMobile} />}
          />
          <Route exact path="/about"
            element={<About />}
          />
          <Route exact path="/services"
            element={<Services />}
          />
          <Route exact path="/events"
            element={<Events />}
          />
          <Route exact path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
      <div id="footer-outer-container">
        {<Footer />}
      </div>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App;
