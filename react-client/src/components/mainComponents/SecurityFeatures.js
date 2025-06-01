import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FileCheck, FileSearch, Share, Cloud, UserLock, UserCheck } from "lucide-react";
const SecurityFeatures = () => {
    const features = [
        {
            icon: Cloud,
            title: "Secure Cloud Storage",
            description: "Encrypted files are stored safely in the cloud using isolated and access-controlled buckets.",
            color: "text-emerald-700 bg-emerald-50 border-emerald-100"
        },
        {
            icon: Share,
            title: "Controlled Sharing",
            description: "Generate time-limited, access-restricted links to share files securely with others.",
            color: "text-amber-700 bg-amber-50 border-amber-100"
        },
        {
            icon: UserLock,
            title: "Registered Users Only",
            description: "All actions are restricted to authenticated users — no guest access is allowed.",
            color: "text-rose-700 bg-rose-50 border-rose-100"
        },
        {
            icon: FileSearch,
            title: "Audit & Monitoring",
            description: "Track who accessed your files and when, with built-in activity logging and alerts.",
            color: "text-purple-700 bg-purple-50 border-purple-100"
        },
        {
            icon: UserCheck,
            title: "Human Verification",
            description: "Advanced bot protection ensures that only real users can access and interact with the system.",
            color: "text-teal-700 bg-teal-50 border-teal-100"
        },
        {
            icon: FileCheck,
            title: "Integrity Verification",
            description: "Every file upload is verified for integrity to ensure no tampering occurred in transit.",
            color: "text-blue-700 bg-blue-50 border-blue-100"
        }
    ];
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.1, duration: 0.6 }, viewport: { once: true, margin: "-50px" }, whileHover: { y: -5, transition: { duration: 0.2 } }, className: `bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 ${feature.color}`, children: [_jsx("div", { className: `w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-sm`, children: _jsx(feature.icon, { className: "w-8 h-8" }) }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: feature.title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: feature.description })] }, index))) }));
};
export default SecurityFeatures;
