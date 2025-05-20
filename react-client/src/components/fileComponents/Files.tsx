import { deleteFile, fetchFilesByUserId, updateFile } from "@/features/files/filesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import FileTable from "./FileTable";
import { FileDto } from "@/types/FileDto";

import UploadFileDialog from "./UploadFile";
const Files=()=> {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const { items: files, loading, error } = useAppSelector(state => state.files);
  const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);

    useEffect(() => {
    if (user) {    
        dispatch(fetchFilesByUserId());
    }
  }, [dispatch, user]);

  const handleDelete = (fileId: number) => {
    dispatch(deleteFile(fileId));
};
  const handleDownload = (file:number) => {
    console.log('Download file:', file);
  };

  const handleRename = (updatedFile: FileDto) => {
    dispatch(updateFile(updatedFile));
};
const handleShare = (updatedFile: FileDto) => {
     dispatch(updateFile(updatedFile));
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


    </div>
  );
}
export default Files;