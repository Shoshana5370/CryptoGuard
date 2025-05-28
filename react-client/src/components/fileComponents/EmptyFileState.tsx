
import { File } from "lucide-react";
import { motion } from "framer-motion";

const EmptyFileState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16"
    >
      <div className="p-6 rounded-full bg-emerald-100 w-fit mx-auto mb-6">
        <File className="h-12 w-12 text-emerald-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">No files yet</h3>
      <p className="text-gray-500 max-w-md mx-auto">
        Upload your first file to get started with secure file management
      </p>
    </motion.div>
  );
};

export default EmptyFileState;