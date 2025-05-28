import { jsx as _jsx } from "react/jsx-runtime";
const getFileInfo = (mimeType) => {
    const map = {
        'application/pdf': 'PDF Document',
        'application/msword': 'Word Document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
        'application/vnd.ms-excel': 'Excel Spreadsheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Spreadsheet',
        'image/jpeg': 'JPEG Image',
        'image/png': 'PNG Image',
        'video/mp4': 'MP4 Video',
        'audio/mpeg': 'MP3 Audio',
    };
    return { label: map[mimeType] || mimeType.split('/')[1]?.toUpperCase() || 'Unknown' };
};
const FileTypeLabel = ({ mimeType }) => {
    return (_jsx("span", { className: "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200", children: getFileInfo(mimeType).label }));
};
export default FileTypeLabel;
