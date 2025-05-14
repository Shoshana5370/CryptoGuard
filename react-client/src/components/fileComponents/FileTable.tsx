import { Button } from "@/styles/ui/button";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/styles/ui/table";
import { FileDto } from "@/types/FileDto";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { Archive, Code, Download, FileText, MoreVertical, Music, Pencil, Share2, Trash2, Video, File, Image } from "lucide-react";
import { format } from "date-fns";
const getFileIcon = (fileType: any) => {
  const iconProps = { className: "w-5 h-5" };
  switch (fileType.toLowerCase()) {
    case 'image':
      return <Image {...iconProps} className="text-purple-500" />;
    case 'pdf':
      return <FileText {...iconProps} className="text-red-500" />;
    case 'audio':
      return <Music {...iconProps} className="text-blue-500" />;
    case 'video':
      return <Video {...iconProps} className="text-emerald-500" />;
    case 'archive':
      return <Archive {...iconProps} className="text-amber-500" />;
    case 'code':
      return <Code {...iconProps} className="text-gray-500" />;
    default:
      return <File {...iconProps} className="text-gray-500" />;
  }
};

// /**
//  * File Table Component
//  * @param {Object} props
//  * @param {Array} props.files - List of files
//  * @param {function} props.onDelete - Delete file callback
//  * @param {function} props.onRename - Rename file callback
//  * @param {function} props.onDownload - Download file callback
//  * @param {function} props.onShare - Share file callback
//  */
const FileTable = ({ files, onDelete, onRename, onDownload, onShare }: { files: FileDto[], onDelete: (file: number) => void, onRename: (file: number, newName: string) => void, onDownload: (file: number) => void, onShare: (file: number) => void }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead>Name</TableHead>
            {/* <TableHead>Size</TableHead> */}
            <TableHead>Type</TableHead>
            <TableHead>Modified</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {files.map((file: FileDto) => (
              <motion.tr
                key={file.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="group hover:bg-muted transition-colors"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    {getFileIcon(file.contentType)}
                    <span className="font-medium text-gray-900">{file.name}</span>
                  </div>
                </TableCell>
                {/* <TableCell className="text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </TableCell> */}
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-gray-100 text-gray-800">
                    {file.contentType}
                  </span>
                </TableCell>
                <TableCell className="text-gray-500">
                  {format(new Date(file.createdAt), 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>
                  <TableCell className="flex gap-2 items-center">
                    <Button variant="ghost" size="icon" onClick={() => onDownload(file.id)} title="Download">
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onRename(file.id, file.name)} title="Rename">
                      <Pencil className="w-4 h-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onShare(file.id)} title="Share">
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onDelete(file.id)} title="Delete">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </TableCell>

                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-muted"
                      >
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem
                        onClick={() => onDownload(file)}
                        className="text-gray-700"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          const newName = prompt('Enter new name', file.name);
                          if (newName) onRename(file, newName);
                        }}
                        className="text-gray-700"
                      >
                        <Pencil className="w-4 h-4 mr-2" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => onShare(file)}
                        className="text-gray-700"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => onDelete(file)}
                        className="text-red-600 focus:text-red-600 focus:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                </TableCell>
              </motion.tr>
            ))}
            {files.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <File className="w-12 h-12 mb-4 text-gray-300" />
                    <p className="text-lg font-medium">No files yet</p>
                    <p className="text-sm">Upload your first file to get started</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};

export default FileTable;