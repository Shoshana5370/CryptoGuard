// // // ////////////////////this is my component

// // import { accessSharedFile } from "@/features/shares/accessSlice";
// // import { useAppDispatch, useAppSelector } from "@/hooks";
// // import { useState } from "react";
// // // import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/styles/ui/card"; // Adjust the import path as needed
// // import { Input } from "@/styles/ui/input";
// // import { AlertTriangle, CheckCircle, Download, Link } from "lucide-react";
// // import { Alert, AlertDescription } from "@/styles/ui/alert";
// // import { Button } from "@/styles/ui/button";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/styles/ui/card";









// // // // src/components/AccessSharedFile.tsx
// // // import React, { useState, useEffect } from 'react';
// // // import { useAppDispatch, useAppSelector } from '../../hooks'; // Adjust according to your setup
// // // import { accessSharedFile, clearAccess } from '../../features/shares/accessSlice'; // Adjust according to your setup
// // // // import { Button, Input } from '@/components/ui'; // Update imports to match your design system

// // // const AccessSharedFile: React.FC = () => {
// // //   const dispatch = useAppDispatch();
// // //   const [code, setCode] = useState('');

// // //   const { fileBlob, status, error } = useAppSelector((state) => state.access);

// // //   const handleSubmit = () => {
// // //     if (!code) return;
// // //     dispatch(accessSharedFile(code));
// // //   };

// // //   useEffect(() => {
// // //     if (fileBlob) {
// // //       const url = window.URL.createObjectURL(fileBlob);
// // //       const link = document.createElement('a');
// // //       link.href = url;
// // //       link.setAttribute('download', 'shared-file');
// // //       document.body.appendChild(link);
// // //       link.click();
// // //       link.parentNode?.removeChild(link);
// // //       window.URL.revokeObjectURL(url);
// // //     }
// // //   }, [fileBlob]);

// // //   const handleClear = () => {
// // //     dispatch(clearAccess());
// // //     setCode('');
// // //   };

// // //   return (
// // //     <div className="p-4 max-w-md mx-auto">
// // //       <h2 className="text-xl font-semibold mb-4">Access Shared File</h2>
// // //       <input
// // //         value={code}
// // //         onChange={(e) => setCode(e.target.value)}
// // //         placeholder="Enter access code"
// // //         className="mb-4"
// // //       />
// // //       <div className="flex gap-2">
// // //         <button onClick={handleSubmit} disabled={status === 'loading' || !code}>
// // //           {status === 'loading' ? 'Downloading...' : 'Download'}
// // //         </button>
// // //         <button  onClick={handleClear}>
// // //           Clear
// // //         </button>
// // //       </div>
// // //       {status === 'failed' && (
// // //         <p className="text-red-500 mt-2">
// // //           {typeof error === 'string' ? error : 'Failed to access the file.'}
// // //         </p>
// // //       )}
// // //       {status === 'succeeded' && (
// // //         <p className="text-green-500 mt-2">File downloaded successfully.</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AccessSharedFile;














// // /**
// //  * Component to access files that have been shared with a code
// //  */
// // export default function AccessSharedFile() {
// //   const [shareCode, setShareCode] = useState('');
// //   const dispatch = useAppDispatch();
// //   // const {  loading, error, success } = useAppSelector((state) => state.access);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (shareCode.trim()) {
// //       dispatch(accessSharedFile(shareCode.trim()));
// //     }
// //   };

// //   const handleReset = () => {
// //     setShareCode('');
// //     // dispatch(clearAccess());
// //   };
  
// //   // const getFileIcon = (type) => {
// //   //   if (!type) return <File className="h-8 w-8 text-gray-400" />;
    
// //   //   const iconProps = { className: "h-8 w-8" };
// //   //   switch(type.toLowerCase()) {
// //   //     case 'image':
// //   //       return <Image {...iconProps} className="text-purple-500" />;
// //   //     case 'pdf':
// //   //       return <FileText {...iconProps} className="text-red-500" />;
// //   //     default:
// //   //       return <File {...iconProps} className="text-gray-400" />;
// //   //   }
// //   // };

