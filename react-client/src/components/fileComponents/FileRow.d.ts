import { FileDto } from "@/types/FileDto";
interface FileRowProps {
    file: FileDto;
    index: number;
    onDownload: (fileId: number) => void;
    onRename: (file: FileDto) => void;
    onShare: (file: FileDto) => void;
    onDelete: (fileId: number) => void;
}
declare const FileRow: ({ file, index, onDownload, onRename, onShare, onDelete }: FileRowProps) => import("react/jsx-runtime").JSX.Element;
export default FileRow;
