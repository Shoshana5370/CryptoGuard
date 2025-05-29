import  { useState } from "react";
import { FileDto } from "@/types/FileDto";
import { motion } from "framer-motion";
import FileIcon from "./FileIcon";
import FileTypeLabel from "./FileTypeLevel";
import { Button } from "@/styles/ui/button";
import { Download, Pencil, Share2, Trash2, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/styles/ui/dropdown-menu";
import { SharePostModel } from "@/types/SharePostModel";
import RenameDialog from "./RenameDialog";
import ShareFileDialog from "../shareComponents/ShareFileDialog";
interface FileGridViewProps {
    files: FileDto[];
    onDownload: (fileId: number) => void;
    onRename: (file: FileDto) => void;
    onShare: (file: SharePostModel) => void;
    onDelete: (fileId: number) => void;
}
const FileGridView = ({ files, onDownload, onRename, onShare, onDelete }: FileGridViewProps) => {
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<FileDto | null>(null);
    const [selectedFileShare, setSelectedFileShare] = useState<FileDto | null>(null);

    const handleOpenShare = (file: FileDto) => {
        setSelectedFileShare(file);
        setIsShareOpen(true);
    };

    const handleCloseShare = () => {
        setIsShareOpen(false);
        setSelectedFileShare(null);
    };

    const handleDialogShare = (updatedFile: SharePostModel) => {
        onShare(updatedFile);
        handleCloseShare();
    };

    const handleOpenRename = (file: FileDto) => {
        setSelectedFile(file);
        setIsRenameOpen(true);
    };

    const handleCloseRename = () => {
        setSelectedFile(null);
        setIsRenameOpen(false);
    };

    const handleDialogRename = (updatedFile: FileDto) => {
        onRename(updatedFile);
        handleCloseRename();
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {files.map((file, index) => (
                <motion.div
                    key={file.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all duration-200 group"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-emerald-50 transition-colors">
                                <FileIcon fileType={file.contentType} className="w-8 h-8" />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                                    <DropdownMenuItem onClick={() => onDownload(file.id)} className="hover:bg-emerald-50">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleOpenRename(file)} className="hover:bg-orange-50">
                                        <Pencil className="w-4 h-4 mr-2" />
                                        Rename
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleOpenShare(file)}
                                        className="hover:bg-rose-50"
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Share
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => onDelete(file.id)} className="hover:bg-red-50 text-red-600">
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-base">
                                {file.name}
                            </h3>
                            <div className="space-y-2">
                                <FileTypeLabel mimeType={file.contentType} />
                                <p className="text-sm text-gray-500">
                                    {new Date(file.updatedAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
            {selectedFile && (
                <RenameDialog
                    isOpen={isRenameOpen}
                    onClose={handleCloseRename}
                    file={selectedFile}
                    onRename={handleDialogRename}
                />
            )}

            {selectedFileShare && (
                <ShareFileDialog
                    isOpen={isShareOpen}
                    onClose={handleCloseShare}
                    file={selectedFileShare}
                    onShare={handleDialogShare}
                />
            )}
        </div>

    );
};

export default FileGridView;
