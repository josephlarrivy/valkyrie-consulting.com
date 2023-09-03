import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Services from "./Services";

const AppRoutes = () => {

  return (
    <div id="page-main-container">
      <div id="nav-outer-container">
        {/* <NavBar /> */}
      </div>
      <div id="feed-outer-container">
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          <Route exact path="/about"
            element={<About />}
          />
          <Route exact path="/services"
            element={<Services />}
          />
        </Routes>
      </div>


    </div>
  )
}

export default AppRoutes;