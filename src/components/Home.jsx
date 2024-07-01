import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="main-title">¡Bienvenidos a PelisLive!</h1>
            <p className="main-description">Tu destino para encontrar las mejores películas y series.</p>
            <div className="cards-container">
                <div className="card">
                    <h2>Películas</h2>
                    <p>Explora nuestro catálogo de películas.</p>
                    <Link to="/peliculas" className="btn">Ver Películas</Link>
                </div>
                <div className="card">
                    <h2>Series</h2>
                    <p>Descubre nuestras series favoritas.</p>
                    <Link to="/series" className="btn">Ver Series</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
