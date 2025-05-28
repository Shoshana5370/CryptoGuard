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

// type ExpirationEditorProps = {
//   currentDate: string;
//   onSave: (newDate: Date) => void;
//   onCancel: () => void;
// };

// const ExpirationEditor = ({
//   currentDate,
//   onSave,
//   onCancel,
// }: ExpirationEditorProps) => {
//   const [date, setDate] = useState<Date>(new Date(currentDate));

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-lg"
//     >
//       <div className="relative">
//         <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//         <input
//           type="date"
//           className="pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//           value={date.toISOString().split("T")[0]}
//           onChange={(e) => setDate(new Date(e.target.value))}
//         />
//       </div>

//       <Button 
//         size="sm" 
//         onClick={() => onSave(date)}
//         className="bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
//       >
//         <Save className="w-4 h-4 mr-1" />
//         Save
//       </Button>
      
//       <Button 
//         size="sm" 
//         variant="ghost" 
//         onClick={onCancel}
//         className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg"
//       >
//         <X className="w-4 h-4 mr-1" />
//         Cancel
//       </Button>
//     </motion.div>
//   );
// };

// export default ExpirationEditor;
interface ExpirationEditorProps {
  currentDate: string;
  onSave: (newDate: Date) => void;
  onCancel: () => void;
}

const ExpirationEditor = ({ currentDate, onSave, onCancel }: ExpirationEditorProps) => {
  const [newDate, setNewDate] = useState(
    new Date(currentDate).toISOString().split('T')[0]
  );

  const handleSave = () => {
    if (newDate) {
      onSave(new Date(newDate));
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
      <Calendar className="w-4 h-4 text-gray-400" />
      <Input
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
        className="h-8 text-sm border-none focus:ring-0 p-1"
        min={new Date().toISOString().split('T')[0]}
      />
      <Button
        size="sm"
        onClick={handleSave}
        className="h-8 w-8 p-0 bg-green-500 hover:bg-green-600"
      >
        <Check className="w-3 h-3" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onCancel}
        className="h-8 w-8 p-0"
      >
        <X className="w-3 h-3" />
      </Button>
    </div>
  );
};

export default ExpirationEditor;