import { Upload, Share2, Trash2, Edit } from "lucide-react";
import { motion } from "framer-motion";
import { Log } from "@/types/Log";

interface ActivityLogStatsProps {
  logs: Log[];
}

const ActivityLogStats = ({ logs }: ActivityLogStatsProps) => {
  const getActionCategory = (action: string): string => {
    const lowerAction = action.toLowerCase();
    if (lowerAction.includes('upload')) return 'upload';
    if (lowerAction.includes('delete')) return 'delete';
    if (lowerAction.includes('share')) return 'share';
    if (lowerAction.includes('update') || lowerAction.includes('edit')) return 'update';
    return 'other';
  };

  const stats = logs.reduce((acc, log) => {
    const category = getActionCategory(log.action);
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statItems = [
    { key: 'upload', label: 'Uploads', icon: Upload, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { key: 'share', label: 'Shares', icon: Share2, color: 'text-blue-600', bg: 'bg-blue-50' },
    { key: 'update', label: 'Updates', icon: Edit, color: 'text-orange-600', bg: 'bg-orange-50' },
    { key: 'delete', label: 'Deletions', icon: Trash2, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {statItems.map((item, index) => {
        const count = stats[item.key] || 0;
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
                <p className="text-2xl font-bold text-gray-800">{count}</p>
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

export default ActivityLogStats;
