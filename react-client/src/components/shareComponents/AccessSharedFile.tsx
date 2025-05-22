
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { accessSharedFile, clearAccess } from "@/features/shares/accessSlice";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/styles/ui/card";
import { Input } from "@/styles/ui/input";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { AlertTriangle, Download, Link } from "lucide-react";
type AccessSharedFileProps = {
  code: string;
  fileName: string;
};

const AccessSharedFile = ({ code, fileName }: AccessSharedFileProps) => {
  const [shareCode, setShareCode] = useState("");
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  
  const dispatch = useAppDispatch();
  const { fileBlob, status, error } = useAppSelector((state) => state.access);
  useEffect(() => {
    return () => {
      dispatch(clearAccess());
    };
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(accessSharedFile({ shareId: parseInt(code), code: shareCode.trim() }));
  };



  const handleDownload = () => {
    if (fileBlob && fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  useEffect(() => {
    if (fileBlob) {
      const url = window.URL.createObjectURL(fileBlob);
      setFileUrl(url);
      const inferredType = fileBlob.type;
      setFileType(inferredType);
    }
  }, [fileBlob]);

  const isPreviewable = (type: string | null) => {
    if (!type) return false;
    return type.startsWith("image/") || type === "application/pdf";
  };
  return fileUrl && fileType ? (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center gap-6">
      <div className="flex gap-4">
        {isPreviewable(fileType) && (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-600 hover:text-white transition-colors"
          >
            View in New Tab
          </a>
        )}

        <Button
          onClick={handleDownload}
          className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-white rounded-md flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>
    </div>

  ) : (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            Access Shared File
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Link className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Enter share code"
                value={shareCode}
                onChange={(e) => setShareCode(e.target.value)}
                className="pl-10"
                disabled={status === "loading"}
              />
            </div>

            {status === "failed" && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  {typeof error === "string" ? error : "Invalid or expired code"}
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              disabled={status === "loading" || !shareCode.trim()}
            >
              {status === "loading" ? "Accessing..." : "Access File"}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-gray-500 w-full text-center">
            Files are accessible for a limited time only
          </p>
        </CardFooter>
      </Card>
    </div>
  );

}
export default AccessSharedFile;