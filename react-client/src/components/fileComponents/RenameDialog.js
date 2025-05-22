import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { Pencil } from "lucide-react";
import { useState } from "react";
const RenameDialog = ({ isOpen, onClose, file, onRename }) => {
    const [newName, setNewName] = useState(file?.name || '');
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFile = {
            ...file,
            name: newName,
            updatedAt: new Date().toISOString(),
        };
        onRename(updatedFile);
        onClose();
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsxs(DialogHeader, { children: [_jsxs(DialogTitle, { className: "flex items-center gap-2", children: [_jsx(Pencil, { className: "w-5 h-5" }), "Rename File"] }), _jsx(DialogDescription, { children: "Enter a new name for your file" })] }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("div", { className: "grid gap-4 py-4", children: _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "File name" }), _jsx(Input, { id: "name", value: newName, onChange: (e) => setNewName(e.target.value), placeholder: "Enter new file name" })] }) }), _jsxs(DialogFooter, { children: [_jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }), _jsx(Button, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", children: "Rename File" })] })] })] }) }));
};
export default RenameDialog;
