import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/about.css';

export const About = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs');
                if (!response.ok) throw new Error('Error al obtener los datos');
                const results = await response.json();
                setLocations(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
            <div className="body-about">
                <header>
                    <div className="container header-content">
                        <div className="logo">Viajando-Ando</div>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/locations">Destinos</Link></li>
                                <li><Link to="/about">Nosotros</Link></li>
                                <li><Link to="/login">Iniciar sesión</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main>
                    <section className="about-hero">
                        <div className="about-hero-content">
                            <h1>Sobre Nosotros</h1>
                        </div>
                    </section>

                    <section className="about-section">
                        <div className="container">
                            <div className="about-grid">
                                <div className="about-item">
                                    <h2>¿Quiénes Somos?</h2>
                                    <p>Viajando-Ando es una comunidad apasionada de viajeros que comparten sus experiencias, consejos y descubrimientos en destinos turísticos de todo el mundo. Nuestro objetivo es inspirar y ayudar a otros viajeros a explorar nuevos lugares, culturas y aventuras.</p>
                                </div>
                                <div className="about-item">
                                    <h2>Nuestra Misión</h2>
                                    <p>Nuestra misión es crear un espacio donde los viajeros puedan conectarse, compartir y aprender unos de otros. Queremos fomentar un turismo responsable y sostenible, promoviendo el respeto por las culturas locales y el medio ambiente.</p>
                                </div>
                                <div className="about-item">
                                    <h2>Cómo Funciona</h2>
                                    <p>Viajando-Ando es un foro interactivo donde puedes:</p>
                                    <ul className="icon-list">
                                        <li>Compartir tus experiencias de viaje</li>
                                        <li>Leer reseñas y consejos de otros viajeros</li>
                                        <li>Hacer preguntas sobre destinos específicos</li>
                                        <li>Participar en discusiones sobre temas de viaje</li>
                                        <li>Encontrar inspiración para tu próxima aventura</li>
                                    </ul>
                                </div>
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