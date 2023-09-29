import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src={logo} alt="Rame" />
      <h1>Rame</h1>
      <p>Un lugar caotico y hermoso al mismo tiempo</p>
      <nav>
        <ul>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;