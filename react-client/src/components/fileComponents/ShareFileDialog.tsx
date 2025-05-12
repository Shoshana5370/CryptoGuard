import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/styles/ui/tabs";
import { motion } from "framer-motion";
import { Check, Clock, Copy, Mail, Share2, ShieldCheck } from "lucide-react";
import { useState } from "react";
const ShareFileDialog = ({ isOpen, onClose, file }:{ isOpen: boolean, onClose: () => void, file: number}) => {
  const [shareOption, setShareOption] = useState("email");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  
  const handleShareViaEmail = () => {
    if (!email) return;   
    setIsSharing(true);
  };

  const resetDialog = () => {
    setEmail("");
    setCopied(false);
    setShareSuccess(false);
    setShareOption("email");
  };

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={(open:boolean) => {
        if (!open) resetDialog();
        onClose();
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Share2 className="w-5 h-5 text-emerald-600" />
            Share File
          </DialogTitle>
          <DialogDescription>
            {file ? `Share "${file}" with others` : 'Share this file securely with others'}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={shareOption} onValueChange={(value) => setShareOption(value)} className="mt-2">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="link">Generate Link</TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="pt-4 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Recipient Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* <div className="space-y-2">
                <Label htmlFor="expiration">Expires After</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  <Select value={expiration} onValueChange={(value) => setExpiration(value)}>
                    <SelectTrigger id="expiration" className="pl-10">
                      <SelectValue placeholder="Select expiration period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1day">1 Day</SelectItem>
                      <SelectItem value="7days">7 Days</SelectItem>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="never">No Expiration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {expiration !== "never" && (
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Expires on {format(getExpirationDate(), "MMM d, yyyy")}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-amber-50 text-amber-800 rounded-lg p-3 text-sm flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                Recipients will need a password to decrypt the file. Make sure to share the password separately.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="link" className="pt-4 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="share-link">Secure Share Link</Label>
                <div className="flex">
                  <Input
                    id="share-link"
                    readOnly
                    value={shareUrl}
                    className="rounded-r-none"
                  />
                  <Button
                    className={copied ? "bg-green-600" : "bg-emerald-600 hover:bg-emerald-700"}
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Anyone with this link can access this file.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="link-expiration">Link Expires After</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  <Select value={expiration} onValueChange={(value) => setExpiration(value)}>
                    <SelectTrigger id="link-expiration" className="pl-10">
                      <SelectValue placeholder="Select expiration period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1day">1 Day</SelectItem>
                      <SelectItem value="7days">7 Days</SelectItem>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="never">No Expiration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {expiration !== "never" && (
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Link expires on {format(getExpirationDate(), "MMM d, yyyy")}
                  </p>
                )}
              </div> */}
            </div>

            <div className="bg-amber-50 text-amber-800 rounded-lg p-3 text-sm flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                Recipients will need a password to decrypt the file. Make sure to share the password separately.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-4 gap-2">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          {shareOption === "email" ? (
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleShareViaEmail}
              disabled={!email || isSharing || shareSuccess}
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
              ) : shareSuccess ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Shared!
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share via Email
                </>
              )}
            </Button>
          ) : (
            <Button
              className={copied ? "bg-green-600" : "bg-emerald-600 hover:bg-emerald-700"}
            //   onClick={handleCopyLink}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </>
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareFileDialog;