import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Loader2, Link2 } from "lucide-react";
import { useAppSelector } from "@/hooks";
import { TabsContent } from "@/styles/ui/tabs";
import ReceivedShareItem from "./ReceivedShareItem";
const ReceivedShares = ({ onSelect }) => {
    const { sharesWithMe, loading, error } = useAppSelector((state) => state.share);
    return (_jsxs(TabsContent, { value: "received", children: [error.toOthers && (_jsx(Alert, { variant: "destructive", className: "mb-6", children: _jsx(AlertDescription, { children: typeof error === "string" ? error : "Failed to load files" }) })), loading.toOthers ? (_jsxs("div", { className: "flex justify-center items-center py-12", children: [_jsx(Loader2, { className: "w-8 h-8 animate-spin text-emerald-600" }), _jsx("span", { className: "ml-3 text-lg text-gray-600", children: "Loading Shares..." })] })) : sharesWithMe.length > 0 ? (_jsx("ul", { className: "space-y-3", children: [...sharesWithMe]
                    .sort((a, b) => {
                    const aInactive = a.used || a.fileIsDeleted;
                    const bInactive = b.used || b.fileIsDeleted;
                    if (aInactive === bInactive)
                        return 0;
                    return aInactive ? 1 : -1;
                })
                    .map((share) => (_jsx(ReceivedShareItem, { share: share, onSelect: onSelect }, share.id))) })) : (_jsxs("div", { className: "text-center py-10 text-gray-500", children: [_jsx(Link2, { className: "h-12 w-12 mx-auto text-gray-300 mb-3" }), _jsx("p", { className: "text-lg font-medium", children: "No files have been shared with you yet" }), _jsx("p", { className: "text-sm mt-1", children: "They will appear here once available" })] }))] }));
};
export default ReceivedShares;
