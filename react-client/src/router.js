import { jsx as _jsx } from "react/jsx-runtime";
import { Files, Contact } from "lucide-react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import About from "./components/footerComponents.tsx/About";
import Blog from "./components/footerComponents.tsx/Blog";
import Careers from "./components/footerComponents.tsx/Careers";
import Cookies from "./components/footerComponents.tsx/Cookies";
import Features from "./components/footerComponents.tsx/Features";
import GDPR from "./components/footerComponents.tsx/GDPR";
import Pricing from "./components/footerComponents.tsx/Pricing";
import Privacy from "./components/footerComponents.tsx/Privacy";
import Security from "./components/footerComponents.tsx/Security";
import Terms from "./components/footerComponents.tsx/Terms";
import AppLayout from "./components/mainComponents/AppLayout";
import HomePage from "./components/mainComponents/HomePage";
import NotFound from "./components/mainComponents/NotFound";
import Shares from "./components/shareComponents/Shares";
import LoginForm from "./components/userComponents/LoginForm";
import Profile from "./components/userComponents/Profile";
import RegisterForm from "./components/userComponents/RegisterForm";
import Setting from "./components/userComponents/Setting";
const Router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(AppLayout, {}),
        children: [
            { path: "/", element: _jsx(Navigate, { to: "home" }) },
            {
                path: "/auth",
                children: [
                    { path: "login", element: _jsx(LoginForm, {}), errorElement: _jsx(NotFound, {}) },
                    { path: "register", element: _jsx(RegisterForm, {}), errorElement: _jsx(NotFound, {}) }
                ],
            },
            { path: "shares", element: _jsx(Shares, {}), errorElement: _jsx(NotFound, {}) },
            { path: "home", element: _jsx(HomePage, {}), errorElement: _jsx(NotFound, {}) },
            { path: "settings", element: _jsx(Setting, {}), errorElement: _jsx(NotFound, {}) },
            { path: "profile", element: _jsx(Profile, {}), errorElement: _jsx(NotFound, {}) },
            { path: "files", element: _jsx(Files, {}), errorElement: _jsx(NotFound, {}) },
            { path: "about", element: _jsx(About, {}) },
            { path: "careers", element: _jsx(Careers, {}) },
            { path: "contact", element: _jsx(Contact, {}) },
            { path: "cookies", element: _jsx(Cookies, {}) },
            { path: "features", element: _jsx(Features, {}) },
            { path: "gdpr", element: _jsx(GDPR, {}) },
            { path: "pricing", element: _jsx(Pricing, {}) },
            { path: "privacy", element: _jsx(Privacy, {}) },
            { path: "security", element: _jsx(Security, {}) },
            { path: "terms", element: _jsx(Terms, {}) },
            { path: "blog", element: _jsx(Blog, {}) },
            { path: "*", element: _jsx(NotFound, {}) }
        ],
    }
]);
export default Router;
