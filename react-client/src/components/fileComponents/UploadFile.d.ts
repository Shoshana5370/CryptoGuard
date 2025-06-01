type UploadFileDialogProps = {
    isOpen: boolean;
    onClose: () => void;
    onUpload: (file: File, customFileName: string) => Promise<void>;
    uploading: boolean;
    uploadError: string | null;
    progress: number;
};
declare const UploadFileDialog: ({ isOpen, onClose, onUpload, uploading, uploadError, progress, }: UploadFileDialogProps) => import("react/jsx-runtime").JSX.Element;
export default UploadFileDialog;
