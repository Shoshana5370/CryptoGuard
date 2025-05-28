import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState } from "react";
// import { Button } from "@/styles/ui/button";
// type ExpirationEditorProps = {
//     currentDate: string;
//     onSave: (newDate: Date) => void;
//     onCancel: () => void;
// };
// const ExpirationEditor = ({
//     currentDate,
//     onSave,
//     onCancel,
// }: ExpirationEditorProps) => {
//     const [date, setDate] = useState<Date>(new Date(currentDate));
//     return (
//         <div className="flex items-center gap-2">
//             <input
//                 type="date"
//                 className="border rounded px-2 py-1 text-sm"
//                 value={date.toISOString().split("T")[0]}
//                 onChange={(e) => setDate(new Date(e.target.value))}
//             />
//             <Button className="bg-emerald-600 hover:bg-emerald-700" size="sm" onClick={() => onSave(date)} >Save</Button>
//             <Button size="sm" variant="ghost" onClick={onCancel}> Cancel</Button>
//         </div>
//     );
// }
// export default ExpirationEditor;
import { useState } from "react";
import { Button } from "@/styles/ui/button";
import { Calendar, Check, X } from "lucide-react";
// import { motion } from "framer-motion";
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
