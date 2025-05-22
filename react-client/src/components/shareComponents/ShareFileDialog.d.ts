import { SharePostModel } from "@/types/SharePostModel";
import { FileDto } from "@/types/FileDto";
type ShareFileDialogProps = {
    isOpen: boolean;
    onClose: () => void;
    file: FileDto;
    onShare: (updatedFile: SharePostModel) => void;
};
declare const ShareFileDialog: ({ isOpen, onClose, file, onShare }: ShareFileDialogProps) => import("react/jsx-runtime").JSX.Element;
export default ShareFileDialog;
