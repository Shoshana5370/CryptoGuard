import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield, Lock, Users, FileText, CheckCircle, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
const LoginInfoPanel = () => {
    const features = [
        {
            icon: Shield,
            title: "Enterprise-Grade Security",
            description: "Leverage advanced encryption and multi-layered security protocols to safeguard your most sensitive data assets."
        },
        {
            icon: Lock,
            title: "End-to-End File Encryption",
            description: "Employ military-grade AES-256 encryption for all files, ensuring complete confidentiality at rest and in transit."
        },
        {
            icon: Users,
            title: "Secure Team Collaboration",
            description: "Utilize granular access controls and secure sharing mechanisms designed for seamless and protected teamwork."
        },
        {
            icon: FileText,
            title: "Intelligent Document Management",
            description: "Organize, manage, and access your encrypted files with an intuitive system built for efficiency and security."
        }
    ];
    const testimonials = [
        {
            text: "The security architecture is unparalleled. Our data integrity has never been stronger, giving us complete peace of mind.",
            author: "Dr. Evelyn Reed",
            role: "Chief Information Security Officer"
        },
        {
            text: "An incredibly intuitive interface paired with formidable encryption. SecureVault sets a new standard for secure file management.",
            author: "Marcus Cole",
            role: "Cybersecurity Lead, Tech Solutions Inc."
        }
    ];
    const panelVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                duration: 0.5
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100 }
        }
    };
    return (_jsxs("div", { className: "hidden md:flex flex-col bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800 p-10 lg:p-16 items-center justify-center text-white h-full overflow-hidden relative", children: [_jsx(motion.div, { className: "absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-3xl", animate: { scale: [1, 1.1, 1], rotate: [0, 10, 0] }, transition: { duration: 20, repeat: Infinity, ease: "linear" } }), _jsx(motion.div, { className: "absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl", animate: { scale: [1, 1.2, 1], rotate: [0, -15, 0] }, transition: { duration: 25, repeat: Infinity, ease: "linear", delay: 5 } }), _jsxs(motion.div, { className: "max-w-lg w-full z-10", variants: panelVariants, initial: "hidden", animate: "visible", children: [_jsxs(motion.div, { variants: itemVariants, className: "mb-12 text-center", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [_jsx(Sparkles, { className: "w-10 h-10 text-emerald-300" }), _jsx("h1", { className: "text-5xl font-bold tracking-tight", children: "CryptoGuard" })] }), _jsx("p", { className: "text-xl text-emerald-100 leading-relaxed font-light", children: "Next-Generation Platform for Uncompromising File Security & Management." })] }), _jsx(motion.div, { className: "space-y-8 mb-12", variants: itemVariants, children: features.map((feature, index) => (_jsxs(motion.div, { className: "flex items-start space-x-5 group", variants: itemVariants, children: [_jsx("div", { className: "flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/30 rounded-xl flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-teal-500/40 transition-all duration-300 border border-emerald-400/30 shadow-lg group-hover:shadow-emerald-400/20", children: _jsx(feature.icon, { className: "w-7 h-7 text-emerald-200 group-hover:scale-110 transition-transform duration-300" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-white mb-1.5 text-lg tracking-tight", children: feature.title }), _jsx("p", { className: "text-emerald-100 text-sm leading-relaxed font-light", children: feature.description })] })] }, index))) }), _jsx(motion.div, { className: "space-y-6 mb-12", variants: itemVariants, children: testimonials.map((testimonial, index) => (_jsxs(motion.div, { className: "bg-black/20 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300", variants: itemVariants, children: [_jsx("div", { className: "flex items-center mb-3", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-current" }, i))) }), _jsxs("p", { className: "text-emerald-50 text-base mb-3 italic leading-relaxed", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "text-xs text-emerald-200 text-right", children: [_jsx("span", { className: "font-medium block", children: testimonial.author }), _jsx("span", { className: "font-light", children: testimonial.role })] })] }, index))) }), _jsx(motion.div, { variants: itemVariants, className: "pt-10 border-t border-emerald-500/30", children: _jsxs("div", { className: "flex items-center justify-around text-sm", children: [_jsxs("div", { className: "flex items-center space-x-2.5", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-400" }), _jsx("span", { className: "text-emerald-100 font-medium", children: "AES-256 Bit Encryption" })] }), _jsxs("div", { className: "flex items-center space-x-2.5", children: [_jsx(Shield, { className: "w-5 h-5 text-green-400" }), _jsx("span", { className: "text-emerald-100 font-medium", children: "ISO 27001 Compliant" })] })] }) })] })] }));
};
export default LoginInfoPanel;
