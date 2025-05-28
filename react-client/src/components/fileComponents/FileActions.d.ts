import { FileDto } from "@/types/FileDto";
interface FileActionsProps {
    file: FileDto;
    onDownload: (fileId: number) => void;
    onRename: (file: FileDto) => void;
    onShare: (file: FileDto) => void;
    onDelete: (fileId: number) => void;
}
declare const FileActions: ({ file, onDownload, onRename, onShare, onDelete }: FileActionsProps) => import("react/jsx-runtime").JSX.Element;
export default FileActions;
