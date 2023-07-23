// Sidenav.js
import React from 'react';
import { Link } from 'react-router-dom';


const Sidenav = ({ isOpen, toggleSidenav }) => {
  return (
    <div className={`sidenav ${isOpen ? 'open' : 'add-hidden'}`}>
      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ paddingLeft: '0px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li style={{ paddingLeft: '0px' }}><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
          <li style={{ paddingLeft: '0px' }}><Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Signup</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
