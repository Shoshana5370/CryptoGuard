import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { extendShareExpiration } from "@/features/shares/shareSlice";
// import { useAppDispatch } from "@/hooks";
// import { Button } from "@/styles/ui/button";
// import { Clock } from "lucide-react";
// import { useState } from "react";
// import ExpirationEditor from "./ExpirationEditor";
// import { ShareDto } from "@/types/ShareDto";
// type SharedSentItemCardProps = {
//   share: ShareDto;
// };
// const SharedSentItemCard = ({ share }: SharedSentItemCardProps) => {
//   const dispatch = useAppDispatch();
//   const [editing, setEditing] = useState(false);
//   return (
//     <li className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col md:flex-row md:justify-between md:items-center transition hover:shadow-md">
//       <div className="text-sm text-gray-700 space-y-1">
//         <div className="font-medium text-base text-gray-900">
//           Shared with: <span className="font-semibold">{share.recipientEmail}</span>
//         </div>
//         <div>
//           File: <span className="font-semibold">{share.fileName}</span>
//         </div>
//         <div className="flex gap-2 mt-2">
//           {share.fileIsDeleted && (
//             <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
//              ❌ Removed
//             </span>
//           )}
//           {share.used && (
//             <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
//               📥 Downloaded
//             </span>
//           )}
//         </div>
//       </div>
//       {!share.used && !share.fileIsDeleted && (
//         <div className="mt-4 md:mt-0 flex items-center">
//           {editing ? (
//             <ExpirationEditor
//               currentDate={share.expiresAt}
//               onSave={(newDate) => {
//                 dispatch(
//                   extendShareExpiration({
//                     id: share.id,
//                     newDate: newDate.toISOString(),
//                   })
//                 );
//                 setEditing(false);
//               }}
//               onCancel={() => setEditing(false)}
//             />
//           ) : (
//             <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
//               <Clock className="w-4 h-4 mr-1" />
//               Extend Access
//             </Button>
//           )}
//         </div>
//       )}
//     </li>
//   );
// }
// export default SharedSentItemCard;
import { extendShareExpiration } from "@/features/shares/shareSlice";
import { useAppDispatch } from "@/hooks";
import { Button } from "@/styles/ui/button";
import { Clock, Mail, FileText, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import ExpirationEditor from "./ExpirationEditor";
import { motion } from "framer-motion";
const SharedSentItemCard = ({ share }) => {
    const dispatch = useAppDispatch();
    const [editing, setEditing] = useState(false);
    return (_jsx(motion.li, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: "group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 overflow-hidden", children: _jsx("div", { className: "p-6", children: _jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "p-3 rounded-xl bg-orange-100 flex-shrink-0", children: _jsx(Mail, { className: "w-5 h-5 text-orange-600" }) }), _jsxs("div", { className: "space-y-2 flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [_jsx("span", { className: "text-gray-600 text-sm", children: "Shared with:" }), _jsx("span", { className: "font-semibold text-gray-900 bg-orange-50 px-3 py-1 rounded-full text-sm", children: share.recipientEmail })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4 text-gray-400" }), _jsx("span", { className: "text-sm text-gray-600", children: "File:" }), _jsx("span", { className: "font-medium text-gray-900", children: share.fileName })] }), _jsxs("div", { className: "flex flex-wrap gap-2 mt-3", children: [share.fileIsDeleted && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium border border-red-200", children: [_jsx(XCircle, { className: "w-3 h-3" }), "File Removed"] })), share.used && (_jsxs(motion.span, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium border border-emerald-200", children: [_jsx(CheckCircle, { className: "w-3 h-3" }), "Downloaded"] }))] })] })] }) }), !share.used && !share.fileIsDeleted && (_jsx("div", { className: "flex-shrink-0", children: editing ? (_jsx(ExpirationEditor, { currentDate: share.expiresAt, onSave: (newDate) => {
                                dispatch(extendShareExpiration({
                                    id: share.id,
                                    newDate: newDate.toISOString(),
                                }));
                                setEditing(false);
                            }, onCancel: () => setEditing(false) })) : (_jsxs(Button, { variant: "outline", size: "sm", onClick: () => setEditing(true), className: "bg-white hover:bg-orange-50 border-orange-200 text-orange-700 hover:text-orange-800 rounded-xl transition-all duration-200", children: [_jsx(Clock, { className: "w-4 h-4 mr-2" }), "Extend Access"] })) }))] }) }) }));
};
export default SharedSentItemCard;
