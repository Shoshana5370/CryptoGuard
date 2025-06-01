import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { Label } from "@/styles/ui/label";
import { Calendar as CalendarIcon, Mail } from "lucide-react";
const ShareFileDialog = ({ isOpen, onClose, file, onShare }) => {
    const [email, setEmail] = useState("");
    const [expiration, setExpiration] = useState(null);
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const handleShare = async () => {
        if (!email || !file?.id)
            return;
        const payload = {
            fileKey: file.id,
            recipientEmail: email,
            expiresAt: expiration ? expiration.toISOString() : undefined,
        };
        onShare(payload);
    };
    const resetState = () => {
        setEmail("");
        setExpiration(null);
        onClose();
    };
    const handleClose = () => {
        resetState();
        onClose();
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: (open) => open ? null : handleClose(), children: _jsxs(DialogContent, { className: "sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg" }), _jsx(DialogHeader, { className: "text-center pb-6", children: _jsx("h2", { className: "text-xl font-bold", children: "Share File" }) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs(Label, { htmlFor: "recipient-email", className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [_jsx(Mail, { className: "w-4 h-4" }), "Recipient Email"] }), _jsx(Input, { id: "recipient-email", type: "email", value: email, onChange: e => setEmail(e.target.value), placeholder: "Enter recipient's email", className: "w-full rounded-lg h-12 border-gray-200", required: true })] }), _jsxs("div", { children: [_jsxs(Label, { className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [_jsx(CalendarIcon, { className: "w-4 h-4" }), "Expiration Date (Optional)"] }), _jsx(Input, { type: "date", value: expiration ? expiration.toISOString().split('T')[0] : "", onChange: e => setExpiration(e.target.value ? new Date(e.target.value) : null), className: "w-full rounded-lg h-12 border-gray-200", min: new Date().toISOString().split('T')[0] })] })] }), _jsxs("div", { className: "flex justify-end gap-2 mt-6", children: [_jsx(Button, { variant: "ghost", onClick: handleClose, children: "Cancel" }), _jsx(Button, { onClick: handleShare, disabled: !isValidEmail(email), className: "bg-emerald-600 hover:bg-emerald-700 text-white", children: "Share" })] })] }) }));
};
export default ShareFileDialog;
