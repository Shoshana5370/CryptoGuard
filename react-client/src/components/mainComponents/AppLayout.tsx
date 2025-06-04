
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import UploadFileDialog from "../fileComponents/UploadFile";
import { closeUploadDialog } from "@/features/files/uiSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { uploadFileContent } from "@/features/files/filesSlice";


const AppLayout = () => {
  const dispatch = useAppDispatch();
  const handleUpload = async (file: File, customFileName: string) => {
    try {
      await dispatch(uploadFileContent({ file, fileName: customFileName.trim() || file.name })).unwrap();
    } catch (err) {
      console.error("Failed to upload file:", err);
    }
  };

  const { uploading, uploadError, progress } = useAppSelector(state => state.files);
  const isOpen = useAppSelector(state => state.ui.isUploadDialogOpen);
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-50 border-t border-gray-100">
        <Footer />
      </footer>
      {isOpen && <UploadFileDialog
        isOpen={isOpen}
        onClose={() => dispatch(closeUploadDialog())}
        onUpload={handleUpload}
        uploading={uploading}
        uploadError={uploadError}
        progress={progress}
      />
      }
    </div>
  );
}
export default AppLayout;