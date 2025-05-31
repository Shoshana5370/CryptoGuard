import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Send, Loader2, AlertTriangle } from "lucide-react";
import { TabsContent } from "@/styles/ui/tabs";
import SharedSentItemCard from "./SharedSentItemCard";
import { useAppSelector } from "@/hooks";
import { motion } from "framer-motion";
import { useShareFilters } from "@/features/useShareFilters";
import ShareStats from "./ShareStats";
import ShareSearchAndFilter from "./ShareSearchAndFilter";
const SentShares = () => {
  const { sharesToOthers, status, error } = useAppSelector((state) => state.share);
  
  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    sortOrder,
    toggleSortOrder,
    filterStatus,
    setFilterStatus,
    filteredAndSortedShares,
    resetFilters,
  } = useShareFilters(sharesToOthers, 'sent');
  
  return (
    <TabsContent value="sent" className="mt-0">
      {error.fetchToOthers && (
        <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {typeof error.fetchToOthers === "string" ? error.fetchToOthers : "Failed to load shared files."}
          </AlertDescription>
        </Alert>
      )}
      
      {status.fetchToOthers=== "loading" ? (
        <div className="flex flex-col justify-center items-center py-16">
          <div className="p-4 rounded-full bg-orange-100 mb-4">
            <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
          </div>
          <span className="text-lg font-medium text-gray-700">Loading your shared files...</span>
          <span className="text-sm text-gray-500 mt-1">Please wait a moment</span>
        </div>
      ) : sharesToOthers.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ShareStats shares={sharesToOthers} type="sent" />
          
          <ShareSearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
            sortOrder={sortOrder}
            onSortOrderToggle={toggleSortOrder}
            filterStatus={filterStatus}
            onFilterStatusChange={setFilterStatus}
            onReset={resetFilters}
            totalShares={sharesToOthers.length}
            filteredShares={filteredAndSortedShares.length}
            shareType="sent"
          />

          {filteredAndSortedShares.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No shares match your search criteria</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {filteredAndSortedShares.map((share: any, index: number) => (
                <motion.div
                  key={share.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <SharedSentItemCard share={share} />
                </motion.div>
              ))}
            </ul>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center py-16"
        >
          <div className="p-6 rounded-full bg-orange-100 w-fit mx-auto mb-6">
            <Send className="h-12 w-12 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No files shared yet</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Files you share with others will appear here. Start sharing to collaborate with your team!
          </p>
        </motion.div>
      )}
    </TabsContent>
  );
};

export default SentShares;




