
import { Button } from "@/styles/ui/button";
import { Download, Pencil, Share2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { FileDto } from "@/types/FileDto";
import { useEffect } from "react";
import { useToast } from "@/styles/hooks/use-toast";
interface FileActionsProps {
  file: FileDto;
  onDownload: (fileId: number) => void;
  onRename: (file: FileDto) => void;
  onShare: (file: FileDto) => void;
  onDelete: (fileId: number) => void;
  isDeleting: boolean;
  deleteError: string | null;
}

const FileActions = ({ file, onDownload, onRename, onShare, onDelete, isDeleting, deleteError }: FileActionsProps) => {
  const { toast } = useToast();
  useEffect(() => {
    if (deleteError) {
      toast({
        title: "Delete Failed",
        description: `Failed to delete "${file.name}"`,
        variant: "destructive",
      });
    }
  }, [deleteError, file.name, toast]);
  return (
    <div className="flex gap-1 justify-center">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(file.id)}
          disabled={isDeleting}
          className="h-9 w-9 rounded-xl hover:bg-red-100 hover:text-red-600 transition-all duration-200 relative"
          title="Delete"
        >
          {isDeleting ? (
            <div className="w-4 h-4 border-2 border-t-transparent border-red-500 rounded-full animate-spin" />
          ) : (
            <Trash2 className="w-4 h-4" />
          )}
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRename(file)}
          className="h-9 w-9 rounded-xl hover:bg-orange-100 hover:text-orange-600 transition-all duration-200"
          title="Rename"
        >
          <Pencil className="w-4 h-4" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onShare(file)}
          className="h-9 w-9 rounded-xl hover:bg-rose-100 hover:text-rose-600 transition-all duration-200"
          title="Share"
        >
          <Share2 className="w-4 h-4" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDownload(file.id)}
          className="h-9 w-9 rounded-xl hover:bg-red-100 hover:text-red-600 transition-all duration-200"
          title="Download"
        >
          <Download className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>

  );
};

export default FileActions;