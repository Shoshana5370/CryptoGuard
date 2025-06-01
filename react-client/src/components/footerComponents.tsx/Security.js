import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield, Lock, Eye, Key, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
const Security = () => {
    const securityFeatures = [
        {
            icon: _jsx(Shield, { className: "h-8 w-8 text-emerald-600" }),
            title: "Zero-Knowledge Architecture",
            description: "Your data is encrypted before it leaves your device. We never have access to your encryption keys or decrypted data."
        },
        {
            icon: _jsx(Lock, { className: "h-8 w-8 text-orange-500" }),
            title: "AES-256 Encryption",
            description: "Military-grade encryption that would take billions of years to crack with current technology."
        },
        {
            icon: _jsx(Eye, { className: "h-8 w-8 text-rose-500" }),
            title: "Real-Time Monitoring",
            description: "24/7 security monitoring with instant alerts for any suspicious activities or unauthorized access attempts."
        },
        {
            icon: _jsx(Key, { className: "h-8 w-8 text-emerald-600" }),
            title: "Multi-Factor Authentication",
            description: "Multiple layers of authentication including biometrics, hardware tokens, and SMS verification."
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx("div", { className: "mb-8", children: _jsx(Shield, { className: "h-16 w-16 text-emerald-400 mx-auto mb-6" }) }), _jsxs("h1", { className: "text-5xl md:text-6xl font-bold mb-8", children: ["Enterprise-Grade", _jsx("span", { className: "bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent", children: " Security" })] }), _jsx("p", { className: "text-xl text-gray-300 mb-12 leading-relaxed", children: "Protecting your most sensitive data with zero-knowledge architecture and military-grade encryption that even we can't break." })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: securityFeatures.map((feature, index) => (_jsxs(Card, { className: "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsx("div", { className: "mb-6 group-hover:scale-110 transition-transform duration-300", children: feature.icon }), _jsx(CardTitle, { className: "text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300", children: feature.title })] }), _jsx(CardContent, { children: _jsx(CardDescription, { className: "text-gray-600 text-base leading-relaxed", children: feature.description }) })] }, index))) }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx(AlertTriangle, { className: "h-16 w-16 text-orange-500 mx-auto mb-8" }), _jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Our Security Promise" }), _jsxs("div", { className: "space-y-6 text-lg text-gray-600", children: [_jsxs("div", { className: "flex items-center gap-4 justify-center", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-emerald-500 flex-shrink-0" }), _jsx("span", { children: "We cannot access your data even if we wanted to" })] }), _jsxs("div", { className: "flex items-center gap-4 justify-center", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-emerald-500 flex-shrink-0" }), _jsx("span", { children: "Your encryption keys are generated and stored locally" })] }), _jsxs("div", { className: "flex items-center gap-4 justify-center", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-emerald-500 flex-shrink-0" }), _jsx("span", { children: "Regular security audits by independent third parties" })] })] })] }) }) })] }));
};
export default Security;
