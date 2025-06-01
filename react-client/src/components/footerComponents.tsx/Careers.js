import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/styles/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { ArrowRight, Clock, MapPin } from "lucide-react";
const Careers = () => {
    const jobs = [
        {
            title: "Senior Security Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Lead the development of our zero-knowledge encryption systems and security protocols."
        },
        {
            title: "Product Manager - Security",
            department: "Product",
            location: "San Francisco, CA",
            type: "Full-time",
            description: "Drive product strategy for our enterprise security features and compliance tools."
        },
        {
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Build and maintain our secure, scalable infrastructure across multiple cloud regions."
        },
        {
            title: "Customer Success Manager",
            department: "Customer Success",
            location: "New York, NY",
            type: "Full-time",
            description: "Help enterprise customers maximize value from our security platform."
        }
    ];
    const benefits = [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible remote work options",
        "Professional development budget",
        "Unlimited PTO policy",
        "Top-tier equipment and tools"
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-8", children: ["Join Our", _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent", children: " Mission" })] }), _jsx("p", { className: "text-xl text-gray-600 mb-12 leading-relaxed", children: "Help us build the future of secure file management. Join a team of passionate security experts making enterprise-grade protection accessible to everyone." })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Our Culture" }), _jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-6", children: "We're a remote-first company that values diversity, innovation, and security-first thinking. Our team is distributed across the globe, united by our mission to protect sensitive data." }), _jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "We believe in giving our team the autonomy to do their best work while providing the support and resources needed to grow professionally." })] }), _jsxs("div", { className: "bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl p-12 text-white", children: [_jsx("h3", { className: "text-3xl font-bold mb-6", children: "Why CryptoGuard?" }), _jsx("ul", { className: "space-y-4", children: benefits.map((benefit, index) => (_jsxs("li", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-white rounded-full" }), _jsx("span", { children: benefit })] }, index))) })] })] }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Open Positions" }), _jsx("p", { className: "text-xl text-gray-600", children: "Find your next opportunity with our growing team." })] }), _jsx("div", { className: "max-w-4xl mx-auto space-y-6", children: jobs.map((job, index) => (_jsxs(Card, { className: "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [_jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300", children: job.title }), _jsxs("div", { className: "flex items-center gap-4 mt-2 text-sm text-gray-500", children: [_jsx("span", { className: "bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-semibold", children: job.department }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MapPin, { className: "h-4 w-4" }), job.location] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "h-4 w-4" }), job.type] })] })] }), _jsxs(Button, { className: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group", children: ["Apply Now", _jsx(ArrowRight, { className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" })] })] }) }), _jsx(CardContent, { children: _jsx(CardDescription, { className: "text-gray-600 text-base leading-relaxed", children: job.description }) })] }, index))) })] }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-emerald-600 to-emerald-700", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Don't see the right role?" }), _jsx("p", { className: "text-xl text-emerald-100 mb-8 max-w-2xl mx-auto", children: "We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute." }), _jsx(Button, { className: "bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300", children: "Get in Touch" })] }) })] }));
};
export default Careers;
