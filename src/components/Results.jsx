import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <main className="results">
            <h1>Bienvenido, {user?.name}</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
            <button onClick={() => navigate('/add-location')}>Agregar Sitio Turístico</button>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Reseña</th>
                        <th>Calificación</th>
                        <th>Imagen</th> {/* Nueva columna para la imagen */}
                    </tr>
                </thead>
                <tbody>
                    {locations.map((location) => (
                        <tr key={location.id}>
                            <td>{location.name}</td>
                            <td>{location.location}</td>
                            <td>{location.review}</td>
                            <td>{location.rating}</td>
                            <td>
                                <img src={location.imageUrl} alt={location.name} className="location-image" /> {/* Imagen */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};