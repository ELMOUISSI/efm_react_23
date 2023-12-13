import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header >
      <nav className="navbar" style={{ backgroundColor: 'black' }}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/addstagiaire">Add Stagiaire</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/liststagiaire">List Stagiaire</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
