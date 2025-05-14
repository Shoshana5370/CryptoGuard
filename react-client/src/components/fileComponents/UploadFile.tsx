// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { RootState } from '../../store/store';
// import { uploadFileContent, resetUploadState } from '../../features/files/uploadslice';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// const UploadFile: React.FC = () => {
//     const [file, setFile] = useState<File | null>(null);
//     const dispatch = useAppDispatch();
//     const { uploading, success, error, uploadedFile } = useAppSelector((state: RootState) => state.upFiles);
//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setFile(e.target.files[0]);
//             dispatch(resetUploadState());
//         }
//     };
//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         if (!file) return;

//         try {
//             // Upload file + userId in a single request
//             await dispatch(uploadFileContent({ file })).unwrap();
//         } catch (err) {
//             console.error('Upload error:', err);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-md mx-auto">
//             <h2 className="text-xl font-bold mb-4">Upload Encrypted File</h2>
//             <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="block mb-4"
//                 disabled={uploading}
//             />
//             <button
//                 type="submit"
//                 disabled={uploading || !file}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
//             >
//                 {uploading ? 'Uploading...' : 'Upload'}
//             </button>
//             {error && <p className="mt-4 text-red-500">{error && (
//                 <div>
//                     {typeof error === 'string'
//                         ? error
//                         : JSON.stringify(error, null, 2)}
//                 </div>
//             )}</p>}
//             {success && uploadedFile && (
//                 <p className="mt-4 text-green-600">Uploaded: {uploadedFile.name}</p>
//             )}
//         </form>
//     );
// };

// export default UploadFile;
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

type UploadFileDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UploadFileDialog = ({ isOpen, onClose }: UploadFileDialogProps) => {
  const dispatch = useAppDispatch();
  const { uploading, success, error ,uploadedFile} = useAppSelector(
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
