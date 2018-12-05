import React from 'react';
import { Link } from 'gatsby';
const Footer = () => (
  <footer className="footer is-transparent">
    <div className="container">
      <div className="footer-brand">
        <Link to="/" className="footer-item">
          <h1>Big Business Tech Small Business Budget</h1>
        </Link>
      </div>
      <div className="footer-start">
        <Link className="footer-item" to="/about">
          About
        </Link>
        <Link className="footer-item" to="/services">
          Services
        </Link>
        <Link className="footer-item" to="/products">
          Products
        </Link>
        <Link className="footer-item" to="/contact">
          Contact
        </Link>
        <Link className="footer-item" to="/resource">
          Resources
        </Link>
      </div>

      <div className="footer-end">&copy; John Junkins 2018</div>
    </div>
  </footer>
);

export default Footer;
