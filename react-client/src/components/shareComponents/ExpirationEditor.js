import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/styles/ui/button";
import { Calendar, Check, X } from "lucide-react";
import { Input } from "@/styles/ui/input";
const ExpirationEditor = ({ currentDate, onSave, onCancel }) => {
    const [newDate, setNewDate] = useState(new Date(currentDate).toISOString().split('T')[0]);
    const handleSave = () => {
        if (newDate) {
            onSave(new Date(newDate));
        }
    };
    return (_jsxs("div", { className: "flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2 shadow-sm", children: [_jsx(Calendar, { className: "w-4 h-4 text-gray-400" }), _jsx(Input, { type: "date", value: newDate, onChange: (e) => setNewDate(e.target.value), className: "h-8 text-sm border-none focus:ring-0 p-1", min: new Date().toISOString().split('T')[0] }), _jsx(Button, { size: "sm", onClick: handleSave, className: "h-8 w-8 p-0 bg-green-500 hover:bg-green-600", children: _jsx(Check, { className: "w-3 h-3" }) }), _jsx(Button, { variant: "outline", size: "sm", onClick: onCancel, className: "h-8 w-8 p-0", children: _jsx(X, { className: "w-3 h-3" }) })] }));
};
export default ExpirationEditor;
