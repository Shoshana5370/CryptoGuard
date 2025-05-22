import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/styles/ui/tabs";
import { fetchSharesWithMe, fetchSharesToOthers } from "@/features/shares/shareSlice";
import ReceivedShares from "./ReceivedShares";
import SentShares from "./SentShares";
import SharePreviewDialog from "./SharePreviewDialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { Share2 } from "lucide-react";
const Shares = () => {
    const dispatch = useAppDispatch();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedShareCode, setSelectedShareCode] = useState("");
    const [selectedShareName, setSelectedShareName] = useState("");
    const { user } = useAppSelector((state) => state.auth);
    useEffect(() => {
        if (user) {
            dispatch(fetchSharesWithMe());
            dispatch(fetchSharesToOthers());
        }
    }, [dispatch, user]);
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4", children: _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Shared Files" }), _jsx("p", { className: "text-gray-500 mt-1", children: "Access files that have been shared with you" })] }) }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: _jsx("div", { className: "lg:col-span-2", children: _jsxs(Card, { className: "shadow-md border border-gray-200", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Share2, { className: "w-5 h-5 text-emerald-600" }), "Shared Files History"] }), _jsx(CardDescription, { children: "Files that have been shared with you will appear here" })] }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "received", children: [_jsxs(TabsList, { className: "mb-4", children: [_jsx(TabsTrigger, { value: "received", children: "Received" }), _jsx(TabsTrigger, { value: "sent", children: "Sent" })] }), _jsx(TabsContent, { value: "received", children: _jsx(ReceivedShares, { onSelect: (id, name) => {
                                                    setSelectedShareCode(id);
                                                    setSelectedShareName(name);
                                                    setDialogOpen(true);
                                                } }) }), _jsx(TabsContent, { value: "sent", children: _jsx(SentShares, {}) })] }) })] }) }) }), _jsx(SharePreviewDialog, { open: dialogOpen, onClose: () => setDialogOpen(false), shareCode: selectedShareCode, fileName: selectedShareName })] }));
};
export default Shares;
