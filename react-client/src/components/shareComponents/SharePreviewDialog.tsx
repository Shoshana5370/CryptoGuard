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
      <DialogContent className="max-w-2xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-emerald-500 to-orange-500 h-1 -mt-6 mx-6 rounded-t-lg"></div>
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Access Shared File
          </DialogTitle>
        </DialogHeader>
        {shareCode && <AccessSharedFile code={shareCode} fileName={fileName} />}
      </DialogContent>
    </Dialog>
  );
};

export default SharePreviewDialog;
