import {
  Image,
  FileText,
  Music,
  Video,
  Archive,
  Code,
  File,
  FileSpreadsheet,
  FileType2,
  Presentation,
} from "lucide-react";

type FileIconProps = {
  fileType: string;
  className?: string;
};

const iconMap: { [key: string]: { icon: React.ElementType; color: string } } = {
  "image": { icon: Image, color: "text-rose-500" },
  "application/pdf": { icon: FileText, color: "text-red-500" },
  "application/msword": { icon: FileType2, color: "text-blue-500" },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { icon: FileType2, color: "text-blue-500" },
  "application/vnd.ms-excel": { icon: FileSpreadsheet, color: "text-green-500" },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { icon: FileSpreadsheet, color: "text-green-500" },
  "application/vnd.ms-powerpoint": { icon: Presentation, color: "text-orange-500" },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": { icon: Presentation, color: "text-orange-500" },
  "audio": { icon: Music, color: "text-orange-500" },
  "video": { icon: Video, color: "text-emerald-500" },
  "application/zip": { icon: Archive, color: "text-amber-500" },
  "application/x-7z-compressed": { icon: Archive, color: "text-amber-500" },
  "application/x-rar-compressed": { icon: Archive, color: "text-amber-500" },
  "application/x-tar": { icon: Archive, color: "text-amber-500" },
  "text/x-python": { icon: Code, color: "text-emerald-600" },
  "application/x-python": { icon: Code, color: "text-emerald-600" },
  "application/javascript": { icon: Code, color: "text-emerald-600" },
  "text/javascript": { icon: Code, color: "text-emerald-600" },
  "text/x-c++src": { icon: Code, color: "text-emerald-600" },
};

const FileIcon = ({ fileType, className = "w-5 h-5" }: FileIconProps) => {
  const lowerType = fileType.toLowerCase();
  const [type] = lowerType.split("/");
  const match = iconMap[lowerType];
  const fallback = iconMap[type];
  const { icon: Icon, color } = match || fallback || { icon: File, color: "text-gray-500" };
  return <Icon className={`${className} ${color}`} />;
};

export default FileIcon;
