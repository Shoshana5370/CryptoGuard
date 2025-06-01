import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cookie, Settings, Shield, BarChart } from "lucide-react";
const Cookies = () => {
    const cookieTypes = [
        {
            icon: _jsx(Shield, { className: "h-8 w-8 text-emerald-600" }),
            title: "Essential Cookies",
            description: "Required for the website to function properly",
            examples: ["Authentication tokens", "Security preferences", "Session management"]
        },
        {
            icon: _jsx(BarChart, { className: "h-8 w-8 text-orange-500" }),
            title: "Analytics Cookies",
            description: "Help us understand how visitors use our website",
            examples: ["Page views", "User interactions", "Performance metrics"]
        },
        {
            icon: _jsx(Settings, { className: "h-8 w-8 text-rose-500" }),
            title: "Functional Cookies",
            description: "Remember your preferences and settings",
            examples: ["Language preferences", "Theme settings", "User preferences"]
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx(Cookie, { className: "h-16 w-16 text-emerald-600 mx-auto mb-8" }), _jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["Cookie", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Policy" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: "Learn about how we use cookies to improve your experience on CryptoGuard." }), _jsx("p", { className: "text-sm text-gray-500", children: "Last updated: March 15, 2024" })] }) }) }), _jsx("section", { className: "py-24", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "text-center mb-16", children: _jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Types of Cookies We Use" }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: cookieTypes.map((type, index) => (_jsxs("div", { className: "bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105", children: [_jsx("div", { className: "text-center mb-6", children: type.icon }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4 text-center", children: type.title }), _jsx("p", { className: "text-gray-600 mb-6 text-center", children: type.description }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-gray-900 text-sm", children: "Examples:" }), _jsx("ul", { className: "space-y-1", children: type.examples.map((example, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-600", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-emerald-500 rounded-full" }), example] }, idx))) })] })] }, index))) })] }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Managing Your Cookie Preferences" }), _jsx("p", { className: "text-xl text-gray-600 mb-12 leading-relaxed", children: "You can control and manage cookies in several ways. Most browsers allow you to block or delete cookies through their settings." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-left", children: [_jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Browser Settings" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Most web browsers allow you to control cookies through their settings preferences." }), _jsxs("ul", { className: "space-y-2 text-sm text-gray-600", children: [_jsx("li", { children: "\u2022 Block all cookies" }), _jsx("li", { children: "\u2022 Block third-party cookies" }), _jsx("li", { children: "\u2022 Delete cookies when browser closes" }), _jsx("li", { children: "\u2022 Get notified when cookies are set" })] })] }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Opt-Out Tools" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Use industry-standard opt-out tools to control advertising and analytics cookies." }), _jsxs("ul", { className: "space-y-2 text-sm text-gray-600", children: [_jsx("li", { children: "\u2022 Network Advertising Initiative" }), _jsx("li", { children: "\u2022 Digital Advertising Alliance" }), _jsx("li", { children: "\u2022 Google Analytics Opt-out" }), _jsx("li", { children: "\u2022 Browser do-not-track settings" })] })] })] })] }) }) })] }));
};
export default Cookies;
