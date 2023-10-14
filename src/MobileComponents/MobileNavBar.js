// import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import useLocalStorage from "../hooks/useLocalStorage";
import valkyrielogo from "../images/Valkyrie-Consulting-Approved-Logo.png"
import "../styles/MobileNavBar.css";

const MobileNavBar = () => {
  // const [token, setTokenValue, removeToken, getToken, getDecodedToken] =
  //   useLocalStorage("token");
  const location = useLocation();
  // const [loginStatus, setLoginStatus] = useState(null)

  // useEffect(() => {
  //   const storedToken = getToken()
  //   console.log(storedToken)
  //   if (storedToken !== null) {
  //     setLoginStatus(true)
  //   } else {
  //     setLoginStatus(false)
  //   }
  // }, []);

  return (
    <div id="mobile-nav-inner-container">
      <Link to="/" className="mobile-nav-item">
        <img id='mobile-logo' src={valkyrielogo} alt="Valkyrie consulting alex ross duluth minnesota superior wisconsin therapy logo" />
      </Link>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "mobile-nav-item active"
            : "mobile-nav-item"
        }
      >Home</Link>
      <Link
        to="/about"
        className={
          location.pathname === "/about"
            ? "mobile-nav-item active"
            : "mobile-nav-item"
        }
      >About</Link>
      <Link
        to="/services"
        className={
          location.pathname === "/services"
            ? "mobile-nav-item active"
            : "mobile-nav-item"
        }
      >Services</Link>
      <Link
        to="/events"
        className={
          location.pathname === "/events"
            ? "mobile-nav-item active"
            : "mobile-nav-item"
        }
      >Events</Link>
      <Link
        to="/contact"
        className={
          location.pathname === "/contact"
            ? "mobile-nav-item active contact-link"
            : "mobile-nav-item contact-link"
        }
      >Contact Us</Link>
    </div>
  );
};

export default MobileNavBar;