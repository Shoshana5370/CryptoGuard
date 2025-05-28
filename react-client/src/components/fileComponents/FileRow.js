import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TableCell } from "@/styles/ui/table";
import { motion } from "framer-motion";
import FileIcon from "./FileIcon";
import FileActions from "./FileActions";
import FileTypeLabel from "./FileTypeLevel";
const FileRow = ({ file, index, onDownload, onRename, onShare, onDelete }) => {
    return (_jsxs(motion.tr, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, x: -100 }, transition: { duration: 0.3, delay: index * 0.05 }, className: "group hover:bg-emerald-50/50 transition-all duration-200 border-b border-gray-100 last:border-b-0", children: [_jsx(TableCell, { className: "py-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-2 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-200", children: _jsx(FileIcon, { fileType: file.contentType }) }), _jsx("div", { children: _jsx("span", { className: "font-medium text-gray-900 text-base", children: file.name }) })] }) }), _jsx(TableCell, { children: _jsx(FileTypeLabel, { mimeType: file.contentType }) }), _jsx(TableCell, { className: "text-gray-600 font-medium", children: new Date(file.updatedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }) }), _jsx(TableCell, { children: _jsx(FileActions, { file: file, onDownload: onDownload, onRename: onRename, onShare: onShare, onDelete: onDelete }) })] }, file.id));
};
export default FileRow;
