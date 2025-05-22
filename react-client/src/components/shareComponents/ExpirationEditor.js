import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/styles/ui/button";
const ExpirationEditor = ({ currentDate, onSave, onCancel, }) => {
    const [date, setDate] = useState(new Date(currentDate));
    return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "date", className: "border rounded px-2 py-1 text-sm", value: date.toISOString().split("T")[0], onChange: (e) => setDate(new Date(e.target.value)) }), _jsx(Button, { className: "bg-emerald-600 hover:bg-emerald-700", size: "sm", onClick: () => onSave(date), children: "Save" }), _jsx(Button, { size: "sm", variant: "ghost", onClick: onCancel, children: " Cancel" })] }));
};
export default ExpirationEditor;
