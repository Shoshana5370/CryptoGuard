import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { Pencil, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/styles/hooks/use-toast";
const RenameDialog = ({ isOpen, onClose, file, onRename, updateError, isUpdating, }) => {
    const [newName, setNewName] = useState(file?.name || "");
    useEffect(() => {
        setNewName(file?.name || "");
    }, [file]);
    useEffect(() => {
        if (updateError) {
            toast({
                title: "Rename failed",
                description: updateError,
                variant: "destructive",
            });
        }
    }, [updateError]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newName.trim() || newName === file?.name)
            return;
        const updatedFile = {
            ...file,
            name: newName.trim(),
            updatedAt: new Date().toISOString(),
        };
        onRename(updatedFile);
        toast({
            title: "File renamed",
            description: `New name: ${newName.trim()}`,
        });
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm", children: [_jsx("div", { className: "bg-gradient-to-r from-orange-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg" }), _jsxs(DialogHeader, { className: "text-center pb-6", children: [_jsxs(DialogTitle, { className: "flex items-center justify-center gap-3 text-xl", children: [_jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg", children: _jsx(Pencil, { className: "w-5 h-5 text-white" }) }), _jsx("span", { className: "bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent", children: "Rename File" })] }), _jsxs(DialogDescription, { className: "text-gray-600 mt-2", children: ["Give", " ", _jsxs("span", { className: "font-semibold text-orange-600", children: ["\"", file?.name, "\""] }), " ", "a new name"] })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs(Label, { htmlFor: "name", className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4" }), "New File Name"] }), _jsx("div", { className: "relative", children: _jsx(Input, { id: "name", value: newName, onChange: (e) => setNewName(e.target.value), placeholder: "Enter new file name", className: "h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" }) }), newName && newName !== file?.name && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "p-3 bg-orange-50 rounded-lg border border-orange-200", children: _jsxs("p", { className: "text-sm text-orange-700 font-medium", children: ["Preview: ", newName] }) }))] }), _jsxs(DialogFooter, { className: "gap-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onClose, className: "flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all", disabled: isUpdating, children: "Cancel" }), _jsx(Button, { type: "submit", className: "flex-1 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-200", disabled: !newName.trim() || newName === file?.name || isUpdating, children: isUpdating ? (_jsxs("span", { className: "flex items-center justify-center gap-2", children: [_jsx("span", { className: "animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" }), "Renaming..."] })) : (_jsxs(_Fragment, { children: [_jsx(Pencil, { className: "w-4 h-4 mr-2" }), "Rename File"] })) })] })] })] }) }));
};
export default RenameDialog;
