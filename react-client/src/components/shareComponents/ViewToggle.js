import { jsx as _jsx } from "react/jsx-runtime";
import { Grid3X3, List, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/styles/ui/button";
const ViewToggle = ({ view, onViewChange }) => {
    const views = [
        { key: 'table', icon: List, label: 'Table View' },
        { key: 'grid', icon: LayoutGrid, label: 'Grid View' },
        { key: 'compact', icon: Grid3X3, label: 'Compact View' },
    ];
    return (_jsx("div", { className: "flex items-center gap-1 bg-gray-100 rounded-lg p-1", children: views.map((viewOption) => {
            const Icon = viewOption.icon;
            const isActive = view === viewOption.key;
            return (_jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(Button, { variant: isActive ? "default" : "ghost", size: "sm", onClick: () => onViewChange(viewOption.key), className: `h-9 px-3 rounded-md transition-all duration-200 ${isActive
                        ? 'bg-white shadow-sm text-gray-900'
                        : 'hover:bg-gray-200 text-gray-600'}`, title: viewOption.label, children: _jsx(Icon, { className: "w-4 h-4" }) }) }, viewOption.key));
        }) }));
};
export default ViewToggle;
