import React from "react";
import { Link } from "gatsby"
import { Logo } from './imports';
import '../styles/header.css';


const Header = () => (
  <header className="header" >
    <div className="container">
      <Logo />
      <div className="menulinks">
        <h4>
          <Link to="/about">About</Link>
        </h4>
        <h4>
          <Link to="/contact">Contact</Link>
        </h4>
        <h4>
          <Link to="/signup">Signup</Link>
        </h4>
      </div>
    </div>
  </header>
)


export default Header;
