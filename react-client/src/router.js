import { jsx as _jsx } from "react/jsx-runtime";
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
        element: _jsx(AppLayout, {}),
        children: [
            {
                path: "/",
                element: _jsx(Navigate, { to: "home" }),
            },
            {
                path: "/auth",
                children: [{ path: "login", element: _jsx(LoginForm, {}) }, { path: "register", element: _jsx(RegisterForm, {}) }],
            },
            {
                path: "/shares",
                element: _jsx(Shares, {}),
            },
            {
                path: "/home",
                element: _jsx(HomePage, {}),
            },
            {
                path: "/settings",
                element: _jsx(Setting, {}),
            },
            {
                path: "/profile",
                element: _jsx(Profile, {}),
            },
            {
                path: "/files",
                element: _jsx(Files, {}),
            },
            { path: "*", element: _jsx(UnderConstruction, {}) },
            { errorElement: _jsx(NotFound, {}) },
        ],
    }
]);
export default Router;
