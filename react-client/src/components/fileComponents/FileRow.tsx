import { TableCell } from "@/styles/ui/table";
import { FileDto } from "@/types/FileDto";
import { motion } from "framer-motion";
import FileIcon from "./FileIcon";
import FileActions from "./FileActions";
import FileTypeLabel from "./FileTypeLevel";
interface FileRowProps {
  file: FileDto;
  index: number;
  onDownload: (fileId: number) => void;
  onRename: (file: FileDto) => void;
  onShare: (file: FileDto) => void;
  onDelete: (fileId: number) => void;
  isDeleting: boolean;
  deleteError: string | null;
}

const FileRow = ({ file, index, onDownload, onRename, onShare, onDelete, isDeleting, deleteError }: FileRowProps) => {
  return (
    <motion.tr
      key={file.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group hover:bg-emerald-50/50 transition-all duration-200 border-b border-gray-100 last:border-b-0"
    >
      <TableCell className="py-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-200">
            <FileIcon fileType={file.contentType} />
          </div>
          <div>
            <span className="font-medium text-gray-900 text-base">{file.name}</span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <FileTypeLabel mimeType={file.contentType} />
      </TableCell>
      <TableCell className="text-gray-600 font-medium">
        {new Date(file.updatedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </TableCell>
      <TableCell>
        <FileActions
          file={file}
          onDownload={() => onDownload(file.id)}
          onRename={() => onRename(file)}
          onShare={() => onShare(file)}
          onDelete={() => onDelete(file.id)}
          isDeleting={isDeleting}
          deleteError={deleteError}
        />
      </TableCell>
    </motion.tr>
  );
};

export default FileRow;
