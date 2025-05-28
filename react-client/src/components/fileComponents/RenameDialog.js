import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // import { Button } from "@/styles/ui/button";
// // import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
// // import { Input } from "@/styles/ui/input";
// // import { Label } from "@/styles/ui/label";
// // import { FileDto } from "@/types/FileDto";
// // import { Pencil } from "lucide-react";
// // import { useState } from "react";
// // interface RenameDialogProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   file: FileDto;
// //   onRename: (file: FileDto) => void;
// // }const RenameDialog=({ isOpen, onClose, file, onRename }: RenameDialogProps)=> {
// //   const [newName, setNewName] = useState(file?.name || '');
// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const updatedFile = {
// //       ...file,
// //       name: newName,
// //       updatedAt: new Date().toISOString(),
// //     };    
// //     onRename(updatedFile);
// //     onClose();
// //   };
// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent className="sm:max-w-[425px]">
// //         <DialogHeader>
// //           <DialogTitle className="flex items-center gap-2">
// //             <Pencil className="w-5 h-5" />
// //             Rename File
// //           </DialogTitle>
// //           <DialogDescription>
// //             Enter a new name for your file
// //           </DialogDescription>
// //         </DialogHeader>
// //         <form onSubmit={handleSubmit}>
// //           <div className="grid gap-4 py-4">
// //             <div className="space-y-2">
// //               <Label htmlFor="name">File name</Label>
// //               <Input
// //                 id="name"
// //                 value={newName}
// //                 onChange={(e) => setNewName(e.target.value)}
// //                 placeholder="Enter new file name"
// //               />
// //             </div>
// //           </div>
// //           <DialogFooter>
// //             <Button type="button" variant="outline" onClick={onClose}>
// //               Cancel
// //             </Button>
// //             <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
// //               Rename File
// //             </Button>
// //           </DialogFooter>
// //         </form>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }
// // export default RenameDialog;
// import { Button } from "@/styles/ui/button";
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
// import { Input } from "@/styles/ui/input";
// import { Label } from "@/styles/ui/label";
// import { FileDto } from "@/types/FileDto";
// import { Pencil, FileText } from "lucide-react";
// import { useState } from "react";
// interface RenameDialogProps {
//   isOpen: boolean;
//   onClose: () => void;
//   file: FileDto;
//   onRename: (file: FileDto) => void;
// }
// const RenameDialog = ({ isOpen, onClose, file, onRename }: RenameDialogProps) => {
//   const [newName, setNewName] = useState(file?.name || '');
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!newName.trim()) return;
//     const updatedFile = {
//       ...file,
//       name: newName.trim(),
//       updatedAt: new Date().toISOString(),
//     };    
//     onRename(updatedFile);
//     onClose();
//   };
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-3 text-xl">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
//               <Pencil className="w-5 h-5 text-white" />
//             </div>
//             Rename File
//           </DialogTitle>
//           <DialogDescription className="text-gray-600">
//             Give your file a new name to better organize your content
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-3">
//             <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
//               Current file
//             </Label>
//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
//               <FileText className="w-5 h-5 text-gray-500" />
//               <span className="text-gray-700 font-medium">{file?.name}</span>
//             </div>
//           </div>
//           <div className="space-y-3">
//             <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
//               New file name
//             </Label>
//             <Input
//               id="name"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               placeholder="Enter new file name"
//               className="h-12 border-2 focus:border-blue-500 transition-colors"
//             />
//           </div>
//           <DialogFooter className="gap-3">
//             <Button 
//               type="button" 
//               variant="outline" 
//               onClick={onClose}
//               className="px-6"
//             >
//               Cancel
//             </Button>
//             <Button 
//               type="submit" 
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
//               disabled={!newName.trim() || newName === file?.name}
//             >
//               <Pencil className="w-4 h-4 mr-2" />
//               Rename File
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };
// export default RenameDialog;
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { Pencil, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
const RenameDialog = ({ isOpen, onClose, file, onRename }) => {
    const [newName, setNewName] = useState(file?.name || '');
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFile = {
            ...file,
            name: newName,
            updatedAt: new Date().toISOString(),
        };
        onRename(updatedFile);
        onClose();
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm", children: [_jsx("div", { className: "bg-gradient-to-r from-orange-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg" }), _jsxs(DialogHeader, { className: "text-center pb-6", children: [_jsxs(DialogTitle, { className: "flex items-center justify-center gap-3 text-xl", children: [_jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg", children: _jsx(Pencil, { className: "w-5 h-5 text-white" }) }), _jsx("span", { className: "bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent", children: "Rename File" })] }), _jsxs(DialogDescription, { className: "text-gray-600 mt-2", children: ["Give ", _jsxs("span", { className: "font-semibold text-orange-600", children: ["\"", file?.name, "\""] }), " a new name"] })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs(Label, { htmlFor: "name", className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4" }), "New File Name"] }), _jsx("div", { className: "relative", children: _jsx(Input, { id: "name", value: newName, onChange: (e) => setNewName(e.target.value), placeholder: "Enter new file name", className: "h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" }) }), newName && newName !== file?.name && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "p-3 bg-orange-50 rounded-lg border border-orange-200", children: _jsxs("p", { className: "text-sm text-orange-700 font-medium", children: ["Preview: ", newName] }) }))] }), _jsxs(DialogFooter, { className: "gap-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onClose, className: "flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all", children: "Cancel" }), _jsxs(Button, { type: "submit", className: "flex-1 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-200", disabled: !newName.trim() || newName === file?.name, children: [_jsx(Pencil, { className: "w-4 h-4 mr-2" }), "Rename File"] })] })] })] }) }));
};
export default RenameDialog;
