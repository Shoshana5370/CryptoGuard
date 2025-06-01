import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch } from "@/hooks";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, FileText, Mail, XCircle } from "lucide-react";
import { useState } from "react";
import ShareQuickActions from "./ShareQuickActions";
import ExpirationEditor from "./ExpirationEditor";
import { extendShareExpiration } from "@/features/shares/shareSlice";
const SharedSentItemCard = ({ share }) => {
    const dispatch = useAppDispatch();
    const [editing, setEditing] = useState(false);
    const isExpired = new Date(share.expiresAt) <= new Date();
    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/share/${share.id}`);
    };
    const handleExtend = () => {
        setEditing(true);
    };
    return (_jsx(motion.li, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: "group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 overflow-hidden", children: _jsx("div", { className: "p-6", children: _jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "p-3 rounded-xl bg-orange-100 flex-shrink-0", children: _jsx(Mail, { className: "w-5 h-5 text-orange-600" }) }), _jsxs("div", { className: "space-y-3 flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [_jsx("span", { className: "text-gray-600 text-sm", children: "Shared with:" }), _jsx("span", { className: "font-semibold text-gray-900 bg-orange-50 px-3 py-1 rounded-full text-sm", children: share.recipientEmail })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4 text-gray-400" }), _jsx("span", { className: "text-sm text-gray-600", children: "File:" }), _jsx("span", { className: "font-medium text-gray-900", children: share.fileName })] }), !share.used && !share.fileIsDeleted && (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Calendar, { className: "w-4 h-4 text-gray-400" }), _jsxs("span", { className: `${isExpired ? 'text-red-600' : 'text-gray-500'}`, children: [isExpired ? 'Expired:' : 'Expires:', " ", new Date(share.expiresAt).toLocaleDateString()] })] })), _jsxs("div", { className: "flex flex-wrap gap-2", children: [share.fileIsDeleted && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium border border-red-200", children: [_jsx(XCircle, { className: "w-3 h-3" }), "File Removed"] })), share.used && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium border border-emerald-200", children: [_jsx(CheckCircle, { className: "w-3 h-3" }), "Downloaded"] })), isExpired && !share.used && !share.fileIsDeleted && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full font-medium border border-amber-200", children: [_jsx(Clock, { className: "w-3 h-3" }), "Expired"] }))] })] })] }) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ShareQuickActions, { share: share, shareType: "sent", onCopyLink: handleCopyLink, onExtend: handleExtend }), editing && (_jsx(ExpirationEditor, { currentDate: share.expiresAt, onSave: (newDate) => {
                                    dispatch(extendShareExpiration({
                                        id: share.id,
                                        newDate: newDate.toISOString(),
                                    }));
                                    setEditing(false);
                                }, onCancel: () => setEditing(false) }))] })] }) }) }));
};
export default SharedSentItemCard;
