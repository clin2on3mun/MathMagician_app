import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <h1 className="header-title">Math Magician App</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quotes">Quote</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
