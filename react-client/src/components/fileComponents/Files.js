import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { deleteFile, fetchFilesByUserId, updateFile } from "@/features/files/filesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import FileTable from "./FileTable";
import UploadFileDialog from "./UploadFile";
import { shareFile } from "@/features/shares/shareFileSlice";
import { fetchSharesToOthers, fetchSharesWithMe } from "@/features/shares/shareSlice";
const Files = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    const { items: files, loading, error } = useAppSelector(state => state.files);
    const {} = useAppSelector(state => state.shareFile);
    const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);
    useEffect(() => {
        if (user) {
            dispatch(fetchFilesByUserId());
        }
    }, [dispatch, user]);
    const handleDelete = (fileId) => {
        dispatch(deleteFile(fileId));
        dispatch(fetchSharesWithMe());
        dispatch(fetchSharesToOthers());
    };
    const handleDownload = (file) => {
        console.log('Download file:', file);
    };
    const handleRename = (updatedFile) => {
        dispatch(updateFile(updatedFile));
        dispatch(fetchSharesWithMe());
        dispatch(fetchSharesToOthers());
    };
    const handleShare = (updatedFile) => {
        dispatch(shareFile(updatedFile));
        dispatch(fetchSharesWithMe());
        dispatch(fetchSharesToOthers());
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "My Files" }), _jsx("p", { className: "text-gray-500 mt-1", children: "Manage your encrypted files" })] }), user && (_jsxs(Button, { onClick: () => setUploadFileIsOpen(true), className: "bg-emerald-600 hover:bg-emerald-700", children: [_jsx(Upload, { className: "w-4 h-4 mr-2" }), "Upload File"] })), _jsx(UploadFileDialog, { isOpen: isUploadFileOpen, onClose: () => setUploadFileIsOpen(false) })] }), error && (_jsx(Alert, { variant: "destructive", className: "mb-6", children: _jsx(AlertDescription, { children: typeof error === 'string' ? error : 'Failed to load files' }) })), loading ? (_jsxs("div", { className: "flex justify-center items-center py-12", children: [_jsx(Loader2, { className: "w-8 h-8 animate-spin text-emerald-600" }), _jsx("span", { className: "ml-2 text-lg text-gray-600", children: "Loading files..." })] }))
                : (_jsx(FileTable, { files: files, onDelete: handleDelete, onRename: handleRename, onDownload: handleDownload, onShare: handleShare }))] }));
};
export default Files;
