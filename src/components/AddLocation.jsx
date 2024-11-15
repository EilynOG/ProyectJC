import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AddLocation = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [locations, setLocations] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editLocationId, setEditLocationId] = useState(null);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
            .then(response => response.json())
            .then(data => {
                const userLocations = data.filter(
                    (location) => location.creator === user?.name
                );
                setLocations(userLocations);
            });
    }, [user]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newLocation = { 
            name, 
            location, 
            review, 
            rating, 
            imageUrl, 
            creator: user?.name 
        };

        if (editMode) {
            const response = await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${editLocationId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLocation),
            });

            if (response.ok) {
                alert('Sitio turístico actualizado con éxito');
                setEditMode(false);
                setEditLocationId(null);
            } else {
                alert('Hubo un error al actualizar el sitio turístico');
            }
        } else {
            const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLocation),
            });

            if (response.ok) {
                alert('Nuevo sitio turístico agregado con éxito');
            } else {
                alert('Hubo un error al agregar el sitio turístico');
            }
        }

        const updatedLocations = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
            .then(res => res.json());
        const userLocations = updatedLocations.filter(
            (location) => location.creator === user?.name
        );
        setLocations(userLocations);

        setName('');
        setLocation('');
        setReview('');
        setRating(0);
        setImageUrl('');
    };

    const handleEdit = (location) => {
        setEditMode(true);
        setEditLocationId(location.id);
        setName(location.name);
        setLocation(location.location);
        setReview(location.review);
        setRating(location.rating);
        setImageUrl(location.imageUrl);
    };

    const handleDelete = async (id) => {
        const response = await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Sitio turístico eliminado con éxito');
            const updatedLocations = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
                .then(res => res.json());
            const userLocations = updatedLocations.filter(
                (location) => location.creator === user?.name
            );
            setLocations(userLocations);
        } else {
            alert('Hubo un error al eliminar el sitio turístico');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <main className="add-location">
            <h1>{editMode ? "Editar Sitio Turístico" : "Agregar Sitio Turístico"}</h1>
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
                <label>
                    Imagen:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {imageUrl && <img src={imageUrl} alt="Vista previa" width="100" />}
                </label>
                <button type="submit">{editMode ? "Actualizar Sitio" : "Agregar Sitio"}</button>
            </form>

            <h2>Mis Sitios Turísticos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Reseña</th>
                        <th>Calificación</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
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
                                <img src={location.imageUrl} alt={location.name} width="100" />
                            </td>
                            <td>
                                <button onClick={() => handleEdit(location)}>Editar</button>
                                <button onClick={() => handleDelete(location.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="action-buttons">
                <button onClick={() => navigate("/results")}>Ver Foro</button>
                <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
        </main>
    );
};