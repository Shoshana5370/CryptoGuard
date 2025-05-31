import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { Label } from "@/styles/ui/label";
import { UploadCloud, Check, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/styles/hooks/use-toast";

type UploadFileDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File, customFileName: string) => Promise<void>;
  uploading: boolean;
  uploadError: string | null;
  progress: number;
};

const UploadFileDialog = ({
  isOpen,
  onClose,
  onUpload,
  uploading,
  uploadError,
  progress,
}: UploadFileDialogProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [customFileName, setCustomFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const MAX_FILE_SIZE = 100 * 1024 * 1024;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setLocalError(null);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      setFile(e.dataTransfer.files[0]);
      setLocalError(null);
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      const message = "File size exceeds 100MB limit.";
      setLocalError(message);
      toast({
        title: "File too large",
        description: message,
        variant: "destructive",
      });
      return;
    }

    setLocalError(null);
    try {
      await onUpload(file, customFileName);
      toast({
        title: "Upload successful",
        description: `${file.name} was uploaded and encrypted.`,
      });
      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch {
      const errorMessage = "Upload failed. Please try again.";
      setLocalError(errorMessage);
      toast({
        title: "Upload failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setFile(null);
    setCustomFileName("");
    setLocalError(null);
    setSuccess(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setFile(null);
      setCustomFileName("");
      setLocalError(null);
      setSuccess(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? null : handleClose())}>
      <DialogContent className="sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg"></div>

        <DialogHeader className="text-center pb-6">
          <DialogTitle className="flex items-center justify-center gap-3 text-2xl">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
              <UploadCloud className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Upload File
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Select a file to upload and encrypt securely in the cloud
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleUpload} className="space-y-6">
          <div className="space-y-3">
            <Label
              htmlFor="fileName"
              className="text-sm font-semibold text-gray-700 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Custom File Name (Optional)
            </Label>
            <Input
              id="fileName"
              type="text"
              placeholder="Enter custom file name"
              value={customFileName}
              onChange={(e) => setCustomFileName(e.target.value)}
              disabled={uploading || success}
              className="h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-700">
              Choose File
            </Label>

            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${dragActive
                  ? "border-emerald-500 bg-emerald-50"
                  : file
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-gray-300 hover:border-emerald-400 hover:bg-emerald-50/50"
                }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={uploading || success}
              />

              {file ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-3"
                >
                  <div className="p-3 rounded-full bg-emerald-100 w-fit mx-auto">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    {customFileName && (
                      <p className="text-sm text-emerald-600 mt-1 font-medium">
                        → Will be saved as: {customFileName}
                      </p>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3 rounded-full bg-gray-100 w-fit mx-auto">
                    <UploadCloud className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Drop files here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Supports all file types up to 100MB
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {(localError || uploadError) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 rounded-lg border border-red-200"
            >
              <p className="text-sm text-red-700 font-medium">
                {localError || uploadError}
              </p>
            </motion.div>
          )}

          <DialogFooter className="gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={!file || uploading || success}
            >
              {uploading ? (
                <motion.div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  Uploading...
                </motion.div>
              ) : success ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Uploaded Successfully!
                </motion.div>
              ) : (
                <div className="flex items-center gap-2">
                  <UploadCloud className="w-4 h-4" />
                  Upload File
                </div>
              )}
            </Button>
          </DialogFooter>
        </form>

        {file && uploading && (
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
            <p className="text-xs text-gray-500 mt-1 text-center">{progress}%</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileDialog;
