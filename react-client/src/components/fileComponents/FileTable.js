import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TableHeader, TableRow, TableHead, TableBody, Table } from "@/styles/ui/table";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import RenameDialog from "./RenameDialog";
import EmptyFileState from "./EmptyFileState";
import ShareFileDialog from "../shareComponents/ShareFileDialog";
import FileRow from "./FileRow";
const FileTable = ({ files, onDelete, onRename, onDownload, onShare, deleteErrorById, isDeletingById, isUpdating, updateError, }) => {
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileShare, setSelectedFileShare] = useState(null);
    const handleOpenShare = (file) => {
        setSelectedFileShare(file);
        setIsShareOpen(true);
    };
    const handleCloseShare = () => {
        setIsShareOpen(false);
        setSelectedFileShare(null);
    };
    const handleDialogShare = (updatedFile) => {
        onShare(updatedFile);
        handleCloseShare();
    };
    const handleOpenRename = (file) => {
        setSelectedFile(file);
        setIsRenameOpen(true);
    };
    const handleCloseRename = () => {
        setSelectedFile(null);
        setIsRenameOpen(false);
    };
    const handleDialogRename = (updatedFile) => {
        onRename(updatedFile);
        handleCloseRename();
    };
    const activeFiles = files.filter(file => !file.isDelete);
    return (_jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 overflow-hidden", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-orange-500 h-1" }), activeFiles.length === 0 ? (_jsx(EmptyFileState, {})) : (_jsx("div", { className: "overflow-hidden", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { className: "bg-gray-50/80 border-b border-gray-200", children: [_jsx(TableHead, { className: "font-semibold text-gray-700 py-4", children: "File Name" }), _jsx(TableHead, { className: "font-semibold text-gray-700", children: "Type" }), _jsx(TableHead, { className: "font-semibold text-gray-700", children: "Date Modified" }), _jsx(TableHead, { className: "font-semibold text-gray-700 text-center", children: "Actions" })] }) }), _jsx(TableBody, { children: _jsx(AnimatePresence, { mode: "popLayout", children: activeFiles.map((file, index) => (_jsx(FileRow, { file: file, index: index, onDownload: onDownload, onRename: handleOpenRename, onShare: handleOpenShare, onDelete: onDelete, isDeleting: isDeletingById?.[file.id] ?? false, deleteError: deleteErrorById?.[file.id] ?? null }, file.id))) }) })] }) })), selectedFile && (_jsx(RenameDialog, { isOpen: isRenameOpen, onClose: handleCloseRename, file: selectedFile, onRename: handleDialogRename, isUpdating: isUpdating, updateError: updateError })), selectedFileShare && (_jsx(ShareFileDialog, { isOpen: isShareOpen, onClose: handleCloseShare, file: selectedFileShare, onShare: handleDialogShare }))] }));
};
export default FileTable;
