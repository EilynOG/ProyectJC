import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddLocation = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newLocation = { name, location, review, rating };

        const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLocation),
        });

        if (response.ok) {
            alert('Nuevo sitio turístico agregado con éxito');
            navigate('/results');
        } else {
            alert('Hubo un error al agregar el sitio turístico');
        }
    };

    return (
        <main className="add-location">
            <h1>Agregar Sitio Turístico</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Ubicación:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Reseña:
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Calificación:
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                        min="0"
                        max="5"
                    />
                </label>
                <button type="submit">Agregar Sitio</button>
            </form>
        </main>
    );
};