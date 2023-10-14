// import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import useLocalStorage from "../hooks/useLocalStorage";
import valkyrielogo from "../images/Valkyrie-Consulting-Approved-Logo.png"
import "../styles/NavBar.css";

const NavBar = () => {
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
    <div id="nav-inner-container">
      <Link to="/" className="nav-item">
        <img id='logo' src={valkyrielogo} alt="Valkyrie consulting alex ross duluth minnesota superior wisconsin therapy logo" />
      </Link>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "nav-item active"
            : "nav-item"
        }
      >Home</Link>
      <Link
        to="/about"
        className={
          location.pathname === "/about"
            ? "nav-item active"
            : "nav-item"
        }
      >About</Link>
      <Link
        to="/services"
        className={
          location.pathname === "/services"
            ? "nav-item active"
            : "nav-item"
        }
      >Services</Link>
      <Link
        to="/events"
        className={
          location.pathname === "/events"
            ? "nav-item active"
            : "nav-item"
        }
      >Events</Link>
      <Link
        to="/contact"
        className={
          location.pathname === "/contact"
            ? "nav-item active contact-link"
            : "nav-item contact-link"
        }
      >Contact Us</Link>
    </div>
  );
};

export default NavBar;