

import { FileDto } from '../../types/FileDto';
import { SharePostModel } from '../../types/SharePostModel';

interface FileTableProps {
    files: FileDto[];
    onDownload: (fileId: number) => void;
    onRename: (file: FileDto) => void;
    onShare: (shareModel: SharePostModel) => void;
    onDelete: (fileId: number) => void;
}
declare const FileTable: ({}: FileTableProps) => import("react/jsx-runtime").JSX.Element;
export default FileTable;
