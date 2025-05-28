
import { Archive, Code, File, FileText, Image, Music, Video } from "lucide-react";

interface FileIconProps {
  fileType: string;
  className?: string;
}

const FileIcon = ({ fileType, className = "w-5 h-5" }: FileIconProps) => {
  const [type, subtype] = fileType.toLowerCase().split('/');

  if (type === 'image') return <Image className={`${className} text-rose-500`} />;
  if (fileType === 'application/pdf') return <FileText className={`${className} text-red-500`} />;
  if (type === 'audio') return <Music className={`${className} text-orange-500`} />;
  if (type === 'video') return <Video className={`${className} text-emerald-500`} />;
  if (['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-tar'].includes(subtype)) {
    return <Archive className={`${className} text-amber-500`} />;
  }
  if (['x-python', 'x-javascript', 'x-c++'].includes(subtype)) {
    return <Code className={`${className} text-emerald-600`} />;
  }

  return <File className={`${className} text-gray-500`} />;
};

export default FileIcon;