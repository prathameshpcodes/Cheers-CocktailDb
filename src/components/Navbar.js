import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/cheers.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cheers logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
