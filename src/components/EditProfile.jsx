import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar'; // Asegúrate de que el Navbar esté importado
import '../css/stylesEditprofile.css';
import { Footer } from './Footer';

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
        navigate('/results');
    };

    return (
        <>
            <div className='body-profile'>
                <Navbar /> {/* Se ha agregado el Navbar aquí */}
                <main className="container">
                    <section className='profile-section'>
                        <h2>Editar Perfil</h2>
                        <form onSubmit={handleSubmit} id="profile-form">
                            <div className='profile-info'>
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
                                <button type="submit" className='btn'>Guardar Cambios</button>
                            </div>
                        </form>
                        <div className="buttons-container">
                            <button onClick={goToForum} className='btnforo'>Ir al Foro</button>
                            <button onClick={handleLogout} className='btnsesion'>Cerrar sesión</button>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};