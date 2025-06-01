import { FileDto } from "@/types/FileDto";
import { SharePostModel } from "@/types/SharePostModel";
interface FileGridViewProps {
    files: FileDto[];
    onDownload: (fileId: number) => void;
    onRename: (file: FileDto) => void;
    onShare: (file: SharePostModel) => void;
    onDelete: (fileId: number) => void;
    deleteErrorById: {
        [fileId: number]: string | null;
    };
    isDeletingById: {
        [fileId: number]: boolean;
    };
    isUpdating?: boolean;
    updateError?: string | null;
}
declare const FileGridView: ({ files, onDownload, onRename, onShare, onDelete, deleteErrorById, isDeletingById, isUpdating, updateError, }: FileGridViewProps) => import("react/jsx-runtime").JSX.Element;
export default FileGridView;
