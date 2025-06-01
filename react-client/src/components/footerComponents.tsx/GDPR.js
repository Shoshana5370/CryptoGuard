import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield, Eye, Download, Trash2, Lock, CheckCircle } from "lucide-react";
const GDPR = () => {
    const rights = [
        {
            icon: _jsx(Eye, { className: "h-8 w-8 text-emerald-600" }),
            title: "Right to Access",
            description: "You can request a copy of all personal data we hold about you."
        },
        {
            icon: _jsx(Download, { className: "h-8 w-8 text-orange-500" }),
            title: "Right to Portability",
            description: "You can request your data in a structured, machine-readable format."
        },
        {
            icon: _jsx(Trash2, { className: "h-8 w-8 text-rose-500" }),
            title: "Right to Erasure",
            description: "You can request that we delete your personal data under certain conditions."
        },
        {
            icon: _jsx(Lock, { className: "h-8 w-8 text-emerald-600" }),
            title: "Right to Rectification",
            description: "You can request that we correct inaccurate or incomplete personal data."
        }
    ];
    const protections = [
        "Data is encrypted at rest and in transit",
        "Regular security audits and penetration testing",
        "Access controls and authentication systems",
        "Data minimization and purpose limitation",
        "Privacy by design and by default",
        "Data protection impact assessments"
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx(Shield, { className: "h-16 w-16 text-emerald-600 mx-auto mb-8" }), _jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["GDPR", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Compliance" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: "CryptoGuard is fully compliant with the General Data Protection Regulation (GDPR). Learn about your rights and how we protect your data." }), _jsx("p", { className: "text-sm text-gray-500", children: "Last updated: March 15, 2024" })] }) }) }), _jsx("section", { className: "py-24", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Your GDPR Rights" }), _jsx("p", { className: "text-xl text-gray-600", children: "Under GDPR, you have several rights regarding your personal data." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: rights.map((right, index) => (_jsx("div", { className: "bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105", children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center", children: right.icon }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: right.title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: right.description })] })] }) }, index))) })] }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "How We Protect Your Data" }), _jsx("p", { className: "text-xl text-gray-600", children: "We implement comprehensive technical and organizational measures to ensure GDPR compliance." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: protections.map((protection, index) => (_jsxs("div", { className: "flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-emerald-500 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: protection })] }, index))) })] }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-600 to-emerald-700", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Exercise Your Rights" }), _jsx("p", { className: "text-xl text-emerald-100 mb-8 max-w-3xl mx-auto", children: "To exercise any of your GDPR rights or if you have questions about our data processing, contact our Data Protection Officer." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("button", { className: "bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300", children: "Contact DPO" }), _jsx("button", { className: "border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300", children: "Request My Data" })] })] }) })] }));
};
export default GDPR;
