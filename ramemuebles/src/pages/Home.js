import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './Home.css';



function Home() {
    const handleButtonClick = () => {
      alert('¡Botón de inicio!');
    };

  // Promociones y ofertas
  const promotions = [
    {
      title: 'Modos de pago con tarjetas',
      description: '¡Con tarjeta visa a partir de 6y 12 cuotas sin interes !',
    },
    {
      title: 'Envíos a todo el pais',
      description: 'Envios gratis a partir de 50.000.',
    },
  ];

  return (
    <div className="home">
      <Navbar /> 
      <h1>Rame Muebles </h1>
      <p>Algo que es caotico y hermoso al mismo tiempo </p>
     
      <Button onClick={handleButtonClick}>Mi Botón</Button>
      
      <section className="promotions">
        <h2>Promociones y Ofertas</h2>
        <ul>
          {promotions.map((promotion, index) => (
            <ul key={index}>
              <strong>{promotion.title}:</strong> {promotion.description}
            </ul>
          ))}
        </ul>
      </section>
      
      <Footer companyName="Rame Muebles " />
    </div>
  );
}

export default Home;