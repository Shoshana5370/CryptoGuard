
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
import Contact from "./components/footerComponents.tsx/Contact";
import Files from "./components/fileComponents/Files";
import ActivityLogs from "./components/activity/ActivityLogs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="home" /> },
      {
        path: "/auth",
        children: [
          { path: "login", element: <LoginForm />, errorElement: <NotFound /> },
          { path: "register", element: <RegisterForm />, errorElement: <NotFound /> }
        ],
      },
      { path: "shares", element: <Shares />, errorElement: <NotFound /> },
      { path:'activity', element: <ActivityLogs/>, errorElement: <NotFound />}, // Redirect activity to files
      { path: "home", element: <HomePage />, errorElement: <NotFound /> },
      { path: "settings", element: <Setting />, errorElement: <NotFound /> },
      { path: "profile", element: <Profile />, errorElement: <NotFound /> },
      { path: "files", element: <Files />, errorElement: <NotFound /> },
      { path: "about", element: <About /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <Contact /> },
      { path: "cookies", element: <Cookies /> },
      { path: "features", element: <Features /> },
      { path: "gdpr", element: <GDPR /> },
      { path: "pricing", element: <Pricing /> },
      { path: "privacy", element: <Privacy /> },
      { path: "security", element: <Security /> },
      { path: "terms", element: <Terms /> },
      { path: "blog", element: <Blog /> },
      { path: "*", element: <NotFound /> }
    ],
  }
]);
export default Router;