// //   return (
// //     <div className="max-w-md mx-auto">
// //       <Card className="shadow-lg border border-gray-200">
// //         <CardHeader>
// //           <CardTitle className="flex items-center gap-2 text-xl">
// //             {/* <Lock className="h-5 w-5 text-emerald-600" /> */}
// //             Access Shared File
// //           </CardTitle>
// //         </CardHeader>
        
// //         <CardContent>
// //           {  (
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <div className="space-y-2">
// //                 <div className="relative">
// //                   <Link className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //                   <Input
// //                     placeholder="Enter share code"
// //                     value={shareCode}
// //                     onChange={(e) => setShareCode(e.target.value)}
// //                     className="pl-10"
// //                     // disabled={loading}
// //                   />
// //                 </div>
// //                 <p className="text-sm text-gray-500">
// //                   Enter the share code you received to access the file
// //                 </p>
// //               </div>

// //               {/* {error &&  */}
// //               (
// //                 <Alert variant="destructive">
// //                   <AlertTriangle className="h-4 w-4" />
// //                   <AlertDescription>
// //                     {/* {typeof error === 'string' ? error : 'Invalid share code or expired link'} */}
// //                   </AlertDescription>
// //                 </Alert>
// //               )
// //               {/* } */}

// //               <Button 
// //                 type="submit" 
// //                 className="w-full bg-emerald-600 hover:bg-emerald-700"
// //                 // disabled={loading || !shareCode.trim()}
// //               >
// //                 {/* {loading ? (
// //                   <>
// //                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// //                     Accessing...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Eye className="mr-2 h-4 w-4" />
// //                     Access File
// //                   </> */}
                
// //               </Button>
// //             </form>
// //           )}

// //           <AnimatePresence>
// //             {/* {success && accessedFile &&  */}
// //             (
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -20 }}
// //                 className="pt-4"
// //               >
// //                 <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg flex items-center mb-4">
// //                   <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
// //                   <p className="text-sm">File access granted successfully!</p>
// //                 </div>
                
// //                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
// //                   <div className="flex items-center space-x-4">
// //                     {/* {getFileIcon(accessedFile.type)} */}
// //                     <div className="flex-1 min-w-0">
// //                       <p className="text-lg font-medium text-gray-900 truncate">
// //                         {/* {accessedFile.name} */}
// //                       </p>
// //                       <p className="text-sm text-gray-500">
// //                         {/* {(accessedFile.size / 1024 / 1024).toFixed(2)} MB · {accessedFile.type} */}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             )
// //             {/* } */}
// //           </AnimatePresence>
// //         </CardContent>

// //         <CardFooter className="flex justify-between">
// //           {/* {success && accessedFile ?  */}
// //           (
// //             <>
// //               <Button 
// //                 variant="outline" 
// //                 onClick={handleReset}
// //               >
// //                 Access Another File
// //               </Button>
// //               <Button
// //                 className="bg-emerald-600 hover:bg-emerald-700"
// //                 // onClick={() => window.open(accessedFile.url, '_blank')}
// //               >
// //                 <Download className="mr-2 h-4 w-4" />
// //                 Download
// //               </Button>
// //             </>
// //           ) : (
// //             <p className="text-sm text-gray-500 w-full text-center">
// //               Files are accessible for a limited time only
// //             </p>
// //           )
// //           {/* } */}
// //         </CardFooter>
// //       </Card>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { accessSharedFile, clearAccess } from "@/features/shares/accessSlice";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/styles/ui/card";
// import { Input } from "@/styles/ui/input";
// import { Alert, AlertDescription } from "@/styles/ui/alert";
// import { Button } from "@/styles/ui/button";
// import { AlertTriangle, CheckCircle, Download, Link } from "lucide-react";

// export default function AccessSharedFile() {
//   const [shareCode, setShareCode] = useState("");
//   const dispatch = useAppDispatch();

//   const { fileBlob, status, error } = useAppSelector((state) => state.access);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (shareCode.trim()) {
//       dispatch(accessSharedFile(shareCode.trim()));
//     }
//   };

//   const handleReset = () => {
//     setShareCode("");
//     dispatch(clearAccess());
//   };

