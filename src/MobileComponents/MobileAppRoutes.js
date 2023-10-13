import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Events from "./Events";
import MobileNavBar from "./MobileNavBar";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import "../styles/AppRoutes.css"

const MobileAppRoutes = () => {

  return (
    <div id="page-main-container">
      <div id="nav-outer-container">
        {<MobileNavBar />}
      </div>
      <div id="page-container">
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          {/* <Route exact path="/about"
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
          /> */}
        </Routes>
      </div>
      <div id="footer-outer-container">
        {/* {<Footer />} */}
      </div>
    </div>
  )
}

export default MobileAppRoutes;