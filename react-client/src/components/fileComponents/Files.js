import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { deleteFile, fetchFilesByUserId, updateFile, uploadFileContent } from "@/features/files/filesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import FileTable from "./FileTable";
import { useFileFilters } from "@/features/useFileFilters";
import FileGridView from "./FileGridWiew";
import SearchAndFilter from "../shareComponents/SearchAndFilter";
import ViewToggle from "../mainComponents/ViewToggle";
import UploadFileDialog from "./UploadFile";
import FileStats from "./FileStas";
import { fetchSharesToOthers, shareFile } from "../../features/shares/shareSlice";
const Files = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);
    const { items: files, isFetching, fetchError, isDeletingById, deleteErrorById, isUpdating, updateError, uploading, uploadError, progress, hasFetched } = useAppSelector(state => state.files);
    const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);
    const [view, setView] = useState('table');
    const { searchTerm, setSearchTerm, sortBy, setSortBy, sortOrder, toggleSortOrder, filterType, setFilterType, filteredAndSortedFiles, resetFilters, } = useFileFilters(files);
    useEffect(() => {
        if (user && !hasFetched) {
            dispatch(fetchFilesByUserId());
        }
    }, [dispatch, user, hasFetched]);
    const handleDelete = async (fileId) => {
        try {
            await dispatch(deleteFile(fileId)).unwrap();
            await dispatch(fetchSharesToOthers()).unwrap();
        }
        catch {
        }
    };
    const handleRename = async (updatedFile) => {
        try {
            await dispatch(updateFile(updatedFile)).unwrap();
        }
        catch {
        }
    };
    const handleDownload = (fileId) => {
        console.log(`Download file with ID: ${fileId}`);
    };
    const handleShare = async (updatedFile) => {
        await dispatch(shareFile(updatedFile)).unwrap();
        await dispatch(fetchSharesToOthers()).unwrap();
    };
    const handleUpload = async (file, customFileName) => {
        try {
            await dispatch(uploadFileContent({ file, fileName: customFileName.trim() || file.name })).unwrap();
        }
        catch (err) {
            console.error("Failed to upload file:", err);
        }
    };
    const activeFiles = files.filter(file => !file.isDelete);
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent", children: "My Files" }), _jsx("p", { className: "text-gray-600 mt-2 text-lg", children: "Manage your encrypted files securely" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ViewToggle, { view: view, onViewChange: setView }), user && (_jsxs(Button, { onClick: () => setUploadFileIsOpen(true), className: "h-12 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200", children: [_jsx(Upload, { className: "w-5 h-5 mr-2" }), "Upload File"] }))] }), _jsx(UploadFileDialog, { isOpen: isUploadFileOpen, onClose: () => setUploadFileIsOpen(false), onUpload: handleUpload, uploading: uploading, uploadError: uploadError, progress: progress })] }), fetchError && (_jsx(Alert, { variant: "destructive", className: "mb-6 border-red-200 bg-red-50", children: _jsx(AlertDescription, { className: "text-red-700", children: fetchError }) })), isFetching ? (_jsx("div", { className: "flex justify-center items-center py-20", children: _jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "relative", children: [_jsx(Loader2, { className: "w-12 h-12 animate-spin text-emerald-600 mx-auto" }), _jsx("div", { className: "absolute inset-0 w-12 h-12 rounded-full border-2 border-emerald-200 mx-auto" })] }), _jsx("span", { className: "mt-4 block text-lg text-gray-600 font-medium", children: "Loading files..." }), _jsx("span", { className: "mt-1 block text-sm text-gray-500", children: "Decrypting your secure files" })] }) })) : (_jsxs(_Fragment, { children: [_jsx(FileStats, { files: activeFiles }), _jsx(SearchAndFilter, { searchTerm: searchTerm, onSearchChange: setSearchTerm, sortBy: sortBy, onSortChange: setSortBy, sortOrder: sortOrder, onSortOrderToggle: toggleSortOrder, filterType: filterType, onFilterTypeChange: setFilterType, onReset: resetFilters, totalFiles: activeFiles.length, filteredFiles: filteredAndSortedFiles.length }), view === 'grid' ? (_jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 overflow-hidden", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-orange-500 h-1" }), _jsx("div", { className: "p-6", children: filteredAndSortedFiles.length === 0 ? (_jsx("div", { className: "text-center py-16", children: _jsx("p", { className: "text-gray-500 text-lg", children: "No files match your search criteria" }) })) : (_jsx(FileGridView, { files: filteredAndSortedFiles, onDelete: handleDelete, onRename: handleRename, onDownload: handleDownload, onShare: handleShare, isDeletingById: isDeletingById, deleteErrorById: deleteErrorById, isUpdating: isUpdating, updateError: updateError })) })] })) : (_jsx(FileTable, { files: filteredAndSortedFiles, onDelete: handleDelete, onRename: handleRename, onDownload: handleDownload, onShare: handleShare, isDeletingById: isDeletingById, deleteErrorById: deleteErrorById, isUpdating: isUpdating, updateError: updateError }))] }))] }) }));
};
export default Files;
