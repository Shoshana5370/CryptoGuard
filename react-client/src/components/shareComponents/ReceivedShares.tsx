

import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Loader2, Users, AlertTriangle } from "lucide-react";
import { useAppSelector } from "@/hooks";
import { TabsContent } from "@/styles/ui/tabs";
import ReceivedShareItem from "./ReceivedShareItem";
import { motion } from "framer-motion";
import { useShareFilters } from "@/features/useShareFilters";
import ShareStats from "./ShareStats";
import ShareSearchAndFilter from "./ShareSearchAndFilter";
interface Props {
  onSelect: (shareId: string, fileName: string) => void;
}

const ReceivedShares = ({ onSelect }: Props) => {
  const { sharesWithMe, loading, error } = useAppSelector((state) => state.share);
  
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
  } = useShareFilters(sharesWithMe, 'received');
  
  return (
    <TabsContent value="received" className="mt-0">
      {error.withMe && (
        <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {typeof error.withMe === "string" ? error.withMe : "Failed to load files"}
          </AlertDescription>
        </Alert>
      )}
      
      {loading.withMe ? (
        <div className="flex flex-col justify-center items-center py-16">
          <div className="p-4 rounded-full bg-emerald-100 mb-4">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
          </div>
          <span className="text-lg font-medium text-gray-700">Loading shared files...</span>
          <span className="text-sm text-gray-500 mt-1">Please wait a moment</span>
        </div>
      ) : sharesWithMe.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ShareStats shares={sharesWithMe} type="received" />         
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
            totalShares={sharesWithMe.length}
            filteredShares={filteredAndSortedShares.length}
            shareType="received"
          />

          {filteredAndSortedShares.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No shares match your search criteria</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {filteredAndSortedShares.map((share, index) => (
                <motion.div
                  key={share.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ReceivedShareItem share={share} onSelect={onSelect} />
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
          <div className="p-6 rounded-full bg-emerald-100 w-fit mx-auto mb-6">
            <Users className="h-12 w-12 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No shared files yet</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Files shared with you by others will appear here. Check back later or ask colleagues to share files with you.
          </p>
        </motion.div>
      )}
    </TabsContent>
  );
};

export default ReceivedShares;
