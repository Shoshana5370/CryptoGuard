import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award, Globe, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/styles/ui/card";
const About = () => {
    const stats = [
        { icon: _jsx(Users, { className: "h-8 w-8 text-emerald-600" }), number: "10,000+", label: "Organizations Protected" },
        { icon: _jsx(Globe, { className: "h-8 w-8 text-orange-500" }), number: "50+", label: "Countries Served" },
        { icon: _jsx(Shield, { className: "h-8 w-8 text-rose-500" }), number: "99.99%", label: "Uptime Guarantee" },
        { icon: _jsx(Award, { className: "h-8 w-8 text-emerald-600" }), number: "5+", label: "Security Certifications" }
    ];
    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO & Co-Founder",
            bio: "Former cybersecurity executive with 15+ years protecting enterprise data."
        },
        {
            name: "Michael Chen",
            role: "CTO & Co-Founder",
            bio: "Cryptography expert and former security researcher at major tech companies."
        },
        {
            name: "Emily Rodriguez",
            role: "VP of Security",
            bio: "Compliance specialist with expertise in international security standards."
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["About", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " CryptoGuard" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-12 leading-relaxed", children: "We're on a mission to make enterprise-grade security accessible to organizations of all sizes, protecting sensitive data without compromising usability." })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Our Mission" }), _jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-6", children: "In today's digital world, data breaches and security threats are constant concerns for organizations. We founded CryptoGuard because we believe that powerful security shouldn't be complicated or expensive." }), _jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Our zero-knowledge architecture ensures that your data remains private and secure, while our intuitive interface makes advanced security features accessible to everyone on your team." })] }), _jsxs("div", { className: "bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white text-center", children: [_jsx(Shield, { className: "h-24 w-24 mx-auto mb-8" }), _jsx("h3", { className: "text-3xl font-bold mb-4", children: "Security First" }), _jsx("p", { className: "text-emerald-100 text-lg", children: "Every decision we make is guided by our commitment to protecting your most sensitive data." })] })] }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "text-center mb-16", children: _jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Trusted Worldwide" }) }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsx("div", { className: "text-center group", children: _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105", children: [_jsx("div", { className: "flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300", children: stat.icon }), _jsx("div", { className: "text-3xl font-bold text-gray-900 mb-2", children: stat.number }), _jsx("div", { className: "text-gray-600 font-medium", children: stat.label })] }) }, index))) })] }) }), _jsx("section", { className: "py-24", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "text-center mb-16", children: _jsxs("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: ["Meet Our", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Leadership" })] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: team.map((member, index) => (_jsx(Card, { className: "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105", children: _jsxs(CardContent, { className: "p-8 text-center", children: [_jsx("div", { className: "w-24 h-24 bg-gradient-to-br from-emerald-100 to-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center", children: _jsx(Users, { className: "h-12 w-12 text-emerald-600" }) }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: member.name }), _jsx("p", { className: "text-emerald-600 font-semibold mb-4", children: member.role }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: member.bio })] }) }, index))) })] }) })] }));
};
export default About;
