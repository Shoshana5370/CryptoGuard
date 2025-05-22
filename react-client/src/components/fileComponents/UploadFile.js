import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { uploadFileContent, resetUploadState } from "@/features/files/uploadslice";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { UploadCloud, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fetchFilesByUserId } from "@/features/files/filesSlice";
const UploadFileDialog = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
    const { uploading, success, error } = useAppSelector((state) => state.upFiles);
    const [file, setFile] = useState(null);
    const [customFileName, setCustomFileName] = useState("");
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            dispatch(resetUploadState());
        }
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file)
            return;
        try {
            await dispatch(uploadFileContent({ file, fileName: customFileName.trim() || file.name })).unwrap();
        }
        catch (err) {
            setFile(null);
            setCustomFileName("");
            dispatch(resetUploadState());
        }
    };
    const handleClose = () => {
        setFile(null);
        dispatch(resetUploadState());
        onClose();
    };
    useEffect(() => {
        if (!isOpen) {
            setFile(null);
            dispatch(resetUploadState());
        }
    }, [isOpen]);
    useEffect(() => {
        if (success) {
            handleClose();
            dispatch(fetchFilesByUserId());
        }
    }, [success, dispatch]);
    return (_jsx(Dialog, { open: isOpen, onOpenChange: (open) => (open ? null : handleClose()), children: _jsxs(DialogContent, { className: "sm:max-w-[500px]", children: [_jsxs(DialogHeader, { children: [_jsxs(DialogTitle, { className: "flex items-center gap-2 text-xl", children: [_jsx(UploadCloud, { className: "w-5 h-5 text-emerald-600" }), "Upload File"] }), _jsx(DialogDescription, { children: "Select a file to upload and encrypt securely." })] }), _jsxs("form", { onSubmit: handleUpload, className: "space-y-6 pt-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Input, { type: "text", placeholder: "Enter file name", value: customFileName, onChange: (e) => setCustomFileName(e.target.value), disabled: uploading || success }), _jsx(Input, { type: "file", onChange: handleFileChange }), file && (_jsxs("p", { className: "text-sm text-gray-600", children: ["Selected: ", _jsx("span", { className: "font-medium", children: file.name }), customFileName && (_jsxs(_Fragment, { children: [" \u2192 ", _jsx("span", { className: "text-emerald-600 font-medium", children: customFileName })] }))] }))] }), error && (_jsx("p", { className: "text-sm text-red-500", children: "Upload failed. Please try again." })), _jsxs(DialogFooter, { className: "mt-4 gap-2", children: [_jsx(Button, { variant: "outline", onClick: handleClose, children: "Cancel" }), _jsx(Button, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", disabled: !file || uploading || success, children: uploading ? (_jsxs(_Fragment, { children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, className: "mr-2", children: _jsx(Clock, { className: "w-4 h-4" }) }), "Uploading..."] })) : success ? (_jsxs(_Fragment, { children: [_jsx(Check, { className: "w-4 h-4 mr-2" }), "Uploaded!"] })) : (_jsxs(_Fragment, { children: [_jsx(UploadCloud, { className: "w-4 h-4 mr-2" }), "Upload"] })) })] })] })] }) }));
};
export default UploadFileDialog;
