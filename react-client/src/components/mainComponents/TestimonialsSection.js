import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO, TechCorp",
            content: "CryptoGuard has revolutionized how we handle sensitive documents. The security features are enterprise-grade.",
            avatar: "SC"
        },
        {
            name: "Michael Rodriguez",
            role: "Security Manager",
            content: "Finally, a file encryption solution that's both secure and user-friendly. Our team adopted it immediately.",
            avatar: "MR"
        },
        {
            name: "Dr. Emily Watson",
            role: "Research Director",
            content: "The audit trails and access controls give us complete visibility over our research data sharing.",
            avatar: "EW"
        }
    ];
    return (_jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full border border-rose-100 mb-6", children: _jsx("span", { className: "text-rose-700 text-sm font-medium", children: "Trusted by Teams" }) }), _jsxs("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: ["What Our", " ", _jsx("span", { className: "bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent", children: "Users Say" })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.1, duration: 0.6 }, viewport: { once: true }, className: "bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300", children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-emerald-700 font-semibold text-sm", children: testimonial.avatar }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: testimonial.name }), _jsx("p", { className: "text-gray-600 text-sm", children: testimonial.role })] })] }), _jsxs("p", { className: "text-gray-700 leading-relaxed", children: ["\"", testimonial.content, "\""] })] }, index))) })] }));
};
export default TestimonialsSection;
