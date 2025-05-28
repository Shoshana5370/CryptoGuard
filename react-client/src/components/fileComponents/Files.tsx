// // import { deleteFile, fetchFilesByUserId, updateFile } from "@/features/files/filesSlice";
// // import { useAppDispatch, useAppSelector } from "@/hooks";
// // import { Alert, AlertDescription } from "@/styles/ui/alert";
// // import { Button } from "@/styles/ui/button";
// // import {  FileText, Filter, Grid, List, Loader2, Search, Shield, Upload, Users } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import FileTable from "./FileTable";
// // import { FileDto } from "@/types/FileDto";
// // import UploadFileDialog from "./UploadFile";
// // import { SharePostModel } from "@/types/SharePostModel";
// // import { shareFile } from "@/features/shares/shareFileSlice";
// // import { fetchSharesToOthers, fetchSharesWithMe } from "@/features/shares/shareSlice";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/styles/ui/card";
// // import { Input } from "@mui/material";

// // const Files = () => {
// //   const dispatch = useAppDispatch();
// //   const { user } = useAppSelector(state => state.auth);
// //   const { items: files, loading, error } = useAppSelector(state => state.files);
// //   const { } = useAppSelector(state => state.shareFile);
// //   const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);

// //   useEffect(() => {
// //     if (user) {
// //       dispatch(fetchFilesByUserId());
// //     }
// //   }, [dispatch, user]);

// //   const handleDelete = async (fileId: number) => {
// //     await dispatch(deleteFile(fileId));
// //     await dispatch(fetchFilesByUserId());
// //     await dispatch(fetchSharesWithMe());
// //     await dispatch(fetchSharesToOthers());
// //   };
// //   const handleDownload = (file: number) => {
// //     console.log('Download file:', file);
// //   };

// //   const handleRename = async (updatedFile: FileDto) => {
// //     await dispatch(updateFile(updatedFile));
// //     await dispatch(fetchFilesByUserId());
// //     await dispatch(fetchSharesWithMe());
// //     await dispatch(fetchSharesToOthers());
// //   };
// //   const handleShare = async (updatedFile: SharePostModel) => {
// //     await dispatch(shareFile(updatedFile));
// //     await dispatch(fetchFilesByUserId());
// //     await dispatch(fetchSharesWithMe());
// //     await dispatch(fetchSharesToOthers());
// //   };
// //   // return (
// //   //   <div className="container mx-auto px-4 py-8">
// //   //     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
// //   //       <div>
// //   //         <h1 className="text-2xl font-bold text-gray-900">My Files</h1>
// //   //         <p className="text-gray-500 mt-1">Manage your encrypted files</p>
// //   //       </div>
// //   //       {user && (
// //   //         <Button onClick={() => setUploadFileIsOpen(true)} className="bg-emerald-600 hover:bg-emerald-700">
// //   //           <Upload className="w-4 h-4 mr-2" />
// //   //           Upload File
// //   //         </Button>
// //   //       )}
// //   //       <UploadFileDialog isOpen={isUploadFileOpen} onClose={() => setUploadFileIsOpen(false)} />
// //   //     </div>

// //   //     {error && (
// //   //       <Alert variant="destructive" className="mb-6">
// //   //         <AlertDescription>
// //   //           {typeof error === 'string' ? error : 'Failed to load files'}
// //   //         </AlertDescription>
// //   //       </Alert>
// //   //     )}
// //   //     {
// //   //       loading ? (
// //   //         <div className="flex justify-center items-center py-12">
// //   //           <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
// //   //           <span className="ml-2 text-lg text-gray-600">Loading files...</span>
// //   //         </div>
// //   //       )
// //   //         : (
// //   //           <FileTable
// //   //             files={files}
// //   //             onDelete={handleDelete}
// //   //             onRename={handleRename}
// //   //             onDownload={handleDownload}
// //   //             onShare={handleShare}
// //   //           />
// //   //         )
// //   //     }


// //   //   </div>
// //   // );
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const fileCount = files?.filter(file => !file.isDelete).length || 0;
// //   const filteredFiles = files?.filter(file => 
// //     file.name.toLowerCase().includes(searchTerm.toLowerCase()) && !file.isDelete
// //   ) || [];
// //  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
// //       {/* Modern Header */}
// //       <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
// //         <div className="container mx-auto px-4 py-4">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center space-x-4">
  
