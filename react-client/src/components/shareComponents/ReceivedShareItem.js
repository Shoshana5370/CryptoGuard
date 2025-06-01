import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { User, FileText, CheckCircle, AlertCircle, ChevronRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ShareQuickActions from "./ShareQuickActions";
const ReceivedShareItem = ({ share, onSelect }) => {
    const isInactive = share.used || share.fileIsDeleted;
    const isExpired = new Date(share.expiresAt) <= new Date();
    const handlePreview = () => {
        onSelect(share.id.toString(), share.fileName ?? "");
    };
    const handleDownload = () => {
        onSelect(share.id.toString(), share.fileName ?? "");
    };
    return (_jsx(motion.li, { whileHover: { scale: isInactive ? 1 : 1.01 }, whileTap: { scale: isInactive ? 1 : 0.99 }, onClick: () => {
            if (!isInactive)
                onSelect(share.id.toString(), share.fileName ?? "");
        }, className: `group bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 overflow-hidden ${isInactive
            ? "opacity-75 cursor-not-allowed"
            : "cursor-pointer hover:shadow-lg hover:border-emerald-200 hover:bg-emerald-50/30"}`, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-start gap-4 flex-1", children: [_jsx("div", { className: `p-3 rounded-xl flex-shrink-0 ${isInactive ? "bg-gray-100" : "bg-emerald-100 group-hover:bg-emerald-200"}`, children: _jsx(User, { className: `w-5 h-5 ${isInactive ? "text-gray-400" : "text-emerald-600"}` }) }), _jsxs("div", { className: "space-y-3 flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [_jsx("span", { className: "text-gray-600 text-sm", children: "From:" }), _jsx("span", { className: `font-semibold px-3 py-1 rounded-full text-sm ${isInactive
                                                ? "bg-gray-100 text-gray-600"
                                                : "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100"}`, children: share.sharedByUserName })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4 text-gray-400" }), _jsx("span", { className: "text-sm text-gray-600", children: "File:" }), _jsx("span", { className: "font-medium text-gray-900", children: share.fileName })] }), !isInactive && !isExpired && (_jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsxs("span", { children: [" Expires: ", new Date(share.expiresAt).toLocaleDateString()] })] })), _jsxs("div", { className: "flex flex-wrap gap-2", children: [share.used && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium border border-emerald-200", children: [_jsx(CheckCircle, { className: "w-3 h-3" }), "Downloaded"] })), share.fileIsDeleted && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full font-medium border border-pink-200", children: [_jsx(AlertCircle, { className: "w-3 h-3" }), "Unavailable"] })), isExpired && !share.used && !share.fileIsDeleted && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full font-medium border border-amber-200", children: [_jsx(Clock, { className: "w-3 h-3" }), "Expired"] }))] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(ShareQuickActions, { share: share, shareType: "received", onPreview: handlePreview, onDownload: handleDownload }), !isInactive && (_jsx(motion.div, { initial: { opacity: 0.5 }, whileHover: { opacity: 1, x: 5 }, className: "flex-shrink-0", children: _jsx(ChevronRight, { className: "w-5 h-5 text-emerald-400 group-hover:text-emerald-600" }) }))] })] }) }));
};
export default ReceivedShareItem;
