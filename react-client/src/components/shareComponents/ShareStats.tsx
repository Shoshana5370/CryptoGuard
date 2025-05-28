import { Users, Send, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { ShareDto } from "@/types/ShareDto";
interface ShareStatsProps {
  shares: ShareDto[];
  type: 'received' | 'sent';
}
const ShareStats = ({ shares, type }: ShareStatsProps) => {
  const activeShares = shares.filter(share => !share.used && !share.fileIsDeleted);
  const usedShares = shares.filter(share => share.used);
  const deletedShares = shares.filter(share => share.fileIsDeleted);
  const expiredShares = shares.filter(share => {
    const now = new Date();
    const expiryDate = new Date(share.expiresAt);
    return expiryDate < now && !share.used && !share.fileIsDeleted;
  });
  const statItems = [
    { 
      key: 'total', 
      label: 'Total Shares', 
      icon: type === 'received' ? Users : Send, 
      color: type === 'received' ? 'text-emerald-500' : 'text-orange-500', 
      bg: type === 'received' ? 'bg-emerald-50' : 'bg-orange-50',
      count: shares.length
    },
    { 
      key: 'active', 
      label: 'Active', 
      icon: Clock, 
      color: 'text-blue-500', 
      bg: 'bg-blue-50',
      count: activeShares.length
    },
    { 
      key: 'used', 
      label: 'Downloaded', 
      icon: CheckCircle, 
      color: 'text-green-500', 
      bg: 'bg-green-50',
      count: usedShares.length
    },
    { 
      key: 'expired', 
      label: 'Expired', 
      icon: AlertTriangle, 
      color: 'text-amber-500', 
      bg: 'bg-amber-50',
      count: expiredShares.length
    },
    { 
      key: 'deleted', 
      label: 'File Deleted', 
      icon: XCircle, 
      color: 'text-red-500', 
      bg: 'bg-red-50',
      count: deletedShares.length
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {statItems.map((item, index) => {
        const Icon = item.icon;      
        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${item.bg} rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-200`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-800">{item.count}</p>
                <p className="text-sm text-gray-600 font-medium">{item.label}</p>
              </div>
              <Icon className={`w-6 h-6 ${item.color}`} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ShareStats;
