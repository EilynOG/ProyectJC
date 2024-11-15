import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nombre = event.target.elements.nombre.value;
        const correo = event.target.elements.correo.value;
        const password = event.target.elements.password.value;

        try {
            const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: nombre, email: correo, password: password })
            });

            if (response.ok) {
                alert("Usuario registrado exitosamente");
                navigate('/');
            } else {
                alert("Error al registrar el usuario");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al registrar el usuario");
        }
    };

    return (
        <main className="register">
            <form onSubmit={handleSubmit}>
                <h1>Registro de Usuario</h1>
                <fieldset>
                    <label>
                        Nombre
                        <input type="text" placeholder="Nombre" required name="nombre" />
                    </label>
                    <label>
                        Correo
                        <input type="email" placeholder="ejemplo@email.com" required name="correo" />
                    </label>
                    <label>
                        Contraseña
                        <input type="password" placeholder="******" required name="password" />
                    </label>
                </fieldset>
                <button>Registrar</button>
            </form>
        </main>
    );
};