// //               <div className="h-6 w-px bg-gray-300" />
// //               <div>
// //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
// //                   File Management
// //                 </h1>
// //                 <p className="text-sm text-gray-600">Secure • Encrypted • Private</p>
// //               </div>
// //             </div>
// //             <Button 
// //               onClick={() => setUploadFileIsOpen(true)} 
// //               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
// //             >
// //               <Upload className="w-4 h-4 mr-2" />
// //               Upload File
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="container mx-auto px-4 py-8">
// //         {/* Stats Dashboard */}
// //         <div className="grid md:grid-cols-3 gap-6 mb-8">
// //           <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
// //             <CardHeader className="pb-3">
// //               <CardTitle className="flex items-center text-lg">
// //                 <FileText className="w-5 h-5 mr-2 text-blue-600" />
// //                 Total Files
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="text-3xl font-bold text-blue-600">{fileCount}</div>
// //               <p className="text-sm text-gray-600 mt-1">Encrypted & Secure</p>
// //             </CardContent>
// //           </Card>

// //           <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
// //             <CardHeader className="pb-3">
// //               <CardTitle className="flex items-center text-lg">
// //                 <Shield className="w-5 h-5 mr-2 text-green-600" />
// //                 Security Status
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="text-3xl font-bold text-green-600">256-bit</div>
// //               <p className="text-sm text-gray-600 mt-1">AES Encryption Active</p>
// //             </CardContent>
// //           </Card>

// //           <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
// //             <CardHeader className="pb-3">
// //               <CardTitle className="flex items-center text-lg">
// //                 <Users className="w-5 h-5 mr-2 text-purple-600" />
// //                 Shared Files
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="text-3xl font-bold text-purple-600">0</div>
// //               <p className="text-sm text-gray-600 mt-1">Collaboration Ready</p>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* Search and Controls */}
// //         <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 mb-6">
// //           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// //             <div className="flex-1 max-w-md">
// //               <div className="relative">
// //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
// //                 <Input
// //                   placeholder="Search files..."
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="pl-10 border-2 focus:border-blue-500 transition-colors"
// //                 />
// //               </div>
// //             </div>
            
// //             <div className="flex items-center gap-2">
// //               <Button variant="outline" size="sm" className="border-2">
// //                 <Filter className="w-4 h-4 mr-2" />
// //                 Filter
// //               </Button>
              
