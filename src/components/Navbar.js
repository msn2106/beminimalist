import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header style={{ backgroundColor: 'black', color: 'white' }}>
      <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/signup'><li>Signup</li></Link>
      </ul>
    </div>
      </header>

    
  )
}

export default Navbar