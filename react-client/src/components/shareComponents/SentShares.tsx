
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Link2, Loader2 } from "lucide-react";

import { TabsContent } from "@/styles/ui/tabs";
import SharedSentItemCard from "./SharedSentItemCard";
import { useAppSelector } from "@/hooks";
const SentShares = () => {
  const { sharesToOthers, loading, error } = useAppSelector((state) => state.share);
  return (
    <TabsContent value="sent">
      {error.toOthers && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>
            {typeof error === "string" ? error : "Failed to load shared files."}
          </AlertDescription>
        </Alert>
      )}
      {loading.toOthers ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
          <span className="ml-2 text-lg text-gray-600">Loading Shares...</span>
        </div>
      ) : sharesToOthers.length > 0 ? (
        <ul className="space-y-3">
          {[...sharesToOthers]
            .sort((a, b) => {
              const aInactive = a.used || a.fileIsDeleted;
              const bInactive = b.used || b.fileIsDeleted;
              if (aInactive === bInactive) return 0;
              return aInactive ? 1 : -1;
            })
            .map((share) => (
              <SharedSentItemCard key={share.id} share={share} />
            ))}
        </ul>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
          <p>You haven't shared any files yet</p>
          <p className="text-sm mt-1">
            Files you share with others will appear here
          </p>
        </div>
      )}
    </TabsContent>
  );
};

export default SentShares;



