import { extendShareExpiration } from "@/features/shares/shareSlice";
import { useAppDispatch } from "@/hooks";
import { Button } from "@/styles/ui/button";
import { Clock } from "lucide-react";
import { useState } from "react";
import ExpirationEditor from "./ExpirationEditor";
import { ShareDto } from "@/types/ShareDto";

type SharedSentItemCardProps = {
  share: ShareDto;
};


const SharedSentItemCard = ({ share }: SharedSentItemCardProps) => {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);

  return (
    <li className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col md:flex-row md:justify-between md:items-center transition hover:shadow-md">
      <div className="text-sm text-gray-700 space-y-1">
        <div className="font-medium text-base text-gray-900">
          Shared with: <span className="font-semibold">{share.recipientEmail}</span>
        </div>
        <div>
          File: <span className="font-semibold">{share.fileName}</span>
        </div>
        <div className="flex gap-2 mt-2">
          {share.fileIsDeleted && (
            <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
             ❌ Removed
            </span>
          )}
          {share.used && (
            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
              📥 Downloaded
            </span>
          )}
        </div>
      </div>

      {!share.used && !share.fileIsDeleted && (
        <div className="mt-4 md:mt-0 flex items-center">
          {editing ? (
            <ExpirationEditor
              currentDate={share.expiresAt}
              onSave={(newDate) => {
                dispatch(
                  extendShareExpiration({
                    id: share.id,
                    newDate: newDate.toISOString(),
                  })
                );
                setEditing(false);
              }}
              onCancel={() => setEditing(false)}
            />
          ) : (
            <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
              <Clock className="w-4 h-4 mr-1" />
              Extend Access
            </Button>
          )}
        </div>
      )}
    </li>
  );
}
export default SharedSentItemCard;