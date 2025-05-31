import { TableHeader, TableRow, TableHead, TableBody, Table } from "@/styles/ui/table";
import { FileDto } from "@/types/FileDto";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import RenameDialog from "./RenameDialog";
import { SharePostModel } from "@/types/SharePostModel";
import EmptyFileState from "./EmptyFileState";
import ShareFileDialog from "../shareComponents/ShareFileDialog";
import FileRow from "./FileRow";

const FileTable = ({
  files,
  onDelete,
  onRename,
  onDownload,
  onShare,
  deleteErrorById,
  isDeletingById,
  isUpdating,
  updateError,
}: {
  files: FileDto[],
  onDelete: (file: number) => void,
  onRename: (file: FileDto) => void,
  onDownload: (file: number) => void,
  onShare: (file: SharePostModel) => void,
  deleteErrorById?: { [fileId: number]: string | null },
  isDeletingById?: { [fileId: number]: boolean },
  isUpdating: boolean,
  updateError: string | null,
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

  const activeFiles = files.filter(file => !file.isDelete);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-orange-500 h-1"></div>

      {activeFiles.length === 0 ? (
        <EmptyFileState />
      ) : (
        <div className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/80 border-b border-gray-200">
                <TableHead className="font-semibold text-gray-700 py-4">File Name</TableHead>
                <TableHead className="font-semibold text-gray-700">Type</TableHead>
                <TableHead className="font-semibold text-gray-700">Date Modified</TableHead>
                <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <AnimatePresence mode="popLayout">
                {activeFiles.map((file, index) => (
                  <FileRow
                    key={file.id}
                    file={file}
                    index={index}
                    onDownload={onDownload}
                    onRename={handleOpenRename}
                    onShare={handleOpenShare}
                    onDelete={onDelete}
                    isDeleting={isDeletingById?.[file.id] ?? false}
                    deleteError={deleteErrorById?.[file.id] ?? null}
                  />
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      )}

      {selectedFile && (
        <RenameDialog
          isOpen={isRenameOpen}
          onClose={handleCloseRename}
          file={selectedFile}
          onRename={handleDialogRename}
          isUpdating={isUpdating}
          updateError={updateError}
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
