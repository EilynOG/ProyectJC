import { createBrowserRouter } from "react-router-dom";
import { Results } from "../components/Results";
import { Login } from "../components/Login";
import { AddLocation } from "../components/AddLocation";
import { LandingPage } from '../components/LandingPage';
import { EditProfile } from '../components/EditProfile';
import { Register } from '../components/Register';
import { Locations } from "../components/Locations";

export const router = createBrowserRouter([
    {
        path: '/login',
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
        path: '/',
        Component: LandingPage
    },
    {
        path: '/edit-profile',
        Component: EditProfile
    },
    {
        path: '/locations',
        Component: Locations
    }
]);
