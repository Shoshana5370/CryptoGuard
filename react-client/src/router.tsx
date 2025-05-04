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
import FilesList from "./components/FilesList";
import UploadFile from "./components/UploadFile";
import ShareFileForm from "./components/shareFileFrom";

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
            {
                path: "file/list",
                element: <FilesList/>,
            },
            {
                path: "/file/upload",
                element: <UploadFile/>,
            },
            {
                path: "/share",
                element: <ShareFileForm/>,
            },
        ],
    }
]);
export default Router;