// import { useState } from "react";

//  const [isMailDialogOpen, setIsMailDialogOpen] = useState(false);
//   const [sending, setSending] = useState(false);
//   const [sendError, setSendError] = useState<string | null>(null);

//   const handleSendMail = async (subject: string, content: string) => {
//     setSending(true);
//     setSendError(null);
    
//     // Simulate sending email
//     try {
//       await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           // Simulate random success/failure for demo
//           if (Math.random() > 0.2) {
//             resolve("success");
//           } else {
//             reject(new Error("Network error"));
//           }
//         }, 2000);
//       });
      
//       console.log("Email sent:", { subject, content });
//     } catch (error) {
//       setSendError("שגיאה בשליחת המייל");
//       throw error;
//     } finally {
//       setSending(false);
//     }
//   };