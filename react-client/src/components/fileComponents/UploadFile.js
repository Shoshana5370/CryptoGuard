import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { Label } from "@/styles/ui/label";
import { UploadCloud, Check, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/styles/hooks/use-toast";
const UploadFileDialog = ({ isOpen, onClose, onUpload, uploading, uploadError, progress, }) => {
    const [file, setFile] = useState(null);
    const [customFileName, setCustomFileName] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const [localError, setLocalError] = useState(null);
    const [success, setSuccess] = useState(false);
    const MAX_FILE_SIZE = 100 * 1024 * 1024;
    const handleFileChange = (e) => {
        if (e.target.files?.[0]) {
            setFile(e.target.files[0]);
            setLocalError(null);
        }
    };
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        }
        else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files?.[0]) {
            setFile(e.dataTransfer.files[0]);
            setLocalError(null);
        }
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file)
            return;
        if (file.size > MAX_FILE_SIZE) {
            const message = "File size exceeds 100MB limit.";
            setLocalError(message);
            toast({
                title: "File too large",
                description: message,
                variant: "destructive",
            });
            return;
        }
        setLocalError(null);
        try {
            await onUpload(file, customFileName);
            toast({
                title: "Upload successful",
                description: `${file.name} was uploaded and encrypted.`,
            });
            setSuccess(true);
            setTimeout(() => {
                handleClose();
            }, 1000);
        }
        catch {
            const errorMessage = "Upload failed. Please try again.";
            setLocalError(errorMessage);
            toast({
                title: "Upload failed",
                description: errorMessage,
                variant: "destructive",
            });
        }
    };
    const handleClose = () => {
        setFile(null);
        setCustomFileName("");
        setLocalError(null);
        setSuccess(false);
        onClose();
    };
    useEffect(() => {
        if (!isOpen) {
            setFile(null);
            setCustomFileName("");
            setLocalError(null);
            setSuccess(false);
        }
    }, [isOpen]);
    return (_jsx(Dialog, { open: isOpen, onOpenChange: (open) => (open ? null : handleClose()), children: _jsxs(DialogContent, { className: "sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg" }), _jsxs(DialogHeader, { className: "text-center pb-6", children: [_jsxs(DialogTitle, { className: "flex items-center justify-center gap-3 text-2xl", children: [_jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg", children: _jsx(UploadCloud, { className: "w-6 h-6 text-white" }) }), _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent", children: "Upload File" })] }), _jsx(DialogDescription, { className: "text-gray-600 mt-2", children: "Select a file to upload and encrypt securely in the cloud" })] }), _jsxs("form", { onSubmit: handleUpload, className: "space-y-6", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs(Label, { htmlFor: "fileName", className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4" }), "Custom File Name (Optional)"] }), _jsx(Input, { id: "fileName", type: "text", placeholder: "Enter custom file name", value: customFileName, onChange: (e) => setCustomFileName(e.target.value), disabled: uploading || success, className: "h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" })] }), _jsxs("div", { className: "space-y-3", children: [_jsx(Label, { className: "text-sm font-semibold text-gray-700", children: "Choose File" }), _jsxs("div", { className: `relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${dragActive
                                        ? "border-emerald-500 bg-emerald-50"
                                        : file
                                            ? "border-emerald-300 bg-emerald-50"
                                            : "border-gray-300 hover:border-emerald-400 hover:bg-emerald-50/50"}`, onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, children: [_jsx("input", { type: "file", onChange: handleFileChange, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer", disabled: uploading || success }), file ? (_jsxs(motion.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "space-y-3", children: [_jsx("div", { className: "p-3 rounded-full bg-emerald-100 w-fit mx-auto", children: _jsx(FileText, { className: "w-6 h-6 text-emerald-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: file.name }), _jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [(file.size / 1024 / 1024).toFixed(2), " MB"] }), customFileName && (_jsxs("p", { className: "text-sm text-emerald-600 mt-1 font-medium", children: ["\u2192 Will be saved as: ", customFileName] }))] })] })) : (_jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "p-3 rounded-full bg-gray-100 w-fit mx-auto", children: _jsx(UploadCloud, { className: "w-6 h-6 text-gray-400" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: "Drop files here or click to browse" }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports all file types up to 100MB" })] })] }))] })] }), (localError || uploadError) && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-3 bg-red-50 rounded-lg border border-red-200", children: _jsx("p", { className: "text-sm text-red-700 font-medium", children: localError || uploadError }) })), _jsxs(DialogFooter, { className: "gap-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: handleClose, className: "flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all", children: "Cancel" }), _jsx(Button, { type: "submit", className: "flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200", disabled: !file || uploading || success, children: uploading ? (_jsxs(motion.div, { className: "flex items-center gap-2", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, children: _jsx(Sparkles, { className: "w-4 h-4" }) }), "Uploading..."] })) : success ? (_jsxs(motion.div, { initial: { scale: 0.8 }, animate: { scale: 1 }, className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-4 h-4" }), "Uploaded Successfully!"] })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(UploadCloud, { className: "w-4 h-4" }), "Upload File"] })) })] })] }), file && uploading && (_jsxs("div", { className: "w-full bg-gray-200 rounded-full h-2 mt-4", children: [_jsx("div", { className: "bg-emerald-500 h-2 rounded-full transition-all duration-300", style: { width: `${progress}%` } }), _jsxs("p", { className: "text-xs text-gray-500 mt-1 text-center", children: [progress, "%"] })] }))] }) }));
};
export default UploadFileDialog;
