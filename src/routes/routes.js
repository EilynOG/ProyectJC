import { createBrowserRouter } from "react-router-dom";
import { Results } from "../components/Results";
import { Login } from "../components/Login";

export const router = createBrowserRouter ([
    {
        path: '/',
        Component: Login
    },
    {
        path: '/results',
        Component: Results
    }
]
)