
// import { motion } from "framer-motion";
// import { Upload, Download, UserPlus, Share2 } from "lucide-react";

// const EncryptionSteps=() => {
//     const steps = [
//       {
//         icon: UserPlus,
//         title: "Create an Account",
//         description: "Sign up or log in to access the secure file encryption and sharing platform.",
//         color: "bg-blue-50 text-blue-700 border-blue-100"
//       },
//       {
//         icon: Upload,
//         title: "Upload & Encrypt",
//         description: "Select a file to upload. It will be automatically encrypted before storage.",
//         color: "bg-emerald-50 text-emerald-700 border-emerald-100"
//       },
//       {
//         icon: Share2,
//         title: "Securely Share",
//         description: "Send encrypted files with a secure link, expiration date.",
//         color: "bg-yellow-50 text-yellow-700 border-yellow-100"
//       },
//       {
//         icon: Download,
//         title: "Access Shared Files",
//         description: "View and download files shared with you — securely decrypted on access.",
//         color: "bg-purple-50 text-purple-700 border-purple-100"
//       }
//     ];
  
  

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {steps.map((step, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="relative"
//         >
//           <div className={`rounded-xl p-6 border ${step.color} h-full`}>
//             <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-md">
//               <span className="text-gray-700 font-semibold">{index + 1}</span>
//             </div>
            
//             <div className="mt-4 mb-4">
//               <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}>
//                 <step.icon className="w-6 h-6" />
//               </div>
//             </div>
            
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
//             <p className="text-gray-600 text-sm">{step.description}</p>
//           </div>
          
//           {index < steps.length - 1 && (
//             <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M13 5L20 12L13 19" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// }
// export default EncryptionSteps;
import { motion } from "framer-motion";
import { Upload, Download, UserPlus, Share2, ArrowRight } from "lucide-react";

const EncryptionSteps = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create an Account",
      description: "Sign up or log in to access the secure file encryption and sharing platform.",
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      icon: Upload,
      title: "Upload & Encrypt",
      description: "Select a file to upload. It will be automatically encrypted before storage.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100"
    },
    {
      icon: Share2,
      title: "Securely Share",
      description: "Send encrypted files with a secure link, expiration date.",
      color: "bg-amber-50 text-amber-700 border-amber-100"
    },
    {
      icon: Download,
      title: "Access Shared Files",
      description: "View and download files shared with you — securely decrypted on access.",
      color: "bg-purple-50 text-purple-700 border-purple-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative group"
        >
          <div className={`rounded-2xl p-8 border-2 ${step.color} h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg bg-white/80 backdrop-blur-sm`}>
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-gray-100 shadow-lg">
              <span className="text-gray-700 font-bold text-lg">{index + 1}</span>
            </div>
            
            <div className="mt-6 mb-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color} shadow-sm`}>
                <step.icon className="w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
          
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default EncryptionSteps;
