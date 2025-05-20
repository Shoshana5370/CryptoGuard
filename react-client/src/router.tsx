import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginForm from "./components/userComponents/LoginForm";
import RegisterForm from "./components/userComponents/RegisterForm";
import AppLayout from "./components/mainComponents/AppLayout";
// import FilesList from "./components/fileComponents/FilesList";
// import UploadFile from "./components/fileComponents/UploadFile";
// import AccessSharedFile from "./components/shareComponents/AccessSharedFile";
// import ShareFileForm from "./components/shareComponents/ShareFileFrom";
import HomePage from "./components/mainComponents/HomePage";
import NotFound from "./components/mainComponents/NotFound";
import Files from "./components/fileComponents/Files";
// import SharedWithMe from "./components/shareComponents/Shares";
import UnderConstruction from "./components/mainComponents/UnderConstruction";
import Shares from "./components/shareComponents/Shares";
import Setting from "./components/mainComponents/Setting";
import Profile from "./components/mainComponents/Profile";
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
                path: "/auth",
                children: [{ path: "login", element: <LoginForm /> }, { path: "register", element: <RegisterForm /> }],
            },
            // {
            //     path: "file/list",
            //     element: <FilesList/>,
            // },
            {
                // path: "/files/upload",
                // element: <UploadFile/>,
            },
            {
                path: "/shares",
                element: <Shares />,
                children: [
                    // { path: "access", element: <AccessSharedFile /> },
                ]
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