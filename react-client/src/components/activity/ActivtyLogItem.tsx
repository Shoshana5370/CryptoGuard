import { motion } from "framer-motion";
import { Log } from "@/types/Log";
import { Activity, User, FileText, Settings, Clock } from "lucide-react";

interface ActivityLogItemProps {
  log: Log;
  index: number;
}

const ActivityLogItem = ({ log, index }: ActivityLogItemProps) => {
  const getActionIcon = (action: string) => {
    if (action.toLowerCase().includes('upload')) return FileText;
    if (action.toLowerCase().includes('delete')) return FileText;
    if (action.toLowerCase().includes('share')) return User;
    if (action.toLowerCase().includes('update')) return Settings;
    return Activity;
  };

  const getActionColor = (action: string) => {
    if (action.toLowerCase().includes('upload')) return 'text-emerald-600 bg-emerald-50';
    if (action.toLowerCase().includes('delete')) return 'text-red-600 bg-red-50';
    if (action.toLowerCase().includes('share')) return 'text-blue-600 bg-blue-50';
    if (action.toLowerCase().includes('update')) return 'text-orange-600 bg-orange-50';
    return 'text-gray-600 bg-gray-50';
  };

  const Icon = getActionIcon(log.action);
  const colorClasses = getActionColor(log.action);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${colorClasses.split(' ')[1]} flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${colorClasses.split(' ')[0]}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 text-base mb-1">
                {log.action}
              </h3>
              {log.description && (
                <p className="text-gray-600 text-sm mb-2">
                  {log.description}
                </p>
              )}
              {log.targetType && (
                <span className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                  {log.targetType}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1 text-sm text-gray-500 flex-shrink-0">
              <Clock className="w-4 h-4" />
              <span>
                {new Date(log.timestamp).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityLogItem;
