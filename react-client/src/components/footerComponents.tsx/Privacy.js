import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield, Eye, Lock, Database } from "lucide-react";
const Privacy = () => {
    const sections = [
        {
            icon: _jsx(Shield, { className: "h-8 w-8 text-emerald-600" }),
            title: "Information We Collect",
            content: [
                "Account information (name, email, company)",
                "Usage data and analytics",
                "Technical information (IP address, browser type)",
                "File metadata (not file contents)"
            ]
        },
        {
            icon: _jsx(Eye, { className: "h-8 w-8 text-orange-500" }),
            title: "How We Use Your Information",
            content: [
                "Provide and improve our services",
                "Communicate with you about your account",
                "Ensure security and prevent fraud",
                "Comply with legal obligations"
            ]
        },
        {
            icon: _jsx(Lock, { className: "h-8 w-8 text-rose-500" }),
            title: "Data Protection",
            content: [
                "End-to-end encryption for all files",
                "Zero-knowledge architecture",
                "Regular security audits",
                "SOC 2 and ISO 27001 compliance"
            ]
        },
        {
            icon: _jsx(Database, { className: "h-8 w-8 text-emerald-600" }),
            title: "Data Retention",
            content: [
                "Account data retained while account is active",
                "File data encrypted and stored securely",
                "Deleted data is permanently removed",
                "30-day grace period after account deletion"
            ]
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["Privacy", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Policy" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: "Your privacy is fundamental to everything we do. Learn how we protect and handle your information." }), _jsx("p", { className: "text-sm text-gray-500", children: "Last updated: March 15, 2024" })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "max-w-4xl mx-auto space-y-16", children: sections.map((section, index) => (_jsxs("div", { className: "flex gap-8 items-start", children: [_jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center", children: section.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: section.title }), _jsx("ul", { className: "space-y-3", children: section.content.map((item, idx) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" }), _jsx("span", { className: "text-gray-600 leading-relaxed", children: item })] }, idx))) })] })] }, index))) }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Questions About Your Privacy?" }), _jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Contact our privacy team if you have any questions about how we handle your data." }), _jsx("button", { className: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300", children: "Contact Privacy Team" })] }) }) })] }));
};
export default Privacy;
