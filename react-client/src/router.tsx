// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<Navigate to="/auth/login" />} />
//   <Route path="/auth/login" element={<LoginForm />} />
//   <Route path="/auth/register" element={<RegisterForm />} />
// </Routes>

import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AppLayout from "./components/AppLayout";

// </BrowserRouter> 
const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/auth/login" />,
            },
            {
                path: "/auth/login",
                element: <LoginForm />,
            },
            {
                path: "/auth/register",
                element: <RegisterForm />,
            },
        ],
    }
]);
export default Router;