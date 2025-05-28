// import { extendShareExpiration } from "@/features/shares/shareSlice";
// import { useAppDispatch } from "@/hooks";
// import { Button } from "@/styles/ui/button";
// import { Clock } from "lucide-react";
// import { useState } from "react";
// import ExpirationEditor from "./ExpirationEditor";
// import { ShareDto } from "@/types/ShareDto";

// type SharedSentItemCardProps = {
//   share: ShareDto;
// };


// const SharedSentItemCard = ({ share }: SharedSentItemCardProps) => {
//   const dispatch = useAppDispatch();
//   const [editing, setEditing] = useState(false);

//   return (
//     <li className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col md:flex-row md:justify-between md:items-center transition hover:shadow-md">
//       <div className="text-sm text-gray-700 space-y-1">
//         <div className="font-medium text-base text-gray-900">
//           Shared with: <span className="font-semibold">{share.recipientEmail}</span>
//         </div>
//         <div>
//           File: <span className="font-semibold">{share.fileName}</span>
//         </div>
//         <div className="flex gap-2 mt-2">
//           {share.fileIsDeleted && (
//             <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
//              ❌ Removed
//             </span>
//           )}
//           {share.used && (
//             <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
//               📥 Downloaded
//             </span>
//           )}
//         </div>
//       </div>

//       {!share.used && !share.fileIsDeleted && (
//         <div className="mt-4 md:mt-0 flex items-center">
//           {editing ? (
//             <ExpirationEditor
//               currentDate={share.expiresAt}
//               onSave={(newDate) => {
//                 dispatch(
//                   extendShareExpiration({
//                     id: share.id,
//                     newDate: newDate.toISOString(),
//                   })
//                 );
//                 setEditing(false);
//               }}
//               onCancel={() => setEditing(false)}
//             />
//           ) : (
//             <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
//               <Clock className="w-4 h-4 mr-1" />
//               Extend Access
//             </Button>
//           )}
//         </div>
//       )}
//     </li>
//   );
// }
// export default SharedSentItemCard;
import { extendShareExpiration } from "@/features/shares/shareSlice";
import { useAppDispatch } from "@/hooks";
import { Button } from "@/styles/ui/button";
import { Clock, Mail, FileText, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import ExpirationEditor from "./ExpirationEditor";
import { ShareDto } from "@/types/ShareDto";
import { motion } from "framer-motion";

type SharedSentItemCardProps = {
  share: ShareDto;
};

const SharedSentItemCard = ({ share }: SharedSentItemCardProps) => {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-100 flex-shrink-0">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-gray-600 text-sm">Shared with:</span>
                  <span className="font-semibold text-gray-900 bg-orange-50 px-3 py-1 rounded-full text-sm">
                    {share.recipientEmail}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">File:</span>
                  <span className="font-medium text-gray-900">{share.fileName}</span>
                </div>
                
                {/* Status badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {share.fileIsDeleted && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium border border-red-200"
                    >
                      <XCircle className="w-3 h-3" />
                      File Removed
                    </motion.span>
                  )}
                  {share.used && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-medium border border-emerald-200"
                    >
                      <CheckCircle className="w-3 h-3" />
                      Downloaded
                    </motion.span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          {!share.used && !share.fileIsDeleted && (
            <div className="flex-shrink-0">
              {editing ? (
                <ExpirationEditor
                  currentDate={share.expiresAt}
                  onSave={(newDate) => {
                    dispatch(
                      extendShareExpiration({
                        id: share.id,
                        newDate: newDate.toISOString(),
                      })
                    );
                    setEditing(false);
                  }}
                  onCancel={() => setEditing(false)}
                />
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setEditing(true)}
                  className="bg-white hover:bg-orange-50 border-orange-200 text-orange-700 hover:text-orange-800 rounded-xl transition-all duration-200"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Extend Access
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
};

export default SharedSentItemCard;
