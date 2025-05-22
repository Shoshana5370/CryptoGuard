import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ReceivedShareItem = ({ share, onSelect }) => {
    const isInactive = share.used || share.fileIsDeleted;
    return (_jsx("li", { onClick: () => {
            if (!isInactive)
                onSelect(share.id.toString(), share.fileName ?? "");
        }, className: "group bg-white border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between transition-shadow hover:shadow-md cursor-pointer", children: _jsxs("div", { className: "text-gray-800 text-sm space-y-1", children: [_jsxs("p", { className: "text-base font-semibold text-gray-900", children: ["From: ", _jsx("span", { className: "font-medium", children: share.sharedByUserName })] }), _jsxs("p", { children: ["File: ", _jsx("span", { className: "font-medium", children: share.fileName })] }), (share.used || share.fileIsDeleted) && (_jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [share.used && (_jsx("span", { className: "text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium w-fit", children: "\uD83D\uDCE5 Downloaded" })), share.fileIsDeleted && (_jsx("span", { className: "text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium w-fit", children: "\uD83D\uDEAB Unavailable" })), "             "] }))] }) }));
};
export default ReceivedShareItem;
