import React, { useState, useEffect } from 'react';

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('/peliculas.json')
      .then(response => response.json())
      .then(data => setSeries(data.NETFLIX.serie))
      .catch(error => console.error('Error fetching series:', error));
  }, []);

  return (
    <div>
      <h1>Series</h1>
      <h3>Descubre nuestras series favoritas</h3>
      <ul>
        {series.map(serie => (
          <li key={serie.identificador}>
            <h2>{serie.título}</h2>
            <p>{serie.descripción}</p>
            <p><strong>Año:</strong> {serie.Año}</p>
            <p><strong>Clasificación:</strong> {serie.clasificación}</p>
            <p><strong>Género:</strong> {serie.género}</p>
            <p><strong>Director:</strong> {serie.director}</p>
            <p><strong>Protagonistas:</strong> {serie.protagonistas.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Series;
