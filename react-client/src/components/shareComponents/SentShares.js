import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Alert, AlertDescription } from "@/styles/ui/alert";
// import { Link2, Loader2 } from "lucide-react";
// import { TabsContent } from "@/styles/ui/tabs";
// import SharedSentItemCard from "./SharedSentItemCard";
// import { useAppSelector } from "@/hooks";
// const SentShares = () => {
//   const { sharesToOthers, loading, error } = useAppSelector((state) => state.share);
//   return (
//     <TabsContent value="sent">
//       {error.toOthers && (
//         <Alert variant="destructive" className="mb-6">
//           <AlertDescription>
//             {typeof error === "string" ? error : "Failed to load shared files."}
//           </AlertDescription>
//         </Alert>
//       )}
//       {loading.toOthers ? (
//         <div className="flex justify-center items-center py-12">
//           <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
//           <span className="ml-2 text-lg text-gray-600">Loading Shares...</span>
//         </div>
//       ) : sharesToOthers.length > 0 ? (
//         <ul className="space-y-3">
//           {[...sharesToOthers]
//             .sort((a, b) => {
//               const aInactive = a.used || a.fileIsDeleted;
//               const bInactive = b.used || b.fileIsDeleted;
//               if (aInactive === bInactive) return 0;
//               return aInactive ? 1 : -1;
//             })
//             .map((share) => (
//               <SharedSentItemCard key={share.id} share={share} />
//             ))}
//         </ul>
//       ) : (
//         <div className="text-center py-8 text-gray-500">
//           <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
//           <p>You haven't shared any files yet</p>
//           <p className="text-sm mt-1">
//             Files you share with others will appear here
//           </p>
//         </div>
//       )}
//     </TabsContent>
//   );
// };
// export default SentShares;
import { Alert, AlertDescription } from "@/styles/ui/alert";
import { Send, Loader2, AlertTriangle } from "lucide-react";
import { TabsContent } from "@/styles/ui/tabs";
import SharedSentItemCard from "./SharedSentItemCard";
import { useAppSelector } from "@/hooks";
import { motion } from "framer-motion";
const SentShares = () => {
    const { sharesToOthers, loading, error } = useAppSelector((state) => state.share);
    return (_jsxs(TabsContent, { value: "sent", className: "mt-0", children: [error.toOthers && (_jsxs(Alert, { variant: "destructive", className: "mb-6 border-red-200 bg-red-50", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: typeof error === "string" ? error : "Failed to load shared files." })] })), loading.toOthers ? (_jsxs("div", { className: "flex flex-col justify-center items-center py-16", children: [_jsx("div", { className: "p-4 rounded-full bg-orange-100 mb-4", children: _jsx(Loader2, { className: "w-8 h-8 animate-spin text-orange-600" }) }), _jsx("span", { className: "text-lg font-medium text-gray-700", children: "Loading your shared files..." }), _jsx("span", { className: "text-sm text-gray-500 mt-1", children: "Please wait a moment" })] })) : sharesToOthers.length > 0 ? (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "mb-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border border-orange-100", children: _jsxs("p", { className: "text-sm text-gray-700", children: [_jsx("span", { className: "font-semibold text-orange-700", children: sharesToOthers.length }), " file(s) shared with others"] }) }), _jsx("ul", { className: "space-y-4", children: [...sharesToOthers]
                            .sort((a, b) => {
                            const aInactive = a.used || a.fileIsDeleted;
                            const bInactive = b.used || b.fileIsDeleted;
                            if (aInactive === bInactive)
                                return 0;
                            return aInactive ? 1 : -1;
                        })
                            .map((share, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.1 }, children: _jsx(SharedSentItemCard, { share: share }) }, share.id))) })] })) : (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 }, className: "text-center py-16", children: [_jsx("div", { className: "p-6 rounded-full bg-orange-100 w-fit mx-auto mb-6", children: _jsx(Send, { className: "h-12 w-12 text-orange-400" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: "No files shared yet" }), _jsx("p", { className: "text-gray-500 max-w-md mx-auto", children: "Files you share with others will appear here. Start sharing to collaborate with your team!" })] }))] }));
};
export default SentShares;
