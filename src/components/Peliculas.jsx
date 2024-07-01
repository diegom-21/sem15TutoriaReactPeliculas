import React, { useState, useEffect } from 'react';

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('/peliculas.json')
      .then(response => response.json())
      .then(data => setPeliculas(data.NETFLIX.películas))
      .catch(error => console.error('Error fetching peliculas:', error));
  }, []);

  return (
    <div>
      <h1>Películas</h1>
      <h3>Explora nuestro catálogo de películas</h3>
      <ul>
        {peliculas.map(pelicula => (
          <li key={pelicula.identificador}>
            <h2>{pelicula.título}</h2>
            <p>{pelicula.descripción}</p>
            <p><strong>Año:</strong> {pelicula.Año}</p>
            <p><strong>Clasificación:</strong> {pelicula.clasificación}</p>
            <p><strong>Género:</strong> {pelicula.género}</p>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Protagonistas:</strong> {pelicula.protagonistas.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Peliculas;
