import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // // import { Button } from "@/styles/ui/button";
// // // import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/styles/ui/table";
// // // import { FileDto } from "@/types/FileDto";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { Archive, Code, Download, FileText, Music, Pencil, Share2, Trash2, Video, File, Image } from "lucide-react";
// // // import { useState } from "react";
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/styles/ui/table";
// // import RenameDialog from "./RenameDialog";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/styles/ui/dropdown-menu";
// // import { Archive, Badge, Code, Download, FileText, MoreHorizontal, Music, Pencil, Share2, Trash2, Video, File as FileIcon, Image as ImageIcon } from "lucide-react";
// // import { Button } from "@/styles/ui/button";
// // import { FileDto } from "@/types/FileDto";
// // import { SharePostModel } from "@/types/SharePostModel";
// // import { useState } from "react";
// // // import ShareFileDialog from "../shareComponents/ShareFileDialog";
// // // import RenameDialog from "./RenameDialog";
// // // import { SharePostModel } from "@/types/SharePostModel";
// // // const getFileIcon = (fileType: string) => {
// // //   const iconProps = { className: "w-5 h-5" };
// // //   const [type, subtype] = fileType.toLowerCase().split('/');
// // //   if (type === 'image') return <Image {...iconProps} className="text-pink-500" />;
// // //   if (fileType === 'application/pdf') return <FileText {...iconProps} className="text-red-500" />;
// // //   if (type === 'audio') return <Music {...iconProps} className="text-blue-500" />;
// // //   if (type === 'video') return <Video {...iconProps} className="text-emerald-500" />;
// // //   if (['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-tar'].includes(subtype)) {
// // //     return <Archive {...iconProps} className="text-amber-500" />;
// // //   }
// // //   if (['x-python', 'x-javascript', 'x-c++'].includes(subtype)) {
// // //     return <Code {...iconProps} className="text-green-500" />;
// // //   }
// // //   return <File {...iconProps} className="text-gray-500" />;
// // // };
// // // const getFileInfo = (mimeType: string): { label: string } => {
// // //   const map: Record<string, string> = {
// // //     'application/pdf': 'PDF Document',
// // //     'application/msword': 'Word Document',
// // //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
// // //     'application/vnd.ms-excel': 'Excel Spreadsheet',
// // //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Spreadsheet',
// // //     'image/jpeg': 'JPEG Image',
// // //     'image/png': 'PNG Image',
// // //     'video/mp4': 'MP4 Video',
// // //     'audio/mpeg': 'MP3 Audio',
// // //   };
// // //   return { label: map[mimeType] || mimeType.split('/')[1]?.toUpperCase() || 'Unknown' };
// // // };
// // // const FileTable = ({
// // //   files,
// // //   onDelete,
// // //   onRename,
// // //   onDownload,
// // //   onShare
// // // }: {
// // //   files: FileDto[],
// // //   onDelete: (file: number) => void,
// // //   onRename: (file: FileDto) => void,
// // //   onDownload: (file: number) => void,
// // //   onShare: (file: SharePostModel) => void
// // // }) => {
// // //   const [isRenameOpen, setIsRenameOpen] = useState(false);
// // //   const [isShareOpen, setIsShareOpen] = useState(false);
// // //   const [selectedFile, setSelectedFile] = useState<FileDto | null>(null);
// // //   const [selectedFileShare, setSelectedFileShare] = useState<FileDto | null>(null);
// // //   const handleOpenShare = (file: FileDto) => {
// // //     setSelectedFileShare(file);
// // //     setIsShareOpen(true);
// // //   };
// // //   const handleCloseShare = () => {
// // //     setIsShareOpen(false);
// // //     setSelectedFileShare(null);
// // //   };
// // //   const handleDialogShare = (updatedFile: SharePostModel) => {
// // //     onShare(updatedFile); 
// // //     handleCloseShare();   
// // //   };
// // //   const handleOpenRename = (file: FileDto) => {
// // //     setSelectedFile(file);
// // //     setIsRenameOpen(true);
// // //   };
// // //   const handleCloseRename = () => {
// // //     setSelectedFile(null);
// // //     setIsRenameOpen(false);
// // //   };
// // //   const handleDialogRename = (updatedFile: FileDto) => {
// // //     onRename(updatedFile); 
// // //     handleCloseRename();  
// // //   };
// // //   return (
// // //     <div className="bg-white rounded-xl shadow-lg border border-gray-100">
// // //       <Table>
// // //         <TableHeader>
// // //           <TableRow className="bg-gray-50/50">
// // //             <TableHead>Name</TableHead>
// // //             <TableHead>Type</TableHead>
// // //             <TableHead>Date</TableHead>
// // //             <TableHead className="w-[100px]">Actions</TableHead>
// // //           </TableRow>
// // //         </TableHeader>
// // //         <TableBody>
// // //           <AnimatePresence>
// // //             {files
// // //               .filter(file => !file.isDelete)
// // //               .map(file => (
// // //                 <motion.tr
// // //                   key={file.id}
// // //                   initial={{ opacity: 0, y: 5 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   exit={{ opacity: 0, y: -5 }}
// // //                   transition={{ duration: 0.2 }}
// // //                   className="group hover:bg-muted transition-colors"
// // //                 >
// // //                   <TableCell>
// // //                     <div className="flex items-center gap-3">
// // //                       {getFileIcon(file.contentType)}
// // //                       <span className="font-medium text-gray-900">{file.name}</span>
// // //                     </div>
// // //                   </TableCell>
// // //                   <TableCell>
// // //                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-gray-100 text-gray-800">
// // //                       {getFileInfo(file.contentType).label}
// // //                     </span>
// // //                   </TableCell>
// // //                   <TableCell className="text-gray-500">
// // //                     {new Date(file.updatedAt).toLocaleDateString()}
// // //                   </TableCell>
// // //                   <TableCell>
// // //                     <TableCell className="flex gap-2 items-center">
// // //                       <Button variant="ghost" size="icon" onClick={() => onDownload(file.id)} title="Download">
// // //                         <Download className="w-4 h-4 text-muted-foreground" />
// // //                       </Button>
// // //                       <Button
// // //                         variant="ghost"
// // //                         size="icon"
// // //                         onClick={() => handleOpenRename(file)}
// // //                         title="Rename"
// // //                       >
// // //                         <Pencil className="w-4 h-4 text-muted-foreground" />
// // //                       </Button>
// // //                       <Button
// // //                         variant="ghost"
// // //                         size="icon"
// // //                         onClick={() => handleOpenShare(file)}
// // //                         title="Share"
// // //                       >
// // //                         <Share2 className="w-4 h-4 text-muted-foreground" />
// // //                       </Button>
// // //                       <Button variant="ghost" size="icon" onClick={() => onDelete(file.id)} title="Delete">
// // //                         <Trash2 className="w-4 h-4 text-red-500" />
// // //                       </Button>
// // //                     </TableCell>
// // //                   </TableCell>
// // //                 </motion.tr>
// // //               ))}
// // //             {!files || files.length === 0 && (
// // //               <TableRow>
// // //                 <TableCell colSpan={5} className="text-center py-8">
// // //                   <div className="flex flex-col items-center justify-center text-gray-500">
// // //                     <File className="w-12 h-12 mb-4 text-gray-300" />
// // //                     <p className="text-lg font-medium">No files yet</p>
// // //                     <p className="text-sm">Upload your first file to get started</p>
// // //                   </div>
// // //                 </TableCell>
// // //               </TableRow>
// // //             )}
// // //           </AnimatePresence>
// // //         </TableBody>
// // //       </Table>
// // //       {selectedFile && (
// // //         <RenameDialog
// // //           isOpen={isRenameOpen}
// // //           onClose={handleCloseRename}
// // //           file={selectedFile}
// // //           onRename={handleDialogRename}
// // //         />
// // //       )}
// // //       {selectedFileShare && (
// // //         <ShareFileDialog
// // //           isOpen={isShareOpen}
// // //           onClose={handleCloseShare}
// // //           file={selectedFileShare}
// // //           onShare={handleDialogShare}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };
// // // export default FileTable;
// // const ShareFileDialog = ({ isOpen, onClose, file, onShare }: any) => (
// //   <div style={{ display: isOpen ? 'block' : 'none' }}>
// //     <p>Share dialog for {file?.name}</p>
// //     <button onClick={() => { onShare({ fileId: file?.id, email: 'test@example.com', permission: 'read' }); onClose(); }}>
// //       Share
// //     </button>
// //     <button onClick={onClose}>Close</button>
// //   </div>
// // );
// // const getFileIcon = (fileType: string) => {
// //   const iconProps = { className: "w-5 h-5" };
// //   const [type, subtype] = fileType.toLowerCase().split('/');
// //   if (type === 'image') return <ImageIcon {...iconProps} className="text-pink-500" />;
// //   if (fileType === 'application/pdf') return <FileText {...iconProps} className="text-red-500" />;
// //   if (type === 'audio') return <Music {...iconProps} className="text-blue-500" />;
// //   if (type === 'video') return <Video {...iconProps} className="text-emerald-500" />;
// //   if (['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-tar'].includes(subtype)) {
// //     return <Archive {...iconProps} className="text-amber-500" />;
// //   }
// //   if (['x-python', 'x-javascript', 'x-c++'].includes(subtype)) {
// //     return <Code {...iconProps} className="text-green-500" />;
// //   }
// //   return <FileIcon {...iconProps} className="text-gray-500" />;
// // };
// // const getFileInfo = (mimeType: string): { label: string, color: string } => {
// //   const map: Record<string, { label: string, color: string }> = {
// //     'application/pdf': { label: 'PDF', color: 'bg-red-100 text-red-800' },
// //     'application/msword': { label: 'DOC', color: 'bg-blue-100 text-blue-800' },
// //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { label: 'DOCX', color: 'bg-blue-100 text-blue-800' },
// //     'application/vnd.ms-excel': { label: 'XLS', color: 'bg-green-100 text-green-800' },
// //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': { label: 'XLSX', color: 'bg-green-100 text-green-800' },
// //     'image/jpeg': { label: 'JPEG', color: 'bg-pink-100 text-pink-800' },
// //     'image/png': { label: 'PNG', color: 'bg-pink-100 text-pink-800' },
// //     'video/mp4': { label: 'MP4', color: 'bg-purple-100 text-purple-800' },
// //     'audio/mpeg': { label: 'MP3', color: 'bg-orange-100 text-orange-800' },
// //   };
// //   return map[mimeType] || { 
// //     label: mimeType.split('/')[1]?.toUpperCase() || 'FILE', 
// //     color: 'bg-gray-100 text-gray-800' 
// //   };
// // };
// // const FileTable = ({
// //   files,
// //   onDelete,
// //   onRename,
// //   onDownload,
// //   onShare
// // }: {
// //   files: FileDto[],
// //   onDelete: (file: number) => void,
// //   onRename: (file: FileDto) => void,
// //   onDownload: (file: number) => void,
// //   onShare: (file: SharePostModel) => void
// // }) => {
// //   const [isRenameOpen, setIsRenameOpen] = useState(false);
// //   const [isShareOpen, setIsShareOpen] = useState(false);
// //   const [selectedFile, setSelectedFile] = useState<FileDto | null>(null);
// //   const [selectedFileShare, setSelectedFileShare] = useState<FileDto | null>(null);
// //   const handleOpenShare = (file: FileDto) => {
// //     setSelectedFileShare(file);
// //     setIsShareOpen(true);
// //   };
// //   const handleCloseShare = () => {
// //     setIsShareOpen(false);
// //     setSelectedFileShare(null);
// //   };
// //   const handleDialogShare = (updatedFile: SharePostModel) => {
// //     onShare(updatedFile); 
// //     handleCloseShare();   
// //   };
// //   const handleOpenRename = (file: FileDto) => {
// //     setSelectedFile(file);
// //     setIsRenameOpen(true);
// //   };
// //   const handleCloseRename = () => {
// //     setSelectedFile(null);
// //     setIsRenameOpen(false);
// //   };
// //   const handleDialogRename = (updatedFile: FileDto) => {
// //     onRename(updatedFile); 
// //     handleCloseRename();  
// //   };
// //   const activeFiles = files?.filter(file => !file.isDelete) || [];
// //   return (
// //     <div className="overflow-hidden">
// //       {activeFiles.length === 0 ? (
// //         <div className="text-center py-16">
// //           <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
// //             <FileIcon className="w-12 h-12 text-gray-400" />
// //           </div>
// //           <h3 className="text-2xl font-bold text-gray-800 mb-2">No files yet</h3>
// //           <p className="text-gray-600 mb-6">Upload your first file to get started with secure storage</p>
// //           <div className="flex justify-center">
// //             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
// //               <FileText className="w-4 h-4 mr-2" />
// //               Upload your first file
// //             </Button>
// //           </div>
// //         </div>
// //       ) : (
// //         <Table>
// //           <TableHeader>
// //             <TableRow className="bg-gradient-to-r from-gray-50 to-blue-50 border-b">
// //               <TableHead className="font-semibold text-gray-700">File Details</TableHead>
// //               <TableHead className="font-semibold text-gray-700">Type</TableHead>
// //               <TableHead className="font-semibold text-gray-700">Last Modified</TableHead>
// //               <TableHead className="font-semibold text-gray-700 w-[120px]">Actions</TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody>
// //             <AnimatePresence>
// //               {activeFiles.map((file, index) => (
// //                 <motion.tr
// //                   key={file.id}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -20 }}
// //                   transition={{ duration: 0.3, delay: index * 0.05 }}
// //                   className="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 border-b border-gray-100"
// //                 >
// //                   <TableCell>
// //                     <div className="flex items-center gap-4">
// //                       <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
// //                         {getFileIcon(file.contentType)}
// //                       </div>
// //                       <div>
// //                         <div className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
// //                           {file.name}
// //                         </div>
// //                         <div className="text-sm text-gray-500">
// //                           {(Math.random() * 10).toFixed(1)} MB • Encrypted
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </TableCell>
// //                   <TableCell>
// //                     <Badge className={`${getFileInfo(file.contentType).color} border-0 font-medium`}>
// //                       {getFileInfo(file.contentType).label}
// //                     </Badge>
// //                   </TableCell>
// //                   <TableCell className="text-gray-600">
// //                     <div className="font-medium">
// //                       {new Date(file.updatedAt).toLocaleDateString('en-US', { 
// //                         month: 'short', 
// //                         day: 'numeric',
// //                         year: 'numeric'
// //                       })}
// //                     </div>
// //                     <div className="text-sm text-gray-500">
// //                       {new Date(file.updatedAt).toLocaleTimeString('en-US', { 
// //                         hour: '2-digit', 
// //                         minute: '2-digit'
// //                       })}
// //                     </div>
// //                   </TableCell>
// //                   <TableCell>
// //                     <div className="flex items-center gap-1">
// //                       <Button 
// //                         variant="ghost" 
// //                         size="icon" 
// //                         onClick={() => onDownload(file.id)} 
// //                         className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-100 hover:text-blue-600"
// //                         title="Download"
// //                       >
// //                         <Download className="w-4 h-4" />
// //                       </Button>
// //                       <DropdownMenu>
// //                         <DropdownMenuTrigger asChild>
// //                           <Button 
// //                             variant="ghost" 
// //                             size="icon"
// //                             className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
// //                           >
// //                             <MoreHorizontal className="w-4 h-4" />
// //                           </Button>
// //                         </DropdownMenuTrigger>
// //                         <DropdownMenuContent align="end" className="w-48 bg-white">
// //                           <DropdownMenuItem onClick={() => handleOpenRename(file)}>
// //                             <Pencil className="w-4 h-4 mr-2" />
// //                             Rename
// //                           </DropdownMenuItem>
// //                           <DropdownMenuItem onClick={() => handleOpenShare(file)}>
// //                             <Share2 className="w-4 h-4 mr-2" />
// //                             Share
// //                           </DropdownMenuItem>
// //                           <DropdownMenuItem 
// //                             onClick={() => onDelete(file.id)}
// //                             className="text-red-600 focus:text-red-600"
// //                           >
// //                             <Trash2 className="w-4 h-4 mr-2" />
// //                             Delete
// //                           </DropdownMenuItem>
// //                         </DropdownMenuContent>
// //                       </DropdownMenu>
// //                     </div>
// //                   </TableCell>
// //                 </motion.tr>
// //               ))}
// //             </AnimatePresence>
// //           </TableBody>
// //         </Table>
// //       )}
// //       {selectedFile && (
// //         <RenameDialog
// //           isOpen={isRenameOpen}
// //           onClose={handleCloseRename}
// //           file={selectedFile}
// //           onRename={handleDialogRename}
// //         />
// //       )}
// //       {selectedFileShare && (
// //         <ShareFileDialog
// //           isOpen={isShareOpen}
// //           onClose={handleCloseShare}
// //           file={selectedFileShare}
// //           onShare={handleDialogShare}
// //         />
// //       )}
// //     </div>
// //   );
// // };
// // export default FileTable;
// import { Button } from "@/styles/ui/button";
// import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/styles/ui/table";
// import { FileDto } from "@/types/FileDto";
// import { AnimatePresence, motion } from "framer-motion";
// import { Archive, Code, Download, FileText, Music, Pencil, Share2, Trash2, Video, File, Image } from "lucide-react";
// import { useState } from "react";
// import ShareFileDialog from "../shareComponents/ShareFileDialog";
// import RenameDialog from "./RenameDialog";
// import { SharePostModel } from "@/types/SharePostModel";
// const getFileIcon = (fileType: string) => {
//   const iconProps = { className: "w-5 h-5" };
//   const [type, subtype] = fileType.toLowerCase().split('/');
//   if (type === 'image') return <Image {...iconProps} className="w-5 h-5 text-pink-500" />;
//   if (fileType === 'application/pdf') return <FileText {...iconProps} className="w-5 h-5 text-red-500" />;
//   if (type === 'audio') return <Music {...iconProps} className="w-5 h-5 text-orange-500" />;
//   if (type === 'video') return <Video {...iconProps} className="w-5 h-5 text-emerald-500" />;
//   if (['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-tar'].includes(subtype)) {
//     return <Archive {...iconProps} className="w-5 h-5 text-amber-500" />;
//   }
//   if (['x-python', 'x-javascript', 'x-c++'].includes(subtype)) {
//     return <Code {...iconProps} className="w-5 h-5 text-emerald-600" />;
//   }
//   return <File {...iconProps} className="w-5 h-5 text-gray-500" />;
// };
// const getFileInfo = (mimeType: string): { label: string } => {
//   const map: Record<string, string> = {
//     'application/pdf': 'PDF Document',
//     'application/msword': 'Word Document',
//     'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
//     'application/vnd.ms-excel': 'Excel Spreadsheet',
//     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Spreadsheet',
//     'image/jpeg': 'JPEG Image',
//     'image/png': 'PNG Image',
//     'video/mp4': 'MP4 Video',
//     'audio/mpeg': 'MP3 Audio',
//   };
//   return { label: map[mimeType] || mimeType.split('/')[1]?.toUpperCase() || 'Unknown' };
// };
// const FileTable = ({
//   files,
//   onDelete,
//   onRename,
//   onDownload,
//   onShare
// }: {
//   files: FileDto[],
//   onDelete: (file: number) => void,
//   onRename: (file: FileDto) => void,
//   onDownload: (file: number) => void,
//   onShare: (file: SharePostModel) => void
// }) => {
//   const [isRenameOpen, setIsRenameOpen] = useState(false);
//   const [isShareOpen, setIsShareOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<FileDto | null>(null);
//   const [selectedFileShare, setSelectedFileShare] = useState<FileDto | null>(null);
//   const handleOpenShare = (file: FileDto) => {
//     setSelectedFileShare(file);
//     setIsShareOpen(true);
//   };
//   const handleCloseShare = () => {
//     setIsShareOpen(false);
//     setSelectedFileShare(null);
//   };
//   const handleDialogShare = (updatedFile: SharePostModel) => {
//     onShare(updatedFile);
//     handleCloseShare();
//   };
//   const handleOpenRename = (file: FileDto) => {
//     setSelectedFile(file);
//     setIsRenameOpen(true);
//   };
//   const handleCloseRename = () => {
//     setSelectedFile(null);
//     setIsRenameOpen(false);
//   };
//   const handleDialogRename = (updatedFile: FileDto) => {
//     onRename(updatedFile);
//     handleCloseRename();
//   };
//   const activeFiles = files.filter(file => !file.isDelete);
//   return (
//     <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 overflow-hidden">
//       <div className="bg-gradient-to-r from-emerald-500 to-orange-500 h-1"></div>
//       {activeFiles.length === 0 ? (
//         <EmptyFileState />
//       ) : (
//         <div className="overflow-hidden">
//           <Table>
//             <TableHeader>
//               <TableRow className="bg-gray-50/80 border-b border-gray-200">
//                 <TableHead className="font-semibold text-gray-700 py-4">File Name</TableHead>
//                 <TableHead className="font-semibold text-gray-700">Type</TableHead>
//                 <TableHead className="font-semibold text-gray-700">Date Modified</TableHead>
//                 <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <AnimatePresence mode="popLayout">
//                 {activeFiles.map((file, index) => (
//                   <FileRow
//                     key={file.id}
//                     file={file}
//                     index={index}
//                     onDownload={onDownload}
//                     onRename={handleOpenRename}
//                     onShare={handleOpenShare}
//                     onDelete={onDelete}
//                   />
//                 ))}
//               </AnimatePresence>
//             </TableBody>
//           </Table>
//         </div>
//       )}
//       {selectedFile && (
//         <RenameDialog
//           isOpen={isRenameOpen}
//           onClose={handleCloseRename}
//           file={selectedFile}
//           onRename={handleDialogRename}
//         />
//       )}
//       {selectedFileShare && (
//         <ShareFileDialog
//           isOpen={isShareOpen}
//           onClose={handleCloseShare}
//           file={selectedFileShare}
//           onShare={handleDialogShare}
//         />
//       )}
//     </div>
//   );
// };
// export default FileTable;
import { TableHeader, TableRow, TableHead, TableBody, Table } from "@/styles/ui/table";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import RenameDialog from "./RenameDialog";
import EmptyFileState from "./EmptyFileState";
import FileRow from "./FileRow";
import ShareFileDialog from "../shareComponents/ShareFileDialog";
const FileTable = ({ files, onDelete, onRename, onDownload, onShare }) => {
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileShare, setSelectedFileShare] = useState(null);
    const handleOpenShare = (file) => {
        setSelectedFileShare(file);
        setIsShareOpen(true);
    };
    const handleCloseShare = () => {
        setIsShareOpen(false);
        setSelectedFileShare(null);
    };
    const handleDialogShare = (updatedFile) => {
        onShare(updatedFile);
        handleCloseShare();
    };
    const handleOpenRename = (file) => {
        setSelectedFile(file);
        setIsRenameOpen(true);
    };
    const handleCloseRename = () => {
        setSelectedFile(null);
        setIsRenameOpen(false);
    };
    const handleDialogRename = (updatedFile) => {
        onRename(updatedFile);
        handleCloseRename();
    };
    const activeFiles = files.filter(file => !file.isDelete);
    return (_jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 overflow-hidden", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-orange-500 h-1" }), activeFiles.length === 0 ? (_jsx(EmptyFileState, {})) : (_jsx("div", { className: "overflow-hidden", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { className: "bg-gray-50/80 border-b border-gray-200", children: [_jsx(TableHead, { className: "font-semibold text-gray-700 py-4", children: "File Name" }), _jsx(TableHead, { className: "font-semibold text-gray-700", children: "Type" }), _jsx(TableHead, { className: "font-semibold text-gray-700", children: "Date Modified" }), _jsx(TableHead, { className: "font-semibold text-gray-700 text-center", children: "Actions" })] }) }), _jsx(TableBody, { children: _jsx(AnimatePresence, { mode: "popLayout", children: activeFiles.map((file, index) => (_jsx(FileRow, { file: file, index: index, onDownload: onDownload, onRename: handleOpenRename, onShare: handleOpenShare, onDelete: onDelete }, file.id))) }) })] }) })), selectedFile && (_jsx(RenameDialog, { isOpen: isRenameOpen, onClose: handleCloseRename, file: selectedFile, onRename: handleDialogRename })), selectedFileShare && (_jsx(ShareFileDialog, { isOpen: isShareOpen, onClose: handleCloseShare, file: selectedFileShare, onShare: handleDialogShare }))] }));
};
export default FileTable;
