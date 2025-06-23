
import { Activity } from "lucide-react";
import { motion } from "framer-motion";

const EmptyActivityState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16">
      <div className="p-6 rounded-full bg-emerald-100 w-fit mx-auto mb-6">
        <Activity className="h-12 w-12 text-emerald-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">No activity yet</h3>
      <p className="text-gray-500 max-w-md mx-auto">
        Start using the system to see your activity logs and track your actions
      </p>
    </motion.div>
  );
};

export default EmptyActivityState;