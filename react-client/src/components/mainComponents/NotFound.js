import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/styles/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-9xl font-bold text-gray-200", children: "404" }), _jsx("h2", { className: "text-3xl font-semibold text-gray-900 mt-4", children: "Page Not Found" }), _jsx("p", { className: "text-gray-600 mt-2 mb-8", children: "The page you are looking for might have been removed or is temporarily unavailable." }), _jsxs(Button, { onClick: () => navigate('/'), className: "bg-emerald-600 hover:bg-emerald-700", children: [_jsx(Home, { className: "w-4 h-4 mr-2" }), "Back to Home"] })] }) }));
};
export default NotFound;
