import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const FileTable = ({}) => {
    return (_jsxs("div", { className: "bg-white rounded-xl p-6", children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Files Table View" }), _jsx("p", { className: "text-gray-500", children: "Table view for files will be displayed here" })] }));
};
export default FileTable;
