import { useNavigate } from "react-router-dom"
export const Login = () => {
    const navigate = useNavigate()
    const submit = async (event) => {
        event.preventDefault()
        const correo = event.target.elements.correo.value
        const pass = event.target.elements.password.value

        const response = await fetch ('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users')
        const users = await response.json()

        const user = users.find(user => user.email === correo && user.password === pass);
        console.log(user);

        if (!user) {
            alert('Usuario o contraseña incorrectos');
            return;
        }
        navigate('/');
        if (user){
            navigate('/results')
        }
    }
    return (
        <main className="login">
        <form onSubmit={submit}>
            <h1>Inicia Sesión</h1>
            <fieldset>
                <label>
                    Correo
                    <input type="email" placeholder="ejemplo@email.com" required name="correo" id="" />
                </label>
                <label>
                    Contraseña
                    <input type="password" placeholder="******" required name="password" id="" />
                </label>
            </fieldset>
            <button>Enviar</button>
        </form>
        </main>
    )
}