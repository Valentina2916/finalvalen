import React from 'react';

const productos = [
  { nombre: "Juego de Comedor", precio: 3200, descripcion: "Juego de comedor mas 6 sillas." },
  { nombre: "Espejo", precio: 4000, descripcion: "Espejo circular." },
  { nombre: "Lampara", precio: 5100, descripcion: "Lampara de pie." },
  { nombre: "Sofa", precio: 4800, descripcion: "Sofa de terciopelo." },
  { nombre: "Mesa de luz", precio: 2800, descripcion: " Mesa de luz para dormitorio." },
  { nombre: "Placart", precio: 1800, descripcion: " Guarda ropas amplio" },
  { nombre: "Respaldo", precio: 1700, descripcion: "Respaldo sommier." },
  { nombre: "mesa ratona", precio: 1500, descripcion: " Mesita de living ratona." },
  { nombre: "mesa television", precio: 1500, descripcion: "Mesa flotante para televisor ."},
];

function ListaProductos() {
  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;