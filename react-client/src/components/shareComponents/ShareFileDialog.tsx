import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { SharePostModel } from "@/types/SharePostModel";
import { FileDto } from "@/types/FileDto";
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { CalendarIcon, Check, Clock, Mail, Share2, Sparkles } from "lucide-react";
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

const ShareFileDialog = ({ isOpen, onClose, file, onShare }: ShareFileDialogProps) => {
  const { status } = useAppSelector((state: RootState) => state.shareFile);
  const [email, setEmail] = useState("");
  const [expiration, setExpiration] = useState<Date | null>(null);
  
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
    setExpiration(new Date());
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
      <DialogContent className="sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg"></div>
        
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="flex items-center justify-center gap-3 text-2xl">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Share File
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Share <span className="font-semibold text-emerald-600">"{file?.name}"</span> securely via email
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Recipient Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                className="pl-12 h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                placeholder="Enter recipient's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && !isValidEmail(email) && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 mt-2 flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  Please enter a valid email address
                </motion.p>
              )}
            </div>
          </div>
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              Expiration Date (Optional)
            </Label>
            <div className="bg-gray-50 rounded-xl p-4">
              <Calendar
                selected={expiration}
                onChange={setExpiration}
                className="w-full rounded-lg"
              />
              {expiration && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  <p className="text-sm text-emerald-700 flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4" />
                    File will expire on {format(expiration, "MMM d, yyyy")}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="mt-8 gap-3">
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all"
          >
            Cancel
          </Button>
          
          <Button
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
            disabled={!isValidEmail(email) || isSharing || isSuccess}
            onClick={handleShare}
          >
            {isSharing ? (
              <motion.div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                Sharing...
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                Shared Successfully!
              </motion.div>
            ) : (
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share File
              </div>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareFileDialog;

