// import React from "react";
import { motion } from "framer-motion";
import { Upload, Key, Lock, Download } from "lucide-react";

export default function EncryptionSteps() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your File",
      description: "Select and upload the file you want to encrypt securely to our system.",
      color: "bg-amber-50 text-amber-700 border-amber-100"
    },
    {
      icon: Key,
      title: "Set Strong Password",
      description: "Create a unique, strong password that will be used to encrypt your file.",
      color: "bg-rose-50 text-rose-700 border-rose-100"
    },
    {
      icon: Lock,
      title: "Encryption Process",
      description: "Our advanced algorithm encrypts your file with military-grade security protocols.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100"
    },
    {
      icon: Download,
      title: "Download Secure File",
      description: "Download your encrypted file that can only be opened with your password.",
      color: "bg-purple-50 text-purple-700 border-purple-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className={`rounded-xl p-6 border ${step.color} h-full`}>
            <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-md">
              <span className="text-gray-700 font-semibold">{index + 1}</span>
            </div>
            
            <div className="mt-4 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}>
                <step.icon className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
          
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5L20 12L13 19" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}