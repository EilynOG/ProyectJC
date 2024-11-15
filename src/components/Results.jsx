import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from './Navbar';

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
        </main>
    );
};
