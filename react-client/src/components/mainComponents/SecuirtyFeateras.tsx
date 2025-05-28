// import { motion } from "framer-motion";
// import {  FileCheck, FileSearch, Share, Cloud, UserLock, UserCheck } from "lucide-react";

// const SecurityFeatures=()=> {
//   const features = [

//     {
//       icon: Cloud,
//       title: "Secure Cloud Storage",
//       description: "Encrypted files are stored safely in the cloud using isolated and access-controlled buckets.",
//       color: "text-emerald-700 bg-emerald-50"
//     },
//     {
//       icon: Share,
//       title: "Controlled Sharing",
//       description: "Generate time-limited, access-restricted links to share files securely with others.",
//       color: "text-amber-700 bg-amber-50"
//     },
//     {
//       icon: UserLock,
//       title: "Registered Users Only",
//       description: "All actions are restricted to authenticated users — no guest access is allowed.",
//       color: "text-rose-700 bg-rose-50"
//     },
//     {
//       icon: FileSearch,
//       title: "Audit & Monitoring",
//       description: "Track who accessed your files and when, with built-in activity logging and alerts.",
//       color: "text-purple-700 bg-purple-50"
//     },
//     {
//       icon: UserCheck,
//       title: "Human Verification",
//       description: "Advanced bot protection ensures that only real users can access and interact with the system.",
//       color: "ext-teal-700 bg-teal-50"
//     },

//     {
//       icon: FileCheck,
//       title: "Integrity Verification",
//       description: "Every file upload is verified for integrity to ensure no tampering occurred in transit.",
//       color: "text-amber-700 bg-amber-50"
//     }
    
//   ];
  

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {features.map((feature, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
//         >
//           <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
//             <feature.icon className="w-6 h-6" />
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
//           <p className="text-gray-600">{feature.description}</p>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
// export default SecurityFeatures;
import { motion } from "framer-motion";
import { FileCheck, FileSearch, Share, Cloud, UserLock, UserCheck } from "lucide-react";

const SecurityFeatures = () => {
  const features = [
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "Encrypted files are stored safely in the cloud using isolated and access-controlled buckets.",
      color: "text-emerald-700 bg-emerald-50 border-emerald-100"
    },
    {
      icon: Share,
      title: "Controlled Sharing",
      description: "Generate time-limited, access-restricted links to share files securely with others.",
      color: "text-amber-700 bg-amber-50 border-amber-100"
    },
    {
      icon: UserLock,
      title: "Registered Users Only",
      description: "All actions are restricted to authenticated users — no guest access is allowed.",
      color: "text-rose-700 bg-rose-50 border-rose-100"
    },
    {
      icon: FileSearch,
      title: "Audit & Monitoring",
      description: "Track who accessed your files and when, with built-in activity logging and alerts.",
      color: "text-purple-700 bg-purple-50 border-purple-100"
    },
    {
      icon: UserCheck,
      title: "Human Verification",
      description: "Advanced bot protection ensures that only real users can access and interact with the system.",
      color: "text-teal-700 bg-teal-50 border-teal-100"
    },
    {
      icon: FileCheck,
      title: "Integrity Verification",
      description: "Every file upload is verified for integrity to ensure no tampering occurred in transit.",
      color: "text-blue-700 bg-blue-50 border-blue-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 ${feature.color}`}
        >
          <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-sm`}>
            <feature.icon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SecurityFeatures;
