import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";
const Terms = () => {
    const sections = [
        {
            icon: _jsx(FileText, { className: "h-8 w-8 text-emerald-600" }),
            title: "Terms of Service",
            content: "By using CryptoGuard, you agree to these terms and conditions. These terms govern your use of our secure file management platform and services."
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8 text-orange-500" }),
            title: "Acceptable Use",
            content: "You may only use CryptoGuard for lawful purposes. You agree not to use our service to store, share, or transmit illegal content or to violate any applicable laws."
        },
        {
            icon: _jsx(Users, { className: "h-8 w-8 text-rose-500" }),
            title: "Account Responsibilities",
            content: "You are responsible for maintaining the security of your account credentials and for all activities that occur under your account."
        },
        {
            icon: _jsx(AlertTriangle, { className: "h-8 w-8 text-emerald-600" }),
            title: "Service Availability",
            content: "While we strive for 99.99% uptime, we cannot guarantee uninterrupted service. We reserve the right to modify or discontinue features with notice."
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["Terms of", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Service" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: "These terms govern your use of CryptoGuard's secure file management platform and services." }), _jsx("p", { className: "text-sm text-gray-500", children: "Last updated: March 15, 2024" })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "max-w-4xl mx-auto space-y-16", children: sections.map((section, index) => (_jsxs("div", { className: "flex gap-8 items-start", children: [_jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center", children: section.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: section.title }), _jsx("p", { className: "text-gray-600 leading-relaxed text-lg", children: section.content })] })] }, index))) }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Legal Questions?" }), _jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Contact our legal team if you have questions about these terms of service." }), _jsx("button", { className: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300", children: "Contact Legal Team" })] }) }) })] }));
};
export default Terms;
