import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="page-footer indigo center">
        <div className="row">
          <div className="col s12">
            <h6 className="welcome white-text">Welcome to our fantasy!</h6>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Langrisser
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;