import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { accessSharedFile, clearAccess } from "@/features/shares/accessSlice";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/styles/ui/card";
import { Input } from "@/styles/ui/input";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Button } from "@/styles/ui/button";
import { AlertTriangle, Download, Link, ExternalLink, FileText, Sparkles } from "lucide-react";
import { fetchSharesToOthers, fetchSharesWithMe } from "@/features/shares/shareSlice";
import { motion } from "framer-motion";

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
      dispatch(fetchSharesWithMe());
      dispatch(fetchSharesToOthers());
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(accessSharedFile({ shareId: parseInt(code), code: shareCode.trim() }));
    dispatch(fetchSharesWithMe());
    dispatch(fetchSharesToOthers());
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
      dispatch(fetchSharesWithMe());
      dispatch(fetchSharesToOthers());
    }
  }, [fileBlob]);

  const isPreviewable = (type: string | null) => {
    if (!type) return false;
    return type.startsWith("image/") || type === "application/pdf";
  };
  
  return fileUrl && fileType ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto p-8"
    >
      <div className="text-center space-y-6">
        <div className="p-4 rounded-full bg-emerald-100 w-fit mx-auto">
          <FileText className="w-8 h-8 text-emerald-600" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">File Ready!</h3>
          <p className="text-gray-600">Your file is now available for download</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {isPreviewable(fileType) && (
            <Button
              variant="outline"
              asChild
              className="flex-1 h-12 rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all"
            >
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Preview File
              </a>
            </Button>
          )}

          <Button
            onClick={handleDownload}
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Download className="w-4 h-4 mr-2" />
            Download File
          </Button>
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto p-4"
    >
      <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <div className="p-4 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 w-fit mx-auto mb-4">
            <Link className="w-8 h-8 text-emerald-600" />
          </div>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Enter Access Code
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Sparkles className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Enter your share code"
                value={shareCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setShareCode(e.target.value)}
                className="pl-12 h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                disabled={status === "loading"}
              />
            </div>

            {status === "failed" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Alert variant="destructive" className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    {typeof error === "string" ? error : "Invalid or expired code"}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={status === "loading" || !shareCode.trim()}
            >
              {status === "loading" ? (
                <motion.div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  Accessing File...
                </motion.div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link className="w-4 h-4" />
                  Access File
                </div>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-gray-500 w-full text-center leading-relaxed">
            Files are accessible for a limited time only and may expire after download
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AccessSharedFile;
