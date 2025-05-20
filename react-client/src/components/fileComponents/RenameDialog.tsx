import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { FileDto } from "@/types/FileDto";
import { Pencil } from "lucide-react";
import { useState } from "react";

interface RenameDialogProps {
  isOpen: boolean;
  onClose: () => void;
  file: FileDto;
  onRename: (file: FileDto) => void;
}const RenameDialog=({ isOpen, onClose, file, onRename }: RenameDialogProps)=> {
  const [newName, setNewName] = useState(file?.name || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedFile = {
      ...file,
      name: newName,
      updatedAt: new Date().toISOString(),
    };    
    onRename(updatedFile);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Pencil className="w-5 h-5" />
            Rename File
          </DialogTitle>
          <DialogDescription>
            Enter a new name for your file
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">File name</Label>
              <Input
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new file name"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Rename File
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default RenameDialog;




