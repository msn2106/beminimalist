import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const [showAbout] = useState(true);
  const [showHelp] = useState(true);


  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="footer-content">
        <br></br>
        <br></br>
        <div className="footer-links" style={{ display: 'flex', paddingLeft: '100px' }}>
          <div className="footer-section" style={{ marginRight: '10px' }}>
            <h2 style={{ fontSize: '1rem' }}>About</h2>
            {showAbout && (
              <div>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Our Values</Link></li>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link></li>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Terms & Conditions</Link></li>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Corporate Information</Link></li>
                </ul>
              </div>

            )}
            <br></br>

          </div>

          <br></br>
          <div className="footer-section" style={{ paddingLeft: '30px' }}>
            <h2 style={{ fontSize: '1rem' }}>Help</h2>
            {showHelp && (
              <div>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Knowledge</Link></li>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>FAQs</Link></li>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Return & Refund Policy</Link></li>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></li>
                  <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Track Order</Link></li>
                </ul>
              </div>
            )}
            <br></br>
          </div>

        </div>


      </div>
      <div>

        <hr style={{
          marginBottom: '0px', border: '0px', height: '0.5px', width: '90%', background: 'rgba(255, 255, 255, 0.3)'
        }}></hr>

        <br></br>
        <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left', marginLeft: '6.2rem' , }}>
          <FontAwesomeIcon icon={faFacebook} size="lg" style={{ marginRight: '10px', color: 'rgba(255, 255, 255, 0.6)' }} />
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{ marginRight: '10px', color:'rgba(255, 255, 255, 0.6)' }} />
        </div>
        <div style={{ paddingLeft: '100px',color: 'rgba(255, 255, 255, 0.6)' }}>
          <p> Copyright &copy;  {new Date().getFullYear()}, Minimalist.</p>
          <p>Powered by Shopify</p>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
