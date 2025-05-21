import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginForm from "./components/userComponents/LoginForm";
import RegisterForm from "./components/userComponents/RegisterForm";
import AppLayout from "./components/mainComponents/AppLayout";
import HomePage from "./components/mainComponents/HomePage";
import NotFound from "./components/mainComponents/NotFound";
import Files from "./components/fileComponents/Files";
import UnderConstruction from "./components/mainComponents/UnderConstruction";
import Shares from "./components/shareComponents/Shares";
import Setting from "./components/userComponents/Setting";
import Profile from "./components/userComponents/Profile";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="home" />,
            },
            {
                path: "/auth",
                children: [{ path: "login", element: <LoginForm /> }, { path: "register", element: <RegisterForm /> }],
            },
            {
                path: "/shares",
                element: <Shares />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/settings",
                element: <Setting />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/files",
                element: <Files />,
            },
            { path: "*", element: <UnderConstruction /> },
            { errorElement: <NotFound /> },
        ],
    }
]);
export default Router;