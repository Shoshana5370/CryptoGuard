import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { accessSharedFile, clearAccess } from "@/features/shares/shareSlice";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/styles/ui/card";
import { Input } from "@/styles/ui/input";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { AlertTriangle, Download, Link, ExternalLink, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const AccessSharedFile = ({ code, fileName }) => {
    const [shareCode, setShareCode] = useState("");
    const [fileUrl, setFileUrl] = useState(null);
    const [fileType, setFileType] = useState(null);
    const dispatch = useAppDispatch();
    const { currentFile, status, error } = useAppSelector((state) => state.share);
    useEffect(() => {
        return () => {
            dispatch(clearAccess());
        };
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(accessSharedFile({ shareId: parseInt(code), code: shareCode.trim() }));
    };
    const handleDownload = () => {
        if (currentFile?.blob && fileUrl) {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    };
    useEffect(() => {
        if (currentFile?.blob) {
            const url = window.URL.createObjectURL(currentFile?.blob);
            setFileUrl(url);
            const inferredType = currentFile?.blob.type;
            setFileType(inferredType);
        }
    }, [currentFile?.blob]);
    const isPreviewable = (type) => {
        if (!type)
            return false;
        return type.startsWith("image/") || type === "application/pdf";
    };
    return fileUrl && fileType ? (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "max-w-md mx-auto p-8", children: _jsxs("div", { className: "text-center space-y-6", children: [_jsx("div", { className: "p-4 rounded-full bg-emerald-100 w-fit mx-auto", children: _jsx(FileText, { className: "w-8 h-8 text-emerald-600" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "File Ready!" }), _jsx("p", { className: "text-gray-600", children: "Your file is now available for download" })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [isPreviewable(fileType) && (_jsx(Button, { variant: "outline", asChild: true, className: "flex-1 h-12 rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all", children: _jsxs("a", { href: fileUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2", children: [_jsx(ExternalLink, { className: "w-4 h-4" }), "Preview File"] }) })), _jsxs(Button, { onClick: handleDownload, className: "flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download File"] })] })] }) })) : (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "max-w-md mx-auto p-4", children: _jsxs(Card, { className: "border-0 shadow-lg bg-white/95 backdrop-blur-sm", children: [_jsxs(CardHeader, { className: "text-center pb-6", children: [_jsx("div", { className: "p-4 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 w-fit mx-auto mb-4", children: _jsx(Link, { className: "w-8 h-8 text-emerald-600" }) }), _jsx(CardTitle, { className: "text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent", children: "Enter Access Code" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx(Sparkles, { className: "absolute left-4 top-3.5 h-5 w-5 text-gray-400" }), _jsx(Input, { placeholder: "Enter your share code", value: shareCode, onChange: (e) => setShareCode(e.target.value), className: "pl-12 h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all", disabled: status.access === "loading" })] }), status.access === "failed" && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, children: _jsxs(Alert, { variant: "destructive", className: "border-red-200 bg-red-50", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: typeof error === "string" ? error : "Invalid or expired code" })] }) })), _jsx(Button, { type: "submit", className: "w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200", disabled: status.access === "loading" || !shareCode.trim(), children: status.access === "loading" ? (_jsxs(motion.div, { className: "flex items-center gap-2", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, children: _jsx(Sparkles, { className: "w-4 h-4" }) }), "Accessing File..."] })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Link, { className: "w-4 h-4" }), "Access File"] })) })] }) }), _jsx(CardFooter, { children: _jsx("p", { className: "text-sm text-gray-500 w-full text-center leading-relaxed", children: "Files are accessible for a limited time only and may expire after download" }) })] }) }));
};
export default AccessSharedFile;
