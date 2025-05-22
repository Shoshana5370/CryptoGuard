import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const AppLayout = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx("header", { className: "bg-white border-b border-gray-100 sticky top-0 z-50", children: _jsx(Header, {}) }), _jsx("main", { className: "flex-1", children: _jsx(Outlet, {}) }), _jsx("footer", { className: "bg-gray-50 border-t border-gray-100", children: _jsx(Footer, {}) })] }));
};
export default AppLayout;
