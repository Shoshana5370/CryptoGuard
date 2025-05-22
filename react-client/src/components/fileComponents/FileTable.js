import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/styles/ui/button";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/styles/ui/table";
import { AnimatePresence, motion } from "framer-motion";
import { Archive, Code, Download, FileText, Music, Pencil, Share2, Trash2, Video, File, Image } from "lucide-react";
import { useState } from "react";
import ShareFileDialog from "../shareComponents/ShareFileDialog";
import RenameDialog from "./RenameDialog";
const getFileIcon = (fileType) => {
    const iconProps = { className: "w-5 h-5" };
    const [type, subtype] = fileType.toLowerCase().split('/');
    if (type === 'image')
        return _jsx(Image, { ...iconProps, className: "text-pink-500" });
    if (fileType === 'application/pdf')
        return _jsx(FileText, { ...iconProps, className: "text-red-500" });
    if (type === 'audio')
        return _jsx(Music, { ...iconProps, className: "text-blue-500" });
    if (type === 'video')
        return _jsx(Video, { ...iconProps, className: "text-emerald-500" });
    if (['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-tar'].includes(subtype)) {
        return _jsx(Archive, { ...iconProps, className: "text-amber-500" });
    }
    if (['x-python', 'x-javascript', 'x-c++'].includes(subtype)) {
        return _jsx(Code, { ...iconProps, className: "text-green-500" });
    }
    return _jsx(File, { ...iconProps, className: "text-gray-500" });
};
const getFileInfo = (mimeType) => {
    const map = {
        'application/pdf': 'PDF Document',
        'application/msword': 'Word Document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
        'application/vnd.ms-excel': 'Excel Spreadsheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Spreadsheet',
        'image/jpeg': 'JPEG Image',
        'image/png': 'PNG Image',
        'video/mp4': 'MP4 Video',
        'audio/mpeg': 'MP3 Audio',
    };
    return { label: map[mimeType] || mimeType.split('/')[1]?.toUpperCase() || 'Unknown' };
};
const FileTable = ({ files, onDelete, onRename, onDownload, onShare }) => {
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
    return (_jsxs("div", { className: "bg-white rounded-xl shadow-lg border border-gray-100", children: [_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { className: "bg-gray-50/50", children: [_jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "Type" }), _jsx(TableHead, { children: "Date" }), _jsx(TableHead, { className: "w-[100px]", children: "Actions" })] }) }), _jsx(TableBody, { children: _jsxs(AnimatePresence, { children: [files
                                    .filter(file => !file.isDelete)
                                    .map(file => (_jsxs(motion.tr, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -5 }, transition: { duration: 0.2 }, className: "group hover:bg-muted transition-colors", children: [_jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-3", children: [getFileIcon(file.contentType), _jsx("span", { className: "font-medium text-gray-900", children: file.name })] }) }), _jsx(TableCell, { children: _jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-gray-100 text-gray-800", children: getFileInfo(file.contentType).label }) }), _jsx(TableCell, { className: "text-gray-500", children: new Date(file.updatedAt).toLocaleDateString() }), _jsx(TableCell, { children: _jsxs(TableCell, { className: "flex gap-2 items-center", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => onDownload(file.id), title: "Download", children: _jsx(Download, { className: "w-4 h-4 text-muted-foreground" }) }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleOpenRename(file), title: "Rename", children: _jsx(Pencil, { className: "w-4 h-4 text-muted-foreground" }) }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleOpenShare(file), title: "Share", children: _jsx(Share2, { className: "w-4 h-4 text-muted-foreground" }) }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => onDelete(file.id), title: "Delete", children: _jsx(Trash2, { className: "w-4 h-4 text-red-500" }) })] }) })] }, file.id))), !files || files.length === 0 && (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: 5, className: "text-center py-8", children: _jsxs("div", { className: "flex flex-col items-center justify-center text-gray-500", children: [_jsx(File, { className: "w-12 h-12 mb-4 text-gray-300" }), _jsx("p", { className: "text-lg font-medium", children: "No files yet" }), _jsx("p", { className: "text-sm", children: "Upload your first file to get started" })] }) }) }))] }) })] }), selectedFile && (_jsx(RenameDialog, { isOpen: isRenameOpen, onClose: handleCloseRename, file: selectedFile, onRename: handleDialogRename })), selectedFileShare && (_jsx(ShareFileDialog, { isOpen: isShareOpen, onClose: handleCloseShare, file: selectedFileShare, onShare: handleDialogShare }))] }));
};
export default FileTable;
