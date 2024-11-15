import { createBrowserRouter } from "react-router-dom";
import { Results } from "../components/Results";
import { Login } from "../components/Login";
import { AddLocation } from "../components/AddLocation";
import { LandingPage } from '../components/LandingPage';
import { EditProfile } from '../components/EditProfile';
import { Register } from '../components/Register';

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
    },
    {
        path: '/add-location',
        Component: AddLocation
    },
    {
        path: '/landingpage',
        Component: LandingPage
    },
    {
        path: '/edit-profile',
        Component: EditProfile
    }   
]);
