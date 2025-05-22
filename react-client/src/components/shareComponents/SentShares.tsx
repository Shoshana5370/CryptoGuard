import { useAppDispatch, useAppSelector } from "@/hooks";
import { extendShareExpiration } from "@/features/shares/shareSlice";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Clock, Link2, Loader2 } from "lucide-react";
import ExpirationEditor from "./ExpirationEditor";
import { Button } from "@/styles/ui/button";
import { useState } from "react";
import { TabsContent } from "@/styles/ui/tabs";
const SentShares = () => {
  const { sharesToOthers, loading, error } = useAppSelector((state) => state.share);
  const dispatch = useAppDispatch();
  const [editingShareId, setEditingShareId] = useState<string>("");
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
          {sharesToOthers.map((share) => (
            <li
              key={share.id}
              className="border p-3 rounded bg-white shadow-sm relative flex justify-between items-start"
            >
              <div>
                Shared to{" "}
                <strong>
                  {share.recipientUserName || share.recipientEmail}
                </strong>{" "}
                – file: <strong>{share.fileName}</strong>

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
              </div>

              {!share.used && !share.fileDeleted && (
                <div className="ml-4 mt-1 flex items-center gap-1 text-sm">
                  {editingShareId === share.id.toString() ? (
                    <ExpirationEditor
                      currentDate={share.expiresAt}
                      onSave={(newDate) => {
                        dispatch(
                          extendShareExpiration({
                            id: share.id,
                            newDate: newDate.toISOString(),
                          })
                        );
                        setEditingShareId("");
                      }}
                      onCancel={() => setEditingShareId("")}
                    />
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setEditingShareId(share.id.toString())
                      }
                    >
                      <Clock className="w-4 h-4 mr-1" />
                      Extend
                    </Button>
                  )}
                </div>
              )}
            </li>
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



