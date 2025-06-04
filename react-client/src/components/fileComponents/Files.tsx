import { deleteFile, fetchFilesByUserId, updateFile, uploadFileContent } from "@/features/files/filesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import FileTable from "./FileTable";
import { FileDto } from "@/types/FileDto";
import { SharePostModel } from "@/types/SharePostModel";
import { useFileFilters } from "@/features/useFileFilters";
import FileGridView from "./FileGridWiew";
import SearchAndFilter from "../shareComponents/SearchAndFilter";
import ViewToggle from "../mainComponents/ViewToggle";
import UploadFileDialog from "./UploadFile";
import FileStats from "./FileStas";
import { fetchSharesToOthers, shareFile } from "../../features/shares/shareSlice";
import { closeUploadDialog, openUploadDialog } from "@/features/files/uiSlice";
const Files = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const isOpen = useAppSelector(state => state.ui.isUploadDialogOpen);
  const { items: files, isFetching, fetchError, isDeletingById, deleteErrorById, isUpdating, updateError, uploading, uploadError, progress, hasFetched } = useAppSelector(state => state.files);
  const [view, setView] = useState<'table' | 'grid' | 'compact'>('table');
  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    sortOrder,
    toggleSortOrder,
    filterType,
    setFilterType,
    filteredAndSortedFiles,
    resetFilters,
  } = useFileFilters(files);

  useEffect(() => {
    if (user && !hasFetched) {
      dispatch(fetchFilesByUserId());
    }
  }, [dispatch, user, hasFetched]);
  const handleDelete = async (fileId: number) => {
    try {
      await dispatch(deleteFile(fileId)).unwrap();
      await dispatch(fetchSharesToOthers()).unwrap();
    } catch {
    }
  };

  const handleRename = async (updatedFile: FileDto) => {
    try {
      await dispatch(updateFile(updatedFile)).unwrap();
    } catch {
    }
  };
  const handleDownload = (fileId: number) => {
    console.log(`Download file with ID: ${fileId}`);
  };
  const handleShare = async (updatedFile: SharePostModel) => {
    await dispatch(shareFile(updatedFile)).unwrap();
    await dispatch(fetchSharesToOthers()).unwrap();
  };
  const handleUpload = async (file: File, customFileName: string) => {
    try {
      await dispatch(uploadFileContent({ file, fileName: customFileName.trim() || file.name })).unwrap();
    } catch (err) {
      console.error("Failed to upload file:", err);
    }
  };
  const activeFiles = files.filter(file => !file.isDelete);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              My Files
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Manage your encrypted files securely
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ViewToggle view={view} onViewChange={setView} />
            {user && (
              <Button
                onClick={() => dispatch(openUploadDialog())}
                className="h-12 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload File
              </Button>
            )}
          </div>
          <UploadFileDialog
            isOpen={isOpen}
            onClose={() => dispatch(closeUploadDialog())}
            onUpload={handleUpload}
            uploading={uploading}
            uploadError={uploadError}
            progress={progress}
          />
        </div>

        {fetchError && (
          <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">
              {fetchError}
            </AlertDescription>
          </Alert>
        )}

        {isFetching ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="relative">
                <Loader2 className="w-12 h-12 animate-spin text-emerald-600 mx-auto" />
                <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-emerald-200 mx-auto"></div>
              </div>
              <span className="mt-4 block text-lg text-gray-600 font-medium">Loading files...</span>
              <span className="mt-1 block text-sm text-gray-500">Decrypting your secure files</span>
            </div>
          </div>
        ) : (
          <>
            <FileStats files={activeFiles} />
            <SearchAndFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              sortBy={sortBy}
              onSortChange={setSortBy}
              sortOrder={sortOrder}
              onSortOrderToggle={toggleSortOrder}
              filterType={filterType}
              onFilterTypeChange={setFilterType}
              onReset={resetFilters}
              totalFiles={activeFiles.length}
              filteredFiles={filteredAndSortedFiles.length}
            />
            {view === 'grid' ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-orange-500 h-1"></div>
                <div className="p-6">
                  {filteredAndSortedFiles.length === 0 ? (
                    <div className="text-center py-16">
                      <p className="text-gray-500 text-lg">No files match your search criteria</p>
                    </div>
                  ) : (
                    <FileGridView
                      files={filteredAndSortedFiles}
                      onDelete={handleDelete}
                      onRename={handleRename}
                      onDownload={handleDownload}
                      onShare={handleShare}
                      isDeletingById={isDeletingById}
                      deleteErrorById={deleteErrorById}
                      isUpdating={isUpdating}
                      updateError={updateError}
                    />
                  )}
                </div>
              </div>
            ) : (
              <FileTable
                files={filteredAndSortedFiles}
                onDelete={handleDelete}
                onRename={handleRename}
                onDownload={handleDownload}
                onShare={handleShare}
                isDeletingById={isDeletingById}
                deleteErrorById={deleteErrorById}
                isUpdating={isUpdating}
                updateError={updateError}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Files;