import { Button } from "@/styles/ui/button";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/styles/ui/table";
import { FileDto } from "@/types/FileDto";
import { AnimatePresence, motion } from "framer-motion";
import { Archive, Code, Download, FileText, Music, Pencil, Share2, Trash2, Video, File, Image } from "lucide-react";
import { useState } from "react";

import ShareFileDialog from "../shareComponents/ShareFileDialog";
import RenameDialog from "./RenameDialog";
import { SharePostModel } from "@/types/SharePostModel";

const getFileIcon = (fileType: string) => {
  const iconProps = { className: "w-5 h-5" };
  const [type, subtype] = fileType.toLowerCase().split('/');

  if (type === 'image') return <Image {...iconProps} className="text-pink-500" />;
  if (fileType === 'application/pdf') return <FileText {...iconProps} className="text-red-500" />;
  if (type === 'audio') return <Music {...iconProps} className="text-blue-500" />;
  if (type === 'video') return <Video {...iconProps} className="text-emerald-500" />;
  if (['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-tar'].includes(subtype)) {
    return <Archive {...iconProps} className="text-amber-500" />;
  }
  if (['x-python', 'x-javascript', 'x-c++'].includes(subtype)) {
    return <Code {...iconProps} className="text-green-500" />;
  }

  return <File {...iconProps} className="text-gray-500" />;
};

const getFileInfo = (mimeType: string): { label: string } => {
  const map: Record<string, string> = {
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
const FileTable = ({
  files,
  onDelete,
  onRename,
  onDownload,
  onShare
}: {
  files: FileDto[],
  onDelete: (file: number) => void,
  onRename: (file: FileDto) => void,
  onDownload: (file: number) => void,
  onShare: (file: SharePostModel) => void
}) => {
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
    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {files
              .filter(file => !file.isDelete)
              .map(file => (
                <motion.tr
                  key={file.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group hover:bg-muted transition-colors"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.contentType)}
                      <span className="font-medium text-gray-900">{file.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-gray-100 text-gray-800">
                      {getFileInfo(file.contentType).label}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-500">
                    {new Date(file.updatedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <TableCell className="flex gap-2 items-center">
                      <Button variant="ghost" size="icon" onClick={() => onDownload(file.id)} title="Download">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenRename(file)}
                        title="Rename"
                      >
                        <Pencil className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenShare(file)}
                        title="Share"
                      >
                        <Share2 className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => onDelete(file.id)} title="Delete">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableCell>
                </motion.tr>
              ))}
            {!files || files.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <File className="w-12 h-12 mb-4 text-gray-300" />
                    <p className="text-lg font-medium">No files yet</p>
                    <p className="text-sm">Upload your first file to get started</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </AnimatePresence>
        </TableBody>
      </Table>

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

export default FileTable;
