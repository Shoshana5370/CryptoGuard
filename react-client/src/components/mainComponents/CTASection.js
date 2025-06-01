import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Button } from "@/styles/ui/button";
import { useNavigate } from "react-router-dom";
const CTASection = () => {
    const navigate = useNavigate();
    return (_jsx("section", { className: "text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-3xl p-12 text-white", children: [_jsx("h2", { className: "text-3xl lg:text-4xl font-bold mb-6", children: "Ready to Secure Your Files?" }), _jsx("p", { className: "text-emerald-100 text-xl mb-8 max-w-2xl mx-auto", children: "Join thousands of organizations protecting their sensitive data with enterprise-grade encryption" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { size: "lg", className: "bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl text-lg px-8 py-6", onClick: () => { navigate('/auth/login'); }, children: "Start Free Trial" }), _jsx(Button, { size: "lg", variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-emerald-700 text-lg px-8 py-6", children: "Schedule Demo" })] })] }) }));
};
export default CTASection;
