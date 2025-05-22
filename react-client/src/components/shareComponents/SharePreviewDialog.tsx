import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/styles/ui/dialog";
  import AccessSharedFile from "./AccessSharedFile";
  
  interface Props {
    open: boolean;
    onClose: () => void;
    shareCode: string;
    fileName: string;
  }
  
  const SharePreviewDialog = ({ open, onClose, shareCode, fileName }: Props) => {
    return (
      <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Access Shared File</DialogTitle>
          </DialogHeader>
          {shareCode && <AccessSharedFile code={shareCode} fileName={fileName} />}
        </DialogContent>
      </Dialog>
    );
  };
  
  export default SharePreviewDialog;
  