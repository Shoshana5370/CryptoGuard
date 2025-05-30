import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginForm from "./components/userComponents/LoginForm";
import RegisterForm from "./components/userComponents/RegisterForm";
import Files from "./components/fileComponents/Files";
import Shares from "./components/shareComponents/Shares";
import Setting from "./components/userComponents/Setting";
import Profile from "./components/userComponents/Profile";
import About from "./components/footerComponents.tsx/About";
import Blog from "./components/footerComponents.tsx/Blog";
import Careers from "./components/footerComponents.tsx/Careers";
import Contact from "./components/footerComponents.tsx/Contact";
import Cookies from "./components/footerComponents.tsx/Cookies";
import Features from "./components/footerComponents.tsx/Features";
import GDPR from "./components/footerComponents.tsx/GDPR";
import Pricing from "./components/footerComponents.tsx/Pricing";
import Privacy from "./components/footerComponents.tsx/Privacy";
import Security from "./components/footerComponents.tsx/Security";
import Terms from "./components/footerComponents.tsx/Terms";
import AppLayout from "./components/mainComponents/AppLayout";
import NotFound from "./components/mainComponents/NotFound";
import HomePage from "./components/mainComponents/HomePage";
import UnderConstruction from "./components/mainComponents/UnderConstruction";
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
            {path:"/careers" ,element:<Careers />},
            {path:"/Contact" ,element:<Contact />},
            {path:"/cookies" ,element:<Cookies />},
            {path:"/features" ,element:<Features />},
            {path:"/gdpr" ,element:<GDPR />},
            {path:"/pricing" ,element:<Pricing />},
            {path:"/privacy" ,element:<Privacy />},
            {path:"/security" ,element:<Security />},
            {path:"/terms" ,element:<Terms />},
            {path:"/blog" ,element:<Blog />}
        
        ],
    }
]);
export default Router;