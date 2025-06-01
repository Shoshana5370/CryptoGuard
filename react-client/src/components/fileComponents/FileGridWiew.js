import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FileIcon from "./FileIcon";
import FileTypeLabel from "./FileTypeLevel";
import { Button } from "@/styles/ui/button";
import { Download, Pencil, Share2, Trash2, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/styles/ui/dropdown-menu";
import RenameDialog from "./RenameDialog";
import ShareFileDialog from "../shareComponents/ShareFileDialog";
import { toast } from "@/styles/hooks/use-toast";
const FileGridView = ({ files, onDownload, onRename, onShare, onDelete, deleteErrorById, isDeletingById, isUpdating, updateError, }) => {
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
    useEffect(() => {
        Object.entries(deleteErrorById).forEach(([fileId, errorMessage]) => {
            if (errorMessage) {
                const file = files.find(f => f.id === Number(fileId));
                if (file) {
                    toast({
                        title: `Failed to delete "${file.name}"`,
                        description: errorMessage,
                        variant: "destructive",
                    });
                }
            }
        });
    }, [deleteErrorById]);
    return (_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: [files.map((file, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.05 }, className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all duration-200 group", children: _jsxs("div", { className: "flex flex-col h-full", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("div", { className: "p-3 rounded-xl bg-gray-50 group-hover:bg-emerald-50 transition-colors", children: _jsx(FileIcon, { fileType: file.contentType, className: "w-8 h-8" }) }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity", children: _jsx(MoreVertical, { className: "w-4 h-4" }) }) }), _jsxs(DropdownMenuContent, { className: "bg-white border border-gray-200 shadow-lg rounded-lg z-50", children: [_jsxs(DropdownMenuItem, { onClick: () => onDownload(file.id), className: "hover:bg-emerald-50", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download"] }), _jsxs(DropdownMenuItem, { onClick: () => handleOpenRename(file), className: "hover:bg-orange-50", children: [_jsx(Pencil, { className: "w-4 h-4 mr-2" }), "Rename"] }), _jsxs(DropdownMenuItem, { onClick: () => handleOpenShare(file), className: "hover:bg-rose-50", children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share"] }), _jsxs(DropdownMenuItem, { onClick: () => !isDeletingById[file.id] && onDelete(file.id), disabled: isDeletingById[file.id], className: "hover:bg-red-50 text-red-600 flex items-center", children: [isDeletingById[file.id] ? (_jsx("div", { className: "w-4 h-4 mr-2 animate-spin border-2 border-t-transparent border-red-600 rounded-full" })) : (_jsx(Trash2, { className: "w-4 h-4 mr-2" })), isDeletingById[file.id] ? "Deleting..." : "Delete"] })] })] })] }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-2 line-clamp-2 text-base", children: file.name }), _jsxs("div", { className: "space-y-2", children: [_jsx(FileTypeLabel, { mimeType: file.contentType }), _jsx("p", { className: "text-sm text-gray-500", children: new Date(file.updatedAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            }) })] })] })] }) }, file.id))), selectedFile && (_jsx(RenameDialog, { isOpen: isRenameOpen, onClose: handleCloseRename, file: selectedFile, onRename: handleDialogRename, isUpdating: isUpdating, updateError: updateError })), selectedFileShare && (_jsx(ShareFileDialog, { isOpen: isShareOpen, onClose: handleCloseShare, file: selectedFileShare, onShare: handleDialogShare }))] }));
};
export default FileGridView;
