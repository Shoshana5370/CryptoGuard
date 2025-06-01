import { FileDto } from "@/types/FileDto";
import { SharePostModel } from "@/types/SharePostModel";
declare const FileTable: ({ files, onDelete, onRename, onDownload, onShare, deleteErrorById, isDeletingById, isUpdating, updateError, }: {
    files: FileDto[];
    onDelete: (file: number) => void;
    onRename: (file: FileDto) => void;
    onDownload: (file: number) => void;
    onShare: (file: SharePostModel) => void;
    deleteErrorById?: {
        [fileId: number]: string | null;
    };
    isDeletingById?: {
        [fileId: number]: boolean;
    };
    isUpdating: boolean;
    updateError: string | null;
}) => import("react/jsx-runtime").JSX.Element;
export default FileTable;
