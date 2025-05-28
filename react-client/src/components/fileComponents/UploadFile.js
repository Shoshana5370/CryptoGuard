import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState, ChangeEvent, FormEvent, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { uploadFileContent, resetUploadState } from "@/features/files/uploadslice";
// import { RootState } from "@/store/store";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/styles/ui/dialog";
// import { Input } from "@/styles/ui/input";
// import { Button } from "@/styles/ui/button";
// import { UploadCloud, Clock, Check, Shield, Zap, FileText } from "lucide-react";
// import { motion } from "framer-motion";
// import { fetchFilesByUserId } from "@/features/files/filesSlice";
// import { Label } from "@/styles/ui/label";
// import { Progress } from "@/styles/ui/progress";
// type UploadFileDialogProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };
// const UploadFileDialog = ({ isOpen, onClose }: UploadFileDialogProps) => {
//   const dispatch = useAppDispatch();
//   const { uploading, success, error } = useAppSelector(
//     (state: RootState) => state.upFiles
//   );
//   const getFileSize = (bytes: number) => {
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     if (bytes === 0) return '0 Bytes';
//     const i = Math.floor(Math.log(bytes) / Math.log(1024));
//     return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
//   };
//     const [uploadProgress, setUploadProgress] = useState(0);
//   const [file, setFile] = useState<File | null>(null);
//   const [customFileName, setCustomFileName] = useState<string>("");
//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//       dispatch(resetUploadState());
//     }
//   };
//   const handleUpload = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!file) return;
//     try {
//       setUploadProgress(0);
//       const progressInterval = setInterval(() => {
//         setUploadProgress(prev => {
//           if (prev >= 90) {
//             clearInterval(progressInterval);
//             return 90;
//           }
//           return prev + Math.random() * 20;
//         });
//       }, 200);
//       await dispatch(uploadFileContent({ file, fileName: customFileName.trim() || file.name })).unwrap();
//       await dispatch(fetchFilesByUserId());
//       setUploadProgress(100);
//     } catch (err) {
//       setFile(null);
//       setCustomFileName("");
//       setUploadProgress(0);
//     } 
//   };
//   const handleClose = () => {
//     setFile(null);
//     setCustomFileName("");
//     dispatch(resetUploadState());
//     onClose();
//   };
//   useEffect(() => {
//     if (!isOpen) {
//       setFile(null);
//       dispatch(resetUploadState());
//     }
//   }, [isOpen]);
//   useEffect(() => {
//     if (success) {
//       handleClose();
//     }
//   }, [success, dispatch]);
//  return (
//     <Dialog open={isOpen} onOpenChange={(open: boolean) => (open ? null : handleClose())}>
//       <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-3 text-2xl">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
//               <UploadCloud className="w-6 h-6 text-white" />
//             </div>
//             Upload File
//           </DialogTitle>
//           <DialogDescription className="text-gray-600 text-lg">
//             Securely upload and encrypt your files with military-grade protection.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleUpload} className="space-y-6 pt-4">
//           {/* Security Features */}
//           <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
//             <div className="text-center">
//               <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//               <div className="text-sm font-semibold text-gray-800">256-bit AES</div>
//               <div className="text-xs text-gray-600">Encryption</div>
//             </div>
//             <div className="text-center">
//               <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
//               <div className="text-sm font-semibold text-gray-800">Instant</div>
//               <div className="text-xs text-gray-600">Processing</div>
//             </div>
//             <div className="text-center">
//               <FileText className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
//               <div className="text-sm font-semibold text-gray-800">Zero Access</div>
//               <div className="text-xs text-gray-600">Privacy</div>
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="filename" className="text-sm font-semibold text-gray-700">
//                 Custom file name (optional)
//               </Label>
//               <Input
//                 id="filename"
//                 type="text"
//                 placeholder="Enter custom file name"
//                 value={customFileName}
//                 onChange={(e) => setCustomFileName(e.target.value)}
//                 disabled={uploading || success}
//                 className="h-12 border-2 focus:border-blue-500 transition-colors"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="file" className="text-sm font-semibold text-gray-700">
//                 Select file
//               </Label>
//               <div className="relative">
//                 <Input 
//                   id="file"
//                   type="file" 
//                   onChange={handleFileChange}
//                   disabled={uploading || success}
//                   className="h-12 border-2 border-dashed border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors cursor-pointer"
//                 />
//               </div>
//             </div>
//             {file && (
//               <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="p-4 bg-gray-50 rounded-xl border"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="font-semibold text-gray-800">
//                       {customFileName || file.name}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {getFileSize(file.size)} • {file.type || 'Unknown type'}
//                     </p>
//                     {customFileName && customFileName !== file.name && (
//                       <p className="text-xs text-blue-600 mt-1">
//                         Original: {file.name}
//                       </p>
//                     )}
//                   </div>
//                   <FileText className="w-8 h-8 text-gray-400" />
//                 </div>
//                 {(uploading || uploadProgress > 0) && (
//                   <div className="mt-4 space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Upload Progress</span>
//                       <span className="font-semibold text-blue-600">{Math.round(uploadProgress)}%</span>
//                     </div>
//                     <Progress value={uploadProgress} className="h-2" />
//                   </div>
//                 )}
//               </motion.div>
//             )}
//           </div>
//           {error && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="p-4 bg-red-50 border border-red-200 rounded-xl"
//             >
//               <p className="text-red-800 font-medium">Upload failed</p>
//               <p className="text-red-600 text-sm">Please check your file and try again.</p>
//             </motion.div>
//           )}
//           <DialogFooter className="gap-3">
//             <Button 
//               variant="outline" 
//               onClick={handleClose}
//               disabled={uploading}
//               className="px-6"
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
//               disabled={!file || uploading || success}
//             >
//               {uploading ? (
//                 <>
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="mr-2"
//                   >
//                     <Clock className="w-4 h-4" />
//                   </motion.div>
//                   Encrypting & Uploading...
//                 </>
//               ) : success ? (
//                 <>
//                   <Check className="w-4 h-4 mr-2" />
//                   Successfully Uploaded!
//                 </>
//               ) : (
//                 <>
//                   <UploadCloud className="w-4 h-4 mr-2" />
//                   Upload & Encrypt
//                 </>
//               )}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
//   // return (
//   //   <Dialog open={isOpen} onOpenChange={(open) => (open ? null : handleClose())}>
//   //     <DialogContent className="sm:max-w-[500px]">
//   //       <DialogHeader>
//   //         <DialogTitle className="flex items-center gap-2 text-xl">
//   //           <UploadCloud className="w-5 h-5 text-emerald-600" />
//   //           Upload File
//   //         </DialogTitle>
//   //         <DialogDescription>
//   //           Select a file to upload and encrypt securely.
//   //         </DialogDescription>
//   //       </DialogHeader>
//   //       <form onSubmit={handleUpload} className="space-y-6 pt-4">
//   //         <div className="space-y-2">
//   //           <Input
//   //             type="text"
//   //             placeholder="Enter file name"
//   //             value={customFileName}
//   //             onChange={(e) => setCustomFileName(e.target.value)}
//   //             disabled={uploading || success}
//   //           />
//   //           <Input type="file" onChange={handleFileChange} />
//   //           {file && (
//   //             <p className="text-sm text-gray-600">
//   //               Selected: <span className="font-medium">{file.name}</span>
//   //               {customFileName && (
//   //                 <> → <span className="text-emerald-600 font-medium">{customFileName}</span></>
//   //               )}
//   //             </p>
//   //           )}
//   //         </div>
//   //         {error && (
//   //           <p className="text-sm text-red-500">
//   //             Upload failed. Please try again.
//   //           </p>
//   //         )}
//   //         <DialogFooter className="mt-4 gap-2">
//   //           <Button variant="outline" onClick={handleClose}>
//   //             Cancel
//   //           </Button>
//   //           <Button
//   //             type="submit"
//   //             className="bg-emerald-600 hover:bg-emerald-700"
//   //             disabled={!file || uploading || success}
//   //           >
//   //             {uploading ? (
//   //               <>
//   //                 <motion.div
//   //                   animate={{ rotate: 360 }}
//   //                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//   //                   className="mr-2"
//   //                 >
//   //                   <Clock className="w-4 h-4" />
//   //                 </motion.div>
//   //                 Uploading...
//   //               </>
//   //             ) : success ? (
//   //               <>
//   //                 <Check className="w-4 h-4 mr-2" />
//   //                 Uploaded!
//   //               </>
//   //             ) : (
//   //               <>
//   //                 <UploadCloud className="w-4 h-4 mr-2" />
//   //                 Upload
//   //               </>
//   //             )}
//   //           </Button>
//   //         </DialogFooter>
//   //       </form>
//   //     </DialogContent>
//   //   </Dialog>
//   // );
// };
// export default UploadFileDialog;
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { uploadFileContent, resetUploadState } from "@/features/files/uploadslice";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { Label } from "@/styles/ui/label";
import { UploadCloud, Check, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fetchFilesByUserId } from "@/features/files/filesSlice";
const UploadFileDialog = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
    const { uploading, success, error } = useAppSelector((state) => state.upFiles);
    const [file, setFile] = useState(null);
    const [customFileName, setCustomFileName] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            dispatch(resetUploadState());
        }
    };
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        }
        else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            dispatch(resetUploadState());
        }
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file)
            return;
        try {
            await dispatch(uploadFileContent({ file, fileName: customFileName.trim() || file.name })).unwrap();
            await dispatch(fetchFilesByUserId());
        }
        catch (err) {
            setFile(null);
            setCustomFileName("");
            dispatch(resetUploadState());
        }
    };
    const handleClose = () => {
        setFile(null);
        setCustomFileName("");
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
        }
    }, [success, dispatch]);
    return (_jsx(Dialog, { open: isOpen, onOpenChange: (open) => (open ? null : handleClose()), children: _jsxs(DialogContent, { className: "sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg" }), _jsxs(DialogHeader, { className: "text-center pb-6", children: [_jsxs(DialogTitle, { className: "flex items-center justify-center gap-3 text-2xl", children: [_jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg", children: _jsx(UploadCloud, { className: "w-6 h-6 text-white" }) }), _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent", children: "Upload File" })] }), _jsx(DialogDescription, { className: "text-gray-600 mt-2", children: "Select a file to upload and encrypt securely in the cloud" })] }), _jsxs("form", { onSubmit: handleUpload, className: "space-y-6", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs(Label, { htmlFor: "fileName", className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4" }), "Custom File Name (Optional)"] }), _jsx(Input, { id: "fileName", type: "text", placeholder: "Enter custom file name", value: customFileName, onChange: (e) => setCustomFileName(e.target.value), disabled: uploading || success, className: "h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" })] }), _jsxs("div", { className: "space-y-3", children: [_jsx(Label, { className: "text-sm font-semibold text-gray-700", children: "Choose File" }), _jsxs("div", { className: `relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${dragActive
                                        ? 'border-emerald-500 bg-emerald-50'
                                        : file
                                            ? 'border-emerald-300 bg-emerald-50'
                                            : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-50/50'}`, onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, children: [_jsx("input", { type: "file", onChange: handleFileChange, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer", disabled: uploading || success }), file ? (_jsxs(motion.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "space-y-3", children: [_jsx("div", { className: "p-3 rounded-full bg-emerald-100 w-fit mx-auto", children: _jsx(FileText, { className: "w-6 h-6 text-emerald-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: file.name }), _jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [(file.size / 1024 / 1024).toFixed(2), " MB"] }), customFileName && (_jsxs("p", { className: "text-sm text-emerald-600 mt-1 font-medium", children: ["\u2192 Will be saved as: ", customFileName] }))] })] })) : (_jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "p-3 rounded-full bg-gray-100 w-fit mx-auto", children: _jsx(UploadCloud, { className: "w-6 h-6 text-gray-400" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: "Drop files here or click to browse" }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports all file types up to 100MB" })] })] }))] })] }), error && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "p-3 bg-red-50 rounded-lg border border-red-200", children: _jsx("p", { className: "text-sm text-red-700 font-medium", children: "Upload failed. Please try again." }) })), _jsxs(DialogFooter, { className: "gap-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: handleClose, className: "flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all", children: "Cancel" }), _jsx(Button, { type: "submit", className: "flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200", disabled: !file || uploading || success, children: uploading ? (_jsxs(motion.div, { className: "flex items-center gap-2", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, children: _jsx(Sparkles, { className: "w-4 h-4" }) }), "Uploading..."] })) : success ? (_jsxs(motion.div, { initial: { scale: 0.8 }, animate: { scale: 1 }, className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-4 h-4" }), "Uploaded Successfully!"] })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(UploadCloud, { className: "w-4 h-4" }), "Upload File"] })) })] })] })] }) }));
};
export default UploadFileDialog;