// //               <div className="flex bg-gray-100 rounded-lg p-1">
// //                 <Button
// //                   variant={viewMode === 'list' ? 'default' : 'ghost'}
// //                   size="sm"
// //                   onClick={() => setViewMode('list')}
// //                   className="rounded-md"
// //                 >
// //                   <List className="w-4 h-4" />
// //                 </Button>
// //                 <Button
// //                   variant={viewMode === 'grid' ? 'default' : 'ghost'}
// //                   size="sm"
// //                   onClick={() => setViewMode('grid')}
// //                   className="rounded-md"
// //                 >
// //                   <Grid className="w-4 h-4" />
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {error && (
// //           <Alert variant="destructive" className="mb-6 bg-red-50 border-red-200">
// //             <AlertDescription>
// //               {typeof error === "string" ? error : "Failed to load files"}
// //             </AlertDescription>
// //           </Alert>
// //         )}

// //         {loading ? (
// //           <div className="flex justify-center items-center py-20">
// //             <div className="text-center">
// //               <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
// //                 <Loader2 className="w-8 h-8 animate-spin text-white" />
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading your files...</h3>
// //               <p className="text-gray-600">Decrypting and organizing your secure files</p>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border-0">
// //             <FileTable
// //               files={filteredFiles}
// //               onDelete={handleDelete}
// //               onRename={handleRename}
// //               onDownload={handleDownload}
// //               onShare={handleShare}
// //             />
// //           </div>
// //         )}

// //         <UploadFileDialog isOpen={isUploadFileOpen} onClose={() => setUploadFileIsOpen(false)} />
// //       </div>
// //     </div>
// //   );
// // }
// // export default Files;
// import { deleteFile, fetchFilesByUserId, updateFile } from "@/features/files/filesSlice";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { Alert, AlertDescription } from "@/styles/ui/alert";
// import { Button } from "@/styles/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
// import { Loader2, Upload, FileText, AlertTriangle } from "lucide-react";
// import { useEffect, useState } from "react";
// import FileTable from "./FileTable";
// import { FileDto } from "@/types/FileDto";
// import UploadFileDialog from "./UploadFile";
// import { SharePostModel } from "@/types/SharePostModel";
// import { shareFile } from "@/features/shares/shareFileSlice";
// import { fetchSharesToOthers, fetchSharesWithMe } from "@/features/shares/shareSlice";
// import { motion } from "framer-motion";

// const Files = () => {
//   const dispatch = useAppDispatch();
//   const { user } = useAppSelector(state => state.auth);
//   const { items: files, loading, error } = useAppSelector(state => state.files);
//   const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchFilesByUserId());
//     }
//   }, [dispatch, user]);

//   const handleDelete = async (fileId: number) => {
//     await dispatch(deleteFile(fileId));
//     await dispatch(fetchFilesByUserId());
//     await dispatch(fetchSharesWithMe());
//     await dispatch(fetchSharesToOthers());
//   };
  
//   const handleDownload = (file: number) => {
//     console.log('Download file:', file);
//   };

//   const handleRename = async (updatedFile: FileDto) => {
//     await dispatch(updateFile(updatedFile));
//     await dispatch(fetchFilesByUserId());
//     await dispatch(fetchSharesWithMe());
//     await dispatch(fetchSharesToOthers());
//   };
  
//   const handleShare = async (updatedFile: SharePostModel) => {
//     await dispatch(shareFile(updatedFile));
//     await dispatch(fetchFilesByUserId());
//     await dispatch(fetchSharesWithMe());
//     await dispatch(fetchSharesToOthers());
//   };

//   // const activeFiles = files.filter(file => !file.isDelete);
  

//  return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
//               My Files
//             </h1>
//             <p className="text-gray-600 mt-2 text-lg">
//               Manage your encrypted files securely
//             </p>
//           </div>
//           {user && (
//             <Button 
//               onClick={() => setUploadFileIsOpen(true)} 
//               className="h-12 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
//             >
//               <Upload className="w-5 h-5 mr-2" />
//               Upload File
//             </Button>
//           )}
//           <UploadFileDialog isOpen={isUploadFileOpen} onClose={() => setUploadFileIsOpen(false)} />
//         </div>

//         {error && (
//           <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
//             <AlertDescription className="text-red-700">
//               {typeof error === 'string' ? error : 'Failed to load files'}
//             </AlertDescription>
//           </Alert>
//         )}
        
//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="text-center">
//               <div className="relative">
//                 <Loader2 className="w-12 h-12 animate-spin text-emerald-600 mx-auto" />
//                 <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-emerald-200 mx-auto"></div>
//               </div>
//               <span className="mt-4 block text-lg text-gray-600 font-medium">Loading files...</span>
//               <span className="mt-1 block text-sm text-gray-500">Decrypting your secure files</span>
//             </div>
//           </div>
//         ) : (
//           <FileTable
//             files={files}
//             onDelete={handleDelete}
//             onRename={handleRename}
//             onDownload={handleDownload}
//             onShare={handleShare}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Files;
import { deleteFile, fetchFilesByUserId, updateFile } from "@/features/files/filesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import FileTable from "./FileTable";
import { FileDto } from "@/types/FileDto";
import UploadFileDialog from "./UploadFile";
import { SharePostModel } from "@/types/SharePostModel";
import { shareFile } from "@/features/shares/shareFileSlice";
import { fetchSharesToOthers, fetchSharesWithMe } from "@/features/shares/shareSlice";
import FileGridView from "./FileGridWiew";
import FileStats from "./FileStats";
import SearchAndFilter from "../shareComponents/SearchAndFilter";
import ViewToggle from "../shareComponents/ViewToggle";
import { useFileFilters } from "@/features/useFileFilters";

// const Files = () => {
//   const dispatch = useAppDispatch();
//   const { user } = useAppSelector(state => state.auth);
//   const { items: files, loading, error } = useAppSelector(state => state.files);
//   const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchFilesByUserId());
//     }
//   }, [dispatch, user]);

//   const handleDelete = async (fileId: number) => {
//     try {
//       await dispatch(deleteFile(fileId)).unwrap();
//       dispatch(fetchFilesByUserId());
//       dispatch(fetchSharesWithMe());
//       dispatch(fetchSharesToOthers());
//     } catch (err) {
//       console.error("Failed to delete file:", err);
//     }
//   };

//   const handleRename = async (updatedFile: FileDto) => {
//     try {
//       await dispatch(updateFile(updatedFile)).unwrap();
//       dispatch(fetchFilesByUserId());
//     } catch (err) {
//       console.error("Failed to update file:", err);
//     }
//   };

//   const handleDownload = (fileId: number) => {

//     console.log(`Download file with ID: ${fileId}`);
//   };

//   const handleShare = async (sharePostModel: SharePostModel) => {
//     try {
//       await dispatch(shareFile(sharePostModel)).unwrap();
//       dispatch(fetchSharesWithMe());
//       dispatch(fetchSharesToOthers());
//     } catch (err) {
//       console.error("Failed to share file:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
//               My Files
//             </h1>
//             <p className="text-gray-600 mt-2 text-lg">
//               Manage your encrypted files securely
//             </p>
//           </div>
//           {user && (
//             <Button 
//               onClick={() => setUploadFileIsOpen(true)} 
//               className="h-12 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
//             >
//               <Upload className="w-5 h-5 mr-2" />
//               Upload File
//             </Button>
//           )}
//           <UploadFileDialog isOpen={isUploadFileOpen} onClose={() => setUploadFileIsOpen(false)} />
//         </div>

//         {error && (
//           <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
//             <AlertDescription className="text-red-700">
//               {typeof error === 'string' ? error : 'Failed to load files'}
//             </AlertDescription>
//           </Alert>
//         )}
        
//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="text-center">
//               <div className="relative">
//                 <Loader2 className="w-12 h-12 animate-spin text-emerald-600 mx-auto" />
//                 <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-emerald-200 mx-auto"></div>
//               </div>
//               <span className="mt-4 block text-lg text-gray-600 font-medium">Loading files...</span>
//               <span className="mt-1 block text-sm text-gray-500">Decrypting your secure files</span>
//             </div>
//           </div>
//         ) : (
//           <FileTable
//             files={files}
//             onDelete={handleDelete}
//             onRename={handleRename}
//             onDownload={handleDownload}
//             onShare={handleShare}
//           />
//         )}
//       </div>
//     </div>
//   );
// };
const Files = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const { items: files, loading, error } = useAppSelector(state => state.files);
  const [isUploadFileOpen, setUploadFileIsOpen] = useState(false);
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
    if (user) {
      dispatch(fetchFilesByUserId());
    }
  }, [dispatch, user]);

  const handleDelete = async (fileId: number) => {
    try {
      const result = await dispatch(deleteFile(fileId));
      if ((result as any).error) {
        throw (result as any).error;
      }
      dispatch(fetchFilesByUserId());
      dispatch(fetchSharesWithMe());
      dispatch(fetchSharesToOthers());
    } catch (err) {
      console.error("Failed to delete file:", err);
    }
  };

  const handleRename = async (updatedFile: FileDto) => {
    try {
      await dispatch(updateFile(updatedFile));
      dispatch(fetchFilesByUserId());
    } catch (err) {
      console.error("Failed to update file:", err);
    }
  };

  const handleDownload = (fileId: number) => {
    console.log(`Download file with ID: ${fileId}`);
  };

  const handleShare = async (sharePostModel: SharePostModel) => {
    try {
      await dispatch(shareFile(sharePostModel));
      dispatch(fetchSharesWithMe());
      dispatch(fetchSharesToOthers());
    } catch (err) {
      console.error("Failed to share file:", err);
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
                onClick={() => setUploadFileIsOpen(true)} 
                className="h-12 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload File
              </Button>
            )}
          </div>
          <UploadFileDialog isOpen={isUploadFileOpen} onClose={() => setUploadFileIsOpen(false)} />
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">
              {typeof error === 'string' ? error : 'Failed to load files'}
            </AlertDescription>
          </Alert>
        )}
        
        {loading ? (
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

            {view === 'compact' ? (
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
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Files;