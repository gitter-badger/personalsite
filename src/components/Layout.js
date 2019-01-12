import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './all.sass';
import './bulma.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Gitlab Netlifly Test Site" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
