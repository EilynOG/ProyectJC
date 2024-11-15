import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/stylesnavbar.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');  // Elimina el usuario de localStorage
        navigate('/landingpage');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Viajando-Ando</Link>
                <ul className="navbar-links">
                    <li><Link to="/results">Resultados</Link></li>
                    <li><Link to="/add-location">Agregar Sitio</Link></li>
                    {user ? (
                        <>
                            <li><Link to="/edit-profile">Editar Perfil</Link></li>
                            <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                        </>
                    ) : (
                        <li><Link to="/login">Iniciar Sesión</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};