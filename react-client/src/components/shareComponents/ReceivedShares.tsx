import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Link2, Loader2 } from "lucide-react";
import { useAppSelector } from "@/hooks";
import { TabsContent } from "@/styles/ui/tabs";

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
            {typeof error === 'string' ? error : 'Failed to load files'}
          </AlertDescription>
        </Alert>
      )}
      {loading.toOthers ? (

          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            <span className="ml-2 text-lg text-gray-600">Loading Shares...</span>
          </div>
        
      ) : sharesWithMe.length > 0 ? (
        <ul className="space-y-3">
          {sharesWithMe.map((share) => (
            <li
              key={share.id}
              onClick={() => {
                if (!share.used && !share.fileDeleted) {
                  onSelect(share.id.toString(), share.fileName ?? "");
                }
              }}
              className={`border p-3 rounded bg-white shadow-sm cursor-pointer hover:bg-gray-50 ${share.used || share.fileDeleted
                  ? "opacity-60 cursor-not-allowed"
                  : ""
                }`}
            >
              Shared by user <strong>{share.sharedByUserName}</strong> – file:{" "}
              <strong>{share.fileName}</strong>

              {share.fileDeleted && (
                <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                  Deleted
                </span>
              )}
              {share.used && (
                <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Used
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
          <p>No files have been shared with you yet</p>
          <p className="text-sm mt-1">
            When someone shares a file with you, it will appear here
          </p>
        </div>
      )}
    </TabsContent>);
};

export default ReceivedShares;
{/* */ }