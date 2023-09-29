import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">Nosotros</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contacto</Link>
        </li>
        <li className="navbar-item">
          <Link to="/listaproductos" className="navbar-link">Productos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/registrate" className="navbar-link">Regístrate</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;