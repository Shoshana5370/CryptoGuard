import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Alert, AlertDescription } from "@/styles/ui/alert";
// import { Loader2, Link2 } from "lucide-react";
// import { useAppSelector } from "@/hooks";
// import { TabsContent } from "@/styles/ui/tabs";
// import ReceivedShareItem from "./ReceivedShareItem";
// interface Props {
//   onSelect: (shareId: string, fileName: string) => void;
// }
// const ReceivedShares = ({ onSelect }: Props) => {
//   const { sharesWithMe, loading, error } = useAppSelector((state) => state.share);
//   return (
//     <TabsContent value="received">
//       {error.toOthers && (
//         <Alert variant="destructive" className="mb-6">
//           <AlertDescription>
//             {typeof error === "string" ? error : "Failed to load files"}
//           </AlertDescription>
//         </Alert>
//       )}
//       {loading.toOthers ? (
//         <div className="flex justify-center items-center py-12">
//           <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
//           <span className="ml-3 text-lg text-gray-600">Loading Shares...</span>
//         </div>
//       ) : sharesWithMe.length > 0 ? (
//         <ul className="space-y-3">
//           {[...sharesWithMe]
//             .sort((a, b) => {
//               const aInactive = a.used || a.fileIsDeleted;
//               const bInactive = b.used || b.fileIsDeleted;
//               if (aInactive === bInactive) return 0;
//               return aInactive ? 1 : -1;
//             })
//             .map((share) => (
//               <ReceivedShareItem key={share.id} share={share} onSelect={onSelect} />
//             ))}
//         </ul>
//       ) : (
//         <div className="text-center py-10 text-gray-500">
//           <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
//           <p className="text-lg font-medium">No files have been shared with you yet</p>
//           <p className="text-sm mt-1">They will appear here once available</p>
//         </div>
//       )}
//     </TabsContent>
//   );
// };
// export default ReceivedShares;
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Loader2, Users, AlertTriangle } from "lucide-react";
import { useAppSelector } from "@/hooks";
import { TabsContent } from "@/styles/ui/tabs";
import ReceivedShareItem from "./ReceivedShareItem";
import { motion } from "framer-motion";
const ReceivedShares = ({ onSelect }) => {
    const { sharesWithMe, loading, error } = useAppSelector((state) => state.share);
    return (_jsxs(TabsContent, { value: "received", className: "mt-0", children: [error.toOthers && (_jsxs(Alert, { variant: "destructive", className: "mb-6 border-red-200 bg-red-50", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: typeof error === "string" ? error : "Failed to load files" })] })), loading.toOthers ? (_jsxs("div", { className: "flex flex-col justify-center items-center py-16", children: [_jsx("div", { className: "p-4 rounded-full bg-emerald-100 mb-4", children: _jsx(Loader2, { className: "w-8 h-8 animate-spin text-emerald-600" }) }), _jsx("span", { className: "text-lg font-medium text-gray-700", children: "Loading shared files..." }), _jsx("span", { className: "text-sm text-gray-500 mt-1", children: "Please wait a moment" })] })) : sharesWithMe.length > 0 ? (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "mb-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100", children: _jsxs("p", { className: "text-sm text-gray-700", children: [_jsx("span", { className: "font-semibold text-emerald-700", children: sharesWithMe.length }), " file(s) shared with you"] }) }), _jsx("ul", { className: "space-y-4", children: [...sharesWithMe]
                            .sort((a, b) => {
                            const aInactive = a.used || a.fileIsDeleted;
                            const bInactive = b.used || b.fileIsDeleted;
                            if (aInactive === bInactive)
                                return 0;
                            return aInactive ? 1 : -1;
                        })
                            .map((share, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.1 }, children: _jsx(ReceivedShareItem, { share: share, onSelect: onSelect }) }, share.id))) })] })) : (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 }, className: "text-center py-16", children: [_jsx("div", { className: "p-6 rounded-full bg-emerald-100 w-fit mx-auto mb-6", children: _jsx(Users, { className: "h-12 w-12 text-emerald-400" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: "No shared files yet" }), _jsx("p", { className: "text-gray-500 max-w-md mx-auto", children: "Files shared with you by others will appear here. Check back later or ask colleagues to share files with you." })] }))] }));
};
export default ReceivedShares;
