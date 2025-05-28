import { Button } from "@/styles/ui/button";
import { ShareDto } from "@/types/ShareDto";
import { motion } from "framer-motion";
import { Clock, Copy, Download, Eye } from "lucide-react";

interface ShareQuickActionsProps {
  share: ShareDto;
  shareType: 'received' | 'sent';
  onPreview?: (e?: React.MouseEvent) => void;
  onDownload?: (e?: React.MouseEvent) => void;
  onExtend?: () => void;
  onCopyLink?: () => void;
}

const ShareQuickActions = ({ 
  share, 
  shareType, 
  onPreview, 
  onDownload, 
  onExtend, 
  onCopyLink 
}: ShareQuickActionsProps) => {
  const isInactive = share.used || share.fileIsDeleted;
  const isExpired = new Date(share.expiresAt) <= new Date();

  return (
    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {shareType === 'received' && !isInactive && (
        <>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={onPreview}
              className="h-8 w-8 p-0 rounded-lg hover:bg-emerald-100 hover:text-emerald-600"
              title="Preview File"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={onDownload}
              className="h-8 w-8 p-0 rounded-lg hover:bg-blue-100 hover:text-blue-600"
              title="Download File"
            >
              <Download className="w-4 h-4" />
            </Button>
          </motion.div>
        </>
      )}

      {shareType === 'sent' && !isInactive && (
        <>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={onCopyLink}
              className="h-8 w-8 p-0 rounded-lg hover:bg-purple-100 hover:text-purple-600"
              title="Copy Share Link"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </motion.div>

          {!isExpired && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={onExtend}
                className="h-8 w-8 p-0 rounded-lg hover:bg-orange-100 hover:text-orange-600"
                title="Extend Expiration"
              >
                <Clock className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default ShareQuickActions;
