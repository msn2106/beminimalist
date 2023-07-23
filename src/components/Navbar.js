// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidenav from './Sidenav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Set initial state to false

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={{ backgroundColor: 'black', color: 'white' ,display:'flex'}}>
      <div  style={{flex: '1' }}>
      <br></br>

        <button style={{ backgroundColor: 'black', color: 'white', fontSize: '30px' }} className="panel-toggle" onClick={toggleSidenav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div style={{flex: '1.2'}}>
        <h1 >Minimalist</h1>
        <br></br>
      </div>
      <Sidenav isOpen={isOpen} toggleSidenav={toggleSidenav} />
    </header>
  );
};

export default Navbar;
