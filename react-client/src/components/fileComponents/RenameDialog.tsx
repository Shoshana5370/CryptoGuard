import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { FileDto } from "@/types/FileDto";
import { Pencil, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface RenameDialogProps {
  isOpen: boolean;
  onClose: () => void;
  file: FileDto;
  onRename: (file: FileDto) => void;
}

const RenameDialog = ({ isOpen, onClose, file, onRename }: RenameDialogProps) => {
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
      <DialogContent className="sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg"></div>
        
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="flex items-center justify-center gap-3 text-xl">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <Pencil className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Rename File
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Give <span className="font-semibold text-orange-600">"{file?.name}"</span> a new name
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              New File Name
            </Label>
            <div className="relative">
              <Input
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new file name"
                className="h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>
            {newName && newName !== file?.name && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 bg-orange-50 rounded-lg border border-orange-200"
              >
                <p className="text-sm text-orange-700 font-medium">
                  Preview: {newName}
                </p>
              </motion.div>
            )}
          </div>

          <DialogFooter className="gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all"
            >
              Cancel
            </Button>
            
            <Button 
              type="submit" 
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={!newName.trim() || newName === file?.name}
            >
              <Pencil className="w-4 h-4 mr-2" />
              Rename File
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameDialog;
