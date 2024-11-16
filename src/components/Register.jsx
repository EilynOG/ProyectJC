import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import '../css/register.css';

export const Register = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        const sanitizeInput = (input) => input.trim();
        const nombre = sanitizeInput(event.target.elements.name.value);
        const correo = sanitizeInput(event.target.elements.email.value);
        const password = sanitizeInput(event.target.elements.password.value);

        try {
            const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: nombre, email: correo, password: password })
            });

            if (response.ok) {
                setMessage("Usuario registrado exitosamente");
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(`Error al registrar el usuario: ${errorData.message || 'Error desconocido'}`);
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Hubo un problema al registrar el usuario. Por favor, inténtalo más tarde.");
        }
    };

    return (
        <>
            <div className="body-register">
                <div className="background-image"></div>
                <div className="register-container">
                    <h1>Registro de Usuario</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" required placeholder="Tu nombre completo" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required placeholder="Tu contraseña" />
                        </div>
                        {message && <p className="success-message">{message}</p>}
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">Registrarse</button>
                    </form>
                    <div className="login-link">
                        <p>¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};
