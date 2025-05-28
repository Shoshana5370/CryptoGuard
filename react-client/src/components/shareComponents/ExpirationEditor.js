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
import { Calendar, Save, X } from "lucide-react";
import { motion } from "framer-motion";
const ExpirationEditor = ({ currentDate, onSave, onCancel, }) => {
    const [date, setDate] = useState(new Date(currentDate));
    return (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, className: "flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-lg", children: [_jsxs("div", { className: "relative", children: [_jsx(Calendar, { className: "absolute left-3 top-2.5 h-4 w-4 text-gray-400" }), _jsx("input", { type: "date", className: "pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all", value: date.toISOString().split("T")[0], onChange: (e) => setDate(new Date(e.target.value)) })] }), _jsxs(Button, { size: "sm", onClick: () => onSave(date), className: "bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm", children: [_jsx(Save, { className: "w-4 h-4 mr-1" }), "Save"] }), _jsxs(Button, { size: "sm", variant: "ghost", onClick: onCancel, className: "text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg", children: [_jsx(X, { className: "w-4 h-4 mr-1" }), "Cancel"] })] }));
};
export default ExpirationEditor;
