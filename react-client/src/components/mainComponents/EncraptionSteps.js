import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Upload, Download, UserPlus, Share2, ArrowRight } from "lucide-react";
const EncryptionSteps = () => {
    const steps = [
        {
            icon: UserPlus,
            title: "Create an Account",
            description: "Sign up or log in to access the secure file encryption and sharing platform.",
            color: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            icon: Upload,
            title: "Upload & Encrypt",
            description: "Select a file to upload. It will be automatically encrypted before storage.",
            color: "bg-emerald-50 text-emerald-700 border-emerald-100"
        },
        {
            icon: Share2,
            title: "Securely Share",
            description: "Send encrypted files with a secure link, expiration date.",
            color: "bg-amber-50 text-amber-700 border-amber-100"
        },
        {
            icon: Download,
            title: "Access Shared Files",
            description: "View and download files shared with you — securely decrypted on access.",
            color: "bg-purple-50 text-purple-700 border-purple-100"
        }
    ];
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: steps.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.15, duration: 0.6 }, viewport: { once: true, margin: "-100px" }, className: "relative group", children: [_jsxs("div", { className: `rounded-2xl p-8 border-2 ${step.color} h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg bg-white/80 backdrop-blur-sm`, children: [_jsx("div", { className: "absolute -top-6 left-8 w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-gray-100 shadow-lg", children: _jsx("span", { className: "text-gray-700 font-bold text-lg", children: index + 1 }) }), _jsx("div", { className: "mt-6 mb-6", children: _jsx("div", { className: `w-16 h-16 rounded-2xl flex items-center justify-center ${step.color} shadow-sm`, children: _jsx(step.icon, { className: "w-8 h-8" }) }) }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: step.title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: step.description })] }), index < steps.length - 1 && (_jsx("div", { className: "hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10", children: _jsx("div", { className: "w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100", children: _jsx(ArrowRight, { className: "w-5 h-5 text-gray-400" }) }) }))] }, index))) }));
};
export default EncryptionSteps;
