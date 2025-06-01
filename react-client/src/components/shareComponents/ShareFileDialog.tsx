import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { Label } from "@/styles/ui/label";
import { Calendar as CalendarIcon, Mail } from "lucide-react";
import { FileDto } from "@/types/FileDto";
import { SharePostModel } from "@/types/SharePostModel";
type ShareFileDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  file: FileDto;
  onShare: (updatedFile: SharePostModel) => void;
};
const ShareFileDialog = ({ isOpen, onClose, file, onShare }: ShareFileDialogProps) => {
  const [email, setEmail] = useState("");
  const [expiration, setExpiration] = useState<Date | null>(null);
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleShare = async () => {
    if (!email || !file?.id) return;
    const payload: SharePostModel = {
      fileKey: file.id,
      recipientEmail: email,
      expiresAt: expiration ? expiration.toISOString() : undefined,
    };
    onShare(payload);
  };

  const resetState = () => {
    setEmail("");
    setExpiration(null);
    onClose();
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open ? null : handleClose()}>
      <DialogContent className="sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg"></div>
        <DialogHeader className="text-center pb-6">
          <h2 className="text-xl font-bold">Share File</h2>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="recipient-email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Recipient Email
            </Label>
            <Input
              id="recipient-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter recipient's email"
              className="w-full rounded-lg h-12 border-gray-200"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              Expiration Date (Optional)
            </Label>
            <Input
              type="date"
              value={expiration ? expiration.toISOString().split('T')[0] : ""}
              onChange={e => setExpiration(e.target.value ? new Date(e.target.value) : null)}
              className="w-full rounded-lg h-12 border-gray-200"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="ghost" onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleShare}
            disabled={!isValidEmail(email)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Share
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareFileDialog;