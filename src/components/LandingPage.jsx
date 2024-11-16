import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/stylesLanding.css';

export const LandingPage = () => {
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

    return (
        <>
            {/*<main className="landing-page">    
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
            
            </main>*/}

            <div className="body-landing">
                <header>
                    <div className="container header-content">
                        <div className="logo">Viajando-Ando</div>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/locations">Destinos</Link></li>
                                <li><Link to="/#foro">Foro</Link></li>
                                <li><Link to="/#contacto">Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                
                <main>
                    <section className="hero">
                        <div className="hero-content">
                            <h1>Explora, Comparte, Inspira</h1>
                            <p>Únete a nuestra comunidad de viajeros y comparte tus experiencias únicas</p>
                            <button className="btn" onClick={() => navigate('/aventura')}>Comienza tu aventura</button>
                        </div>
                    </section>
                
                    <section className="features">
                        <div className="container">
                            <h2>¿Por qué Viajando-Ando?</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <div className="feature-icon">🌍</div>
                                    <h3>Descubre nuevos destinos</h3>
                                    <p>Explora lugares increíbles recomendados por viajeros reales</p>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">✍️</div>
                                    <h3>Comparte tus historias</h3>
                                    <p>Crea y publica tus propias experiencias de viaje</p>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">💬</div>
                                    <h3>Conecta con otros viajeros</h3>
                                    <p>Conoce y disfruta de diferentes maneras</p>
                                </div>
                            </div>
                        </div>
                    </section>
                
                    <section class="recent-posts">
                        <div class="container">
                            <h2>Publicaciones recientes</h2>
                            <div class="post-grid">
                                <article class="post-card">
                                    <img src="https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/sitios-turisticos-2.jpg" alt="Playa paradisíaca" class="post-image" />
                                    <div class="post-content">
                                        <h3 class="post-title">Mi experiencia en Stonehenge</h3>
                                        <p class="post-excerpt">Descubre cómo fue mi viaje a Uno de los lugares más misteriosos del planeta, pues la finalidad...</p>
                                        <p class="post-meta">Por María García - Hace 2 días</p>
                                    </div>
                                </article>
                                <article class="post-card">
                                    <img src="https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-sitios-turisticos.jpg" alt="Montañas nevadas" class="post-image" />
                                    <div class="post-content">
                                        <h3 class="post-title">Aventura en Ciudad de México.</h3>
                                        <p class="post-excerpt">Llama la atención por su enorme tamaño, especialmente notable cuando te plantas justo delante...</p>
                                        <p class="post-meta">Por Carlos Rodríguez - Hace 5 días</p>
                                    </div>
                                </article>
                                <article class="post-card">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg/1200px-Machu_Picchu%2C_Peru_%282018%29.jpg" alt="Templo antiguo" class="post-image" />
                                    <div class="post-content">
                                        <h3 class="post-title">Los secretos de Machu Picchu</h3>
                                        <p class="post-excerpt">Explora conmigo la Antigua ciudad inca situada en las alturas de los Andes, rodeada de una...</p>
                                        <p class="post-meta">Por Ana Martínez - Hace 1 semana</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </main>
                
                <footer>
                    <div class="container">
                        <p>&copy; 2024 Viajando-Ando. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};