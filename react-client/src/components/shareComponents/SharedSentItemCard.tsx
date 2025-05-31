import { useAppDispatch } from "@/hooks";
import { ShareDto } from "@/types/ShareDto";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, FileText, Mail, XCircle } from "lucide-react";
import { useState } from "react";
import ShareQuickActions from "./ShareQuickActions";
import ExpirationEditor from "./ExpirationEditor";
import { extendShareExpiration } from "@/features/shares/shareSlice";
import { Button } from "@/styles/ui/button";

type SharedSentItemCardProps = {
  share: ShareDto;
};

const SharedSentItemCard = ({ share }: SharedSentItemCardProps) => {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);
  const isExpired = new Date(share.expiresAt) <= new Date();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/share/${share.id}`);
  };

  const handleExtend = () => {
    setEditing(true);
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-100 flex-shrink-0">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-gray-600 text-sm">Shared with:</span>
                  <span className="font-semibold text-gray-900 bg-orange-50 px-3 py-1 rounded-full text-sm">
                    {share.recipientEmail}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">File:</span>
                  <span className="font-medium text-gray-900">{share.fileName}</span>
                </div>
                {!share.used && !share.fileIsDeleted && (
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className={`${isExpired ? 'text-red-600' : 'text-gray-500'}`}>
                      {isExpired ? 'Expired:' : 'Expires:'} {new Date(share.expiresAt).toLocaleDateString()}
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {share.fileIsDeleted && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium border border-red-200"
                    >
                      <XCircle className="w-3 h-3" />
                      File Removed
                    </motion.span>
                  )}
                  {share.used && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium border border-emerald-200"
                    >
                      <CheckCircle className="w-3 h-3" />
                      Downloaded
                    </motion.span>
                  )}
                  {isExpired && !share.used && !share.fileIsDeleted && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full font-medium border border-amber-200"
                    >
                      <Clock className="w-3 h-3" />
                      Expired
                    </motion.span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShareQuickActions
              share={share}
              shareType="sent"
              onCopyLink={handleCopyLink}
              onExtend={handleExtend}
            />

            {!share.used && !share.fileIsDeleted && (
              <div className="flex-shrink-0">
                {editing ? (
                  <ExpirationEditor
                    currentDate={share.expiresAt}
                    onSave={(newDate) => {
                      dispatch(
                        extendShareExpiration({
                          id: share.id,
                          newDate: newDate.toISOString(),
                        })
                      );
                      setEditing(false);
                    }}
                    onCancel={() => setEditing(false)}
                  />
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setEditing(true)}
                    className="bg-white hover:bg-orange-50 border-orange-200 text-orange-700 hover:text-orange-800 rounded-xl transition-all duration-200"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Extend Access
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
};
export default SharedSentItemCard;
