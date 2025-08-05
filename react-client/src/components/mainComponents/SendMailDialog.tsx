import { useToast } from "@/styles/hooks/use-toast";
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { Textarea } from "@/styles/ui/textarea";
import { motion } from "framer-motion";
import { Check, Mail, Send, Sparkles } from "lucide-react";
import { useState, FormEvent, useEffect, ChangeEvent } from "react";


type SendMailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSend: (subject: string, content: string) => Promise<void>;
  sending: boolean;
  sendError: string | null;
};

const SendMailDialog = ({
  isOpen,
  onClose,
  onSend,
  sending,
  sendError,
}: SendMailDialogProps) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!subject.trim()) {
      const message = "נושא המייל הוא שדה חובה";
      setLocalError(message);
      toast({
        title: "שגיאה",
        description: message,
        variant: "destructive",
      });
      return;
    }

    if (!content.trim()) {
      const message = "תוכן המייל הוא שדה חובה";
      setLocalError(message);
      toast({
        title: "שגיאה",
        description: message,
        variant: "destructive",
      });
      return;
    }

    setLocalError(null);
    try {
      await onSend(subject, content);
      toast({
        title: "המייל נשלח בהצלחה",
        description: `המייל עם הנושא "${subject}" נשלח בהצלחה`,
      });
      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch {
      const errorMessage = "שליחת המייל נכשלה. אנא נסה שוב.";
      setLocalError(errorMessage);
      toast({
        title: "שגיאה בשליחה",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setSubject("");
    setContent("");
    setLocalError(null);
    setSuccess(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setSubject("");
      setContent("");
      setLocalError(null);
      setSuccess(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? null : handleClose())}>
      <DialogContent className="sm:max-w-[600px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg"></div>

        <DialogHeader className="text-center pb-6">
          <DialogTitle className="flex items-center justify-center gap-3 text-2xl">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              שליחת מייל
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            כתוב את נושא המייל ותוכנו ושלח בקלות
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSend} className="space-y-6">
          <div className="space-y-3">
            <Label
              htmlFor="subject"
              className="text-sm font-semibold text-gray-700 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              נושא המייל
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="הזן את נושא המייל"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={sending || success}
              className="h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-right"
              dir="rtl"
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="content"
              className="text-sm font-semibold text-gray-700"
            >
              תוכן המייל
            </Label>
            <Textarea
              id="content"
              placeholder="כתוב כאן את תוכן המייל..."
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
              disabled={sending || success}
              className="min-h-[200px] border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-right resize-none"
              dir="rtl"
            />
            <div className="text-xs text-gray-500 text-right">
              {content.length} תווים
            </div>
          </div>

          {(localError || sendError) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 rounded-lg border border-red-200"
            >
              <p className="text-sm text-red-700 font-medium text-right">
                {localError || sendError}
              </p>
            </motion.div>
          )}

          <DialogFooter className="gap-3 flex-row-reverse">
            <Button
              type="submit"
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={!subject.trim() || !content.trim() || sending || success}
            >
              {sending ? (
                <motion.div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  שולח...
                </motion.div>
              ) : success ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  נשלח בהצלחה!
                </motion.div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  שלח מייל
                </div>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all"
            >
              ביטול
            </Button>
          </DialogFooter>
        </form>

        {subject && content && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200"
          >
            <h4 className="font-medium text-emerald-600 mb-2 text-right">תצוגה מקדימה:</h4>
            <div className="text-sm text-gray-700 space-y-2 text-right">
              <div>
                <span className="font-medium">נושא: </span>
                {subject}
              </div>
              <div>
                <span className="font-medium">תוכן: </span>
                <div className="mt-1 max-h-20 overflow-y-auto">
                  {content}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SendMailDialog;