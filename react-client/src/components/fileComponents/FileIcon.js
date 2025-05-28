import { jsx as _jsx } from "react/jsx-runtime";
import { Archive, Code, File, FileText, Image, Music, Video } from "lucide-react";
const FileIcon = ({ fileType, className = "w-5 h-5" }) => {
    const [type, subtype] = fileType.toLowerCase().split('/');
    if (type === 'image')
        return _jsx(Image, { className: `${className} text-rose-500` });
    if (fileType === 'application/pdf')
        return _jsx(FileText, { className: `${className} text-red-500` });
    if (type === 'audio')
        return _jsx(Music, { className: `${className} text-orange-500` });
    if (type === 'video')
        return _jsx(Video, { className: `${className} text-emerald-500` });
    if (['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-tar'].includes(subtype)) {
        return _jsx(Archive, { className: `${className} text-amber-500` });
    }
    if (['x-python', 'x-javascript', 'x-c++'].includes(subtype)) {
        return _jsx(Code, { className: `${className} text-emerald-600` });
    }
    return _jsx(File, { className: `${className} text-gray-500` });
};
export default FileIcon;
