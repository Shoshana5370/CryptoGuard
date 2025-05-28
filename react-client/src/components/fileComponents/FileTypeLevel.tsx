interface FileTypeLabelProps {
  mimeType: string;
}
const FileTypeLabel = ({ mimeType }: FileTypeLabelProps) => {
  const getFileTypeLabel = (type: string) => {
    if (type.startsWith('image/')) return 'Image';
    if (type.startsWith('video/')) return 'Video';
    if (type.startsWith('audio/')) return 'Audio';
    if (type.includes('pdf')) return 'PDF';
    return 'Document';
  };

  return (
    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
      {getFileTypeLabel(mimeType)}
    </span>
  );
};

export default FileTypeLabel;