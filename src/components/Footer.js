import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
const Footer = () => (
  <footer className="footer is-transparent">
    <div className="container">
      <div className="footer-brand">
        <Link to="/" className="footer-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="footer-start">
        <Link className="footer-item" to="/about">
          About
        </Link>
        <Link className="footer-item" to="/products">
          Services
        </Link>
        <Link className="footer-item" to="/contact">
          Contact
        </Link>
        <Link className="footer-item" to="/contact/examples">
          Form Examples
        </Link>
        <Link className="footer-item" to="/resource">
          Resources
        </Link>
      </div>
      <div className="footer-end">
        <a
          className="footer-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
