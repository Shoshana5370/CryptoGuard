// export function RenameDialog({ isOpen, onClose, file, onRename }) {
//   const [newName, setNewName] = useState(file?.name || '');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onRename(file, newName);
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Pencil className="w-5 h-5" />
//             Rename File
//           </DialogTitle>
//           <DialogDescription>
//             Enter a new name for your file
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-4 py-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">File name</Label>
//               <Input
//                 id="name"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//                 placeholder="Enter new file name"
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit">
//               Rename File
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// // You can add more dialogs here for sharing, deletion confirmation, etc
// 
// .

