import { FileDto } from "@/types/FileDto";
interface RenameDialogProps {
    isOpen: boolean;
    onClose: () => void;
    file: FileDto;
    onRename: (file: FileDto) => void;
}
declare const RenameDialog: ({ isOpen, onClose, file, onRename }: RenameDialogProps) => import("react/jsx-runtime").JSX.Element;
export default RenameDialog;
