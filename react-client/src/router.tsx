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
import About from "./components/footerComponents/About";
import Blog from "./components/footerComponents/Blog";
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
                children: [{ path: "login", element: <LoginForm />, errorElement: <NotFound />}, { path: "register", element: <RegisterForm /> ,errorElement: <NotFound />}                  
                ],
            },
            {
                path: "/shares",
                element: <Shares />,errorElement: <NotFound />
            },
            {
                path: "/home",
                element: <HomePage />,errorElement: <NotFound />
            },
            {
                path: "/settings",
                element: <Setting />,errorElement: <NotFound />
            },
            {
                path: "/profile",
                element: <Profile />,errorElement: <NotFound />
            },
            {
                path: "/files",
                element: <Files />,errorElement: <NotFound />
            },
            { path: "*", element: <UnderConstruction /> },
            { errorElement: <NotFound /> },
            {path:"/about" ,element:<About />},
            {path:"/blog" ,element:<Blog />}
        
        ],
    }
]);
export default Router;