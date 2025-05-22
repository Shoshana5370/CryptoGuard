import { FileDto } from "@/types/FileDto";
import { SharePostModel } from "@/types/SharePostModel";
declare const FileTable: ({ files, onDelete, onRename, onDownload, onShare }: {
    files: FileDto[];
    onDelete: (file: number) => void;
    onRename: (file: FileDto) => void;
    onDownload: (file: number) => void;
    onShare: (file: SharePostModel) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default FileTable;
