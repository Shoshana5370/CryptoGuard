import { FileText, Image, Music, Video, Archive, Code } from "lucide-react";
import { motion } from "framer-motion";
import { FileDto } from "@/types/FileDto";

interface FileStatsProps {
  files: FileDto[];
}

const FileStats = ({ files }: FileStatsProps) => {
  const activeFiles = files.filter(file => !file.isDelete);
  
  const getFileTypeCategory = (contentType: string): string => {
    const type = contentType.toLowerCase();
    if (type.startsWith('image/')) return 'image';
    if (type.startsWith('audio/')) return 'audio';
    if (type.startsWith('video/')) return 'video';
    if (type.includes('zip') || type.includes('archive') || type.includes('compressed')) return 'archive';
    if (type.includes('javascript') || type.includes('python') || type.includes('code')) return 'code';
    return 'document';
  };

  const stats = activeFiles.reduce((acc, file) => {
    const category = getFileTypeCategory(file.contentType);
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statItems = [
    { key: 'document', label: 'Documents', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
    { key: 'image', label: 'Images', icon: Image, color: 'text-rose-500', bg: 'bg-rose-50' },
    { key: 'audio', label: 'Audio', icon: Music, color: 'text-orange-500', bg: 'bg-orange-50' },
    { key: 'video', label: 'Videos', icon: Video, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { key: 'archive', label: 'Archives', icon: Archive, color: 'text-amber-500', bg: 'bg-amber-50' },
    { key: 'code', label: 'Code', icon: Code, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {statItems.map((item, index) => {
        const count = stats[item.key] || 0;
        const Icon = item.icon;
        
        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${item.bg} rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-200`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-800">{count}</p>
                <p className="text-sm text-gray-600 font-medium">{item.label}</p>
              </div>
              <Icon className={`w-6 h-6 ${item.color}`} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FileStats;
