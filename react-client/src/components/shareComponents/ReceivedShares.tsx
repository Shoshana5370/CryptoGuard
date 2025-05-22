
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Loader2, Link2 } from "lucide-react";
import { useAppSelector } from "@/hooks";
import { TabsContent } from "@/styles/ui/tabs";
import ReceivedShareItem from "./ReceivedShareItem";
interface Props {
  onSelect: (shareId: string, fileName: string) => void;
}
const ReceivedShares = ({ onSelect }: Props) => {

  const { sharesWithMe, loading, error } = useAppSelector((state) => state.share);
  return (
    <TabsContent value="received">
      {error.toOthers && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>
            {typeof error === "string" ? error : "Failed to load files"}
          </AlertDescription>
        </Alert>
      )}
      {loading.toOthers ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
          <span className="ml-3 text-lg text-gray-600">Loading Shares...</span>
        </div>
      ) : sharesWithMe.length > 0 ? (
        <ul className="space-y-3">
          {[...sharesWithMe]
            .sort((a, b) => {
              const aInactive = a.used || a.fileIsDeleted;
              const bInactive = b.used || b.fileIsDeleted;
              if (aInactive === bInactive) return 0;
              return aInactive ? 1 : -1;
            })
            .map((share) => (
              <ReceivedShareItem key={share.id} share={share} onSelect={onSelect} />
            ))}
        </ul>
      ) : (
        <div className="text-center py-10 text-gray-500">
          <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
          <p className="text-lg font-medium">No files have been shared with you yet</p>
          <p className="text-sm mt-1">They will appear here once available</p>
        </div>
      )}
    </TabsContent>
  );
};

export default ReceivedShares;
