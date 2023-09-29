import React, { useEffect, useState } from 'react';
import ListaProductos from './ListaProductos'; 

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // URL de backend
    fetch('https://api.github.com/repos/valentina2916/trabajovalen3')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
  <h2>Información de Mi Negocio</h2>
<p>Bienvenido a Rame, un lugar de confianza, donde te brindamos y seguridad para lo que necesites .</p>
<section>
  <h2>Catálogo de Productos</h2>
  <div className="product-catalog">
  <ListaProductos /> 
        </div>
</section>



  </div>
);
}

export default MyComponent;