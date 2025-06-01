import { FileDto } from "@/types/FileDto";
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
declare const FileRow: ({ file, index, onDownload, onRename, onShare, onDelete, isDeleting, deleteError }: FileRowProps) => import("react/jsx-runtime").JSX.Element;
export default FileRow;
