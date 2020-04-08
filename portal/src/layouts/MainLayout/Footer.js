import Config from 'Config';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">{Config.FOOTER_COPYRIGHT}</div>
          <div className="col-md-6 text-md-right">
            {Config.VERSION}
            <div className="text-md-right footer-links d-none d-md-block">
              <Link to="/">About</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
