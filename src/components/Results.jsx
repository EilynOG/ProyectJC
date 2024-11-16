import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from './Navbar';
import '../css/results.css';

export const Results = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }
        fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
            .then(response => response.json())
            .then(results => setLocations(results));
    }, [navigate, user]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="body-results">
            {/*<main className="results">
                <Navbar /> {}
                <h1>Bienvenido, {user?.name}</h1>
            
                <div className="cards-container">
                    {locations.map((location) => (
                        <div key={location.id} className="card">
                            <img src={location.imageUrl} alt={location.name} className="location-image" />
                            <div className="card-content">
                                <h3>{location.name}</h3>
                                <p>{location.location}</p>
                                <p>{location.review}</p>
                                <p><strong>Calificación: </strong>{location.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>*/}

            <Navbar /> {}

            <main>
                <section className="welcome-section">
                    <div className="container welcome-content">
                        <h1>¡Bienvenido de vuelta, {user?.name}!</h1>
                        <p>Nos alegra verte de nuevo. ¿Has descubierto algún nuevo destino increíble? Comparte tu experiencia con nuestra comunidad de viajeros y ayuda a otros a planificar su próxima aventura.</p>
                        <Link to="/add-location" class="btn">Agregar un nuevo destino</Link>
                    </div>
                </section>

                <section className="posts-section">
                    <div className="container">
                        <h2>Últimos destinos compartidos</h2>
                        <div className="posts-grid">
                            {locations.map((location) => (
                            <article key={location.id} class="post-card">
                                <img src={location.imageUrl} alt={location.name} class="post-image" />
                                <div className="post-content">
                                    <h3 className="post-title">{location.name}</h3>
                                    <p className="post-location">{location.location}</p>
                                    <p className="post-excerpt">{location.review}</p>
                                    <p className="post-meta"><strong>Calificación: </strong>{location.rating}</p>
                                </div>
                            </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div class="container">
                    <p>&copy; 2023 Viajando-Ando. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};
