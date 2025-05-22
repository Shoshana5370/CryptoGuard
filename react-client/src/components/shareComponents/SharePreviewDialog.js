import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/styles/ui/dialog";
import AccessSharedFile from "./AccessSharedFile";
const SharePreviewDialog = ({ open, onClose, shareCode, fileName }) => {
    return (_jsx(Dialog, { open: open, onOpenChange: (o) => !o && onClose(), children: _jsxs(DialogContent, { className: "max-w-xl", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: "Access Shared File" }) }), shareCode && _jsx(AccessSharedFile, { code: shareCode, fileName: fileName })] }) }));
};
export default SharePreviewDialog;
