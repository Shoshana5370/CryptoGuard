import { fetchFilesByUserId } from "@/features/files/filesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import FileTable from "./FileTable";
import ShareFileDialog from "../shareComponents/ShareFileDialog";
import { FileDto } from "@/types/FileDto";
import { useNavigate } from "react-router-dom";
import UploadFileDialog from "./UploadFile";
const Files=()=> {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const { items: files, loading, error } = useAppSelector(state => state.files);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileDto>({} as FileDto);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
        console.log('Fetching files for user ID:');       
        dispatch(fetchFilesByUserId());
    }
  }, [dispatch, user]);

  const handleDelete = (file:number) => {
    // In a real app, would dispatch a delete action
    console.log('Delete file:', file);
  };

  const handleShare = (file:FileDto) => {
    setSelectedFile(file);
    setIsShareDialogOpen(true);
  };

  const handleDownload = (file:number) => {
    // In a real app, would trigger file download
    console.log('Download file:', file);
  };

  const handleRename = (file:number, newName:string) => {
    // In a real app, would dispatch a rename action
    console.log('Rename file:', file, 'to', newName);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Files</h1>
          <p className="text-gray-500 mt-1">Manage your encrypted files</p>
        </div>
        
        {/* <Button onClick={() => navigate('/files/upload')} className="bg-emerald-600 hover:bg-emerald-700" >
        
          <Upload className="w-4 h-4 mr-2" />
           Upload File
        </Button> */}
         <Button onClick={() => setUploadFileIsOpen(true)} className="bg-emerald-600 hover:bg-emerald-700">
      <Upload className="w-4 h-4 mr-2" />
      Upload File
    </Button>

    <UploadFileDialog isOpen={isUploadFileOpen} onClose={() => setUploadFileIsOpen(false)} />
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>
            {typeof error === 'string' ? error : 'Failed to load files'}
          </AlertDescription>
        </Alert>
      )}
{
  loading ? (
    <div className="flex justify-center items-center py-12">
      <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      <span className="ml-2 text-lg text-gray-600">Loading files...</span>
    </div>
  ) 
//   : (
//     files.length === 0 ? (
//       <p>No files found.</p>
//     )
     : (
      <FileTable
        files={files}
        onDelete={handleDelete}
        onRename={handleRename}
        onDownload={handleDownload}
        onShare={handleShare}
      />
    )
//   )
}

       <ShareFileDialog
         isOpen={isShareDialogOpen}
         onClose={() => setIsShareDialogOpen(false)}
         file={selectedFile} 
      />
    </div>
  );
}
export default Files;