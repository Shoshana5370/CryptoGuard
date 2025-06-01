import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield, Lock, Users, Clock, CheckCircle, Star, Zap, Eye, Key, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
const Features = () => {
    const mainFeatures = [
        {
            icon: _jsx(Shield, { className: "h-12 w-12 text-emerald-600" }),
            title: "Military-Grade Encryption",
            description: "AES-256 encryption ensures your files are protected with the same security standards used by governments and military organizations worldwide.",
            details: ["End-to-end encryption", "Zero-knowledge architecture", "Quantum-resistant algorithms"]
        },
        {
            icon: _jsx(Users, { className: "h-12 w-12 text-orange-500" }),
            title: "Role-Based Access Control",
            description: "Sophisticated permission management allows you to control exactly who can access, edit, or share your sensitive files.",
            details: ["Granular permissions", "Department-level access", "Custom role creation"]
        },
        {
            icon: _jsx(Clock, { className: "h-12 w-12 text-rose-500" }),
            title: "Time-Limited Sharing",
            description: "Set automatic expiration dates for shared files and links, ensuring access is revoked when no longer needed.",
            details: ["Automatic expiration", "Custom time limits", "Access notifications"]
        },
        {
            icon: _jsx(Eye, { className: "h-12 w-12 text-emerald-600" }),
            title: "Audit Trail",
            description: "Complete visibility into who accessed what files, when, and from where with detailed audit logs.",
            details: ["Real-time monitoring", "Compliance reporting", "Access analytics"]
        },
        {
            icon: _jsx(Key, { className: "h-12 w-12 text-orange-500" }),
            title: "Multi-Factor Authentication",
            description: "Enhanced security with multiple authentication factors including biometrics, SMS, and hardware tokens.",
            details: ["Biometric authentication", "Hardware tokens", "SMS verification"]
        },
        {
            icon: _jsx(Database, { className: "h-12 w-12 text-rose-500" }),
            title: "Secure Cloud Storage",
            description: "Your encrypted files are stored in secure, geographically distributed data centers with 99.99% uptime.",
            details: ["Geographic redundancy", "Auto-backup", "Disaster recovery"]
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["Powerful Security", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Features" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-12 leading-relaxed", children: "Everything you need to protect, manage, and control access to your organization's most sensitive files with enterprise-grade security." })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: mainFeatures.map((feature, index) => (_jsxs(Card, { className: "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group", children: [_jsxs(CardHeader, { className: "text-center pb-4", children: [_jsx("div", { className: "mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300", children: feature.icon }), _jsx(CardTitle, { className: "text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300", children: feature.title })] }), _jsxs(CardContent, { children: [_jsx(CardDescription, { className: "text-gray-600 text-base mb-6 leading-relaxed", children: feature.description }), _jsx("ul", { className: "space-y-2", children: feature.details.map((detail, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-500", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-emerald-500" }), detail] }, idx))) })] })] }, index))) }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "text-center mb-16", children: _jsxs("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: ["Industry-Leading", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Security Standards" })] }) }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
                                { cert: "SOC 2", icon: _jsx(Shield, { className: "h-8 w-8" }) },
                                { cert: "ISO 27001", icon: _jsx(Star, { className: "h-8 w-8" }) },
                                { cert: "GDPR", icon: _jsx(Lock, { className: "h-8 w-8" }) },
                                { cert: "HIPAA", icon: _jsx(Zap, { className: "h-8 w-8" }) }
                            ].map((item, index) => (_jsx("div", { className: "text-center group", children: _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105", children: [_jsx("div", { className: "text-emerald-600 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300", children: item.icon }), _jsx("div", { className: "text-xl font-bold text-gray-900", children: item.cert }), _jsx("div", { className: "text-gray-600 text-sm", children: "Certified" })] }) }, index))) })] }) })] }));
};
export default Features;
