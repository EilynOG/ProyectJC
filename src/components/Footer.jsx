import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/footer.css';

export const Footer = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');  // Elimina el usuario de localStorage
        navigate('/');
    };

    return(
        <>
            <div className="body-footer">
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h2>Viajando-Ando</h2>
                            <p>Explora, comparte y conecta con viajeros de todo el mundo. Tu próxima aventura comienza aquí.</p>
                        </div>
                        <div class="footer-section">
                            <h3>Enlaces rápidos</h3>
                            <ul class="footer-links">
                                <li><Link to="/results">Inicio</Link></li>
                                <li><Link to="/results">Destinos</Link></li>
                                <li><Link to="/add-location">Agregar destino</Link></li>
                                <li><Link to="/about">Sobre Nosotros</Link></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Recursos</h3>
                            <ul class="footer-links">
                                <li><Link to="/edit-profile">Perfil</Link></li>
                                <li><Link to="/add-location">mira tus destinos</Link></li>
                                <li><Link to="/edit-profile">Edita tu info</Link></li>
                                <li><Link to="/about">Preguntas frecuentes</Link></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Contacto</h3>
                            <p>info@viajando-ando.com</p>
                            <p>+57 321 8949884</p>
                            <div class="social-links">
                                <a href="https://facebook.com" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="https://instagram.com" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://twitter.com" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 Viajando-Ando. Todos los derechos reservados.</p>
                        <p>
                            <Link to="/results">Política de privacidad</Link>
                            <Link to="/results">Términos de uso</Link>
                        </p>
                    </div>
                </div>
            </footer>
            </div>
        </>
    )
}