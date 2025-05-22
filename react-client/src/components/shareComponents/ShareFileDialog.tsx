import { useState } from "react";
import {  useAppSelector } from "@/hooks";
import { SharePostModel } from "@/types/SharePostModel";
import { FileDto } from "@/types/FileDto";
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { CalendarIcon, Check, Clock, Mail, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";

import { Calendar } from "@/styles/ui/calendar"; 
import { RootState } from "@/store/store";

type ShareFileDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  file: FileDto;
  onShare: (updatedFile: SharePostModel) => void;
};
const ShareFileDialog = ({ isOpen, onClose, file , onShare }: ShareFileDialogProps) => {
  const { status } = useAppSelector((state: RootState) => state.shareFile);
  const [email, setEmail] = useState("");
  const [expiration, setExpiration] = useState<Date | undefined>(new Date());
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleShare = async () => {
    if (!email || !file?.id) return;
    const payload: SharePostModel = {
      fileKey: file.id,
      recipientEmail: email,
      expiresAt: expiration?.toISOString(),
    };
    onShare(payload);
  };

  const resetState = () => {
    setEmail("");
    setExpiration((new Date()));
    onClose();
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const isSharing = status === "loading";
  const isSuccess = status === "succeeded";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open ? null : handleClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Share2 className="w-5 h-5 text-emerald-600" />
            Share File
          </DialogTitle>
          <DialogDescription>
            Share “{file?.name}” securely via email.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Recipient Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                className="pl-10"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && !isValidEmail(email) && (
                <p className="text-sm text-red-500">Email is Invalid.</p>
              )}

            </div>
          </div>

          <div className="space-y-2">
            <Label>Expiration Date</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Calendar
                selected={expiration ?? null}
                onChange={(date) => setExpiration(date ?? undefined)}
                className="pl-10"
              />
            </div>
            {expiration && (
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Expires on {format(expiration, "MMM d, yyyy")}
              </p>
            )}
          </div>
        </div>

        <DialogFooter className="mt-4 gap-2">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            disabled={!isValidEmail(email) || isSharing || isSuccess}
            onClick={handleShare}
          >
            {isSharing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Clock className="w-4 h-4" />
                </motion.div>
                Sharing...
              </>
            ) : isSuccess ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Shared!
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareFileDialog;
