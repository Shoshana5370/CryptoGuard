import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { CalendarIcon, Check, Clock, Mail, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar } from "@/styles/ui/calendar";
const ShareFileDialog = ({ isOpen, onClose, file, onShare }) => {
    const { status } = useAppSelector((state) => state.shareFile);
    const [email, setEmail] = useState("");
    // const [expiration, setExpiration] = useState<Date | undefined>(new Date());
    const [expiration, setExpiration] = useState(null);
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const handleShare = async () => {
        if (!email || !file?.id)
            return;
        const payload = {
            fileKey: file.id,
            recipientEmail: email,
            expiresAt: expiration?.toISOString(),
        };
        onShare(payload);
    };
    const resetState = () => {
        setEmail("");
        setExpiration((new Date()));
        onClose();
    };
    const handleClose = () => {
        resetState();
        onClose();
    };
    const isSharing = status === "loading";
    const isSuccess = status === "succeeded";
    return (_jsx(Dialog, { open: isOpen, onOpenChange: (open) => open ? null : handleClose(), children: _jsxs(DialogContent, { className: "sm:max-w-[500px]", children: [_jsxs(DialogHeader, { children: [_jsxs(DialogTitle, { className: "flex items-center gap-2 text-xl", children: [_jsx(Share2, { className: "w-5 h-5 text-emerald-600" }), "Share File"] }), _jsxs(DialogDescription, { children: ["Share \u201C", file?.name, "\u201D securely via email."] })] }), _jsxs("div", { className: "space-y-6 pt-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Recipient Email" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400" }), _jsx(Input, { id: "email", type: "email", className: "pl-10", placeholder: "Enter email address", value: email, onChange: (e) => setEmail(e.target.value) }), email && !isValidEmail(email) && (_jsx("p", { className: "text-sm text-red-500", children: "Email is Invalid." }))] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Expiration Date" }), _jsx(Calendar, { selected: expiration, onChange: setExpiration, startAdornment: _jsx(CalendarIcon, { className: "h-5 w-5 text-gray-400" }), className: "w-full" }), expiration && (_jsxs("p", { className: "text-xs text-gray-500 flex items-center gap-1 mt-1", children: [_jsx(Clock, { className: "w-3 h-3" }), "Expires on ", format(expiration, "MMM d, yyyy")] }))] })] }), _jsxs(DialogFooter, { className: "mt-4 gap-2", children: [_jsx(Button, { variant: "outline", onClick: handleClose, children: "Cancel" }), _jsx(Button, { className: "bg-emerald-600 hover:bg-emerald-700", disabled: !isValidEmail(email) || isSharing || isSuccess, onClick: handleShare, children: isSharing ? (_jsxs(_Fragment, { children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, className: "mr-2", children: _jsx(Clock, { className: "w-4 h-4" }) }), "Sharing..."] })) : isSuccess ? (_jsxs(_Fragment, { children: [_jsx(Check, { className: "w-4 h-4 mr-2" }), "Shared!"] })) : (_jsxs(_Fragment, { children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share"] })) })] })] }) }));
};
export default ShareFileDialog;
