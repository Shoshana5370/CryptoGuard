
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { uploadFileContent, resetUploadState } from "@/features/files/uploadslice";
import { RootState } from "@/store/store";
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

import { UploadCloud, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fetchFilesByUserId } from "@/features/files/filesSlice";

type UploadFileDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UploadFileDialog = ({ isOpen, onClose }: UploadFileDialogProps) => {
  const dispatch = useAppDispatch();
  const { uploading, success, error } = useAppSelector(
    (state: RootState) => state.upFiles
  );

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      dispatch(resetUploadState());
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    try {
      await dispatch(uploadFileContent({ file })).unwrap();
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const handleClose = () => {
    setFile(null);
    dispatch(resetUploadState());
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setFile(null);
      dispatch(resetUploadState());
    }
  }, [isOpen]);
  useEffect(() => {
    if (success) {
      handleClose(); 
      dispatch(fetchFilesByUserId());
    }
  }, [success, dispatch]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? null : handleClose())}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <UploadCloud className="w-5 h-5 text-emerald-600" />
            Upload File
          </DialogTitle>
          <DialogDescription>
            Select a file to upload and encrypt securely.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleUpload} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Input type="file" onChange={handleFileChange} />
            {file && (
              <p className="text-sm text-gray-600">
                Selected: <span className="font-medium">{file.name}</span>
              </p>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-500">
              Upload failed. Please try again.
            </p>
          )}

          <DialogFooter className="mt-4 gap-2">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={!file || uploading || success}
            >
              {uploading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Clock className="w-4 h-4" />
                  </motion.div>
                  Uploading...
                </>
              ) : success ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Uploaded!
                </>
              ) : (
                <>
                  <UploadCloud className="w-4 h-4 mr-2" />
                  Upload
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default UploadFileDialog;
