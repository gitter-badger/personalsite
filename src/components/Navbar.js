import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter-circle.svg';
import linkedin from '../img/linkedin-box.svg';
// import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {/* <figure className="image">
            <img src={logo} alt="John Junkins" style={{ width: '120px', height: `88px` }} />
          </figure> */}
          <h1 className="has-text-weight-bold is-size-2">John Junkins</h1>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/services">
          Services
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
        <Link className="navbar-item" to="/resource">
          Resources
        </Link>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/geoklown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="Github" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://github.com/geoklown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="Github" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://github.com/geoklown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Github" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://github.com/geoklown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
