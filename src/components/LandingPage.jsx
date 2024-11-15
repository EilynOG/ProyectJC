import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/stylesLanding.css'

export const LandingPage = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
            .then(response => response.json())
            .then(results => setLocations(results));
    }, []);

    return (
        <main className="landing-page">    
        <h1 className="page-title">Descubre los Mejores Sitios Turísticos</h1>        
        <button className="login-button" onClick={() => navigate('/')}>Iniciar sesión</button>
            <div className="cards-container">
                {locations.map((location) => (
                    <div className="card" key={location.id}>
                        <img src={location.imageUrl} alt={location.name} className="card-image" />
                        <h2 className="card-title">{location.name}</h2>
                        <p className="card-location">{location.location}</p>
                        <p className="card-review">{location.review}</p>
                        <p className="card-rating">Calificación: {location.rating}</p>
                    </div>
                ))}
            </div>

        </main>
    );
};