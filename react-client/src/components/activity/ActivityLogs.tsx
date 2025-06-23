import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchLogsByUser } from "../../features/activityLogs/activitySlice";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Loader2, Activity } from "lucide-react";
import ActivityLogFilters from "./ActivityLogFilters";
import ActivityLogStats from "./ActivityLogStats";
import ActivityLogGrid from "./ActivitylogGrid";
import EmptyActivityState from "./EmptyActivtyState";

const ActivityLogs = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const { logs, loading, error } = useAppSelector(state => state.logs);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchLogsByUser(user.id));
    }
  }, [dispatch, user]);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.targetType?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === "all" || 
                         log.action.toLowerCase().includes(filterType.toLowerCase()) ||
                         log.targetType?.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const sortedLogs = [...filteredLogs].sort((a, b) => {
    const dateA = new Date(a.timestamp).getTime();
    const dateB = new Date(b.timestamp).getTime();
    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              Activity Logs
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Track your recent actions and system events
            </p>
          </div>
        </motion.div>

        {error && (
          <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">
              {error}
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
              <span className="mt-4 block text-lg text-gray-600 font-medium">Loading activity logs...</span>
              <span className="mt-1 block text-sm text-gray-500">Fetching your recent actions</span>
            </div>
          </div>
        ) : (
          <>
            <ActivityLogStats logs={logs} />
            
            <ActivityLogFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filterType={filterType}
              onFilterChange={setFilterType}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
              totalLogs={logs.length}
              filteredLogs={sortedLogs.length}
            />

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-orange-500 h-1"></div>
              <div className="p-6">
                {sortedLogs.length === 0 ? (
                  logs.length === 0 ? (
                    <EmptyActivityState />
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-gray-500 text-lg">No logs match your search criteria</p>
                    </div>
                  )
                ) : (
                  <ActivityLogGrid logs={sortedLogs} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ActivityLogs;
