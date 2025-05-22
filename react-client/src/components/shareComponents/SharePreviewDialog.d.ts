interface Props {
    open: boolean;
    onClose: () => void;
    shareCode: string;
    fileName: string;
}
declare const SharePreviewDialog: ({ open, onClose, shareCode, fileName }: Props) => import("react/jsx-runtime").JSX.Element;
export default SharePreviewDialog;
