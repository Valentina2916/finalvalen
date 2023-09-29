import React from 'react';
import './Footer.css'; 

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <section id="contacto">
        <h3>Contáctanos</h3>
        <p>Si deseas comunicarte con nosotros:</p>
        <ul>
          <ul><strong>Teléfono:</strong> 011 565886</ul>
          <ul><strong>Correo Electrónico:</strong> ramemuebles@gmail.com</ul>
          <ul><strong>Instagram:</strong> @rame.muebles</ul>
          <ul><strong>Dirección:</strong> Gorriti 2627 Palermo, Buenos Aires</ul>
        </ul>
      </section>
      <p>&copy; {currentYear} {props.companyName} - {props.tagline}</p>
    </footer>
  );
}

export default Footer;















