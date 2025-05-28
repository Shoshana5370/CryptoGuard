import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { File } from "lucide-react";
import { motion } from "framer-motion";
const EmptyFileState = () => {
    return (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-16", children: [_jsx("div", { className: "p-6 rounded-full bg-emerald-100 w-fit mx-auto mb-6", children: _jsx(File, { className: "h-12 w-12 text-emerald-400" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: "No files yet" }), _jsx("p", { className: "text-gray-500 max-w-md mx-auto", children: "Upload your first file to get started with secure file management" })] }));
};
export default EmptyFileState;
