import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import '../css/login.css';

export const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const submit = async (event) => {
        event.preventDefault();
        setError('');
        const correo = event.target.elements.email.value.trim();
        const pass = event.target.elements.password.value.trim();

        try {
            const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users');
            if (!response.ok) {
                setError('Error al obtener los datos del servidor');
                return;
            }
            const users = await response.json();
            const user = users.find(user => user.email === correo && user.password === pass);

            if (!user) {
                setError('Usuario o contraseña incorrectos');
                return;
            }

            localStorage.setItem('user', JSON.stringify(user));
            navigate('/results');
        } catch (error) {
            setError('Error de red, por favor intenta más tarde');
        }
    };

    return (
        <>
            <div className="body-login">
                <div className="background-image"></div>
                <div className="login-container">
                    <h1>Bienvenido a Viajando-Ando</h1>
                    <form onSubmit={submit}>
                        <div className="input-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required placeholder="Tu contraseña" />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="button-submit">Iniciar Sesión</button>
                    </form>
                    <div className="register-link">
                        <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};
