import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylesEditprofile.css'

export const EditProfile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
    });

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [navigate, user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('user', JSON.stringify({
            ...user,
            name: formData.name,
            email: formData.email,
            password: formData.password || user.password,
        }));

        navigate('/results');
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const goToForum = () => {
        navigate('/forum'); // Cambiar a la ruta del foro si es necesario
    };

    return (
        <div className="edit-profile">
            <h1>Editar Perfil</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Guardar Cambios</button>
            </form>
            <div className="buttons-container">
                <button onClick={goToForum}>Ir al Foro</button>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </div>
    );
};