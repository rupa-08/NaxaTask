import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="info alert alert-info" role="alert">
        <a href="">
          We Have Been Working On Several Voluntary Initiatives During The
          COVID-19 Pandemic. Check Them Out
        </a>
      </div>

      <div className="navbar-content">
        <div className="logo">
          <img src="https://www.naxa.com.np/792f5bf2487bd27628a54fe64a712630.png" />
        </div>
        <div className="content">
          <Link spy={true} to="ServiceID" smooth={true}>
            <span className="txt">Services</span>
          </Link>
          <div className="dropdown">
            <span className="txt">Portfolio</span>

            <div className="dropdown-content">
              <a href="">General</a>
              <a href="">International</a>
            </div>
          </div>
          <div className="dropdown">
            <span className="txt">Company</span>
            <div className="dropdown-content">
              <a href="">About Us</a>
              <a href="">Team</a>
              <a href="">Work with us</a>
            </div>
          </div>
          <div className="dropdown">
            <span className="txt">Events And Media</span>
            <div className="dropdown-content">
              <a href="">Events</a>
              <a href="">Media</a>
              <a href="">Publications</a>
            </div>
          </div>

          <span className="txt">Blog</span>

          <button>Let's talk</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
