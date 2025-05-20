import { motion } from "framer-motion";
import {  FileCheck, FileSearch, Share, Cloud, UserLock, UserCheck } from "lucide-react";

export default function SecurityFeatures() {
  const features = [

    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "Encrypted files are stored safely in the cloud using isolated and access-controlled buckets.",
      color: "text-emerald-700 bg-emerald-50"
    },
    {
      icon: Share,
      title: "Controlled Sharing",
      description: "Generate time-limited, access-restricted links to share files securely with others.",
      color: "text-amber-700 bg-amber-50"
    },
    {
      icon: UserLock,
      title: "Registered Users Only",
      description: "All actions are restricted to authenticated users — no guest access is allowed.",
      color: "text-rose-700 bg-rose-50"
    },
    {
      icon: FileSearch,
      title: "Audit & Monitoring",
      description: "Track who accessed your files and when, with built-in activity logging and alerts.",
      color: "text-purple-700 bg-purple-50"
    },
    {
      icon: UserCheck,
      title: "Human Verification",
      description: "Advanced bot protection ensures that only real users can access and interact with the system.",
      color: "ext-teal-700 bg-teal-50"
    },

    {
      icon: FileCheck,
      title: "Integrity Verification",
      description: "Every file upload is verified for integrity to ensure no tampering occurred in transit.",
      color: "text-amber-700 bg-amber-50"
    }
    
  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
            <feature.icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}