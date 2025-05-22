import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { accessSharedFile, clearAccess } from "@/features/shares/accessSlice";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/styles/ui/card";
import { Input } from "@/styles/ui/input";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { AlertTriangle, Download, Link } from "lucide-react";
import { fetchSharesToOthers, fetchSharesWithMe } from "@/features/shares/shareSlice";
const AccessSharedFile = ({ code, fileName }) => {
    const [shareCode, setShareCode] = useState("");
    const [fileUrl, setFileUrl] = useState(null);
    const [fileType, setFileType] = useState(null);
    const dispatch = useAppDispatch();
    const { fileBlob, status, error } = useAppSelector((state) => state.access);
    useEffect(() => {
        return () => {
            dispatch(clearAccess());
            dispatch(fetchSharesWithMe());
            dispatch(fetchSharesToOthers());
        };
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(accessSharedFile({ shareId: parseInt(code), code: shareCode.trim() }));
        dispatch(fetchSharesWithMe());
        dispatch(fetchSharesToOthers());
    };
    const handleDownload = () => {
        if (fileBlob && fileUrl) {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    };
    useEffect(() => {
        if (fileBlob) {
            const url = window.URL.createObjectURL(fileBlob);
            setFileUrl(url);
            const inferredType = fileBlob.type;
            setFileType(inferredType);
            dispatch(fetchSharesWithMe());
            dispatch(fetchSharesToOthers());
        }
    }, [fileBlob]);
    const isPreviewable = (type) => {
        if (!type)
            return false;
        return type.startsWith("image/") || type === "application/pdf";
    };
    return fileUrl && fileType ? (_jsx("div", { className: "max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center gap-6", children: _jsxs("div", { className: "flex gap-4", children: [isPreviewable(fileType) && (_jsx("a", { href: fileUrl, target: "_blank", rel: "noopener noreferrer", className: "px-4 py-2 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-600 hover:text-white transition-colors", children: "View in New Tab" })), _jsxs(Button, { onClick: handleDownload, className: "bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-white rounded-md flex items-center gap-2", children: [_jsx(Download, { className: "h-4 w-4" }), "Download"] })] }) })) : (_jsx("div", { className: "max-w-md mx-auto p-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "flex items-center gap-2 text-xl", children: "Access Shared File" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Link, { className: "absolute left-3 top-3 h-5 w-5 text-gray-400" }), _jsx(Input, { placeholder: "Enter share code", value: shareCode, onChange: (e) => setShareCode(e.target.value), className: "pl-10", disabled: status === "loading" })] }), status === "failed" && (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: typeof error === "string" ? error : "Invalid or expired code" })] })), _jsx(Button, { type: "submit", className: "w-full bg-emerald-600 hover:bg-emerald-700", disabled: status === "loading" || !shareCode.trim(), children: status === "loading" ? "Accessing..." : "Access File" })] }) }), _jsx(CardFooter, { children: _jsx("p", { className: "text-sm text-gray-500 w-full text-center", children: "Files are accessible for a limited time only" }) })] }) }));
};
export default AccessSharedFile;
