import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css';


const Header = ({ siteTitle }) => (
  <header className="header" >
    <div className="container">
      <div className="logo">
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
