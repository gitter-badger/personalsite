<<<<<<< HEAD
import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter-circle.svg';
import linkedin from '../img/linkedin-box.svg';
// import logo from '../img/logo.svg';
import logo from '../img/junkinsweblogoV6.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {/* <h1 className="has-text-weight-bold is-size-2">John Junkins</h1> */}
          <a
          // TODO: add Logo from Madison
            className="navbar-logo"
            href="https://twitter.com/junkins_john"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="image is-96x96">
              <img src={logo} alt="Twitter" />
            </span>
          </a>
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
        <Link className="navbar-item" to="/resource">
          Resources
        </Link>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://twitter.com/junkins_john"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/john-junkins-346b1b80/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="Linkedin" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.facebook.com/john.junkins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook" />
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
=======
import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter-circle.svg';
import linkedin from '../img/linkedin-box.svg';
// import logo from '../img/logo.svg';
import logo from '../img/junkinsweblogoV6.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {/* <h1 className="has-text-weight-bold is-size-2">John Junkins</h1> */}
          <a
            className="navbar-logo"
            href="https://twitter.com/junkins_john"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="image is-96x96">
              <img src={logo} alt="Twitter" />
            </span>
          </a>
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
        <Link className="navbar-item" to="/resource">
          Resources
        </Link>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://twitter.com/junkins_john"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/john-junkins-346b1b80/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="Linkedin" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.facebook.com/john.junkins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook" />
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
>>>>>>> workflow
