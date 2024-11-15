import { createBrowserRouter } from "react-router-dom";
import { Results } from "../components/Results";
import { Login } from "../components/Login";
import { AddLocation } from "../components/AddLocation";
import { LandingPage } from '../components/LandingPage';
import { EditProfile } from '../components/EditProfile';

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
