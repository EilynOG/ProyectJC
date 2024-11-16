import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/locations.css';

export const Locations = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/');
            return;
        }
        fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
            .then(response => response.json())
            .then(results => setLocations(results));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <>
            <div className="body-location">
                <header>
                    <div className="container header-content">
                        <div className="logo">Viajando-Ando</div>
                        <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/locations">Destinos</Link></li>
                            <li><Link to="/foro">Foro</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                        </nav>
                    </div>
                </header>

                <main>
                    <section className="destinations">
                        <div className="container">
                            <h1>Descubre Nuestros Destinos</h1>
                            <div className="destination-grid">
                                {locations.map((location) => (
                                    <article key={location.id} className="destination-card">
                                        <img src={location.imageUrl} alt={location.name} className="destination-image" />
                                        <div className="destination-content">
                                            <h2 className="destination-title">{location.name}</h2>
                                            <p className="destination-location">{location.location}</p>
                                            <p className="destination-description">{location.review}</p>
                                            <a onClick={() => navigate(`/explore/${location.id}`)} className="destination-link">Explorar {location.name}</a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <footer>
                    <div className="container">
                        <p>&copy; 2024 Viajando-Ando. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}
