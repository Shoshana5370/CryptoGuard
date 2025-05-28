import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/styles/ui/tabs";
// import { fetchSharesWithMe, fetchSharesToOthers } from "@/features/shares/shareSlice";
// import ReceivedShares from "./ReceivedShares";
// import SentShares from "./SentShares";
// import SharePreviewDialog from "./SharePreviewDialog";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
// import { Share2 } from "lucide-react";
// const Shares = () => {
//   const dispatch = useAppDispatch();
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedShareCode, setSelectedShareCode] = useState("");
//   const [selectedShareName, setSelectedShareName] = useState("");
//   const { user } = useAppSelector((state) => state.auth);
//   useEffect(() => {
//     if (user) {
//       dispatch(fetchSharesWithMe());
//       dispatch(fetchSharesToOthers());
//     }
//   }, [dispatch, user]);
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Shared Files</h1>
//           <p className="text-gray-500 mt-1">
//             Access files that have been shared with you
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <Card className="shadow-md border border-gray-200">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Share2 className="w-5 h-5 text-emerald-600" />
//                 Shared Files History
//               </CardTitle>
//               <CardDescription>
//                 Files that have been shared with you will appear here
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Tabs defaultValue="received">
//                 <TabsList className="mb-4">
//                   <TabsTrigger value="received">Received</TabsTrigger>
//                   <TabsTrigger value="sent">Sent</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="received">
//                   <ReceivedShares
//                     onSelect={(id, name) => {
//                       setSelectedShareCode(id);
//                       setSelectedShareName(name);
//                       setDialogOpen(true);
//                     }}
//                   />
//                 </TabsContent>
//                 <TabsContent value="sent">
//                   <SentShares />
//                 </TabsContent>
//               </Tabs>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <SharePreviewDialog
//         open={dialogOpen}
//         onClose={() => setDialogOpen(false)}
//         shareCode={selectedShareCode}
//         fileName={selectedShareName}
//       />
//     </div>
//   );
// };
// export default Shares;
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/styles/ui/tabs";
import { fetchSharesWithMe, fetchSharesToOthers } from "@/features/shares/shareSlice";
import ReceivedShares from "./ReceivedShares";
import SentShares from "./SentShares";
import SharePreviewDialog from "./SharePreviewDialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { Share2, Users, Send } from "lucide-react";
const Shares = () => {
    const dispatch = useAppDispatch();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedShareCode, setSelectedShareCode] = useState("");
    const [selectedShareName, setSelectedShareName] = useState("");
    const { user } = useAppSelector((state) => state.auth);
    const { sharesWithMe, sharesToOthers } = useAppSelector((state) => state.share);
    useEffect(() => {
        if (user) {
            dispatch(fetchSharesWithMe());
            dispatch(fetchSharesToOthers());
        }
    }, [dispatch, user]);
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg", children: _jsx(Share2, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent", children: "File Sharing Center" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Manage and access your shared files seamlessly" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: [_jsx("div", { className: "bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all duration-300", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Files Received" }), _jsx("p", { className: "text-2xl font-bold text-emerald-600", children: sharesWithMe.length })] }), _jsx("div", { className: "p-3 rounded-xl bg-emerald-100", children: _jsx(Users, { className: "w-5 h-5 text-emerald-600" }) })] }) }), _jsx("div", { className: "bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all duration-300", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Files Sent" }), _jsx("p", { className: "text-2xl font-bold text-orange-600", children: sharesToOthers.length })] }), _jsx("div", { className: "p-3 rounded-xl bg-orange-100", children: _jsx(Send, { className: "w-5 h-5 text-orange-600" }) })] }) })] })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: _jsx("div", { className: "lg:col-span-3", children: _jsxs(Card, { className: "shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 via-emerald-600 to-orange-500 h-1" }), _jsxs(CardHeader, { className: "pb-6", children: [_jsxs(CardTitle, { className: "flex items-center gap-3 text-xl", children: [_jsx("div", { className: "p-2 rounded-lg bg-emerald-100", children: _jsx(Share2, { className: "w-5 h-5 text-emerald-600" }) }), "Shared Files Management"] }), _jsx(CardDescription, { className: "text-gray-600", children: "View and manage files shared with you and files you've shared with others" })] }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "received", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2 mb-6 bg-gray-100 p-1 rounded-xl", children: [_jsxs(TabsTrigger, { value: "received", className: "rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm transition-all", children: [_jsx(Users, { className: "w-4 h-4 mr-2" }), "Received Files"] }), _jsxs(TabsTrigger, { value: "sent", className: "rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm transition-all", children: [_jsx(Send, { className: "w-4 h-4 mr-2" }), "Sent Files"] })] }), _jsx(TabsContent, { value: "received", className: "mt-0", children: _jsx(ReceivedShares, { onSelect: (id, name) => {
                                                        setSelectedShareCode(id);
                                                        setSelectedShareName(name);
                                                        setDialogOpen(true);
                                                    } }) }), _jsx(TabsContent, { value: "sent", className: "mt-0", children: _jsx(SentShares, {}) })] }) })] }) }) }), _jsx(SharePreviewDialog, { open: dialogOpen, onClose: () => setDialogOpen(false), shareCode: selectedShareCode, fileName: selectedShareName })] }) }));
};
export default Shares;
