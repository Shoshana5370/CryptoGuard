import { jsx as _jsx } from "react/jsx-runtime";
const FileTypeLabel = ({ mimeType }) => {
    const getFileTypeLabel = (type) => {
        if (type.startsWith('image/'))
            return 'Image';
        if (type.startsWith('video/'))
            return 'Video';
        if (type.startsWith('audio/'))
            return 'Audio';
        if (type.includes('pdf'))
            return 'PDF';
        return 'Document';
    };
    return (_jsx("span", { className: "px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600", children: getFileTypeLabel(mimeType) }));
};
export default FileTypeLabel;
