import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Users, Shield, Star, CheckCircle } from "lucide-react";
const StatsSection = () => {
    const stats = [
        { value: "10M+", label: "Files Encrypted", icon: Shield },
        { value: "50K+", label: "Active Users", icon: Users },
        { value: "99.9%", label: "Uptime", icon: CheckCircle },
        { value: "5-Star", label: "Security Rating", icon: Star }
    ];
    return (_jsx("section", { className: "mb-32", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center", children: _jsx(stat.icon, { className: "w-6 h-6 text-emerald-600" }) }) }), _jsx("div", { className: "text-3xl font-bold text-gray-900 mb-2", children: stat.value }), _jsx("div", { className: "text-gray-600", children: stat.label })] }, index))) }) }));
};
export default StatsSection;
