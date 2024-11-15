import { createBrowserRouter } from "react-router-dom";
import { Results } from "../components/Results";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Login
    },
    {
        path: '/results',
        Component: Results
    },
    {
        path: '/register',
        Component: Register
    }
]);
