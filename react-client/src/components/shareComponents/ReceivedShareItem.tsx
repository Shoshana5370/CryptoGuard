import { ShareDto } from "@/types/ShareDto";

interface Props {
    share: ShareDto;
    onSelect: (shareId: string, fileName: string) => void;
}

const ReceivedShareItem: React.FC<Props> = ({ share, onSelect }) => {
    const isInactive = share.used || share.fileIsDeleted;
    return (
        <li
            onClick={() => {
                if (!isInactive) onSelect(share.id.toString(), share.fileName ?? "");
            }}
            className="group bg-white border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between transition-shadow hover:shadow-md cursor-pointer"
        >
            <div className="text-gray-800 text-sm space-y-1">
                <p className="text-base font-semibold text-gray-900">
                    From: <span className="font-medium">{share.sharedByUserName}</span>
                </p>
                <p>
                    File: <span className="font-medium">{share.fileName}</span>
                </p>
                {(share.used || share.fileIsDeleted) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {share.used && (
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium w-fit">
                               📂 Accessed
                            </span>
                        )}
                        {share.fileIsDeleted && (
                            <span className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium w-fit">
                              🚫 Unavailable
                            </span>
                        )}             </div>
                )}
            </div>
        </li>
    );
}
export default ReceivedShareItem;