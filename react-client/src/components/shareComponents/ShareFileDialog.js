import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState } from "react";
// import { useAppSelector } from "@/hooks";
// import { SharePostModel } from "@/types/SharePostModel";
// import { FileDto } from "@/types/FileDto";
// import { Button } from "@/styles/ui/button";
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
// import { Input } from "@/styles/ui/input";
// import { Label } from "@/styles/ui/label";
// import { CalendarIcon, Check, Clock, Mail, Share2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { format } from "date-fns";
// import { Calendar } from "@/styles/ui/calendar";
// import { RootState } from "@/store/store";
// type ShareFileDialogProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   file: FileDto;
//   onShare: (updatedFile: SharePostModel) => void;
// };
// const ShareFileDialog = ({ isOpen, onClose, file, onShare }: ShareFileDialogProps) => {
//   const { status } = useAppSelector((state: RootState) => state.shareFile);
//   const [email, setEmail] = useState("");
//   // const [expiration, setExpiration] = useState<Date | undefined>(new Date());
//   const [expiration, setExpiration] = useState<Date | null>(null);
//   const isValidEmail = (email: string) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const handleShare = async () => {
//     if (!email || !file?.id) return;
//     const payload: SharePostModel = {
//       fileKey: file.id,
//       recipientEmail: email,
//       expiresAt: expiration?.toISOString(),
//     };
//     onShare(payload);
//   };
//   const resetState = () => {
//     setEmail("");
//     setExpiration((new Date()));
//     onClose();
//   };
//   const handleClose = () => {
//     resetState();
//     onClose();
//   };
//   const isSharing = status === "loading";
//   const isSuccess = status === "succeeded";
//   return (
//     <Dialog open={isOpen} onOpenChange={(open) => open ? null : handleClose()}>
//       <DialogContent className="sm:max-w-[500px]">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2 text-xl">
//             <Share2 className="w-5 h-5 text-emerald-600" />
//             Share File
//           </DialogTitle>
//           <DialogDescription>
//             Share “{file?.name}” securely via email.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="space-y-6 pt-4">
//           <div className="space-y-2">
//             <Label htmlFor="email">Recipient Email</Label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               <Input
//                 id="email"
//                 type="email"
//                 className="pl-10"
//                 placeholder="Enter email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {email && !isValidEmail(email) && (
//                 <p className="text-sm text-red-500">Email is Invalid.</p>
//               )}
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Expiration Date
//             </label>
//             <Calendar
//               selected={expiration}
//               onChange={setExpiration}
//               startAdornment={<CalendarIcon className="h-5 w-5 text-gray-400" />}
//               className="w-full"
//             />
//             {expiration && (
//               <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
//                 <Clock className="w-3 h-3" />
//                 Expires on {format(expiration, "MMM d, yyyy")}
//               </p>
//             )}
//           </div>
//         </div>
//         <DialogFooter className="mt-4 gap-2">
//           <Button variant="outline" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button
//             className="bg-emerald-600 hover:bg-emerald-700"
//             disabled={!isValidEmail(email) || isSharing || isSuccess}
//             onClick={handleShare}
//           >
//             {isSharing ? (
//               <>
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                   className="mr-2"
//                 >
//                   <Clock className="w-4 h-4" />
//                 </motion.div>
//                 Sharing...
//               </>
//             ) : isSuccess ? (
//               <>
//                 <Check className="w-4 h-4 mr-2" />
//                 Shared!
//               </>
//             ) : (
//               <>
//                 <Share2 className="w-4 h-4 mr-2" />
//                 Share
//               </>
//             )}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };
// export default ShareFileDialog;
import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { Button } from "@/styles/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/styles/ui/dialog";
import { Input } from "@/styles/ui/input";
import { Label } from "@/styles/ui/label";
import { CalendarIcon, Check, Clock, Mail, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar } from "@/styles/ui/calendar";
const ShareFileDialog = ({ isOpen, onClose, file, onShare }) => {
    const { status } = useAppSelector((state) => state.shareFile);
    const [email, setEmail] = useState("");
    const [expiration, setExpiration] = useState(null);
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const handleShare = async () => {
        if (!email || !file?.id)
            return;
        const payload = {
            fileKey: file.id,
            recipientEmail: email,
            expiresAt: expiration?.toISOString(),
        };
        onShare(payload);
    };
    const resetState = () => {
        setEmail("");
        setExpiration(new Date());
        onClose();
    };
    const handleClose = () => {
        resetState();
        onClose();
    };
    const isSharing = status === "loading";
    const isSuccess = status === "succeeded";
    return (_jsx(Dialog, { open: isOpen, onOpenChange: (open) => open ? null : handleClose(), children: _jsxs(DialogContent, { className: "sm:max-w-[500px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm", children: [_jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-pink-500 h-1 -mt-6 mx-6 rounded-t-lg" }), _jsxs(DialogHeader, { className: "text-center pb-6", children: [_jsxs(DialogTitle, { className: "flex items-center justify-center gap-3 text-2xl", children: [_jsx("div", { className: "p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg", children: _jsx(Share2, { className: "w-6 h-6 text-white" }) }), _jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent", children: "Share File" })] }), _jsxs(DialogDescription, { className: "text-gray-600 mt-2", children: ["Share ", _jsxs("span", { className: "font-semibold text-emerald-600", children: ["\"", file?.name, "\""] }), " securely via email"] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "space-y-3", children: [_jsx(Label, { htmlFor: "email", className: "text-sm font-semibold text-gray-700", children: "Recipient Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-4 top-3.5 h-5 w-5 text-gray-400" }), _jsx(Input, { id: "email", type: "email", className: "pl-12 h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all", placeholder: "Enter recipient's email", value: email, onChange: (e) => setEmail(e.target.value) }), email && !isValidEmail(email) && (_jsxs(motion.p, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "text-sm text-red-500 mt-2 flex items-center gap-1", children: [_jsx("span", { className: "w-1 h-1 bg-red-500 rounded-full" }), "Please enter a valid email address"] }))] })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs(Label, { className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [_jsx(CalendarIcon, { className: "w-4 h-4" }), "Expiration Date (Optional)"] }), _jsxs("div", { className: "bg-gray-50 rounded-xl p-4", children: [_jsx(Calendar, { selected: expiration, onChange: setExpiration, className: "w-full rounded-lg" }), expiration && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200", children: _jsxs("p", { className: "text-sm text-emerald-700 flex items-center gap-2 font-medium", children: [_jsx(Clock, { className: "w-4 h-4" }), "File will expire on ", format(expiration, "MMM d, yyyy")] }) }))] })] })] }), _jsxs(DialogFooter, { className: "mt-8 gap-3", children: [_jsx(Button, { variant: "outline", onClick: handleClose, className: "flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50 transition-all", children: "Cancel" }), _jsx(Button, { className: "flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200", disabled: !isValidEmail(email) || isSharing || isSuccess, onClick: handleShare, children: isSharing ? (_jsxs(motion.div, { className: "flex items-center gap-2", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, children: _jsx(Sparkles, { className: "w-4 h-4" }) }), "Sharing..."] })) : isSuccess ? (_jsxs(motion.div, { initial: { scale: 0.8 }, animate: { scale: 1 }, className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-4 h-4" }), "Shared Successfully!"] })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Share2, { className: "w-4 h-4" }), "Share File"] })) })] })] }) }));
};
export default ShareFileDialog;
