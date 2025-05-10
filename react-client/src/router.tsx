// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<Navigate to="/auth/login" />} />
//   <Route path="/auth/login" element={<LoginForm />} />
//   <Route path="/auth/register" element={<RegisterForm />} />
// </Routes>

import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginForm from "./components/userComponents/LoginForm";
import RegisterForm from "./components/userComponents/RegisterForm";
import AppLayout from "./components/mainComponents/AppLayout";
import FilesList from "./components/fileComponents/FilesList";
import UploadFile from "./components/fileComponents/UploadFile";
import AccessSharedFile from "./components/shareComponents/AccessSharedFile";
import ShareFileForm from "./components/shareComponents/ShareFileFrom";
import HomePage from "./components/mainComponents/HomePage";
// import HomePage from "./components/HomePage";

// </BrowserRouter> 
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
            {
                path: "/share/access",
                element: <AccessSharedFile/>,
            },
            {
                path: "/home",
                element: <HomePage/>,
            },
        ],
    }
]);
export default Router;