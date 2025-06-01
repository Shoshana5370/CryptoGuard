interface RenameDialogProps {
    isOpen: boolean;
    onClose: () => void;
    file: {
        name: string;
        [key: string]: any;
    } | null;
    onRename: (updatedFile: any) => void;
    updateError?: string | null;
    isUpdating?: boolean;
}
declare const RenameDialog: ({ isOpen, onClose, file, onRename, updateError, isUpdating, }: RenameDialogProps) => import("react/jsx-runtime").JSX.Element;
export default RenameDialog;