//   useEffect(() => {
//     if (fileBlob) {
//       const url = window.URL.createObjectURL(fileBlob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "shared-file");
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);
//     }
//   }, [fileBlob]);

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2 text-xl">
//             Access Shared File
//           </CardTitle>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="relative">
//               <Link className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//               <Input
//                 placeholder="Enter share code"
//                 value={shareCode}
//                 onChange={(e) => setShareCode(e.target.value)}
//                 className="pl-10"
//                 disabled={status === "loading"}
//               />
//             </div>
//             {status === "failed" && (
//               <Alert variant="destructive">
//                 <AlertTriangle className="h-4 w-4" />
//                 <AlertDescription>
//                   {typeof error === "string" ? error : "Invalid or expired code"}
//                 </AlertDescription>
//               </Alert>
//             )}
//             {status === "succeeded" && (
//               <div className="flex items-center text-emerald-700 gap-2 text-sm">
//                 <CheckCircle className="h-5 w-5" />
//                 File downloaded successfully.
//               </div>
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-emerald-600 hover:bg-emerald-700"
//               disabled={status === "loading" || !shareCode.trim()}
//             >
//               {status === "loading" ? "Accessing..." : "Access File"}
//             </Button>
//           </form>
//         </CardContent>

//         <CardFooter className="flex justify-between">
//           {status === "succeeded" ? (
//             <Button variant="outline" onClick={handleReset}>
//               Access Another File
//             </Button>
//           ) : (
//             <p className="text-sm text-gray-500 w-full text-center">
//               Files are accessible for a limited time only
//             </p>
//           )}
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { accessSharedFile, clearAccess } from "@/features/shares/accessSlice";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/styles/ui/card";
import { Input } from "@/styles/ui/input";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { AlertTriangle, CheckCircle, Download, Link, Eye } from "lucide-react";

export default function AccessSharedFile() {
  const [shareCode, setShareCode] = useState("");
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("shared-file");

  const dispatch = useAppDispatch();
  const { fileBlob, status, error } = useAppSelector((state) => state.access);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (shareCode.trim()) {
      dispatch(accessSharedFile(shareCode.trim()));
    }
  };

  const handleReset = () => {
    setShareCode("");
    dispatch(clearAccess());
    setFileUrl(null);
    setFileType(null);
  };

  const handleDownload = () => {
    if (fileBlob && fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  useEffect(() => {
    if (fileBlob) {
      const url = window.URL.createObjectURL(fileBlob);
      setFileUrl(url);

      const inferredType = fileBlob.type;
      setFileType(inferredType);

      // Optional: Guess filename from Blob if response includes `name`
      // For now just fallback to default
    }
  }, [fileBlob]);

  const isPreviewable = (type: string | null) => {
    if (!type) return false;
    return type.startsWith("image/") || type === "application/pdf";
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            Access Shared File
          </CardTitle>
        </CardHeader>

        <CardContent>
          {!fileUrl && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Link className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Enter share code"
                  value={shareCode}
                  onChange={(e) => setShareCode(e.target.value)}
                  className="pl-10"
                  disabled={status === "loading"}
                />
              </div>
              {status === "failed" && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    {typeof error === "string" ? error : "Invalid or expired code"}
                  </AlertDescription>
                </Alert>
              )}
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                disabled={status === "loading" || !shareCode.trim()}
              >
                {status === "loading" ? "Accessing..." : "Access File"}
              </Button>
            </form>
          )}

          {fileUrl && fileType && (
            <>
              <div className="flex items-center text-emerald-700 gap-2 mt-4">
                <CheckCircle className="h-5 w-5" />
                File ready!
              </div>

              {isPreviewable(fileType) ? (
                <div className="mt-4 space-y-2">
                  {fileType.startsWith("image/") ? (
                    <img src={fileUrl} alt="Preview" className="max-w-full rounded border" />
                  ) : (
                    <iframe
                      src={fileUrl}
                      className="w-full h-64 border rounded"
                      title="PDF Preview"
                    ></iframe>
                  )}
                  <Button onClick={handleDownload} className="w-full bg-emerald-600">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-gray-600 mb-2">This file type can’t be previewed.</p>
                  <Button onClick={handleDownload} className="w-full bg-emerald-600">
                    <Download className="mr-2 h-4 w-4" />
                    Download File
                  </Button>
                </div>
              )}
            </>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          {fileUrl ? (
            <Button variant="outline" onClick={handleReset}>
              Access Another File
            </Button>
          ) : (
            <p className="text-sm text-gray-500 w-full text-center">
              Files are accessible for a limited time only
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
