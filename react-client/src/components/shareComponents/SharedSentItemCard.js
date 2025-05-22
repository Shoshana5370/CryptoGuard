import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { extendShareExpiration } from "@/features/shares/shareSlice";
import { useAppDispatch } from "@/hooks";
import { Button } from "@/styles/ui/button";
import { Clock } from "lucide-react";
import { useState } from "react";
import ExpirationEditor from "./ExpirationEditor";
const SharedSentItemCard = ({ share }) => {
    const dispatch = useAppDispatch();
    const [editing, setEditing] = useState(false);
    return (_jsxs("li", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col md:flex-row md:justify-between md:items-center transition hover:shadow-md", children: [_jsxs("div", { className: "text-sm text-gray-700 space-y-1", children: [_jsxs("div", { className: "font-medium text-base text-gray-900", children: ["Shared with: ", _jsx("span", { className: "font-semibold", children: share.recipientEmail })] }), _jsxs("div", { children: ["File: ", _jsx("span", { className: "font-semibold", children: share.fileName })] }), _jsxs("div", { className: "flex gap-2 mt-2", children: [share.fileIsDeleted && (_jsx("span", { className: "text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium", children: "\u274C Removed" })), share.used && (_jsx("span", { className: "text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium", children: "\uD83D\uDCE5 Downloaded" }))] })] }), !share.used && !share.fileIsDeleted && (_jsx("div", { className: "mt-4 md:mt-0 flex items-center", children: editing ? (_jsx(ExpirationEditor, { currentDate: share.expiresAt, onSave: (newDate) => {
                        dispatch(extendShareExpiration({
                            id: share.id,
                            newDate: newDate.toISOString(),
                        }));
                        setEditing(false);
                    }, onCancel: () => setEditing(false) })) : (_jsxs(Button, { variant: "outline", size: "sm", onClick: () => setEditing(true), children: [_jsx(Clock, { className: "w-4 h-4 mr-1" }), "Extend Access"] })) }))] }));
};
export default SharedSentItemCard;
